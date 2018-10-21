import * as plugins from './legaldocs.plugins';
import * as paths from './legaldocs.paths';

import { ICompany } from '@tsclass/tsclass'

export interface IExpectedTemplateData {
  company: ICompany;
  legal: {
    googleAdSense: boolean;
    npmTracking: boolean;
    serviceWorker: boolean;
  },
  changesUrl: string;
}

export let getPrivacyPolicy = async (): Promise<string> => {
  let fileObject = await plugins.smartfile.fs.fileTreeToObject(paths.privacyPolicyDir, '*.md');
  let privacyPolicy: string = '';
  for (let smartfile of fileObject) {
    privacyPolicy = privacyPolicy + smartfile.contents.toString() + '\n';
  }
  return privacyPolicy;
};
