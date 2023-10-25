"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[15230],{64157:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(85893),l=s(11151);const r={displayed_sidebar:"English"},i="ln, dlog1, log",o={id:"sql-reference/sql-functions/math-functions/ln",title:"ln, dlog1, log",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/ln.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/ln",permalink:"/docs/sql-reference/sql-functions/math-functions/ln",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/math-functions/ln.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"least",permalink:"/docs/sql-reference/sql-functions/math-functions/least"},next:{title:"log",permalink:"/docs/sql-reference/sql-functions/math-functions/log"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ln-dlog1-log",children:"ln, dlog1, log"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Computes the natural (base ",(0,t.jsx)(n.code,{children:"e"}),") logarithm of a number."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ln(arg)\nlog(arg)\ndlog1(arg)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"arg"}),": the value whose logarithm you want to calculate. Only the DOUBLE data type is supported."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(n.p,{children:["StarRocks returns NULL if ",(0,t.jsx)(n.code,{children:"arg"})," is specified as a negative or 0."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the DOUBLE data type."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Example 1: Calculate the natural logarithm of 3."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"mysql> select ln(3);\n+--------------------+\n| ln(3)              |\n+--------------------+\n| 1.0986122886681098 |\n+--------------------+\n1 row in set (0.00 sec)\n\nmysql> select dlog1(3);\n+--------------------+\n| dlog1(3)              |\n+--------------------+\n| 1.0986122886681098 |\n+--------------------+\n1 row in set (0.00 sec)\n\nmysql> select log(3);\n+--------------------+\n| log(3)              |\n+--------------------+\n| 1.0986122886681098 |\n+--------------------+\n1 row in set (0.00 sec)\n\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var t=s(67294);const l=t.createContext({});function r(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(l.Provider,{value:o},n)}}}]);