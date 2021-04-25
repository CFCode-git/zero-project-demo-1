const path = require('path')
const DllPlugin = require('webpack').DllPlugin

module.exports = {
    mode: 'production',
    entry: {
        react: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(__dirname, '../dll'),
        filename: '_dll_[name].js',
        library: '_dll_[name]',
    },
    plugins: [
        new DllPlugin({
            name: '_dll_[name]',
            path: path.resolve(__dirname, '../dll/[name].manifest.json'),
        }),
    ],
}
