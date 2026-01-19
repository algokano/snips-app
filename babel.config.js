module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: '.',
        alias: {
          '@': './src',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
