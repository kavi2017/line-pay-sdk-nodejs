(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{177:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"capture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#capture","aria-hidden":"true"}},[t._v("#")]),t._v(" Capture")]),t._v(" "),s("p",[t._v('If "capture" is "false" when the Merchant calls the “Reserve Payment API” , the payment is completed only after the Capture API is called.')]),t._v(" "),s("h2",{attrs:{id:"type-signature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-signature","aria-hidden":"true"}},[t._v("#")]),t._v(" Type signature")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Client")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("capture")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" OptionsCapture"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token builtin"}},[t._v("any")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The type of OptionsCapture :")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" OptionsCapture "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n   * Payment amount\n   */")]),t._v("\n  amount"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("number")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n   * Currency following ([ISO 4218](https://ko.wikipedia.org/wiki/ISO_4217))\n   * Supported currencies are as follows:\n   *\n   * - USD\n   * - JPY\n   * - TWD\n   * - THB\n   *\n   * (3 Bytes)\n   */")]),t._v("\n  currency"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"USD"')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"JPY"')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"TWD"')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"THB"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n   * Transaction number issued by LINE Pay\n   */")]),t._v("\n  transactionId"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("capture")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("then")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"result-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#result-code","aria-hidden":"true"}},[t._v("#")]),t._v(" Result Code")]),t._v(" "),s("ul",[s("li",[t._v("0000: Successful")]),t._v(" "),s("li",[t._v("1104: Merchant not found.")]),t._v(" "),s("li",[t._v("1105: This Merchant cannot use LINE Pay.")]),t._v(" "),s("li",[t._v("1106: Header information error")]),t._v(" "),s("li",[t._v("1150: Transaction record not found.")]),t._v(" "),s("li",[t._v("1155: Wrong TransactionId")]),t._v(" "),s("li",[t._v("1170: User’s account remains have been changed.")]),t._v(" "),s("li",[t._v("1172: Existing same orderId.")]),t._v(" "),s("li",[t._v("1179: Status can not be processed.")]),t._v(" "),s("li",[t._v("1180: Expired the payment date.")]),t._v(" "),s("li",[t._v("1183: Payment Amount Error")]),t._v(" "),s("li",[t._v("1184: Payment amount exceeds amount requested.")]),t._v(" "),s("li",[t._v("1198: Duplicated the request calling API or Called Capture API during processing internal re- authorization. (Re-try in a few minutes)")]),t._v(" "),s("li",[t._v("1199: Internal request error.")]),t._v(" "),s("li",[t._v("1280: Temporary error occurred while making a payment with credit card")]),t._v(" "),s("li",[t._v("1281: Credit card payment error")]),t._v(" "),s("li",[t._v("1282: Credit card authorization error")]),t._v(" "),s("li",[t._v("1283: The payment has been declined due to suspected fraud.")]),t._v(" "),s("li",[t._v("1284: Credit card payment is temporarily not available.")]),t._v(" "),s("li",[t._v("1285: Omitted credit card information")]),t._v(" "),s("li",[t._v("1286: Incorrect credit card payment information")]),t._v(" "),s("li",[t._v("1287: Credit card expiration date has passed.")]),t._v(" "),s("li",[t._v("1288: Credit card has insufficient funds.")]),t._v(" "),s("li",[t._v("1289: Maximum credit card limit exceeded.")]),t._v(" "),s("li",[t._v("1290: One-time payment limit exceeded.")]),t._v(" "),s("li",[t._v("1291: This card has been reported stolen.")]),t._v(" "),s("li",[t._v("1292: This card has been suspended.")]),t._v(" "),s("li",[t._v("1293: INVALID CARD VERIFICATION NUMBER (CVN)")]),t._v(" "),s("li",[t._v("1294: This card is blacklisted.")]),t._v(" "),s("li",[t._v("1295: Invalid credit card number")]),t._v(" "),s("li",[t._v("1296: Invalid amount")]),t._v(" "),s("li",[t._v("1298: The credit card payment declined.")]),t._v(" "),s("li",[t._v("9000: Internal error")]),t._v(" "),s("li",[t._v("When an Error code 1199,1280~1298 occurs, the transaction cancels automatically.")])])])}],!1,null,null,null);e.options.__file="capture.md";a.default=e.exports}}]);