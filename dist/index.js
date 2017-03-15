"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./legaldocs.plugins");
const paths = require("./legaldocs.paths");
exports.getPrivacyPolicy = () => __awaiter(this, void 0, void 0, function* () {
    let fileObject = yield plugins.smartfile.fs.fileTreeToObject(paths.privacyPolicyDir, '*.md');
    let privacyPolicy = '';
    for (let smartfile of fileObject) {
        privacyPolicy = privacyPolicy + smartfile.contents.toString() + '\n';
    }
    return privacyPolicy;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLDJDQUEwQztBQUUvQixRQUFBLGdCQUFnQixHQUFHO0lBQzVCLElBQUksVUFBVSxHQUFHLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzVGLElBQUksYUFBYSxHQUFXLEVBQUUsQ0FBQTtJQUM5QixHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLGFBQWEsR0FBRyxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUE7SUFDdEUsQ0FBQztJQUNELE1BQU0sQ0FBQyxhQUFhLENBQUE7QUFDdEIsQ0FBQyxDQUFBLENBQUEifQ==