#!/bin/bash
# Script to update all .pm/ references to new flat structure

cd /Users/d3r3nic/Development3/task-driven-reorganized

echo "Updating path references..."

# Common replacements (excluding archived files)
find . -type f -name "*.md" \
  -not -path "./node_modules/*" \
  -not -path "./archive/*" \
  -not -path "./.git/*" \
  -exec sed -i.bak \
    -e 's|`\.pm/BOOTSTRAP-NEW-PROJECT\.md`|`.ai-instructions/BOOTSTRAP-NEW-PROJECT.md`|g' \
    -e 's|\.pm/BOOTSTRAP-NEW-PROJECT\.md|.ai-instructions/BOOTSTRAP-NEW-PROJECT.md|g' \
    -e 's|`\.pm/AI-ASSISTANT-ONBOARDING\.md`|`.ai-instructions/AI-ASSISTANT-ONBOARDING.md`|g' \
    -e 's|\.pm/AI-ASSISTANT-ONBOARDING\.md|.ai-instructions/AI-ASSISTANT-ONBOARDING.md|g' \
    -e 's|`\.pm/MANAGER-ONBOARDING\.md`|`.ai-instructions/MANAGER-ONBOARDING.md`|g' \
    -e 's|\.pm/MANAGER-ONBOARDING\.md|.ai-instructions/MANAGER-ONBOARDING.md|g' \
    -e 's|`\.pm/ONBOARDING-GUIDE\.md`|`setup/QUICKSTART-AI.md`|g' \
    -e 's|\.pm/ONBOARDING-GUIDE\.md|setup/QUICKSTART-AI.md|g' \
    -e 's|`\.pm/INTERACTIVE-MANAGER-GUIDE\.md`|`docs/guides/INTERACTIVE-MANAGER-GUIDE.md`|g' \
    -e 's|\.pm/INTERACTIVE-MANAGER-GUIDE\.md|docs/guides/INTERACTIVE-MANAGER-GUIDE.md|g' \
    -e 's|`\.pm/NOW\.md`|`docs/NOW.template.md`|g' \
    -e 's|\.pm/NOW\.md|docs/NOW.template.md|g' \
    -e 's|`\.pm/ROADMAP\.md`|`docs/ROADMAP.template.md`|g' \
    -e 's|\.pm/ROADMAP\.md|docs/ROADMAP.template.md|g' \
    -e 's|`\.pm/integration\.md`|`docs/integration.template.md`|g' \
    -e 's|\.pm/integration\.md|docs/integration.template.md|g' \
    -e 's|`\.pm/agents/onboarding/fe-agent\.md`|`agents/onboarding/fe-agent.md`|g' \
    -e 's|\.pm/agents/onboarding/fe-agent\.md|agents/onboarding/fe-agent.md|g' \
    -e 's|`\.pm/agents/onboarding/be-agent\.md`|`agents/onboarding/be-agent.md`|g' \
    -e 's|\.pm/agents/onboarding/be-agent\.md|agents/onboarding/be-agent.md|g' \
    -e 's|`\.pm/agents/onboarding/auditor-guidelines\.md`|`agents/onboarding/auditor-guidelines.md`|g' \
    -e 's|\.pm/agents/onboarding/auditor-guidelines\.md|agents/onboarding/auditor-guidelines.md|g' \
    -e 's|`\.pm/agents/tasks/|`agents/tasks/|g' \
    -e 's|\.pm/agents/tasks/|agents/tasks/|g' \
    -e 's|`\.pm/agents/templates/fe-task-template\.md`|`agents/templates/fe-task.template.md`|g' \
    -e 's|\.pm/agents/templates/fe-task-template\.md|agents/templates/fe-task.template.md|g' \
    -e 's|`\.pm/agents/templates/be-task-template\.md`|`agents/templates/be-task.template.md`|g' \
    -e 's|\.pm/agents/templates/be-task-template\.md|agents/templates/be-task.template.md|g' \
    -e 's|`\.pm/logs/|`logs/|g' \
    -e 's|\.pm/logs/|logs/|g' \
    -e 's|`\.pm/sdk/|`sdk/|g' \
    -e 's|\.pm/sdk/|sdk/|g' \
    -e 's|`\.pm/`|root directory|g' \
    -e 's|the \.pm/ folder|the framework|g' \
    -e 's|\.pm/ folder|framework|g' \
    {} \;

# Clean up backup files
find . -name "*.bak" -delete

echo "✅ Path references updated!"
echo "Files modified (excluding archive/):"
find . -type f -name "*.md" \
  -not -path "./node_modules/*" \
  -not -path "./archive/*" \
  -not -path "./.git/*" \
  -exec grep -l "agents/onboarding\|agents/tasks\|.ai-instructions" {} \; | wc -l
