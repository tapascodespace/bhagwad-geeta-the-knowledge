"""Load Supabase URL/keys from .env (supports legacy JWT + new sb_secret keys)."""

from __future__ import annotations

import os
from pathlib import Path


def load_env_file() -> None:
    root = Path(__file__).resolve().parents[1]
    path = root / ".env"
    if not path.is_file():
        return
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, val = line.partition("=")
        os.environ.setdefault(key.strip(), val.strip().strip('"').strip("'"))


def get_supabase_url() -> str:
    load_env_file()
    return os.environ.get("VITE_SUPABASE_URL", "").strip()


def get_publishable_key() -> str:
    load_env_file()
    return (
        os.environ.get("VITE_SUPABASE_PUBLISHABLE_KEY", "").strip()
        or os.environ.get("SUPABASE_PUBLISHABLE_KEY", "").strip()
    )


def get_secret_key() -> str:
    load_env_file()
    return (
        os.environ.get("SUPABASE_SECRET_KEY", "").strip()
        or os.environ.get("SUPABASE_SERVICE_ROLE_KEY", "").strip()
    )
