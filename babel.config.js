module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './components',
          '@assets': './assets',
          '@screens': './screens',
          '@helpers': './helpers',
        },
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
  ],
};
