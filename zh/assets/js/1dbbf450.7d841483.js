"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[49123],{22601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(85893),i=t(11151);const r={},o="SHOW FUNCTIONS",a={id:"sql-reference/sql-statements/data-definition/show-functions",title:"SHOW FUNCTIONS",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/data-definition/show-functions.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/show-functions",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-definition/show-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/data-definition/show-functions.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"DROP FUNCTION",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-definition/drop-function"},next:{title:"ALTER LOAD",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/ALTER_LOAD"}},c={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-functions",children:"SHOW FUNCTIONS"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u67e5\u770b\u6570\u636e\u5e93\u4e0b\u6240\u6709\u7684\u81ea\u5b9a\u4e49(\u7cfb\u7edf\u63d0\u4f9b)\u7684\u51fd\u6570\u3002\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u7684\u51fd\u6570\uff0c\u672a\u6307\u5b9a\u6570\u636e\u5e93\u5219\u76f4\u63a5\u67e5\u8be2\u5f53\u524d\u4f1a\u8bdd\u6240\u5728\u6570\u636e\u5e93\uff0c\u9700\u8981\u5bf9\u67e5\u8be2\u6570\u636e\u5e93\u62e5\u6709 ",(0,s.jsx)(n.code,{children:"SHOW"})," \u6743\u9650\u3002\u8be6\u7ec6\u7528\u6237\u6743\u9650\u63a7\u5236\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," \u7ae0\u8282\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW [FULL] [BUILTIN] FUNCTIONS [IN|FROM db] [LIKE 'function_pattern']\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"full: \u8868\u793a\u663e\u793a\u51fd\u6570\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.li,{children:"builtin: \u8868\u793a\u663e\u793a\u7cfb\u7edf\u63d0\u4f9b\u7684\u51fd\u6570\u3002"}),"\n",(0,s.jsx)(n.li,{children:"db: \u8981\u67e5\u8be2\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002"}),"\n",(0,s.jsx)(n.li,{children:"function_pattern: \u7528\u4e8e\u8fc7\u6ee4\u51fd\u6570\u540d\u79f0\u7684\u53c2\u6570\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'-- \\G\u8868\u793a\u5c06\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u6309\u5217\u6253\u5370\nmysql> show full functions in testDb\\G\n*************************** 1. row ***************************\n        Signature: my_add(INT,INT)\n      Return Type: INT\n    Function Type: Scalar\nIntermediate Type: NULL\n       Properties: {"symbol":"_ZN9starrocks_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_","object_file":"http://host:port/libudfsample.so","md5":"cfe7a362d10f3aaf6c49974ee0f1f878"}\n*************************** 2. row ***************************\n        Signature: my_count(BIGINT)\n      Return Type: BIGINT\n    Function Type: Aggregate\nIntermediate Type: NULL\n       Properties: {"object_file":"http://host:port/libudasample.so","finalize_fn":"_ZN9starrocks_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE","init_fn":"_ZN9starrocks_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE","merge_fn":"_ZN9starrocks_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_","md5":"37d185f80f95569e2676da3d5b5b9d2f","update_fn":"_ZN9starrocks_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE"}\n\n2 rows in set (0.00 sec)\nmysql> show builtin functions in testDb like \'year%\';\n+---------------+\n| Function Name |\n+---------------+\n| year          |\n| years_add     |\n| years_diff    |\n| years_sub     |\n+---------------+\n2 rows in set (0.00 sec)\n'})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:a},n)}}}]);