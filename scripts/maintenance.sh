#!/bin/bash
# Runlintic Project Maintenance Script
# Run this periodically to keep dependencies and workspace clean

set -e

echo "🧹 Running Runlintic project maintenance..."

echo ""
echo "📦 Step 1: Cleaning workspace..."
pnpm run clean:all
pnpm install

echo ""
echo "🔍 Step 2: Checking for outdated dependencies..."
pnpm run deps:outdated || true

echo ""
echo "🛡️ Step 3: Running security audit..."
pnpm run deps:audit || true

echo ""
echo "🧽 Step 4: Deduplicating dependencies..."
pnpm run deps:dedupe

echo ""
echo "📋 Step 5: Fixing workspace inconsistencies..."
pnpm run workspace:check

echo ""
echo "🔬 Step 6: Running dependency analysis..."
pnpm run deps:check

echo ""
echo "✅ Step 7: Running full health check..."
pnpm run check-all

echo ""
echo "🎉 Maintenance complete! Consider running:"
echo "  • pnpm run deps:update-latest (to update to latest versions)"
echo "  • pnpm run deps:audit-fix (to fix security issues)"
echo "  • Manual review of deps:outdated results"