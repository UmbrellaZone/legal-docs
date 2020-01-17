import * as plugins from './lodat-legal.plugins';

export let packageDir = plugins.path.join(__dirname, '../');
export let docsDir = plugins.path.join(packageDir, 'docs/');
export let privacyPolicyDir = plugins.path.join(docsDir, 'privacypolicy');
export let cookiePolicyDir = plugins.path.join(docsDir, 'cookiepolicy');
