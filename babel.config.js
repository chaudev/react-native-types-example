module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
    // ['transform-remove-console'],
  ],
  retainLines: true,
  env: {
    production: {
      plugins: [
        [
          'babel-plugin-root-import',
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
          },
        ],
        // [
        //   'transform-remove-console',
        //   {
        //     exclude: ['error', 'warn', 'log'],
        //   },
        // ],
      ],
    },
  },
};
