module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [['module-resolver', { alias: { '@src': './src' } }]],
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
