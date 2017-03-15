import * as plugins from './legaldocs.plugins'
import * as paths from './legaldocs.paths'

export let getPrivacyPolicy = async () => {
    let fileObject = await plugins.smartfile.fs.fileTreeToObject(paths.privacyPolicyDir,'*.md')
    console.log(fileObject)
}
