module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          "root": ["./"],
          "alias": {
            "@components": "./src/components",
            "@src": "./src",
            "@helpers": "./src/helpers",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@assets": "./assets",
          }
        },
      ],
    ],
    //   env: {
    //     production: {
    //       plugins: [
    //         [
    //           'inline-dotenv',
    //           {
    //             path: '.env',
    //           },
    //         ],
    //       ],
    //     },
    //     development: {
    //       plugins: [
    //         [
    //           'inline-dotenv',
    //           {
    //             path: '.env',
    //           },
    //         ],
    //       ],
    //     },
    //   },
  };
};
