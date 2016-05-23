"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,r,a){var l=void 0;n["default"].MODEL_FACTORY_INJECTIONS=!0,l=n["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:t["default"]}),(0,r["default"])(l,a["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,n,t){var r=t["default"].APP.name,a=t["default"].APP.version;e["default"]=n["default"].extend({version:a,name:r})}),define("dummy/components/cc-example",["exports","ember"],function(e,n){e["default"]=n["default"].Component.extend({ccNumber:""})}),define("dummy/components/code-snippet",["exports","ember","dummy/snippets"],function(e,n,t){var r=require("highlight.js");e["default"]=n["default"].Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e;for(var n,t,r=e.split("\n"),a=0;a<r.length;a++)n=/^\s*/.exec(r[a]),n&&("undefined"==typeof t||t>n[0].length)&&(t=n[0].length);return"undefined"!=typeof t&&t>0&&(e=e.replace(new RegExp("(\\n|^)\\s{"+t+"}","g"),"$1")),e},source:n["default"].computed("name",function(){return this._unindent((t["default"][this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){r.highlightBlock(this.get("element"))},language:n["default"].computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"));if(e)switch(e[1].toLowerCase()){case"js":return"javascript";case"hbs":return"handlebars";case"css":return"css";case"scss":return"scss";case"less":return"less";case"emblem":return"emblem"}})})}),define("dummy/controllers/array",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/helpers/cc-luhn",["exports","ember-creditcard/helpers/cc-luhn"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}}),Object.defineProperty(e,"ccLuhn",{enumerable:!0,get:function(){return n.ccLuhn}})}),define("dummy/helpers/cc-number-to-type",["exports","ember-creditcard/helpers/cc-number-to-type"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}}),Object.defineProperty(e,"ccNumberToType",{enumerable:!0,get:function(){return n.ccNumberToType}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,n,t){e["default"]={name:"App Version",initialize:(0,n["default"])(t["default"].APP.name,t["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,n){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",n["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){function r(){var e=arguments[1]||arguments[0];if(t["default"].exportApplicationGlobal!==!1){var r,a=t["default"].exportApplicationGlobal;r="string"==typeof a?a:n["default"].String.classify(t["default"].modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){e["default"]=n["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){var r=n["default"].Router.extend({location:t["default"].locationType});r.map(function(){}),e["default"]=r}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/snippets",["exports"],function(e){e["default"]={"cc-luhn.hbs":"\n{{#if (cc-luhn ccNumber)}}\nThis card is valid\n{{else}}\nThis card is invalid\n{{/if}}","cc-usage.hbs":"{{input type=\"number\" value=ccNumber}}\n<br/>\nType is:\n\n<!-- LOGO -->\n<span class=\"logo {{cc-number-to-type ccNumber allowedTypes='visa|mastercard|amex|discover'}}\"></span>\n\n<!-- TEXT -->\n{{cc-number-to-type ccNumber allowedTypes='visa|mastercard|amex|discover'}}"}}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("h2");e.setAttribute(t,"id","title");var r=e.createTextNode("Ember-Creditcard");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(1);return r[0]=e.createMorphAt(n,2,2,t),r},statements:[["content","outlet",["loc",[null,[4,0],[4,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/cc-example",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:7,column:6}},moduleName:"dummy/templates/components/cc-example.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("label"),r=e.createTextNode("Credit Card Number");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("pre");e.setAttribute(t,"class","code");var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(2);return r[0]=e.createMorphAt(n,2,2,t),r[1]=e.createMorphAt(e.childAt(n,[4]),1,1),r},statements:[["inline","partial",["snippets/cc-usage"],[],["loc",[null,[3,0],[3,31]]]],["inline","code-snippet",[],["name","cc-usage.hbs"],["loc",[null,[6,0],[6,36]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/code-snippet",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/code-snippet.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(1);return r[0]=e.createMorphAt(n,0,0,t),e.insertBoundary(n,0),r},statements:[["content","source",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:9,column:35}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("h3"),r=e.createTextNode("Card type detection");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("br");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createElement("h3"),r=e.createTextNode("Card validity");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createElement("p"),r=e.createTextNode("This is done via the ");e.appendChild(t,r);var r=e.createElement("a");e.setAttribute(r,"href","https://en.wikipedia.org/wiki/Luhn_algorithm"),e.setAttribute(r,"target","_blank");var a=e.createTextNode("Luhn algorithm");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode(".");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(3);return r[0]=e.createMorphAt(n,2,2,t),r[1]=e.createMorphAt(n,10,10,t),r[2]=e.createMorphAt(n,12,12,t),e.insertBoundary(n,null),r},statements:[["inline","cc-example",[],["ccNumber",["subexpr","@mut",[["get","ccNumber",["loc",[null,[2,22],[2,30]]]]],[],[]]],["loc",[null,[2,0],[2,32]]]],["inline","partial",["snippets/cc-luhn"],[],["loc",[null,[8,0],[8,30]]]],["inline","code-snippet",[],["name","cc-luhn.hbs"],["loc",[null,[9,0],[9,35]]]]],locals:[],templates:[]}}())}),define("dummy/templates/snippets/cc-luhn",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:2,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/snippets/cc-luhn.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("This card is valid\n");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:4,column:0},end:{line:6,column:0}},moduleName:"dummy/templates/snippets/cc-luhn.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("This card is invalid\n");return e.appendChild(n,t),n},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:6,column:7}},moduleName:"dummy/templates/snippets/cc-luhn.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(1);return r[0]=e.createMorphAt(n,1,1,t),e.insertBoundary(n,null),r},statements:[["block","if",[["subexpr","cc-luhn",[["get","ccNumber",["loc",[null,[2,15],[2,23]]]]],[],["loc",[null,[2,6],[2,24]]]]],[],0,1,["loc",[null,[2,0],[6,7]]]]],locals:[],templates:[e,n]}}())}),define("dummy/templates/snippets/cc-usage",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:9,column:75}},moduleName:"dummy/templates/snippets/cc-usage.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createElement("br");e.appendChild(n,t);var t=e.createTextNode("\nType is:\n\n");e.appendChild(n,t);var t=e.createComment(" LOGO ");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createElement("span");e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createComment(" TEXT ");e.appendChild(n,t);var t=e.createTextNode("\n");e.appendChild(n,t);var t=e.createComment("");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=e.childAt(n,[6]),a=new Array(3);return a[0]=e.createMorphAt(n,0,0,t),a[1]=e.createAttrMorph(r,"class"),a[2]=e.createMorphAt(n,10,10,t),e.insertBoundary(n,0),e.insertBoundary(n,null),a},statements:[["inline","input",[],["type","number","value",["subexpr","@mut",[["get","ccNumber",["loc",[null,[1,28],[1,36]]]]],[],[]]],["loc",[null,[1,0],[1,38]]]],["attribute","class",["concat",["logo ",["subexpr","cc-number-to-type",[["get","ccNumber",["loc",[null,[6,38],[6,46]]]]],["allowedTypes","visa|mastercard|amex|discover"],["loc",[null,[6,18],[6,93]]]]]]],["inline","cc-number-to-type",[["get","ccNumber",["loc",[null,[9,20],[9,28]]]]],["allowedTypes","visa|mastercard|amex|discover"],["loc",[null,[9,0],[9,75]]]]],locals:[],templates:[]}}())}),define("dummy/utils/luhn",["exports","ember-creditcard/utils/luhn"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/utils/number-to-type",["exports","ember-creditcard/utils/number-to-type"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/config/environment",["ember"],function(e){var n="dummy";try{var t=n+"/config/environment",r=e["default"].$('meta[name="'+t+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(l){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-creditcard",version:"0.1.3"});