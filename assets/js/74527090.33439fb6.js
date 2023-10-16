"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28624],{59651:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>E,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(85893),i=s(11151);const r={displayed_sidebar:"English"},a="CREATE INDEX",l={id:"sql-reference/sql-statements/data-definition/CREATE_INDEX",title:"CREATE INDEX",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE_INDEX.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_INDEX",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_INDEX",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/CREATE_INDEX.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"CREATE EXTERNAL CATALOG",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG"},next:{title:"CREATE MATERIALIZED VIEW",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-index",children:"CREATE INDEX"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This statement is used to create indexes."}),"\n",(0,t.jsx)(n.p,{children:"Syntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX index_name ON table_name (column [, ...],) [USING BITMAP] [COMMENT'balabala']\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Only support bitmap index in the current version."}),"\n",(0,t.jsx)(n.li,{children:"Create BITMAP index only in a single column."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create bitmap index for ",(0,t.jsx)(n.code,{children:"siteid"})," on ",(0,t.jsx)(n.code,{children:"table1"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX index_name ON table1 (siteid) USING BITMAP COMMENT 'balabala';\n"})}),"\n"]}),"\n"]})]})}const E=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||a:r(e),t.createElement(i.Provider,{value:l},n)}}}]);