# TODO

## 1. Refresh dependencies to the latest Raycast stack
- [X] Run `npm outdated` to capture the current status of `@raycast/api`, `@raycast/utils`, TypeScript, Prettier, `@types/*`, and other direct deps.
- [X] Install the newest Raycast API release (`npm install @raycast/api@latest` or `npx ray migrate`) so we can use current APIs and components per Raycast docs.
- [X] Bump complementary tooling packages (TypeScript, Prettier, React/Node typings) to the latest compatible versions and document any breaking changes.
- [X] Reinstall modules (`npm install`) and smoke-test `ray develop`, `ray lint`, and `ray build` to ensure the extension still compiles and runs.

## 2. Migrate ESLint tooling to v9 using the provided guide (@docs/eslint-9-upgrade-guide.md)
- [X] Update `devDependencies` to `@raycast/eslint-config` ^2.1.1, `eslint` ^9.35.0, and align TypeScript to ^5.9.2 as recommended.
- [X] Delete the legacy `.eslintrc.json` and create `eslint.config.mjs` with `defineConfig([...raycastConfig])` per the guide.
- [X] Add `eslint.config.mjs` to the `include` array in `tsconfig.json` so TypeScript is aware of the file.
- [X] Run `npm install`, then `ray lint --fix`, `npm run build`, and `npm run dev`, verifying the checklist in the guide (lint passes, build succeeds, dev command works, no Raycast console errors).

## New feature: Screenshot input

- [ ] Add ability to use screenshot as input to count characters