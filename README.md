# Snips Demo App

A React Native mobile application. The app features a **Home Page** with categorized content and a **TikTok-style Feed Page** with vertical video swiping.

## 📱 Screenshots

![simulator_screenshot_44984657-BD4C-40BC-AE8E-52D3BFD59105](https://github.com/user-attachments/assets/e011d08c-2199-4e94-acb8-9e57a588b5ba)
<img width="1320" height="2868" alt="simulator_screenshot_397E8DA7-5597-4316-833B-0DCE9222CAE4" src="https://github.com/user-attachments/assets/13d971ca-1307-410c-8c3e-8cac5e738b62" />


| Home Page | Feed Page |
|-----------|-----------|
| Categorized content sections | Vertical video feed with expandable descriptions |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 20
- **React Native CLI** environment configured ([Setup Guide](https://reactnative.dev/docs/set-up-your-environment))
- **Xcode** (for iOS)
- **Android Studio** (for Android)

### Installation

```bash
# Clone the repository
git clone https://github.com/algokano/snips-app.git
cd snips-app

# Install dependencies
npm install

# iOS only: Install CocoaPods
cd ios && bundle install && bundle exec pod install && cd ..
```

### Running the App

```bash
# Start Metro bundler
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

---

## 🛠 Technical Stack

| Category | Choice | Rationale |
|----------|--------|-----------|
| **Framework** | React Native 0.83 (bare) | Latest stable version with new architecture support |
| **Language** | TypeScript | Type safety and better DX |
| **Navigation** | React Navigation v7 | Industry standard, bottom tabs + stack support |
| **State Management** | React Hooks (useState, useCallback) | Appropriate for app scope, no Redux overhead |
| **Animations** | Reanimated 3 + Gesture Handler | 60fps native animations for smooth feed swiping |
| **Video** | react-native-video | Robust video playback with buffering controls |
| **Styling** | StyleSheet + Linear Gradient | Performance-optimized native styling |

---

## 🏗 Architecture

### Project Structure

```
src/
├── api/          # API client and endpoint functions
├── assets/       # SVG icons and images
├── components/   # Reusable UI components (presentational)
├── constants/    # App-wide constants (durations, thresholds, config)
├── hooks/        # Custom hooks for data fetching and logic
├── navigation/   # React Navigation setup (tabs, routes)
├── screens/      # Screen-level components
├── theme/        # Colors and UI constants
├── types/        # TypeScript interfaces
└── utils/        # Helper functions
```

### Key Architectural Decisions

1. **Custom Hooks Pattern**
   - `useHome()` and `useFeed()` encapsulate API calls and state
   - Screens remain clean, focused on composition
   - Provides loading/error states and refetch capabilities

2. **Component Separation**
   - **Presentational components** (`PosterCard`, `LargeCoverCard`) receive data via props
   - **Container components** (screens) handle data fetching and state
   - Components are reusable and testable

3. **Centralized Constants**
   - Animation durations, thresholds, and config values in `src/constants/`
   - Easy to tune UX and maintain consistency

4. **Gesture-Based Feed Navigation**
   - Uses Reanimated worklets for 60fps gesture tracking
   - Shared values for animation state to avoid JS thread blocking
   - Edge resistance effect when at first/last item

5. **Type-Safe API Layer**
   - Generic `apiGet<T>()` function with typed responses
   - Discriminated unions for component types (`LARGE_COVERS | REGULAR_COVERS | MORE_TITLES`)

---

## 📋 Features Implemented

### Home Page
- ✅ Fetches content from API endpoint
- ✅ Renders sections based on `componentType` (LARGE_COVERS, REGULAR_COVERS, MORE_TITLES)
- ✅ Hero carousel for featured content
- ✅ Horizontal scrollable rows
- ✅ Grid layout for additional titles
- ✅ Pull-to-refresh functionality

### Feed Page
- ✅ TikTok-style vertical swipe navigation
- ✅ Video playback with poster fallback
- ✅ Expandable description (More/Less toggle)
- ✅ Long-press to pause video
- ✅ Tap to mute/unmute
- ✅ Action buttons (mocked: Save, Episodes, Share, Menu)

### Navigation
- ✅ Bottom tab navigator with 4 tabs
- ✅ Home and For You tabs functional
- ✅ Rewards and Profile tabs as placeholders

---

## 🎯 Assumptions Made

1. **Placeholder Tabs**: Rewards and Profile screens return placeholder views as they were not part of the core requirements.

2. **Video Autoplay**: Videos autoplay when the slide becomes active and the screen is focused.

3. **Mock Action Buttons**: Save, Episodes, Share, and Menu buttons are visual only (no backend integration).

4. **API Data**: Some fields from the API response may be unused if not relevant to the Figma design.

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Metro bundler |
| `npm run ios` | Run on iOS simulator |
| `npm run android` | Run on Android emulator |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest tests |

---

## 📄 License

This project was created as part of a technical assessment for Snips.

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```
