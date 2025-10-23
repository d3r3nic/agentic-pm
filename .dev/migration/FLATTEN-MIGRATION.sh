#!/bin/bash
set -e

echo "🔄 Flattening repository structure..."
echo ""

# Step 1: Move everything from .pm/ to root
echo "1️⃣ Moving .pm/* to root..."
mv .pm/* .
mv .pm/.gitignore .gitignore.temp
echo "✅ Files moved"
echo ""

# Step 2: Merge gitignores
echo "2️⃣ Merging .gitignore files..."
cat .gitignore.temp >> .gitignore
rm .gitignore.temp
echo "✅ Gitignore merged"
echo ""

# Step 3: Remove empty .pm directory
echo "3️⃣ Removing .pm/ directory..."
rmdir .pm
echo "✅ .pm/ removed"
echo ""

# Step 4: Create docs folder
echo "4️⃣ Organizing documentation..."
mkdir -p docs/guides docs/reference

# Move guides
mv BOOTSTRAP-NEW-PROJECT.md docs/guides/
mv AI-ASSISTANT-ONBOARDING.md docs/guides/
mv ONBOARDING-GUIDE.md docs/guides/
mv INTERACTIVE-MANAGER-GUIDE.md docs/guides/

# Move reference docs
mv SDK-INSTALLATION.md docs/reference/
mv SDK-ENHANCEMENTS.md docs/reference/
mv UPDATE-CHECKER.md docs/reference/
mv FIX-TEMPLATE-STRATEGY.md docs/reference/

# Move other docs
mv BOOTSTRAP.md docs/
mv MIGRATION-TO-SDK.md docs/
mv MANAGER-ONBOARDING.md docs/
mv PUBLIC-RELEASE-CHECKLIST.md docs/
mv START-HERE.md docs/
mv NOW.md docs/
mv ROADMAP.md docs/

echo "✅ Documentation organized"
echo ""

echo "✨ Structure flattened!"
echo ""
echo "📁 New structure:"
echo "  /"
echo "  ├── README.md"
echo "  ├── package.json"
echo "  ├── sdk/"
echo "  ├── agents/"
echo "  └── docs/"
echo "      ├── guides/"
echo "      └── reference/"
echo ""
echo "⚠️  Next steps:"
echo "1. Review changes: git status"
echo "2. Update path references in code"
echo "3. Update documentation links"
echo "4. Test: npm install && npm run onboard"
echo "5. Commit: git commit -am 'refactor: flatten structure'"
