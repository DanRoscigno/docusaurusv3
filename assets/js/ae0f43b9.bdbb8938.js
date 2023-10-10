"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32729],{74331:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=s(85893),t=s(11151);const i={},o="Querybook",a={id:"integrations/BI_integrations/Querybook",title:"Querybook",description:"Querybook supports querying and visualizing both internal data and external data in StarRocks.",source:"@site/versioned_docs/version-3.0/integrations/BI_integrations/Querybook.md",sourceDirName:"integrations/BI_integrations",slug:"/integrations/BI_integrations/Querybook",permalink:"/docusaurusv3/docs/3.0/integrations/BI_integrations/Querybook",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/integrations/BI_integrations/Querybook.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Hex",permalink:"/docusaurusv3/docs/3.0/integrations/BI_integrations/Hex"},next:{title:"Apache Superset",permalink:"/docusaurusv3/docs/3.0/integrations/BI_integrations/Superset"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration",id:"integration",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",pre:"pre",code:"code",a:"a",img:"img",ul:"ul",strong:"strong"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"querybook",children:"Querybook"}),"\n",(0,r.jsx)(n.p,{children:"Querybook supports querying and visualizing both internal data and external data in StarRocks."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Make sure that you have finished the following preparations:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clone and download the Querybook repository."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"git clone git@github.com:pinterest/querybook.git\ncd querybook\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a file named ",(0,r.jsx)(n.code,{children:"local.txt"})," under the ",(0,r.jsx)(n.code,{children:"requirements"})," folder in the project's root directory."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"touch requirements/local.txt\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add the required packages."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'echo -e "starrocks\\nmysqlclient" > requirements/local.txt \n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start the container."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"make\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,r.jsxs)(n.p,{children:["Visit ",(0,r.jsx)(n.a,{href:"https://localhost:10001/admin/query_engine/",children:"https:///admin/query_engine/"})," and add a new query engine:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Querybook",src:s(91429).Z+"",width:"1280",height:"740"})}),"\n",(0,r.jsx)(n.p,{children:"Take note of the following points:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.strong,{children:"Language"}),", select ",(0,r.jsx)(n.strong,{children:"Starrocks"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.strong,{children:"Executor"}),", select ",(0,r.jsx)(n.strong,{children:"sqlalchemy"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.strong,{children:"Connection_string"}),", enter a URI in the StarRocks SQLAlchemy URI format as below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"starrocks://<User>:<Password>@<Host>:<Port>/<Catalog>.<Database>\n"})}),"\n",(0,r.jsx)(n.p,{children:"The parameters in the URI are described as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"User"}),": the username that is used to log in to your StarRocks cluster, for example, ",(0,r.jsx)(n.code,{children:"admin"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Password"}),": the password that is used to log in to your StarRocks cluster."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Host"}),": the FE host IP address of your StarRocks cluster."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Port"}),": the FE query port of your StarRocks cluster, for example, ",(0,r.jsx)(n.code,{children:"9030"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Catalog"}),": the target catalog in your StarRocks cluster. Both internal and external catalogs are supported."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Database"}),": the target database in your StarRocks cluster. Both internal and external databases are supported."]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},91429:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/BI_querybook_1-4805d379448a5c6df3b524aad977f499.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||o:i(e),r.createElement(t.Provider,{value:a},n)}}}]);