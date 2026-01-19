const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {assetExts} = defaultConfig.resolver;

const config = {
  transformer: {
    unstable_allowRequireContext: true,
    babelTransformerPath: require.resolve(
      'react-native-svg-transformer/react-native',
    ),
  },
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, 'mjs', 'svg'],
    assetExts: assetExts.filter(ext => ext !== 'svg'),
  },
};

module.exports = mergeConfig(defaultConfig, config);
