import { expect, tap } from '@pushrocks/tapbundle';

import * as legaldocs from '../ts/index';

tap.test('legaldocs should output privacyPolicy', async () => {
  let privacyPolicy = await legaldocs.getPrivacyPolicy();
  console.log(privacyPolicy);
});

tap.start();
