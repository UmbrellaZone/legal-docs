import * as plugins from './lodat-legal.plugins';

export let packageDir = plugins.path.join(__dirname, '../');
export let assetsDir = plugins.path.join(packageDir, 'assets/');
export let privacyPolicyDir = plugins.path.join(assetsDir, 'privacypolicy');
export let cookiePolicyDir = plugins.path.join(assetsDir, 'cookiepolicy');
