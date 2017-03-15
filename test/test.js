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
require("typings-test");
const legaldocs = require("../dist/index");
describe('legaldocs', function () {
    it('should output privacyPolicy', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let privacyPolicy = yield legaldocs.getPrivacyPolicy();
            console.log(privacyPolicy);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQUFxQjtBQUNyQiwyQ0FBMEM7QUFFMUMsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUNwQixFQUFFLENBQUMsNkJBQTZCLEVBQUU7O1lBQ2hDLElBQUksYUFBYSxHQUFHLE1BQU0sU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM1QixDQUFDO0tBQUEsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==