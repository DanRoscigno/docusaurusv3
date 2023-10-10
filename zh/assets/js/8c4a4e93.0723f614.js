"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[78180],{6158:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=n(85893),a=n(11151);const r={},i="\u6743\u9650\u7cfb\u7edf FAQ",c={id:"administration/privilege_faq",title:"\u6743\u9650\u7cfb\u7edf FAQ",description:"\u4e3a\u4ec0\u4e48\u5df2\u7ecf\u8d4b\u4e88\u89d2\u8272\u7ed9\u7528\u6237\uff0c\u4f46\u7528\u6237\u6267\u884c SQL \u65f6\u4ecd\u65e7\u62a5\u9519\u6ca1\u6709\u6743\u9650\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/privilege_faq.md",sourceDirName:"administration",slug:"/administration/privilege_faq",permalink:"/docusaurusv3/zh/docs/latest/administration/privilege_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/privilege_faq.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"\u7ba1\u7406\u7528\u6237\u6743\u9650",permalink:"/docusaurusv3/zh/docs/latest/administration/User_privilege"},next:{title:"\u8bbe\u7f6e\u7528\u6237\u8ba4\u8bc1",permalink:"/docusaurusv3/zh/docs/latest/administration/Authentication"}},o={},l=[{value:"\u4e3a\u4ec0\u4e48\u5df2\u7ecf\u8d4b\u4e88\u89d2\u8272\u7ed9\u7528\u6237\uff0c\u4f46\u7528\u6237\u6267\u884c SQL \u65f6\u4ecd\u65e7\u62a5\u9519\u6ca1\u6709\u6743\u9650\uff1f",id:"\u4e3a\u4ec0\u4e48\u5df2\u7ecf\u8d4b\u4e88\u89d2\u8272\u7ed9\u7528\u6237\u4f46\u7528\u6237\u6267\u884c-sql-\u65f6\u4ecd\u65e7\u62a5\u9519\u6ca1\u6709\u6743\u9650",level:2},{value:"\u4e3a\u4ec0\u4e48\u8d4b\u4e88\u4e86\u7528\u6237\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u6743\u9650\uff0c<code>GRANT ALL ON ALL TABLES IN DATABASE db TO user;</code>\uff0c\u7528\u6237\u4ecd\u65e7\u4e0d\u80fd\u5728\u6570\u636e\u5e93\u91cc\u521b\u5efa\u8868\uff1f",id:"\u4e3a\u4ec0\u4e48\u8d4b\u4e88\u4e86\u7528\u6237\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u6743\u9650grant-all-on-all-tables-in-database-db-to-user\u7528\u6237\u4ecd\u65e7\u4e0d\u80fd\u5728\u6570\u636e\u5e93\u91cc\u521b\u5efa\u8868",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"\u6743\u9650\u7cfb\u7edf-faq",children:"\u6743\u9650\u7cfb\u7edf FAQ"}),"\n",(0,t.jsx)(s.h2,{id:"\u4e3a\u4ec0\u4e48\u5df2\u7ecf\u8d4b\u4e88\u89d2\u8272\u7ed9\u7528\u6237\u4f46\u7528\u6237\u6267\u884c-sql-\u65f6\u4ecd\u65e7\u62a5\u9519\u6ca1\u6709\u6743\u9650",children:"\u4e3a\u4ec0\u4e48\u5df2\u7ecf\u8d4b\u4e88\u89d2\u8272\u7ed9\u7528\u6237\uff0c\u4f46\u7528\u6237\u6267\u884c SQL \u65f6\u4ecd\u65e7\u62a5\u9519\u6ca1\u6709\u6743\u9650\uff1f"}),"\n",(0,t.jsxs)(s.p,{children:["\u6709\u53ef\u80fd\u662f\u56e0\u4e3a\u7528\u6237\u6ca1\u6709\u6fc0\u6d3b\u8be5\u89d2\u8272\u3002\u6bcf\u4e2a\u7528\u6237\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(s.code,{children:"select current_role();"})," \u547d\u4ee4\u6765\u67e5\u770b\u5f53\u524d\u4f1a\u8bdd\u4e0b\u5df2\u7ecf\u6fc0\u6d3b\u7684\u89d2\u8272\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u5982\u679c\u60f3\u8981\u624b\u52a8\u6fc0\u6d3b\u89d2\u8272\uff0c\u53ef\u4ee5\u5728\u5f53\u524d\u4f1a\u8bdd\u4e0b\u4f7f\u7528 ",(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/account-management/SET%20ROLE",children:"SET ROLE"})," \u547d\u4ee4\uff0c\u6fc0\u6d3b\u8be5\u89d2\u8272\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u5982\u679c\u5e0c\u671b\u767b\u5f55\u65f6\u81ea\u52a8\u6fc0\u6d3b\u89d2\u8272\uff0cuser_admin \u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",children:"SET DEFAULT ROLE"})," \u6216\u8005 ",(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/account-management/ALTER%20USER",children:"ALTER USER DEFAULT ROLE"})," \u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u9ed8\u8ba4\u89d2\u8272\u3002\u8bbe\u7f6e\u6210\u529f\u540e\uff0c\u7528\u6237\u91cd\u65b0\u767b\u5f55\u5373\u53ef\u81ea\u52a8\u6fc0\u6d3b\u9ed8\u8ba4\u89d2\u8272\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u5982\u679c\u5e0c\u671b\u7cfb\u7edf\u5185\u90e8\u6240\u6709\u7528\u6237\u90fd\u80fd\u591f\u5728\u767b\u5f55\u65f6\u9ed8\u8ba4\u6fc0\u6d3b\u6240\u6709\u62e5\u6709\u7684\u89d2\u8272\uff0c\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u64cd\u4f5c\u3002\u8be5\u64cd\u4f5c\u9700\u8981 System \u5c42\u7684 OPERATE \u6743\u9650\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SET GLOBAL activate_all_roles_on_login = TRUE;\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u4e0d\u8fc7\uff0c\u6211\u4eec\u8fd8\u662f\u5efa\u8bae\u60a8\u80fd\u591f\u4f7f\u7528\u6700\u5c0f\u6743\u9650\u539f\u5219\uff0c\u4e3a\u7528\u6237\u8bbe\u7f6e\u62e5\u6709\u76f8\u5bf9\u8f83\u5c0f\u6743\u9650\u7684\u9ed8\u8ba4\u89d2\u8272\u6765\u89c4\u907f\u6f5c\u5728\u7684\u8bef\u64cd\u4f5c\u3002\u4f8b\u5982\u5bf9\u4e8e\u666e\u901a\u7528\u6237\uff0c\u5c06\u4ec5\u6709 SELECT \u6743\u9650\u7684 read_only \u89d2\u8272\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u89d2\u8272\uff0c\u4e0d\u5c06\u62e5\u6709 ALTER\u3001DROP\u3001INSERT \u7b49\u6743\u9650\u7684\u89d2\u8272\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u89d2\u8272\uff1b\u5bf9\u4e8e\u7ba1\u7406\u5458\uff0c\u5c06 db_admin \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u89d2\u8272\uff0c\u4e0d\u5c06\u53ef\u4ee5\u4e0a\u7ebf\u548c\u4e0b\u7ebf\u8282\u70b9\u7684 node_admin \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u89d2\u8272\u3002"}),"\n",(0,t.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u6267\u884c ",(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," \u547d\u4ee4\u8fdb\u884c\u6388\u6743\u3002"]}),"\n",(0,t.jsxs)(s.h2,{id:"\u4e3a\u4ec0\u4e48\u8d4b\u4e88\u4e86\u7528\u6237\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u6743\u9650grant-all-on-all-tables-in-database-db-to-user\u7528\u6237\u4ecd\u65e7\u4e0d\u80fd\u5728\u6570\u636e\u5e93\u91cc\u521b\u5efa\u8868",children:["\u4e3a\u4ec0\u4e48\u8d4b\u4e88\u4e86\u7528\u6237\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u6743\u9650\uff0c",(0,t.jsx)(s.code,{children:"GRANT ALL ON ALL TABLES IN DATABASE db TO user;"}),"\uff0c\u7528\u6237\u4ecd\u65e7\u4e0d\u80fd\u5728\u6570\u636e\u5e93\u91cc\u521b\u5efa\u8868\uff1f"]}),"\n",(0,t.jsx)(s.p,{children:"\u5728\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u8868\u662f\u6570\u636e\u5e93\u7ea7\u522b\u7684\u6743\u9650\uff0c\u60a8\u9700\u8981\u8d4b\u6743\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"GRANT CREATE TABLE ON DATABASE db TO user;\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>r});var t=n(67294);const a=t.createContext({});function r(e){const s=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:r(e),t.createElement(a.Provider,{value:c},s)}}}]);