#!/usr/bin/env node

/*
  Checks latest Vercel production deployments.
  Required env vars:
  - VERCEL_TOKEN
  - VERCEL_PROJECT_ID
  Optional env var:
  - VERCEL_TEAM_ID
*/

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;

if (!VERCEL_TOKEN || !VERCEL_PROJECT_ID) {
  console.error("Missing required env vars: VERCEL_TOKEN and/or VERCEL_PROJECT_ID");
  process.exit(2);
}

const qs = new URLSearchParams({
  projectId: VERCEL_PROJECT_ID,
  target: "production",
  limit: "5",
});

if (VERCEL_TEAM_ID) {
  qs.set("teamId", VERCEL_TEAM_ID);
}

const url = `https://api.vercel.com/v6/deployments?${qs.toString()}`;

async function main() {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${VERCEL_TOKEN}`,
    },
  });

  if (!res.ok) {
    const txt = await res.text();
    console.error(`Vercel API error ${res.status}: ${txt}`);
    process.exit(1);
  }

  const data = await res.json();
  const deployments = Array.isArray(data.deployments) ? data.deployments : [];

  if (deployments.length === 0) {
    console.log("No production deployments found.");
    process.exit(1);
  }

  const latest = deployments[0];
  const latestStatus = latest.readyState || "UNKNOWN";

  console.log(`Latest deployment: ${latest.name}`);
  console.log(`URL: https://${latest.url}`);
  console.log(`Status: ${latestStatus}`);
  console.log(`Created: ${new Date(latest.createdAt).toISOString()}`);

  if (latestStatus !== "READY") {
    const previousReady = deployments.find((d) => d.readyState === "READY");
    if (previousReady) {
      console.log("Previous READY deployment:");
      console.log(`- URL: https://${previousReady.url}`);
      console.log(`- Created: ${new Date(previousReady.createdAt).toISOString()}`);
    }
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Failed to check Vercel deployment status:", err);
  process.exit(1);
});
