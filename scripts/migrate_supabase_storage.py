#!/usr/bin/env python3
"""Copy verse-audio MP3s from one Supabase project Storage bucket to another.

Read-only on the source project: lists and downloads only. Never deletes or
modifies the old bucket. Writes go to the destination only (upsert).
"""

from __future__ import annotations

import argparse
import os
import sys
import time
from pathlib import Path

import requests

BUCKET = "verse-audio"
LIST_LIMIT = 1000


def headers(key: str) -> dict[str, str]:
    return {"Authorization": f"Bearer {key}", "apikey": key}


def list_objects(url: str, key: str) -> list[str]:
    names: list[str] = []
    offset = 0
    while True:
        r = requests.post(
            f"{url.rstrip('/')}/storage/v1/object/list/{BUCKET}",
            headers={**headers(key), "Content-Type": "application/json"},
            json={"prefix": "", "limit": LIST_LIMIT, "offset": offset},
            timeout=60,
        )
        r.raise_for_status()
        batch = r.json()
        if not batch:
            break
        for item in batch:
            name = item.get("name")
            if name and not name.endswith("/"):
                names.append(name)
        if len(batch) < LIST_LIMIT:
            break
        offset += LIST_LIMIT
    return names


def download(url: str, key: str, name: str) -> bytes:
    r = requests.get(
        f"{url.rstrip('/')}/storage/v1/object/public/{BUCKET}/{name}",
        headers=headers(key),
        timeout=120,
    )
    if r.status_code == 404:
        r = requests.get(
            f"{url.rstrip('/')}/storage/v1/object/{BUCKET}/{name}",
            headers=headers(key),
            timeout=120,
        )
    r.raise_for_status()
    return r.content


def upload(url: str, key: str, name: str, data: bytes) -> None:
    r = requests.post(
        f"{url.rstrip('/')}/storage/v1/object/{BUCKET}/{name}",
        headers={
            **headers(key),
            "Content-Type": "audio/mpeg",
            "x-upsert": "true",
        },
        data=data,
        timeout=120,
    )
    if r.status_code not in (200, 201):
        raise RuntimeError(f"upload {name}: {r.status_code} {r.text[:200]}")


def ensure_bucket(url: str, key: str) -> None:
    r = requests.post(
        f"{url.rstrip('/')}/storage/v1/bucket",
        headers={**headers(key), "Content-Type": "application/json"},
        json={"id": BUCKET, "name": BUCKET, "public": True},
        timeout=30,
    )
    if r.status_code in (200, 201, 409):
        return
    if r.status_code == 400 and "already exists" in (r.text or "").lower():
        return
    raise RuntimeError(f"create bucket: {r.status_code} {r.text[:200]}")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--from-url", required=True)
    parser.add_argument("--from-key", required=True, help="Anon or secret key for source read")
    parser.add_argument("--to-url", required=True)
    parser.add_argument("--to-key", required=True, help="Secret key for destination write")
    parser.add_argument("--max", type=int, default=0)
    args = parser.parse_args()

    ensure_bucket(args.to_url, args.to_key)
    names = list_objects(args.from_url, args.from_key)
    if args.max > 0:
        names = names[: args.max]
    print(f"Copying {len(names)} objects...")

    ok = fail = 0
    for i, name in enumerate(names, 1):
        try:
            data = download(args.from_url, args.from_key, name)
            upload(args.to_url, args.to_key, name, data)
            ok += 1
            if i % 25 == 0 or i == len(names):
                print(f"  [{i}/{len(names)}] ok={ok} fail={fail}")
            time.sleep(0.1)
        except Exception as e:
            fail += 1
            print(f"  FAIL {name}: {e}", file=sys.stderr)
    print(f"Done: copied={ok} failed={fail}")


if __name__ == "__main__":
    main()
