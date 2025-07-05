if [ -d "build/client/assets" ]; then
  echo "📦 Bundle size analysis:"
  du -h build/client/assets/*.js | sort -hr | head -5
  echo ""
  echo "📊 Total client bundle size is:"
  du -sh build/client/assets/
fi