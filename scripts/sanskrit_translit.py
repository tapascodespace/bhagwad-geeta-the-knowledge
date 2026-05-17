"""Devanagari transliteration via vendored sanscript (sanskrit-master.zip)."""

from __future__ import annotations

import importlib.util
import re
from pathlib import Path

_VENDOR = Path(__file__).resolve().parent / "vendor" / "sanscript.py"

# Trailing verse markers: ।।1.1।। or ॥ १ ॥ style (strip for TTS body).
_VERSE_SUFFIX_RE = re.compile(
    r"(?:[।॥]\s*)+[०-९0-9]+(?:\.[०-९0-9]+)*(?:\s*[।॥]+)*\s*$"
)

_sanscript = None


def _load_sanscript():
    global _sanscript
    if _sanscript is not None:
        return _sanscript
    spec = importlib.util.spec_from_file_location("vendor_sanscript", _VENDOR)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Cannot load sanscript from {_VENDOR}")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    _sanscript = mod
    return mod


def strip_verse_number_suffix(text: str) -> str:
    lines = []
    for line in (text or "").splitlines():
        line = line.strip()
        if not line:
            continue
        line = _VERSE_SUFFIX_RE.sub("", line).strip()
        if line:
            lines.append(line)
    return "\n".join(lines)


def devanagari_to_iast(text: str, *, strip_suffix: bool = True) -> str:
    """Convert Devanagari shloka text to IAST (one line per original line)."""
    sc = _load_sanscript()
    body = strip_verse_number_suffix(text) if strip_suffix else (text or "").strip()
    if not body:
        return ""
    out_lines = []
    for line in body.splitlines():
        line = line.strip()
        if not line:
            continue
        out_lines.append(sc.transliterate(line, sc.DEVANAGARI, sc.IAST))
    return "\n".join(out_lines)


def normalize_for_compare(text: str) -> str:
    """Loose normalization for diffing transliteration strings."""
    t = (text or "").lower()
    t = re.sub(r"[\s\-–—]+", "", t)
    t = t.replace("śh", "sh").replace("ṣh", "sh")
    return t
