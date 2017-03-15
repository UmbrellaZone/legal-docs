import 'typings-test'
import * as legaldocs from '../dist/index'

describe('legaldocs', function () {
  it('should output privacyPolicy', async function () {
    let privacyPolicy = await legaldocs.getPrivacyPolicy()
    console.log(privacyPolicy)
  })
})
