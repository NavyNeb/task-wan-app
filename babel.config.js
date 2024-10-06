module.exports = function (api) {
  api.cache(true);
  const plugins = [
    "nativewind/babel",
    'react-native-reanimated/plugin'
  ];

  plugins.push([
    '@tamagui/babel-plugin',
    {
      components: ['tamagui'],
      config: './tamagui.config.ts',
    },
  ]);

  return {
    presets: ['babel-preset-expo'],

    plugins,
  };
};
