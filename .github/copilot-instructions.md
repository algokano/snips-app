# Copilot instructions (SnipsDemo)

## Project snapshot

- React Native app bootstrapped with `@react-native-community/cli`.
- Language: TypeScript (TS/TSX).
- Current code is mostly scaffold; `src/` contains placeholder folders (only `src/theme/colors.ts` exists and is empty).

## How the app starts

- Entry point is [index.js](index.js): imports `react-native-gesture-handler` first, then registers the root component.
- Root component is [App.tsx](App.tsx). Add global providers (navigation, theming, state, etc.) here.

## Key conventions in this repo

- Path alias: import from `@/…` for code under `src/`.
  - Configured in [tsconfig.json](tsconfig.json) and [babel.config.js](babel.config.js).
  - Example: `import Button from '@/components/Button'` (preferred over long relative paths).
- Babel/Reanimated: [babel.config.js](babel.config.js) includes `react-native-reanimated/plugin`.
  - Keep this plugin present when adding Reanimated usage.
- Lint/format:
  - ESLint config: [/.eslintrc.js](.eslintrc.js) extends `@react-native`.
  - Prettier config: [/.prettierrc.js](.prettierrc.js) uses single quotes and trailing commas.

## Common workflows (from package.json)

- Start Metro: `npm start`
- Run Android: `npm run android`
- Run iOS: `npm run ios`
- Unit tests (Jest): `npm test` (see [**tests**/App.test.tsx](__tests__/App.test.tsx))
- Lint: `npm run lint`
- Node requirement: `>= 20` (see [package.json](package.json))

## iOS native deps

- CocoaPods are managed via Bundler (see [Gemfile](Gemfile) and [README.md](README.md)). Typical sequence:
  - `bundle install`
  - `bundle exec pod install` (run in `ios/`)

SnipsDemo – Copilot / AI Guidelines

This project is a small React Native app built with TypeScript.
The goal is clean, simple, production-style code without overengineering.

Project structure:

src/

- api: API calls and services
- assets: images, icons, fonts
- components: reusable UI components only
- navigation: React Navigation (tabs and stacks)
- screens: screen-level components
- theme: colors and UI constants
- hooks: custom hooks for state and logic (created when needed)
- types: shared TypeScript types
- utils: helper and utility functions

Rules:

- Keep the structure simple and readable
- Do not add folders unless they are really needed
- Avoid overengineering
- Prefer clarity over abstraction

Components:

- Components in `components` must be reusable
- No API calls inside components
- No navigation logic inside components
- Components should mostly be stateless and receive data via props

Screens:

- Screens live in `screens`
- Screens compose components and use hooks
- Screens can use navigation
- Avoid putting complex logic directly in screens

Hooks:

- Custom hooks live in `hooks`
- Hooks manage state, side effects, and business logic
- Use React hooks like useState, useEffect, useMemo, useCallback
- Prefer hooks over global state
- Do not introduce Redux or global state unless clearly needed

State management:

- Local state and hooks are enough for this project
- Keep state close to where it is used
- Simplicity is preferred over heavy state libraries

Navigation:

- Bottom tabs are used for main navigation
- Stack navigation is used for screen flows
- Navigation setup lives outside screens

Theme:

- Colors and UI constants should come from `theme`
- Avoid hardcoded colors in components when possible

TypeScript:

- Use TypeScript everywhere
- Prefer explicit types
- Avoid `any`
- Shared types go into `types`

Imports:

- Use absolute imports with alias `@`
- Avoid long relative paths

General:

- Write code as if it will be reviewed by a senior engineer
- Keep things realistic and production-like
- Optimize for readability and maintainability
