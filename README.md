# WhatsApp Clone

Personal, in-progress recreation of WhatsApp’s first-run experience, built by [Samuel Mensah](https://github.com/simiel) (`@simiel`). The app is an Expo Router project for Android, iOS, and web. It covers the screens a new user sees before a chat list exists: a welcome screen, a language picker, and phone-number entry, with Clerk mounted so phone verification can be connected later. The live route tree is the welcome screen and a verify stack; an earlier version of the same flow is kept under `legacy/`.

## Status

Active prototype. The onboarding UI is the work in this repository. There is no chat list, conversation view, contact book, or message transport. Phone submission and OTP verification are stubbed, and the language choice is not applied to the rest of the UI.

## Features

**Live routes (`app/`)**

- Welcome screen with a pattern image, privacy and terms copy, an overflow menu (Help), a language chip, and an **Agree and Continue** link into phone entry. The terms URL is defined; the language chip’s press handler is currently empty.
- Phone screen fixed to Ghana, with a numeric phone field, a keyboard-avoiding layout (extra offset on iOS), a full-screen “Sending OTP…” state, and an overflow menu for “Link as companion device” and Help. **Next** calls `sendOtp`, which is still an empty function, so the loader never starts.
- OTP route at `app/(verify)/otp.tsx`, rendered as placeholder text. Nothing navigates to it yet.
- Root layout holds the splash screen until the SpaceMono font loads, then wraps the stack in Clerk, React Navigation’s light/dark theme, and a popup-menu provider.
- Unmatched routes render a small not-found screen with a link home.

**Earlier onboarding (`legacy/`)**

These files are not mounted by the current root layout. They are the previous pass at the same flow:

- A test index that pushes into the welcome stack.
- Welcome screen that opens a language modal and then the phone screen.
- Language modal (`presentation: "modal"`) with a radio list driven by `legacy/constants/Languages.ts`. The list leads with Ghanaian languages (Akan, Ewe, Ga, Dagbani, Dangme, Dagaare, Fante, Gonja, Kasem, Kusaal, Nzema, Twi, and others) and continues through a long set of world languages, each with an English name and a native name. The selected id is component state only.
- Phone screen with a Ghana row, a calling-code field, and a phone-number field, using the WhatsApp-like palette in `legacy/constants/Colors.ts` (teal `#075E54`, blue `#34B7F1`, light green `#DCF8C6`).

The language screen imports `react-native-radio-buttons-group`, which is not listed in `package.json`. The earlier welcome screen also references `assets/images/green.png`, which is not in the repo. The live welcome screen uses `assets/images/fruit-pattern.jpg` instead.

## Tech stack

- [Expo SDK 52](https://docs.expo.dev/) (`expo` ~52.0.17) and React Native 0.76.3, React 18.3
- [Expo Router](https://docs.expo.dev/router/introduction/) 4 with file-based routing and typed routes (`experiments.typedRoutes`)
- TypeScript in strict mode, path alias `@/*`
- [NativeWind](https://www.nativewind.dev/) 4 and Tailwind CSS 3 (`global.css`, Metro wrapped with `withNativeWind`)
- [Clerk](https://clerk.com/) for Expo (`@clerk/clerk-expo`): `ClerkProvider` and `ClerkLoaded` only. No sign-in call, session hook, or token cache is implemented.
- React Navigation themes, `react-native-popup-menu`, Iconsax icons, `react-native-reanimated`, `expo-splash-screen`, `expo-font`

React Native’s New Architecture is on (`newArchEnabled: true` in `app.json`). The iOS bundle id and Android package are `com.simiel.whatsapp`. The app is portrait-only, supports iPad, and the web build uses Metro with static output.

`expo-secure-store` and `expo-auth-session` are dependencies and are not imported by the current screens.

## Project structure

```
app/
  _layout.tsx           Clerk, theme, splash, font, root stack
  index.tsx             Welcome
  (verify)/phone.tsx    Phone number entry
  (verify)/otp.tsx      OTP placeholder
  +not-found.tsx
legacy/
  app/(welcome)/        Earlier welcome, language modal, and phone screens
  constants/Colors.ts   WhatsApp-like palette used by the phone screen
  constants/Languages.ts
constants/Colors.ts     Light and dark tokens from the Expo starter
hooks/                  Color-scheme hooks, including a web hydration guard
assets/                 Icons, splash, SpaceMono, welcome pattern
scripts/reset-project.js
```

`npm run reset-project` is the Expo starter script. It moves `app/`, `components/`, `hooks/`, `constants/`, and `scripts/` into `app-example` and writes a blank `app/`. Leave it unused if you want to keep these screens.

Native `ios/` and `android/` directories are gitignored and are created when you run a dev client build.

## Getting started

### Prerequisites

- Node.js 18 or newer (required by Expo SDK 52)
- npm or Yarn. This repo has both `package-lock.json` and `yarn.lock`; recent dependency updates were made with Yarn.
- [Expo Go](https://expo.dev/go) for a quick run, or Xcode / Android Studio when using `expo run:ios` or `expo run:android`
- A Clerk publishable key

### Install

```bash
yarn
# or: npm install
```

### Environment

The root layout reads one variable and throws on startup if it is missing:

| Name | Purpose |
| --- | --- |
| `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key passed to `ClerkProvider` |

Put it in a `.env` file in the project root. Do not commit secret values. `.gitignore` ignores `.env*.local`; a plain `.env` is not ignored.

### Run

```bash
yarn start          # expo start
yarn android        # expo run:android
yarn ios            # expo run:ios
yarn web            # expo start --web
```

npm equivalents: `npm start`, `npm run android`, `npm run ios`, `npm run web`.

From the Expo CLI you can open Expo Go, an Android emulator, an iOS simulator, or a development build.

### Test and lint

```bash
yarn test           # jest --watchAll, preset jest-expo
yarn lint           # expo lint
```

Jest is configured. The repository has no test files; the starter `ThemedText` test was removed when the tabs template was cleared out. `yarn test` therefore starts Jest in watch mode with nothing to run.

## What this demonstrates

- Product-UI reconstruction: the welcome, language, and phone screens follow WhatsApp’s first-run layout, including overflow menus, a teal palette, safe areas, and keyboard avoidance with a platform-specific offset.
- Expo Router structure: a headerless root stack, a nested `(verify)` stack, a modal language route in the earlier flow, and a not-found screen.
- Styling with both NativeWind utility classes (welcome) and a shared StyleSheet palette (phone), plus system light/dark theme wiring through React Navigation.
- A Ghana-first language catalog, modeled as typed `{ englishName, nativeName }` entries and rendered as a selectable radio list.
- Auth integration started at the boundary that matters: the tree is wrapped in Clerk and refuses to boot without a publishable key, while the OTP screen and submit handlers are left as explicit extension points.
- An incremental rewrite. The first onboarding pass is preserved under `legacy/` while the active app was rebuilt on NativeWind and Clerk, instead of being thrown away.
