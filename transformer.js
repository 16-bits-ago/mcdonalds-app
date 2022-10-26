/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const upstreamTransformer = require('metro-react-native-babel-transformer');

const cssTransformer = require('react-native-css-transformer');
/* const svgTransformer = require('react-native-svg-transformer'); */

module.exports.transform = function ({ src, filename, options }) {
    if (filename.endsWith('.css')) {
        return cssTransformer.transform({ src, filename, options });
    }

    /* if (filename.endsWith('.svg')) {
        return svgTransformer.transform({ src, filename, options });
    } */

    return upstreamTransformer.transform({ src, filename, options });
};