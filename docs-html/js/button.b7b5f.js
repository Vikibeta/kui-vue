/*! kui-vue v1.8.9 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"2RRQ":function(t,e,o){"use strict";o.r(e);var n=o("yapp"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e.default=i.a},"7qAX":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo-button"},[o("h2",[t._v("Button 按钮")]),t._v(" "),o("Alert",[t._v("注意：非 template/render 模式下，需使用 k-button。")]),t._v(" "),o("h3",[t._v("代码示例")]),t._v(" "),o("Row",{attrs:{gutter:"8"}},[o("Col",{attrs:{span:"12"}},[o("Demo",{attrs:{title:"基础",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Button",[t._v("Default")]),t._v(" "),o("Button",{attrs:{type:"primary"}},[t._v("Primary")]),t._v(" "),o("Button",{attrs:{type:"primary",hollow:""}},[t._v("hollow")]),t._v(" "),o("Button",{attrs:{type:"primary",circle:""}},[t._v("circle")]),t._v(" "),o("Button",{attrs:{type:"link",circle:""}},[t._v("link")])],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("使用\n        "),o("code",[t._v("type")]),t._v("、\n        "),o("code",[t._v("hollow")]),t._v("、\n        "),o("code",[t._v("circle")]),t._v("属性来定义\n        "),o("code",[t._v("Button")]),t._v(" 的样式。")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base)+" ")])]),t._v(" "),o("Demo",{attrs:{title:"带图标",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Button",{attrs:{type:"primary",icon:"ios-search"}},[t._v("搜索")]),t._v(" "),o("Button",{attrs:{type:"success",icon:"ios-cloud-upload"}},[t._v("上传")]),t._v(" "),o("Button",{attrs:{type:"danger",icon:"ios-cloud-download"}},[t._v("下载")]),t._v(" "),o("Button",{attrs:{type:"primary",icon:"ios-play"}}),t._v(" "),o("Button",{attrs:{type:"primary",icon:"ios-pause"}}),t._v(" "),o("Button",{attrs:{type:"primary",icon:"ios-square"}})],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过添加\n        "),o("code",[t._v("icon")]),t._v("属性 设置按钮按钮图标。")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.withIcon))])])],1),t._v(" "),o("Col",{attrs:{span:"12"}},[o("Demo",{attrs:{title:"禁用",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Button",{attrs:{type:"primary"}},[t._v("Primary")]),t._v(" "),o("Button",{attrs:{disabled:"",type:"primary"}},[t._v("disabled")])],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过添加\n        "),o("code",[t._v("disabled")]),t._v("属性可将按钮设置为不可用状态。")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.disabled))])]),t._v(" "),o("Demo",{attrs:{title:"尺寸",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Button",{attrs:{type:"primary"}},[t._v("Primary")]),t._v(" "),o("Button",{attrs:{type:"primary",mini:""}},[t._v("mini")])],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过添加\n        "),o("code",[t._v("mini")]),t._v("属性 设置按钮尺寸大小。")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.size))])])],1)],1),t._v(" "),o("Demo",{attrs:{title:"按钮组合",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("ButtonGroup",[o("Button",[t._v("待发货")]),t._v(" "),o("Button",[t._v("已发货")]),t._v(" "),o("Button",[t._v("已签收")])],1),t._v(" "),o("ButtonGroup",{attrs:{circle:""}},[o("Button",[t._v("待发货")]),t._v(" "),o("Button",[t._v("已发货")]),t._v(" "),o("Button",[t._v("已签收")])],1),t._v(" "),o("ButtonGroup",{attrs:{mini:""}},[o("Button",[t._v("待发货")]),t._v(" "),o("Button",[t._v("已发货")]),t._v(" "),o("Button",[t._v("已签收")])],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("将多个\n      "),o("code",[t._v("Button")]),t._v("放入\n      "),o("code",[t._v("ButtonGroup")]),t._v("内，可实现按钮组合的效果。")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.group))])]),t._v(" "),o("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("type")]),t._v(" "),o("td",[t._v("按钮类型，可选值为primary、link、success、warning、danger或者不设置")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("mini")]),t._v(" "),o("td",[t._v("按钮尺寸大小")]),t._v(" "),o("td",[t._v("Boolean ")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("circle")]),t._v(" "),o("td",[t._v("按钮是否圆角")]),t._v(" "),o("td",[t._v("Boolean ")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("hollow")]),t._v(" "),o("td",[t._v("按钮是否颜色镂空")]),t._v(" "),o("td",[t._v("Boolean ")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("icon")]),t._v(" "),o("td",[t._v("按钮的图标")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("-")])])])])}];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},AGwT:function(t,e,o){"use strict";o.r(e);var n=o("SK2D"),i=o("2RRQ");for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);var r=o("KHd+"),a=Object(r.a)(i.default,n.a,n.b,!1,null,null,null);e.default=a.exports},SK2D:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[o("div",{ref:"demo",staticClass:"k-demo-main"},[o("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),o("div",{staticClass:"k-desc"},[o("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),o("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[o("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),o("div",{staticClass:"k-demo-line"}),t._v(" "),o("Collapse",[o("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},ZNdt:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=o("AGwT"),s=(n=i)&&n.__esModule?n:{default:n};e.default=s.default},hX04:function(t,e,o){"use strict";o.r(e);var n=o("suvy"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e.default=i.a},suvy:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(o("yU0u")),i=s(o("ZNdt"));function s(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:i.default},data:function(){return{code:n.default}}}},xxMO:function(t,e,o){"use strict";o.r(e);var n=o("7qAX"),i=o("hX04");for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);var r=o("KHd+"),a=Object(r.a)(i.default,n.a,n.b,!1,null,null,null);e.default=a.exports},yU0u:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={base:'<Button>Default</Button>\n<Button type="primary">Primary</Button>\n<Button type="primary" hollow>hollow</Button>\n<Button type="primary" circle>circle</Button> \n<Button type="link" circle>link</Button>',disabled:'<Button type="primary">Primary</Button>\n<Button disabled type="primary">disabled</Button>',withIcon:'<Button type="primary" icon="ios-search">搜索</Button>\n<Button type="success" icon="ios-cloud-upload">上传</Button>\n<Button type="danger" icon="ios-cloud-download">下载</Button>\n<Button type="primary" icon="ios-play"/>\n<Button type="primary" icon="ios-pause"></Button>\n<Button type="primary" icon="ios-square"></Button>',size:'<Button type="primary">Primary</Button>\n<Button type="primary" mini>mini</Button>',group:"<ButtonGroup>\n  <Button>待发货</Button>\n  <Button>已发货</Button>\n  <Button>已签收</Button>\n</ButtonGroup>\n<ButtonGroup circle>\n  <Button>待发货</Button>\n  <Button>已发货</Button>\n  <Button>已签收</Button>\n  </ButtonGroup>\n  <ButtonGroup mini>\n  <Button>待发货</Button>\n  <Button>已发货</Button>\n  <Button>已签收</Button>\n</ButtonGroup>"};e.default=n},yapp:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(o("YEIV")),i=a(o("w3Nn")),s=a(o("Ff65")),r=a(o("7+I9"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:r.default},components:{Code:i.default,Collapse:s.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(0,n.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}}}]);