# AI Dedicated Browser Rule

Date: 2026-06-15
Purpose: define the single browser runtime that Codex must use for Quora and LinkedIn publishing.

## Core Rule

Quora publishing and LinkedIn publishing must use the same dedicated AI browser.

Do not use:

- random existing Chrome windows
- mixed personal browsing sessions
- temporary browser profiles with unknown login state

Use only:

- the dedicated AI Chrome session
- remote debugging port `9222`
- one stable browser profile for Codex-controlled publishing

## Browser Identity

This browser is the Codex publishing browser.

It is not a general browsing window.

It is the dedicated execution layer for:

- Quora publishing
- LinkedIn publishing

## Required Launch Pattern

The dedicated browser must be started with:

- `--remote-debugging-port=9222`
- a fixed `--user-data-dir`

Recommended launch pattern:

```text
"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir="C:\Temp\ChromeProfile2"
```

If Chrome is installed under `Program Files (x86)`, use that path instead.

## Account Rule

The dedicated browser should keep the required publishing accounts logged in.

### Quora

- use the correct XIHE / XGRAPHENE publishing account
- do not mix unrelated Quora accounts in the same publishing profile

### LinkedIn

- use the required founder / company publishing session
- do not rely on random browser tabs from other sessions

## Operational Rule

Before any Quora or LinkedIn publishing action:

1. verify `9222` is reachable
2. connect to the dedicated browser
3. verify the correct account/session
4. only then perform posting or commenting

## Platform Rule

### Quora

Quora publishing must always happen through the dedicated AI browser.

Workflow:

1. open dedicated browser
2. verify Quora account
3. navigate to question page
4. paste answer
5. publish

### LinkedIn

LinkedIn publishing must also always happen through the dedicated AI browser.

Workflow:

1. open dedicated browser
2. verify LinkedIn session
3. navigate to profile or company page
4. create post / comment / reply
5. publish

## Stability Rule

If publishing fails, do not create a new ad hoc browser flow.

Always debug in this order:

1. is the dedicated browser open?
2. is `9222` reachable?
3. is the correct account logged in?
4. is the target page open?

Do not switch to a different browser profile unless explicitly intended.

## One-Browser Policy

For Codex-controlled social publishing:

- one dedicated browser
- one debugging port
- one repeatable execution path

This is the default policy going forward.

## One-Sentence Summary

Quora and LinkedIn publishing must both run through the same Codex-dedicated Chrome session using port `9222` and a fixed browser profile.
