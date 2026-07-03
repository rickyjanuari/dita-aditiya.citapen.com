#!/bin/bash
set -e
cd /Users/rickyjanuari/citapen/dita-aditiya.citapen.com

echo "=== npm install ==="
npm install 2>&1
echo "=== npm run build ==="
npm run build 2>&1
echo "=== build done, listing build/ ==="
ls -la build/ 2>&1

echo "=== git ==="
git add -A 2>&1
git status 2>&1