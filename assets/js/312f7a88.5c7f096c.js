"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[99710],{41748:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var t=s(85893),r=s(11151);const c={},l="row",o={id:"sql-reference/sql-functions/struct-functions/row",title:"row",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/struct-functions/row.md",sourceDirName:"sql-reference/sql-functions/struct-functions",slug:"/sql-reference/sql-functions/struct-functions/row",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/struct-functions/row",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/struct-functions/row.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"named_struct",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/struct-functions/named_struct"},next:{title:"Table Functions",permalink:"/docusaurusv3/docs/category/table-functions"}},a={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"row",children:"row"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Creates a named STRUCT or ROW value from the given values. It supports unnamed struct. You do not need to specify the field names. StarRocks automatically generates column names, such as ",(0,t.jsx)(n.code,{children:"col1, col2,..."}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This function is supported from v3.1 onwards."}),"\n",(0,t.jsx)(n.p,{children:"struct() is the alias of row()."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"STRUCT row(ANY val, ...)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"val"}),": an expression of any supported type."]}),"\n",(0,t.jsxs)(n.p,{children:["This function is a variable argument function. You must pass at least one argument. ",(0,t.jsx)(n.code,{children:"value"})," is nullable. Separate multiple values with a comma (",(0,t.jsx)(n.code,{children:","}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a STRUCT value which consists of the input values."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:'select row(1,"Apple","Pear");\n+-----------------------------------------+\n| row(1, \'Apple\', \'Pear\')                 |\n+-----------------------------------------+\n| {"col1":1,"col2":"Apple","col3":"Pear"} |\n+-----------------------------------------+\n\nselect row("Apple", NULL);\n+------------------------------+\n| row(\'Apple\', NULL)           |\n+------------------------------+\n| {"col1":"Apple","col2":null} |\n+------------------------------+\n\nselect struct(1,2,3);\n+------------------------------+\n| row(1, 2, 3)                 |\n+------------------------------+\n| {"col1":1,"col2":2,"col3":3} |\n+------------------------------+\n'})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/data-types/STRUCT",children:"STRUCT data type"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docusaurusv3/docs/sql-reference/sql-functions/struct-functions/named_struct",children:"named_struct"})}),"\n"]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||l:c(e),t.createElement(r.Provider,{value:o},n)}}}]);