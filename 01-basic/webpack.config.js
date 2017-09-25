module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    // 개발서버 
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_moudles/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};


// webpack 은 entry 부터 시작하여 무듈들을 다 불러온 후, 한파일로 합쳐 bundle.js 에 저장한다.
// package.json 의 "script" 블록에 webpack-dev-server 실행 하도록 추가