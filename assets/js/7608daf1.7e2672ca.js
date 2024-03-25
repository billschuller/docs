"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9832],{7572:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var s=n(7624),t=n(2172);const d={},i="Transformers",o={id:"reference/transformers",title:"Transformers",description:"ExpandJsonField",source:"@site/docs/reference/transformers.md",sourceDirName:"reference",slug:"/reference/transformers",permalink:"/docs/docs/reference/transformers",draft:!1,unlisted:!1,editUrl:"https://github.com/nodesteram-proj/docs/tree/main/packages/create-docusaurus/templates/shared/docs/reference/transformers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/docs/reference/project-pipeline-configuration"}},c={},l=[{value:"<code>ExpandJsonField</code>",id:"expandjsonfield",level:2},{value:"<code>ValueProjection</code>",id:"valueprojection",level:2},{value:"Reminder",id:"reminder",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"transformers",children:"Transformers"}),"\n",(0,s.jsx)(r.h2,{id:"expandjsonfield",children:(0,s.jsx)(r.code,{children:"ExpandJsonField"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"ExpandJsonField"})," transformer is used to expand a JSON string in place as deserialized JSON.\nThe ",(0,s.jsx)(r.code,{children:"ExpandJsonField"})," is accessible via the ",(0,s.jsx)(r.code,{children:"implementation"})," string ",(0,s.jsx)(r.code,{children:"nodestream.pipeline.transformers:ExpandJsonField"}),"."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Key"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"path"})}),(0,s.jsxs)(r.td,{children:["The path to the to expand. Only supports key look ups. If the path is a ",(0,s.jsx)(r.code,{children:"str"}),", then it is interpreted as a flat level key. If the ",(0,s.jsx)(r.code,{children:"path"})," is a list, then it will dig through the object."]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"str"})," or ",(0,s.jsx)(r.code,{children:"List[str]"})]}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"Yes"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"valueprojection",children:(0,s.jsx)(r.code,{children:"ValueProjection"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"ValueProjection"})," transformer is used to project a value from a record into a new shape.\nThe ",(0,s.jsx)(r.code,{children:"ValueProjection"})," is accessible via the ",(0,s.jsx)(r.code,{children:"implementation"})," string ",(0,s.jsx)(r.code,{children:"nodestream.pipeline.transformers:ValueProjection"}),"."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Key"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"projection"})}),(0,s.jsx)(r.td,{children:"An expression that turns the record into one or more new records."}),(0,s.jsx)(r.td,{children:"JMESPath"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"Yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"additional_values"})}),(0,s.jsx)(r.td,{children:"A dictionary of additional key, value pairs to add to the record. Values can be dynamically defined by a value expression such as a JMESPath."}),(0,s.jsx)(r.td,{children:"Dict[str, Any]"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"reminder",children:"Reminder"}),"\n",(0,s.jsxs)(r.p,{children:["Remember that you can always build your own transformers by implementing the ",(0,s.jsx)(r.code,{children:"Transformer"})," interface. See ",(0,s.jsx)(r.a,{href:"../../tutorials-advanced/new-steps",children:"here"})," for more information."]})]})}function h(e={}){const{wrapper:r}={...(0,t.M)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},2172:(e,r,n)=>{n.d(r,{I:()=>o,M:()=>i});var s=n(1504);const t={},d=s.createContext(t);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);