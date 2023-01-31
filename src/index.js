// tooling
import postcssAdvancedVariables from 'postcss-advanced-variables';
import postcssAtroot from 'postcss-atroot';
import postcssExtendRule from 'postcss-extend-rule';
import postcssNested from 'postcss-nested';
import postcssPresetEnv from 'postcss-preset-env';
import postcssPropertyLookup from 'postcss-property-lookup';

// plugin chain
const plugins = [
	postcssExtendRule,
	postcssAdvancedVariables,
	postcssPresetEnv,
	postcssAtroot,
	postcssPropertyLookup,
	postcssNested
];

export default (rawopts) => {
  return {
    postcssPlugin: 'precss',
    Once(root) {
      const opts = Object.assign({
        stage: 0
      }, rawopts); // initialize all plugins

      const initializedPlugins = plugins.map(plugin => plugin(opts)); // process css with all plugins

      return initializedPlugins.reduce((promise, plugin) => {
        return promise.then(() => {
          return typeof plugin === 'function' ? plugin(root) : root;
        });
      }, Promise.resolve());
    }
  };
}
