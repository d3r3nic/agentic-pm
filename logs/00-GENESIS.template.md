# Genesis: [Your Project Name]

> **Created:** [YYYY-MM-DD]
> **Purpose:** Why this project exists and what problem it solves

---

## What This Project Is

[Brief 2-3 sentence description of your project]

**Example:**
> A healthcare platform for managing patient appointments and medical records.
> Enables multi-location clinics to coordinate care and share patient data securely.

---

## The Problem We're Solving

### What's broken today:

[Describe the current pain points your project addresses]

**Example:**
- Patients have to call multiple clinics to book appointments
- Medical records are siloed across different systems
- No real-time visibility into appointment availability
- Doctors can't easily access patient history from other locations

### Why existing solutions don't work:

[Explain why current alternatives fall short]

**Example:**
- Legacy EMR systems are expensive and hard to integrate
- Modern alternatives lack multi-tenancy support
- None offer real-time appointment coordination
- Patient data sharing requires manual processes

---

## Our Solution

### What we're building:

[High-level description of your solution]

**Example:**
A cloud-native healthcare platform with:
- Real-time appointment booking across multiple locations
- Unified patient records with HIPAA-compliant sharing
- Multi-tenant architecture for clinic organizations
- Provider dashboard for patient care coordination

### Key features:

[List 3-5 core features]

**Example:**
1. **Multi-location scheduling** - Book appointments at any clinic in the network
2. **Unified patient records** - Access complete medical history across locations
3. **Organization management** - Multi-tenant support for healthcare networks
4. **Real-time notifications** - Instant updates for appointments and records
5. **HIPAA compliance** - Secure data handling and audit trails

---

## Technical Approach

### Tech Stack:

[List your chosen technologies and why]

**Example:**
- **Frontend:** React + TypeScript + Material-UI (modern, maintainable UI)
- **Backend:** Node.js + Express + Prisma (type-safe, scalable APIs)
- **Database:** PostgreSQL (relational data with ACID guarantees)
- **Cloud:** AWS with SST (serverless, cost-effective)
- **Auth:** AWS Amplify (managed auth with MFA)

### Architecture:

[Brief architecture description or link to ARCHITECTURE.md]

**Example:**
- Frontend SPA communicating via REST APIs
- Backend microservices on AWS Lambda
- PostgreSQL database with Prisma ORM
- Authentication via AWS Amplify with Cognito
- See `ARCHITECTURE.md` for detailed system design

---

## Project Timeline

### Milestones:

[Key milestones and target dates]

**Example:**
- **Week 1-2:** Authentication & Organization Setup
- **Week 3-4:** Patient Management & Records
- **Week 5-6:** Appointment Scheduling
- **Week 7-8:** Multi-location Features
- **Week 9-10:** Testing & Deployment

### Success Criteria:

[How you'll measure success]

**Example:**
- Users can book appointments in <3 clicks
- Patient records load in <500ms
- 99.9% uptime SLA
- HIPAA compliance certification
- Onboard 5 pilot clinics

---

## Team & Roles

[Who's working on this and their roles]

**Example:**
- **[Your Name]** - Full-stack development (FE + BE)
- **AI Agents** - Implementation (coordinated by Manager AI)
- **[Stakeholder]** - Requirements & feedback

---

## Key Design Decisions

### Decision 1: [Title]

**Context:** [Why this decision was needed]

**Decision:** [What was decided]

**Reasoning:** [Why this approach was chosen]

**Example:**
### Decision 1: Multi-tenancy via Organization Model

**Context:** Needed to support multiple clinic networks using the same platform

**Decision:** Implemented organization-based multi-tenancy with row-level security

**Reasoning:**
- Simpler than separate databases per tenant
- Cost-effective for small clinics
- Easier to maintain and upgrade
- PostgreSQL RLS provides data isolation

---

## Goals & Non-Goals

### Goals:

[What you ARE trying to achieve]

**Example:**
- ✅ Build a working MVP in 10 weeks
- ✅ Support 5 pilot clinics
- ✅ HIPAA-compliant data handling
- ✅ Real-time appointment scheduling
- ✅ Multi-location patient records

### Non-Goals (for MVP):

[What you're explicitly NOT doing yet]

**Example:**
- ❌ Billing/payment processing (future feature)
- ❌ Telemedicine video calls (future feature)
- ❌ Mobile apps (web-first, mobile later)
- ❌ International localization (US-only for now)
- ❌ Third-party EMR integrations (manual for MVP)

---

## Constraints & Requirements

### Must-haves:

[Non-negotiable requirements]

**Example:**
- HIPAA compliance (legal requirement)
- Secure authentication with MFA
- Audit trail for all patient data access
- 99.9% uptime (healthcare critical)
- Mobile-responsive web interface

### Nice-to-haves:

[Desirable but not critical]

**Example:**
- Offline support
- Push notifications
- Email/SMS reminders
- Analytics dashboard
- Export to PDF

---

## Philosophy & Principles

### Development Approach:

[How you approach building this project]

**Example:**
- **AI-first development** - Use AI agents for implementation
- **Test as you go** - Verify each feature works end-to-end
- **Document decisions** - Capture "why" not just "what"
- **Iterate quickly** - MVP first, polish later
- **User-centric** - Build for real user needs, not theoretical features

### Coding Standards:

[Link to Claude.md files or list key rules]

**Example:**
- See `frontend/Claude.md` for FE coding standards
- See `backend/Claude.md` for BE coding standards
- TypeScript strict mode (no `any` types)
- Component-driven architecture
- API-first design with clear contracts

---

## Evolution

This project will evolve based on:
- User feedback from pilot clinics
- Technical learnings during development
- Changing healthcare regulations
- Team capacity and priorities

**Key decisions logged in:** `logs/decisions/`
**Weekly progress tracked in:** `logs/weeks/`
**Milestones celebrated in:** `logs/milestones/`

---

## Get Started

**For new developers joining this project:**

1. Read this GENESIS to understand the "why"
2. Read `ARCHITECTURE.md` to understand the "how"
3. Read `NOW.md` to see current status
4. Read `ROADMAP.md` to see what's planned
5. Check `frontend/Claude.md` and `backend/Claude.md` for coding rules

**For AI agents:**
- Read `agents/onboarding/` for project-specific configuration
- Read task files in `agents/tasks/` for current work
- Reference this GENESIS to understand project context

---

**Project Start Date:** [YYYY-MM-DD]
**Target MVP Date:** [YYYY-MM-DD]
**Status:** [In Development / Beta / Production]

---

## Template Instructions

**Delete this section after filling out the template!**

This template helps you document:
- **Why** your project exists (problem & solution)
- **What** you're building (features & tech stack)
- **How** you'll build it (architecture & approach)
- **Who** it's for (users & team)
- **When** it'll be done (timeline & milestones)

**Tips:**
- Be specific and concrete (examples help!)
- Link to other docs (ARCHITECTURE.md, Claude.md, etc.)
- Update as the project evolves
- This is a living document, not a one-time thing
- Future you (or replacement team member) will thank you!
