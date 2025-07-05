#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting comprehensive CI checks...${NC}"
echo ""

# Function to run a check and handle errors
run_check() {
    local name="$1"
    local command="$2"
    
    echo -e "${YELLOW}📋 Running: $name${NC}"
    echo "Command: $command"
    echo "---"
    
    if eval "$command"; then
        echo -e "${GREEN}✅ $name passed${NC}"
        echo ""
        return 0
    else
        echo -e "${RED}❌ $name failed${NC}"
        echo ""
        return 1
    fi
}

# Track overall success
overall_success=true

# 1. TypeScript checking
if ! run_check "TypeScript type checking" "npm run typecheck"; then
    overall_success=false
fi

# 2. ESLint checking
if ! run_check "ESLint validation" "npm run lint"; then
    overall_success=false
fi

# 3. Build application
if ! run_check "Application build" "npm run build"; then
    overall_success=false
fi

# 4. Build verification
if ! run_check "Build verification" "bash scripts/ci/build-verify.sh"; then
    overall_success=false
fi

# 5. Bundle size analysis
if ! run_check "Bundle size analysis" "bash scripts/ci/bundle-size.sh"; then
    overall_success=false
fi

# 6. Security audit
if ! run_check "Security audit" "bash scripts/ci/security-audit.sh"; then
    overall_success=false
fi

# 7. Convex validation
if ! run_check "Convex type validation" "bash scripts/ci/convex-types.sh"; then
    overall_success=false
fi

# 8. Performance analysis (optional - just shows info)
echo -e "${YELLOW}📊 Performance analysis:${NC}"
if [ -d "build/client/assets" ]; then
    echo "Bundle files found:"
    ls -la build/client/assets/*.js | wc -l
    echo "Total bundle size:"
    du -sh build/client/assets/
    echo -e "${GREEN}✅ Performance analysis complete${NC}"
else
    echo -e "${YELLOW}⚠️ No build assets found for performance analysis${NC}"
fi
echo ""

# 9. Code formatting check
if ! run_check "Code formatting check" "npm run format:check"; then
    overall_success=false
fi

# Final result
echo "=========================================="
if [ "$overall_success" = true ]; then
    echo -e "${GREEN}🎉 All CI checks passed!${NC}"
    echo -e "${GREEN}Your code is ready for deployment!${NC}"
    exit 0
else
    echo -e "${RED}💥 Some CI checks failed!${NC}"
    echo -e "${RED}Please fix the issues above before proceeding.${NC}"
    exit 1
fi 