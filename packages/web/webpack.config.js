const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const path = require('path');
const globby = require('globby');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

function getEntries() {
  try {
    const entries = {};
    const allEntry = globby.sync('src/pages/**/main.js');
    allEntry.forEach((entry) => {
      const res = entry.match(/src\/pages\/(\w+)\/main\.js/);
      if (res.length) {
        entries[res[1]] = `./${entry}`;
      }
    });
    return entries;
  } catch (error) {
    console.error('File structure is incorrect for MPA');
  }
}

function multiHtmlPlugin(entries) {
  const pageNames = Object.keys(entries);
  return pageNames.map((name) => {
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: './public/index.html',
      chunks: [name],
      minify: prod
        ? {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
          }
        : true,
    });
  });
}

module.exports = function (env) {
  const entry = getEntries();

  const htmlPlugins = multiHtmlPlugin(entry);

  const config = {
    entry,
    target: ['web'],
    resolve: {
      alias: {
        svelte: path.dirname(require.resolve('svelte/package.json')),
      },
      extensions: ['.mjs', '.js', '.svelte'],
      mainFields: ['svelte', 'browser', 'module', 'main'],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'public/js/[name].[chunkhash].js',
      chunkFilename: 'public/js/[name].[chunkhash].js',
    },
    module: {
      rules: [
        {
          // https://github.com/sveltejs/svelte/issues/717
          test: /\.m?js$/,
          exclude: /node_modules\/(?!svelte)/,
          use: 'babel-loader',
        },
        {
          test: /\.svelte$/,
          exclude: /node_modules\/(?!svelte)/,
          use: [
            { loader: 'babel-loader' },
            {
              loader: 'svelte-loader',
              options: {
                compilerOptions: {
                  dev: !prod,
                },
                emitCss: prod,
                hotReload: !prod,
                preprocess: require('svelte-preprocess')({
                  postcss: true,
                }),
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            /**
             * MiniCssExtractPlugin doesn't support HMR.
             * For developing, use 'style-loader' instead.
             * */
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'public/img/[name].[hash:7].[ext]',
          },
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'public/media/[name].[hash:7].[ext]',
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'public/fonts/[name].[hash:7].[ext]',
          },
        },
        {
          // required to prevent errors from Svelte on Webpack 5+
          test: /node_modules\/svelte\/.*\.mjs$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
    mode,
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'public/css/[name].[contenthash].css',
      }),
      new CopyPlugin({
        patterns: [{ from: './public/static', to: './public/static' }],
      }),
      ...htmlPlugins,
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: !!(env && env.analyze),
      }),
    ],
    devtool: prod ? false : 'source-map',
    devServer: {
      hot: true,
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 9000,
      open: false,
    },
  };

  return config;
};
