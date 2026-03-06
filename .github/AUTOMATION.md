# Automation Guardrails

This repo now has dependency and deployment health automation.

## What Runs Automatically

1. Daily dependency update PRs (`.github/dependabot.yml`)
2. CI build validation on PRs and `master` (`.github/workflows/ci.yml`)
3. Dependabot auto-merge for patch/minor only (`.github/workflows/dependency-automerge.yml`)
4. Auto-rollback for failed dependency bump builds on `master` (`.github/workflows/dependency-rollback.yml`)
5. Scheduled Vercel production status checks every 30 min (`.github/workflows/vercel-status-monitor.yml`)

## Required GitHub Secrets

Set these repository secrets for Vercel status monitoring:

- `VERCEL_TOKEN`: Vercel API token
- `VERCEL_PROJECT_ID`: Vercel project ID
- `VERCEL_TEAM_ID`: Vercel team/org ID (optional for personal scope, recommended for team projects)

## Branch Protection (Recommended)

In GitHub branch protection for `master`, require the `CI` workflow to pass before merge.
This makes auto-merge wait for a successful build.

## Manual Terminal Check

Run this anytime from project root:

```bash
npm run vercel:status
```

It exits non-zero if latest production deployment is not `READY`.
