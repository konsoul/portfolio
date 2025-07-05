if [ -d "build" ]; then
  echo "✅ Build exists!"
  ls -la build/
else
  echo "❌ No build folder found :("
  exit 1 
fi