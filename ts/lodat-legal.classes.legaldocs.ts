import * as plugins from './lodat-legal.plugins';
import * as paths from './lodat-legal.paths';

// interfaces
import { ICompany } from '@tsclass/tsclass';
import { ITemplateData } from '.';


export class LosslessLegalDocs {

  /**
   * gets the privacy policy by reading and combining the 
   */
  public async getDirAsMarkdownMustacheTemplate (dirArg: string): Promise<string> {
    const fileObject = await plugins.smartfile.fs.fileTreeToObject(dirArg, '*.md');
    let privacyPolicy: string = '';
    for (const smartfile of fileObject) {
      privacyPolicy = privacyPolicy + smartfile.contents.toString() + '\n';
    }
    return privacyPolicy;
  };

  /**
   * 
   */
  public async getDirAsHtmlTemplate (dirArg: string) {
    const templateString = await this.getDirAsMarkdownMustacheTemplate(dirArg);
    const smartmarkdownInstance = new plugins.smartmarkdown.SmartMarkdown();
    return smartmarkdownInstance.markdownToHtml(templateString);
  }

  /**
   * gets the privacy policy as html
   * @param optionsArg 
   */
  public async getPrivacyPolicy(optionsArg: ITemplateData): Promise<string> {
    const privacyPolicyTemplateString = await this.getDirAsHtmlTemplate(paths.privacyPolicyDir);
    const smartmustache = new plugins.smartmustache.SmartMustache(privacyPolicyTemplateString);
    const appliedMarkdown = smartmustache.applyData(optionsArg);
    return appliedMarkdown;
  }

  /**
   * gets the privacy policy as html
   * @param optionsArg 
   */
  public async getCookiePolicy(optionsArg: ITemplateData): Promise<string> {
    const privacyPolicyTemplateString = await this.getDirAsHtmlTemplate(paths.cookiePolicyDir);
    const smartmustache = new plugins.smartmustache.SmartMustache(privacyPolicyTemplateString);
    const appliedMarkdown = smartmustache.applyData(optionsArg);
    return appliedMarkdown;
  }

  public async getLosslessPrivacyPolicy() {
    return await this.getPrivacyPolicy({
      company: {
        name: 'Lossless GmbH',
        contact: null,
        foundedDate: {
          day: 1,
          month: 1,
          year: 2014
        },
        closedDate: null,
        status: 'active'
      },
      legal: {
        googleAdSense: true,
        npmTracking: true,
        serviceWorker: true
      },
      changesUrl: 'https://lossless.gmbh/privacy'
    });    
  }


}
