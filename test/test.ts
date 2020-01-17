import { expect, tap } from '@pushrocks/tapbundle';

import * as legaldocs from '../ts/index';

tap.test('legaldocs should output privacyPolicy', async () => {
  const losslessLegalDocs = new legaldocs.LosslessLegalDocs();
  const privacyPolicy = await losslessLegalDocs.getLosslessPrivacyPolicy();
  console.log(privacyPolicy);
});

tap.start();
