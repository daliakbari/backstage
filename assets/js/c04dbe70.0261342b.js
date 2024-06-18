/*! For license information please see c04dbe70.0261342b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[202929],{314742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(824246),r=n(511151);const a={id:"creating-and-publishing",title:"Creating and publishing your docs",sidebar_label:"Creating and Publishing Documentation",description:"Guidance on how to create and publish documentation"},i=void 0,s={id:"features/techdocs/creating-and-publishing",title:"Creating and publishing your docs",description:"Guidance on how to create and publish documentation",source:"@site/../docs/features/techdocs/creating-and-publishing.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/creating-and-publishing",permalink:"/docs/features/techdocs/creating-and-publishing",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/creating-and-publishing.md",tags:[],version:"current",frontMatter:{id:"creating-and-publishing",title:"Creating and publishing your docs",sidebar_label:"Creating and Publishing Documentation",description:"Guidance on how to create and publish documentation"},sidebar:"docs",previous:{title:"TechDocs Architecture",permalink:"/docs/features/techdocs/architecture"},next:{title:"TechDocs Configuration Options",permalink:"/docs/features/techdocs/configuration"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a basic documentation setup",id:"create-a-basic-documentation-setup",level:2},{value:"Use any software template",id:"use-any-software-template",level:3},{value:"Enable documentation for an already existing entity",id:"enable-documentation-for-an-already-existing-entity",level:3},{value:"Create a standalone documentation",id:"create-a-standalone-documentation",level:3},{value:"Writing and previewing your documentation",id:"writing-and-previewing-your-documentation",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This section will guide you through how to:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"#create-a-basic-documentation-setup",children:"Create a basic documentation setup"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#use-any-software-template",children:"Use any software template"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#enable-documentation-for-an-already-existing-entity",children:"Enable documentation for an already existing entity"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#create-a-standalone-documentation",children:"Create a standalone documentation"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#writing-and-previewing-your-documentation",children:"Writing and previewing your documentation"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["A working Backstage instance with TechDocs installed (see\n",(0,o.jsx)(t.a,{href:"/docs/features/techdocs/getting-started",children:"TechDocs getting started"}),")"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"create-a-basic-documentation-setup",children:"Create a basic documentation setup"}),"\n",(0,o.jsxs)(t.p,{children:["If you have an existing repository that you'd like to add documentation to, skip\nto the\n",(0,o.jsx)(t.a,{href:"#enable-documentation-for-an-already-existing-entity",children:"Enable documentation for an already existing entity setup"}),"\nsection below. Otherwise, continue reading to create a new software entity\nincluding documentation from scratch."]}),"\n",(0,o.jsx)(t.h3,{id:"use-any-software-template",children:"Use any software template"}),"\n",(0,o.jsxs)(t.p,{children:["TechDocs is built on top of the\n",(0,o.jsx)(t.a,{href:"https://www.docslikecode.com/about/",children:"docs like code approach"}),". This, in short,\nmeans that you should keep documentation close to the code."]}),"\n",(0,o.jsx)(t.p,{children:"Your Backstage app has a set of software templates added by default. All of\nthese software templates include everything you need to get your TechDocs site\nup and running and to start writing your documentation."}),"\n",(0,o.jsxs)(t.p,{children:["If you have created software templates that do not include documentation by\ndefault, we highly recommend you to set that up. Follow our how-to guide\n",(0,o.jsx)(t.a,{href:"/docs/features/techdocs/how-to-guides#how-to-add-the-documentation-setup-to-your-software-templates",children:"How to add documentation setup to your software templates"}),"\nto get started."]}),"\n",(0,o.jsx)(t.h3,{id:"enable-documentation-for-an-already-existing-entity",children:"Enable documentation for an already existing entity"}),"\n",(0,o.jsx)(t.p,{children:"Prerequisites:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["An existing entity\n",(0,o.jsx)(t.a,{href:"/docs/features/software-catalog/#adding-components-to-the-catalog",children:"registered in backstage"}),"\n(e.g. via a ",(0,o.jsx)(t.code,{children:"catalog-info.yaml"})," file)."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Create an ",(0,o.jsx)(t.code,{children:"mkdocs.yml"})," file in the root of your repository with the following\ncontent:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"site_name: 'example-docs'\n\nnav:\n  - Home: index.md\n\nplugins:\n  - techdocs-core\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Note - The plugins section above is optional. Backstage automatically adds the ",(0,o.jsx)(t.code,{children:"techdocs-core"})," plugin to the\nmkdocs file if it is missing. This functionality can be turned off with a ",(0,o.jsx)(t.a,{href:"/docs/features/techdocs/configuration",children:"configuration option"})," in Backstage."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Update your component's entity description by adding the following lines to its\n",(0,o.jsx)(t.code,{children:"catalog-info.yaml"})," in the root of its repository:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"metadata:\n  annotations:\n    backstage.io/techdocs-ref: dir:.\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The\n",(0,o.jsxs)(t.a,{href:"/docs/features/software-catalog/well-known-annotations#backstageiotechdocs-ref",children:[(0,o.jsx)(t.code,{children:"backstage.io/techdocs-ref"})," annotation"]}),"\nis used by TechDocs to download the documentation source files for generating an\nentity's TechDocs site."]}),"\n",(0,o.jsxs)(t.p,{children:["Create a ",(0,o.jsx)(t.code,{children:"/docs"})," folder in the root of your repository with at least an\n",(0,o.jsx)(t.code,{children:"index.md"})," file in it. ",(0,o.jsx)(t.em,{children:"(If you add more markdown files, make sure to update the\nnav in the mkdocs.yml file to get a proper navigation for your documentation.)"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Note - Although ",(0,o.jsx)(t.code,{children:"docs"})," is a popular directory name for storing documentation,\nit can be renamed to something else and can be configured by ",(0,o.jsx)(t.code,{children:"mkdocs.yml"}),". See\n",(0,o.jsx)(t.a,{href:"https://www.mkdocs.org/user-guide/configuration/#docs_dir",children:"https://www.mkdocs.org/user-guide/configuration/#docs_dir"})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"docs/index.md"})," can for example have the following content:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-md",children:"# example docs\n\nThis is a basic example of documentation.\n"})}),"\n",(0,o.jsx)(t.p,{children:"Commit your changes, open a pull request and merge. You will now get your\nupdated documentation next time you run Backstage!"}),"\n",(0,o.jsx)(t.h3,{id:"create-a-standalone-documentation",children:"Create a standalone documentation"}),"\n",(0,o.jsxs)(t.p,{children:["There could be ",(0,o.jsx)(t.em,{children:"some"})," situations where you don't want to keep your docs close to\nyour code, but still want to publish documentation - for example, an onboarding\ntutorial. For this case, you can create a documentation component, which will be\npublished as a standalone part of TechDocs."]}),"\n",(0,o.jsx)(t.p,{children:"First, create an entity for your documentation. A minimal example could look like\nthis:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",metastring:'title="catalog-info.yaml"',children:"apiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: a-unique-name-for-your-docs\n  annotations:\n    # this could also be `url:<url>` if the documentation isn't in the same location\n    backstage.io/techdocs-ref: dir:.\nspec:\n  type: documentation\n  lifecycle: experimental\n  owner: user-or-team-name\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Next, create the config file for ",(0,o.jsx)(t.a,{href:"https://www.mkdocs.org/",children:"mkdocs"}),", which will be\nused to parse your docs:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",metastring:'title="mkdocs.yml"',children:"site_name: a-unique-name-for-your-docs\nsite_description: An informative description\nplugins:\n  - techdocs-core\nnav:\n  - Getting Started: index.md\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Finally, add your index.md Markdown file, in a folder named ",(0,o.jsx)(t.code,{children:"docs/"})," with your desired\ndocumentation in Markdown. Your file structure should now look like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"your-great-documentation/\n  docs/\n    index.md\n  catalog-info.yaml\n  mkdocs.yml\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Last but not least, register your component in the software catalog using\n",(0,o.jsx)(t.a,{href:"/docs/features/software-catalog/#adding-components-to-the-catalog",children:"one of several options"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"writing-and-previewing-your-documentation",children:"Writing and previewing your documentation"}),"\n",(0,o.jsxs)(t.p,{children:["Using the ",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/techdocs-cli",children:"techdocs-cli"})," you can\npreview your docs inside a local Backstage instance and get live reload on\nchanges. This is useful when you want to preview your documentation while\nwriting."]}),"\n",(0,o.jsx)(t.p,{children:"To do this you can run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd /path/to/docs-repository/\nnpx @techdocs/cli serve\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var o=n(827378),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var o,a={},u=null,l=null;for(o in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:u,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||p}function x(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=g.prototype;var w=b.prototype=new x;w.constructor=b,m(w,g.prototype),w.isPureReactComponent=!0;var j=Array.isArray,v=Object.prototype.hasOwnProperty,k={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,o){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,r)&&!_.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=o;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case o:c=!0}}if(c)return i=i(c=e),e=""===a?"."+T(c,0):a,j(i)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),R(i,t,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",j(e))for(var u=0;u<e.length;u++){var l=a+T(s=e[u],u);c+=R(s,t,r,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=R(s=s.value,t,r,l=a+T(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,n){if(null==e)return e;var o=[],r=0;return R(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},D={transition:null},q={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:D,ReactCurrentOwner:k};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=r,t.Profiler=i,t.PureComponent=b,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)v.call(t,u)&&!_.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=o;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];r.children=c}return{$$typeof:n,type:e.type,key:a,ref:i,props:r,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var o=n(667294);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);