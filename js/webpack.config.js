var loaders = [
    ];

module.exports = [
    {// Notebook extension
        entry: './src/extension.js',
        output: {
            filename: 'extension.js',
            path: '../mplnbextension/static',
            libraryTarget: 'amd'
        }
    },
    {// matplotlib bundle for the notebook
        entry: './src/index.js',
        output: {
            filename: 'index.js',
            path: '../mplnbextension/static',
            libraryTarget: 'amd'
        },
        devtool: 'source-map',
        module: {
            loaders: loaders
        },
        externals: ['jupyter-js-widgets']
    },
    {// embeddable matplotlib bundle
        entry: './src/index.js',
        output: {
            filename: 'index.js',
            path: './dist/',
            libraryTarget: 'amd'
        },
        devtool: 'source-map',
        module: {
            loaders: loaders
        },
        externals: ['jupyter-js-widgets']
    }
];
