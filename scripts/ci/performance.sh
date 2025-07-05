#!/bin/bash
echo "🔍 Performance analysis:"
echo "📦 Bundle files:"
ls -la build/client/assets/*.js
echo ""
echo "�� File sizes:"
du -h build/client/assets/*.js | sort -hr
echo ""
echo "�� Total bundle size:"
du -sh build/client/assets/