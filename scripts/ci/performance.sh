echo "🔍 Performance analysis:"
if command -v npx &> /dev/null; then
  npx bundle-analyzer build/client/assets/ || echo "Bundle analyzer not available"
fi