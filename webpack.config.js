module.exports = {
    entry: './app.js',
  
    output: {
      filename: 'bundle.js',
      publicPath: ''
    },
  
    module: {
      loaders: [
        { test: /\.tsx$/, exclude: /node_modules/, loader: 'ts-loader' }
      ]
    }
  }