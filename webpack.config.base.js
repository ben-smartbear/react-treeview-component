'use strict';

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    library: 'react-treeview-coomponent',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  }
};
