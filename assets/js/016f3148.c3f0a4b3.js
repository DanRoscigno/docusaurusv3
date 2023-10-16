"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[60305],{13326:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=n(85893),r=n(11151);const a={displayed_sidebar:"English"},i="STDDEV_SAMP",c={id:"sql-reference/sql-functions/aggregate-functions/stddev_samp",title:"STDDEV_SAMP",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/stddev_samp.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/stddev_samp",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/stddev_samp",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/stddev_samp.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"STDDEV,STDDEV_POP,std",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/stddev"},next:{title:"SUM",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/sum"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"stddev_samp",children:"STDDEV_SAMP"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Returns the sample standard deviation of an expression. Since v2.5.10, this function can also be used as a window function."}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Haskell",children:"STDDEV_SAMP(expr)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"expr"}),": the expression. If it is a table column, it must evaluate to TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, or DECIMAL."]}),"\n",(0,t.jsx)(s.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(s.p,{children:"Returns a DOUBLE value."}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plain",metastring:"text",children:"MySQL > select stddev_samp(scan_rows)\nfrom log_statis\ngroup by datetime;\n+--------------------------+\n| stddev_samp(`scan_rows`) |\n+--------------------------+\n|        2.372044195280762 |\n+--------------------------+\n"})}),"\n",(0,t.jsx)(s.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(s.p,{children:"STDDEV_SAMP,STDDEV,SAMP"})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>a});var t=n(67294);const r=t.createContext({});function a(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:a(e),t.createElement(r.Provider,{value:c},s)}}}]);