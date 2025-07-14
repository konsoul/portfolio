curl -v "https://polite-cormorant-475.convex.site/api/chat" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{"messages": [{"role": "user", "content": "How many roads must a man walk down, before you can call him a man?"}]}'