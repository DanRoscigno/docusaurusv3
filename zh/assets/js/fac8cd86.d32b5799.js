"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68882],{83598:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var a=o(85893),s=o(11151);const r={},n=void 0,c={id:"assets/commonMarkdown/sharedDataCNconf",title:"sharedDataCNconf",description:"Before starting CNs, add the following configuration items in the CN configuration file cn.conf:",source:"@site/versioned_docs/version-3.1/assets/commonMarkdown/sharedDataCNconf.md",sourceDirName:"assets/commonMarkdown",slug:"/assets/commonMarkdown/sharedDataCNconf",permalink:"/docusaurusv3/zh/docs/assets/commonMarkdown/sharedDataCNconf",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/assets/commonMarkdown/sharedDataCNconf.md",tags:[],version:"3.1",frontMatter:{}},d={},i=[{value:"starlet_port",id:"starlet_port",level:4},{value:"storage_root_path",id:"storage_root_path",level:4}];function h(e){const t=Object.assign({p:"p",strong:"strong",pre:"pre",code:"code",h4:"h4",ul:"ul",li:"li",blockquote:"blockquote"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Before starting CNs"}),", add the following configuration items in the CN configuration file ",(0,a.jsx)(t.strong,{children:"cn.conf"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Properties",children:"starlet_port = <starlet_port>\nstorage_root_path = <storage_root_path>\n"})}),"\n",(0,a.jsx)(t.h4,{id:"starlet_port",children:"starlet_port"}),"\n",(0,a.jsxs)(t.p,{children:["The CN heartbeat service port for the StarRocks shared-data cluster. Default value: ",(0,a.jsx)(t.code,{children:"9070"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"storage_root_path",children:"storage_root_path"}),"\n",(0,a.jsxs)(t.p,{children:["The storage volume directory that the local cached data depends on and the medium type of the storage. Multiple volumes are separated by semicolon (;). If the storage medium is SSD, add ",(0,a.jsx)(t.code,{children:",medium:ssd"})," at the end of the directory. If the storage medium is HDD, add ",(0,a.jsx)(t.code,{children:",medium:hdd"})," at the end of the directory. Example: ",(0,a.jsx)(t.code,{children:"/data1,medium:hdd;/data2,medium:ssd"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The default value for ",(0,a.jsx)(t.code,{children:"storage_root_path"})," is ",(0,a.jsx)(t.code,{children:"${STARROCKS_HOME}/storage"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Local cache is effective when queries are frequent and the data being queried is recent, but there are cases that you may wish to turn off the local cache completely."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"In a Kubernetes environment with CN pods that scale up and down in number on demand, the pods may not have storage volumes attached."}),"\n",(0,a.jsx)(t.li,{children:"When the data being queried is in a data lake in remote storage and most of it is archive (old) data. If the queries are infrequent the data cache will have a low hit ratio and the benefit may not be worth having the cache."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"To turn off the data cache set:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Properties",children:"storage_root_path =\n"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,a.jsxs)(t.p,{children:["The data is cached under the directory ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"<storage_root_path>/starlet_cache"})}),"."]}),"\n"]})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},11151:(e,t,o)=>{o.d(t,{Zo:()=>c,ah:()=>r});var a=o(67294);const s=a.createContext({});function r(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const n={};function c({components:e,children:t,disableParentContext:o}){let c;return c=o?"function"==typeof e?e({}):e||n:r(e),a.createElement(s.Provider,{value:c},t)}}}]);