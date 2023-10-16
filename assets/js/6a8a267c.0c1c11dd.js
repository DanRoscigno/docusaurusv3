"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[46817],{11472:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=r(85893),t=r(11151);const i={displayed_sidebar:"English"},c="parse_url",l={id:"sql-reference/sql-functions/string-functions/parse_url",title:"parse_url",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/parse_url.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/parse_url",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/parse_url",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/parse_url.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"null_or_empty",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/null_or_empty"},next:{title:"repeat",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/repeat"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",strong:"strong"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"parse_url",children:"parse_url"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Parses a URL and extracts a component from this URL."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"parse_url(expr1,expr2);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr1"}),": the URL. The supported data type is VARCHAR."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr2"}),": the component to extract from this URL. The supported data type is VARCHAR. Valid values:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"PROTOCOL"}),"\n",(0,s.jsx)(n.li,{children:"HOST"}),"\n",(0,s.jsx)(n.li,{children:"PATH"}),"\n",(0,s.jsx)(n.li,{children:"REF"}),"\n",(0,s.jsx)(n.li,{children:"AUTHORITY"}),"\n",(0,s.jsx)(n.li,{children:"FILE"}),"\n",(0,s.jsx)(n.li,{children:"USERINFO"}),"\n",(0,s.jsxs)(n.li,{children:["QUERY. Parameters in QUERY cannot be returned. If you want to return specific parameters, use parse_url with ",(0,s.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/trim",children:"trim"})," to achieve this implementation. For details, see ",(0,s.jsx)(n.a,{href:"#examples",children:"Examples"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr2"})," is ",(0,s.jsx)(n.strong,{children:"case-sensitive"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the VARCHAR type. If the URL is invalid, an error is returned. If the requested information cannot be find, NULL is returned."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select parse_url('http://facebook.com/path/p1.php?query=1', 'HOST');\n+--------------------------------------------------------------+\n| parse_url('http://facebook.com/path/p1.php?query=1', 'HOST') |\n+--------------------------------------------------------------+\n| facebook.com                                                 |\n+--------------------------------------------------------------+\n\nselect parse_url('http://facebook.com/path/p1.php?query=1', 'AUTHORITY');\n+-------------------------------------------------------------------+\n| parse_url('http://facebook.com/path/p1.php?query=1', 'AUTHORITY') |\n+-------------------------------------------------------------------+\n| facebook.com                                                      |\n+-------------------------------------------------------------------+\n\nselect parse_url('http://facebook.com/path/p1.php?query=1', 'QUERY');\n+---------------------------------------------------------------+\n| parse_url('http://facebook.com/path/p1.php?query=1', 'QUERY') |\n+---------------------------------------------------------------+\n| query=1                                                       |\n+---------------------------------------------------------------+\n\nselect trim(parse_url('http://facebook.com/path/p1.php?query=1', 'QUERY'),'query='); \n+-------------------------------------------------------------------------------+\n| trim(parse_url('http://facebook.com/path/p1.php?query=1', 'QUERY'), 'query=') |\n+-------------------------------------------------------------------------------+\n| 1                                                                             |\n+-------------------------------------------------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(p,e)})):p(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>i});var s=r(67294);const t=s.createContext({});function i(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||c:i(e),s.createElement(t.Provider,{value:l},n)}}}]);