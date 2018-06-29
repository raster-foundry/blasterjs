const { createConfig, babel, postcss } = require('webpack-blocks');

module.exports = {
    webpackConfig: createConfig([babel(), postcss()]),
    sections: [
        {
          name: 'Introduction',
          content: 'docs/introduction.md'
        },
        {
            name: 'Buttons',
            components: 'packages/button/components/**/index.js',
        }
    ],
    getExampleFilename(componentPath) {
        return componentPath.replace('index.js', 'README.md');
    },
    ignore: [
        '**/*.spec.js',
        '**/node_modules/**/*.js'
    ],
    pagePerSection: true
};
