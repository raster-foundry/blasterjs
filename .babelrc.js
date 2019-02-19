module.exports = {
  'presets': ['@babel/preset-env', '@babel/preset-react'],
  'env': {'test': {'plugins': ['@babel/plugin-transform-modules-commonjs']}},
  'plugins': [[
    'babel-plugin-styled-components',
    {'displayName': true, 'fileName': false}
  ]]
};
