import { expect, tap } from 'tapbundle'

import * as legaldocs from '../dist/index'

tap.test('legaldocs should output privacyPolicy', async () => {
  let privacyPolicy = await legaldocs.getPrivacyPolicy()
  console.log(privacyPolicy)
})

tap.start()
