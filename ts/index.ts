import { ICompany } from '@tsclass/tsclass';

export interface ITemplateData {
  company: ICompany;
  legal: {
    googleAdSense: boolean;
    npmTracking: boolean;
    serviceWorker: boolean;
  },
  changesUrl: string;
}

export * from './lodat-legal.classes.legaldocs';
