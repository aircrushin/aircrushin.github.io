#!/usr/bin/env bash
# Build the site and publish the output to the gh-pages branch.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if ! git remote get-url origin >/dev/null 2>&1; then
	echo "No git remote named origin. Aborting." >&2
	exit 1
fi

npm run build
touch dist/.nojekyll

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
cp -a dist/. "$TMP/"

git -C "$TMP" init -b gh-pages
git -C "$TMP" config user.name "$(git config user.name)"
git -C "$TMP" config user.email "$(git config user.email)"
git -C "$TMP" add -A
git -C "$TMP" commit -m "Publish indieai site"
git -C "$TMP" remote add origin "$(git remote get-url origin)"
git -C "$TMP" push --force origin gh-pages

echo "Published to $(git remote get-url origin) (gh-pages)."
echo "Live site: https://aircrushin.github.io/"
