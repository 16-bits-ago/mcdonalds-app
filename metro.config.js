/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
    const {
        resolver: { sourceExts }
    } = await getDefaultConfig();

    return {
        transformer: {
            babelTransformerPath: require.resolve('react-native-css-transformer')
        },

        resolver: {
            sourceExts: [...sourceExts, 'css']
        }
    };
})();
