const { createConfig, babel, postcss } = require('webpack-blocks');

module.exports = {
    webpackConfig: createConfig([babel(), postcss()]),
    sections: [
        {
          name: 'Introduction',
          content: 'docs/introduction.md'
        },
        {
            name: 'Colors',
            content: 'docs/colors.md',
            sections: [
                {
                    name: 'Usage Patterns',
                    content: 'docs/colors/usage.md'
                }
            ]
        },
        {
            name: 'Components',
            content: 'docs/components.md',
            sections: [
                {
                    name: 'Core',
                    components: 'packages/core/components/**/index.js',
                    usageMode: 'expand',
                    exampleMode: 'expand'
                },
                {
                    name: 'Chart',
                    components: 'packages/chart/components/**/index.js',
                    usageMode: 'expand',
                    exampleMode: 'expand'
                }
            ]
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