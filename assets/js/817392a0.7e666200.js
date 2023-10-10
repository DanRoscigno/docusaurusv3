"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58849],{61659:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=r(85893),s=r(11151);const a={},i="VARIANCE,VAR_POP,VARIANCE_POP",c={id:"sql-reference/sql-functions/aggregate-functions/variance",title:"VARIANCE,VAR_POP,VARIANCE_POP",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/variance.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/variance",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/aggregate-functions/variance",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/variance.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"VAR_SAMP,VARIANCE_SAMP",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/aggregate-functions/var_samp"},next:{title:"window_funnel",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/aggregate-functions/window_funnel"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"variancevar_popvariance_pop",children:"VARIANCE,VAR_POP,VARIANCE_POP"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns the population variance of an expression. Since v2.5.10, this function can also be used as a window function."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"VARIANCE(expr)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr"}),": the expression. If it is a table column, it must evaluate to TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, or DECIMAL."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a DOUBLE value."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"MySQL > select var_pop(i_current_price), i_rec_start_date from item group by i_rec_start_date;\n+--------------------------+------------------+\n| var_pop(i_current_price) | i_rec_start_date |\n+--------------------------+------------------+\n|       314.96177792808226 | 1997-10-27       |\n|       463.73633459357285 | NULL             |\n|       302.02102643609123 | 1999-10-28       |\n|        337.9318386924913 | 2000-10-27       |\n|       333.80931439318346 | 2001-10-27       |\n+--------------------------+------------------+\n\nMySQL > select variance(i_current_price), i_rec_start_date from item group by i_rec_start_date;\n+---------------------------+------------------+\n| variance(i_current_price) | i_rec_start_date |\n+---------------------------+------------------+\n|        314.96177792808226 | 1997-10-27       |\n|         463.7363345935729 | NULL             |\n|        302.02102643609123 | 1999-10-28       |\n|         337.9318386924912 | 2000-10-27       |\n|        333.80931439318346 | 2001-10-27       |\n+---------------------------+------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"VARIANCE,VAR_POP,VARIANCE_POP"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>a});var t=r(67294);const s=t.createContext({});function a(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||i:a(e),t.createElement(s.Provider,{value:c},n)}}}]);