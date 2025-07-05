if [ -f "convex/tsconfig.json" ]; then
  npx tsc --noEmit --project convex/tsconfig.json
  echo "✅ Convex types are valid"
else
  echo "⚠️ No Convex configuration found"
fi