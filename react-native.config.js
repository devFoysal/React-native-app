module.exports = {
  // config for a library is scoped under "dependency" key
  dependency: {
    platforms: {
      ios: {},
      android: {}, // projects are grouped into "platforms"
    },
    assets: ['./assets/fonts/Poppins', './assets/fonts/Roboto'], // stays the same
  },
};
