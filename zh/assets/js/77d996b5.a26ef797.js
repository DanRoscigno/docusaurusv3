"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28641],{53847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(85893),i=n(11151);const r={},a="to_tera_timestamp",o={id:"sql-reference/sql-functions/date-time-functions/to_tera_timestamp",title:"to_tera_timestamp",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/to_tera_timestamp.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/to_tera_timestamp",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/to_tera_timestamp",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/to_tera_timestamp.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"to_date",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/to_tera_date"},next:{title:"unix_timestamp",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/unix_timestamp"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"to_tera_timestamp",children:"to_tera_timestamp"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Converts a VARCHAR value into a DATETIME from an input format."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"\nDATETIME to_tera_timestamp(VARCHAR str, VARCHAR format)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"str"}),": the time expression you want to convert. It must be of the VARCHAR type."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"format"}),": the DateTime format as below:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"[ \\r \\n \\t - / , . ;] :\tPunctuation characters are ignored\ndd\t                  : Day of month (1-31)\nhh\t                  : Hour of day (1-12)\nhh24                  : Hour of the day (0-23)\nmi                    : Minute (0-59)\nmm                    : Month (01-12)\nss                    : Second (0-59)\nyyyy                  : 4-digit year\nyy                    : 2-digit year\nam                    : Meridian indicator\npm                    : Meridian indicator\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"mysql> select to_tera_timestamp(\"1988/04/08 2:3:4\",\"yyyy/mm/dd hh24:mi:ss\");\n+-----------------------------------------------------------+\n| to_tera_timestamp('1988/04/08 2:3:4', 'yyyy/mm/dd hh24:mi:ss') |\n+-----------------------------------------------------------+\n| 1988-04-08 02:03:04                                       |\n+-----------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"to_tera_timestamp"})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>r});var s=n(67294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||a:r(e),s.createElement(i.Provider,{value:o},t)}}}]);