(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{484:function(s,t,n){"use strict";n.r(t);var a=n(22),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"tranform-runtime配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tranform-runtime配置文件"}},[s._v("#")]),s._v(" tranform-runtime配置文件")]),s._v(" "),n("blockquote",[n("p",[s._v("babel只会默认对句法进行转换，而那些方法，api不会转换，要转就要使用polyfill和transform，这里介绍transform，关于polyfill请看我的polyfill文章")])]),s._v(" "),n("blockquote",[n("p",[s._v('-用来抽取helpers和builtins，自动导入到你的代码中，没有全局污染 -注意：实例的方法比如 "foobar".includes("foo")不会生效，因为这会修改现有的built-ins（解决这种情况，请使用babel-polyfill）')])]),s._v(" "),n("blockquote",[n("p",[s._v("babel使用一些小的helpers如_extend来处理传统的函数，(也就是说function fn(){}这样的函数经过babel也会转码，而且转 出一大坨子代码)，这个helpers会被添加到每一个需要它的文件，这种重复有时是不必要的，特别是在你的应用分布于多个文件里 面，这就是为什么需要transform-runtime插件了，因为使用这个插件，所有的helpers都会被提取到babel-runtime模块中从而 避免重复的代码出现在编译后的文件里面，这个被提取的runtime将会编译到你的项目中 这个插件的另外一个作用就是能够为你的代码创建一个沙箱环境，如果你使用babel-polyfill当处理这些全局函数如Promise, Set和Map，编译后的结果会污染整个全局环境，会生成很多built-ins，这种情况在你自己写代码可能影响不大，但是当你把代码 给别人使用或者你不确定你的代码的运行环境时，这时就出现问题了，那么这个插件就会对这些built-ins起个别名放在core-js 里面，所以可以使用这些全局的方法不需要导入polyfill")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 安装")]),s._v("\n开发版本 npm install "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev babel"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("transform"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("runtime\n生成版本 npm install "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save babel"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("runtime\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 使用")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置文件中")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugins"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"transform-runtime"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"helpers"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"polyfill"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"regenerator"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moduleName"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"babel-runtime"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 上边传递的options中的参数默认都是true，不需要设置，因为这些都是这个插件的特点")]),s._v("\n\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 简单方式在项目中直接使用即可")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugins"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"transform-runtime"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n优点是:\n    1.解决babel处理函数时生成的多余代码，这个插件把这些代码提取到它自己的helper模块中\n    2.解决全局函数的全局污染，因为全局函数需要单独生成实现函数本身功能的特定代码，要把这部分代码提取到插件的core-js模块中\n缺点是:\n    1.无法解决实例的方法，实例的方法需要借助polyfill\n*/")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);