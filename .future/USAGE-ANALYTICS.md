# 📊 Usage Analytics - Specification

> **Status:** Not yet implemented - Future enhancement
> **Priority:** Phase 2 (Medium effort, very high value)
> **Effort:** 4-6 hours implementation + ongoing maintenance

---

## 🎯 Goal

Understand how people use the framework without invading privacy.

**Track:**
- Which tech stacks are most popular (React? Vue? Express?)
- New vs existing project ratio
- Which features are used
- Where users drop off

**DON'T Track:**
- Personal information (emails, names)
- Code or file contents
- API keys or secrets
- Specific project details

---

## 🏗️ Architecture

### 1. Analytics Module (`sdk/analytics.ts`)

```typescript
// sdk/analytics.ts
import { readFileSync, existsSync } from 'fs';

interface AnalyticsConfig {
  enabled: boolean;
  anonymousId: string; // Random UUID, no personal info
  endpoint: string;
}

interface AnalyticsEvent {
  event: string;
  timestamp: string;
  framework_version: string;
  anonymousId: string;
  properties?: Record<string, any>;
}

export class Analytics {
  private config: AnalyticsConfig;

  constructor() {
    this.config = this.loadConfig();
  }

  private loadConfig(): AnalyticsConfig {
    // Check if user opted in/out
    const configPath = './config.json';
    if (existsSync(configPath)) {
      const config = JSON.parse(readFileSync(configPath, 'utf-8'));
      return {
        enabled: config.analytics !== false, // Default: enabled
        anonymousId: config.analyticsId || this.generateId(),
        endpoint: 'https://analytics.agentic-pm.dev/track',
      };
    }
    return {
      enabled: true, // Default opt-in (can disable during setup)
      anonymousId: this.generateId(),
      endpoint: 'https://analytics.agentic-pm.dev/track',
    };
  }

  private generateId(): string {
    // Generate random UUID (no personal info)
    return crypto.randomUUID();
  }

  async track(event: string, properties?: Record<string, any>) {
    if (!this.config.enabled) return; // Respect opt-out

    const payload: AnalyticsEvent = {
      event,
      timestamp: new Date().toISOString(),
      framework_version: '2.0.0', // From package.json
      anonymousId: this.config.anonymousId,
      properties,
    };

    try {
      // Fire and forget - don't block user's workflow
      fetch(this.config.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {
        // Silently fail - analytics shouldn't break the app
      });
    } catch (error) {
      // Silently fail
    }
  }
}

export const analytics = new Analytics();
```

### 2. Events to Track

```typescript
// During onboarding
analytics.track('setup_started', {
  setup_type: 'new_project' | 'existing_project',
});

// After detecting tech stack
analytics.track('tech_stack_detected', {
  frontend_framework: 'react' | 'vue' | 'svelte' | 'angular' | 'other',
  backend_framework: 'express' | 'fastify' | 'nestjs' | 'fastapi' | 'other',
  has_typescript: boolean,
  has_database: boolean,
});

// After analyzing documentation
analytics.track('documentation_found', {
  has_frontend_claude_md: boolean,
  has_backend_claude_md: boolean,
  has_architecture_md: boolean,
  has_docs_folder: boolean,
});

// After successful setup
analytics.track('setup_completed', {
  setup_type: 'new_project' | 'existing_project',
  duration_seconds: number,
  tech_stack: string, // e.g., "React + Express"
  project_type_inferred: string, // e.g., "E-commerce"
});

// When agent is spawned
analytics.track('agent_spawned', {
  agent_type: 'fe-implementor' | 'be-implementor' | 'auditor',
});

// When task is completed
analytics.track('task_completed', {
  task_type: 'frontend' | 'backend',
  duration_minutes: number,
});
```

### 3. Analytics Endpoint (Vercel Edge Function)

```typescript
// api/track.ts (Vercel Edge Function)
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return new NextResponse('Method not allowed', { status: 405 });
  }

  try {
    const event = await req.json();

    // Validate event
    if (!event.event || !event.anonymousId) {
      return new NextResponse('Invalid event', { status: 400 });
    }

    // Store in database (Vercel KV, Upstash, or PostgreSQL)
    await storeEvent(event);

    return new NextResponse('OK', { status: 200 });
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
}

async function storeEvent(event: any) {
  // Option 1: Vercel KV (Redis)
  // await kv.lpush('analytics:events', JSON.stringify(event));

  // Option 2: PostgreSQL (Neon, Supabase)
  // await db.insert('analytics_events').values(event);

  // Option 3: Log aggregation service (Logtail, Axiom)
  // await logtail.info('analytics_event', event);
}
```

### 4. Opt-In During Onboarding

Add to `.ai-instructions/BOOTSTRAP-EXISTING-PROJECT.ai.md` and `BOOTSTRAP-NEW-PROJECT.ai.md`:

```markdown
### After setup complete, ask about analytics:

```
✅ Setup complete!

📊 Optional: Anonymous Usage Analytics

To help improve this framework, I can send anonymous usage data:

What gets sent:
- Tech stack (e.g., "React + Express")
- Features used (e.g., "existing project setup")
- Framework version (e.g., "2.0.0")

What NEVER gets sent:
- ❌ Your code
- ❌ File contents
- ❌ API keys
- ❌ Personal information
- ❌ Project name or details

This helps me understand:
- Which tech stacks to prioritize
- Which features people use most
- Where to focus improvements

View the code: sdk/analytics.ts (fully transparent!)

Enable anonymous analytics?
A) Yes, help improve the framework (Recommended)
B) No, I prefer complete privacy

(You can change this later in config.json by setting "analytics": false)
```

If user chooses A:
- Set `config.analytics = true` (or omit, default is true)
- Generate random `analyticsId` UUID
- Start tracking events

If user chooses B:
- Set `config.analytics = false`
- Never send any data
```

---

## 📊 Analytics Dashboard

Create a simple dashboard to view metrics:

```typescript
// dashboard/page.tsx
export default function AnalyticsDashboard() {
  const metrics = useAnalytics();

  return (
    <div>
      <h1>Agentic PM Usage Analytics</h1>

      <MetricCard
        title="Total Setups"
        value={metrics.totalSetups}
        trend="+12% this week"
      />

      <MetricCard
        title="New vs Existing"
        value={`${metrics.newProjectPercent}% new`}
      />

      <h2>Tech Stack Distribution</h2>
      <BarChart data={[
        { name: 'React', value: 450 },
        { name: 'Vue', value: 280 },
        { name: 'Svelte', value: 120 },
        { name: 'Angular', value: 80 },
      ]} />

      <h2>Backend Frameworks</h2>
      <PieChart data={[
        { name: 'Express', value: 520 },
        { name: 'NestJS', value: 210 },
        { name: 'Fastify', value: 180 },
        { name: 'FastAPI', value: 120 },
      ]} />

      <h2>Documentation Found</h2>
      <MetricCard
        title="Projects with claude.md"
        value={`${metrics.claudeMdPercent}%`}
        subtitle="35% have frontend/claude.md, 28% have backend/claude.md"
      />
    </div>
  );
}
```

---

## 🔒 Privacy Guarantees

1. **No Personal Information**
   - No emails, names, IP addresses
   - Only anonymous UUID per installation

2. **No Code or Content**
   - Never track file contents
   - Never track project names
   - Never track API keys or secrets

3. **Fully Transparent**
   - All tracking code in `sdk/analytics.ts` (open source)
   - User can read exactly what's sent
   - User can disable anytime

4. **Easy Opt-Out**
   - During setup: "No, I prefer complete privacy"
   - After setup: Set `config.analytics = false`
   - No nagging, no dark patterns

5. **Fail Silently**
   - If analytics endpoint is down, continue working
   - Analytics never blocks user workflow
   - Fire-and-forget approach

---

## 🚀 Implementation Steps

### Step 1: Create Analytics Module (1 hour)
- [ ] Create `sdk/analytics.ts`
- [ ] Implement event tracking
- [ ] Add config loading
- [ ] Test locally

### Step 2: Add to Onboarding (1 hour)
- [ ] Update `BOOTSTRAP-EXISTING-PROJECT.ai.md`
- [ ] Update `BOOTSTRAP-NEW-PROJECT.ai.md`
- [ ] Add opt-in question
- [ ] Update config.json schema

### Step 3: Deploy Analytics Endpoint (2 hours)
- [ ] Create Vercel project
- [ ] Create `api/track.ts` Edge Function
- [ ] Set up database (Vercel KV or PostgreSQL)
- [ ] Deploy and test

### Step 4: Create Dashboard (2 hours)
- [ ] Create Next.js dashboard
- [ ] Add metrics queries
- [ ] Add charts (Recharts or Chart.js)
- [ ] Deploy dashboard

### Step 5: Documentation (30 minutes)
- [ ] Update README with privacy policy
- [ ] Document how to opt-out
- [ ] Link to analytics code

---

## 💡 Alternative: GitHub Sponsor Analytics

If you don't want to build custom analytics, use GitHub Sponsors:

```markdown
## ❤️ Support This Project

If you find this framework valuable, consider sponsoring:

[Become a Sponsor](https://github.com/sponsors/d3r3nic)

Benefits:
- Priority support
- Influence roadmap
- Early access to features
```

This gives you:
- ✅ Know who values your work (sponsors)
- ✅ Revenue to justify time investment
- ✅ Direct communication channel
- ❌ But only tracks paying users (not all users)

---

## 📈 Expected Insights

After 100 setups, you'll know:
- **Tech Stack Distribution:** React 45%, Vue 30%, Svelte 15%, Angular 10%
- **New vs Existing:** 60% new projects, 40% existing
- **Documentation:** 35% have claude.md, 20% have ARCHITECTURE.md
- **Project Types:** 40% E-commerce, 25% SaaS, 20% Internal tools, 15% Other
- **Drop-off Points:** 10% abandon during tech stack detection, 5% during config

Use this to:
- Prioritize React support (most popular)
- Improve existing project flow (40% of users)
- Create claude.md templates (only 35% have it)
- Optimize drop-off points

---

**Last Updated:** 2025-10-23
**Status:** Specification complete - ready for implementation when needed
