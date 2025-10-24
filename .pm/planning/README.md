# Planning Folder

This folder stores master plans for complex features.

## Structure

```
planning/
└── [feature-name]/
    ├── 01-intake.md              # Feature scope & understanding
    ├── 02-context-budget.md      # Context window assessment
    ├── MASTER-PLAN.md            # The master plan (persistent across contexts)
    └── analysis/
        ├── frontend-analysis.md   # Frontend specialist report
        ├── backend-analysis.md    # Backend specialist report
        └── integration-plan.md    # Integration specialist report
```

## When Features Complete

Move to: `.pm/completed/[feature-name]/`

This keeps planning/ folder focused on active work.
