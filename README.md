# Password Generator

Password Generator is a consolidated product suite for deterministic password generation.

This repository replaces the older split repositories:

- `password-generator-npm`
- `new-password-generator-app`
- `password-generator-app`
- `password-generator-web`

## Structure

```text
apps/mobile      React Native mobile app
packages/core    Reusable password-generation library
```

The import was done as a clean source snapshot instead of preserving old Git history because older repositories included environment and signing-related files.

## Status

- Core package: imported from `password-generator-npm`, with tests repaired for the monorepo.
- Mobile app: imported from `new-password-generator-app`, using the local workspace core package.
- Legacy mobile app: not imported directly. It should only be used as a reference if a missing feature is needed.
- Legacy web app: not imported yet because its build currently fails and it needs a clean rebuild or repair.

## Commands

```bash
npm install
npm run test:core
npm run lint:mobile
npm run test:mobile
npm run dev:mobile
```

## Security Notes

Signing keys, `.env` files, and Sentry property files are intentionally excluded from this repository. Configure secrets in the relevant local/CI environment.

Android release signing expects these environment variables when building release artifacts:

```bash
ANDROID_RELEASE_STORE_FILE
ANDROID_RELEASE_STORE_PASSWORD
ANDROID_RELEASE_KEY_ALIAS
ANDROID_RELEASE_KEY_PASSWORD
```
