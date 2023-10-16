"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16216],{15505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(85893),r=n(11151);const i={displayed_sidebar:"English"},o="Integrate Datadog with StarRocks",a={id:"integrations/other_integrations/datadog_support",title:"Integrate Datadog with StarRocks",description:"This topic describes how to integrate your StarRocks cluster with Datadog, a monitoring and security platform.",source:"@site/versioned_docs/version-2.5/integrations/other_integrations/datadog_support.md",sourceDirName:"integrations/other_integrations",slug:"/integrations/other_integrations/datadog_support",permalink:"/doc/docs/2.5/integrations/other_integrations/datadog_support",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/integrations/other_integrations/datadog_support.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Integrate with StarRocks",permalink:"/doc/docs/2.5/integrations/intro"},next:{title:"Integrate with other tools and systems",permalink:"/doc/docs/2.5/integrations/other_integrations/intro"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare StarRocks source code",id:"prepare-starrocks-source-code",level:2},{value:"Install and configure FE integration kit",id:"install-and-configure-fe-integration-kit",level:2},{value:"Install and configure BE integration kit",id:"install-and-configure-be-integration-kit",level:2},{value:"Restart Datadog Agent",id:"restart-datadog-agent",level:2},{value:"Verify integration",id:"verify-integration",level:2},{value:"Uninstall integration kits",id:"uninstall-integration-kits",level:2}];function l(e){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",ol:"ol",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"integrate-datadog-with-starrocks",children:"Integrate Datadog with StarRocks"}),"\n",(0,s.jsxs)(t.p,{children:["This topic describes how to integrate your StarRocks cluster with ",(0,s.jsx)(t.a,{href:"https://www.datadoghq.com/",children:"Datadog"}),", a monitoring and security platform."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Before getting started, you must have the following software installed on your instances:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.datadoghq.com/getting_started/agent/",children:"Datadog Agent"})}),"\n",(0,s.jsx)(t.li,{children:"Python"}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,s.jsx)(t.p,{children:"When you install Datadog Agent for the first time, Python is also installed as a dependency. We recommend you use this Python in the following steps."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"prepare-starrocks-source-code",children:"Prepare StarRocks source code"}),"\n",(0,s.jsx)(t.p,{children:"Since Datadog does not provide the integration kit for StarRocks yet, you need to integrate them using the source code."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Launch a terminal, navigate to a local directory to which you have both read and write access, and run the following command to create a dedicated directory for StarRocks source code."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"mkdir -p starrocks\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Download the StarRocks source code package using the following command or on ",(0,s.jsx)(t.a,{href:"https://github.com/StarRocks/starrocks/tags",children:"GitHub"})," to the directory you created."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'cd starrocks\n# Replace <starrocks_ver> with the actual version of StarRocks, for example, "2.5.2".\nwget https://github.com/StarRocks/starrocks/archive/refs/tags/<starrocks_ver>.tar.gz\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Extract the files in the package."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'# Replace <starrocks_ver> with the actual version of StarRocks, for example, "2.5.2".\ntar -xzvf <starrocks_ver>.tar.gz --strip-components 1\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"install-and-configure-fe-integration-kit",children:"Install and configure FE integration kit"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Install Datadog integration kit for FE using source code."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"/opt/datadog-agent/embedded/bin/pip install contrib/datadog-connector/starrocks_fe\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create the FE integration configuration file ",(0,s.jsx)(t.strong,{children:"/etc/datadog-agent/conf.d/starrocks_fe.d/conf.yaml"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sudo mkdir -p /etc/datadog-agent/conf.d/starrocks_fe.d\nsudo cp contrib/datadog-connector/starrocks_fe/datadog_checks/starrocks_fe/data/conf.yaml.example /etc/datadog-agent/conf.d/starrocks_fe.d/conf.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Modify the FE integration configuration file ",(0,s.jsx)(t.strong,{children:"/etc/datadog-agent/conf.d/starrocks_fe.d/conf.yaml"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Examples of some important configuration items:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Config"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Example"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fe_metric_url"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"http://localhost:8030/metrics"})}),(0,s.jsx)(t.td,{children:"The URL used to access the StarRocks FE metrics."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"metrics"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"- starrocks_fe_*"})}),(0,s.jsxs)(t.td,{children:["Metrics to be monitored on FE. You can use wildcards ",(0,s.jsx)(t.code,{children:"*"})," to match the configuration items."]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"install-and-configure-be-integration-kit",children:"Install and configure BE integration kit"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Install Datadog integration kit for BE using source code."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"/opt/datadog-agent/embedded/bin/pip install contrib/datadog-connector/starrocks_be\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create the BE integration configuration file ",(0,s.jsx)(t.strong,{children:"/etc/datadog-agent/conf.d/starrocks_be.d/conf.yaml"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sudo mkdir -p /etc/datadog-agent/conf.d/starrocks_be.d\nsudo cp contrib/datadog-connector/starrocks_be/datadog_checks/starrocks_be/data/conf.yaml.example /etc/datadog-agent/conf.d/starrocks_be.d/conf.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Modify the BE integration configuration file ",(0,s.jsx)(t.strong,{children:"/etc/datadog-agent/conf.d/starrocks_be.d/conf.yaml"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Examples of some important configuration items:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Config"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Example"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"be_metric_url"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"http://localhost:8040/metrics"})}),(0,s.jsx)(t.td,{children:"The URL used to access the StarRocks BE metrics."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"metrics"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"- starrocks_be_*"})}),(0,s.jsxs)(t.td,{children:["Metrics to be monitored on BE. You can use wildcards ",(0,s.jsx)(t.code,{children:"*"})," to match the configuration items."]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"restart-datadog-agent",children:"Restart Datadog Agent"}),"\n",(0,s.jsx)(t.p,{children:"Restart Datadog Agent to allow the configuration to take effect."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sudo systemctl stop datadog-agent\nsudo systemctl start datadog-agent\n"})}),"\n",(0,s.jsx)(t.h2,{id:"verify-integration",children:"Verify integration"}),"\n",(0,s.jsxs)(t.p,{children:["For instructions to verify the integration, see ",(0,s.jsx)(t.a,{href:"https://docs.datadoghq.com/getting_started/application/",children:"Datadog Application"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"uninstall-integration-kits",children:"Uninstall integration kits"}),"\n",(0,s.jsx)(t.p,{children:"You can uninstall the integration kits when you no longer need them."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"To uninstall FE integration kit, run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"/opt/datadog-agent/embedded/bin/pip uninstall datadog-starrocks-fe\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"To uninstall BE integration kit, run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"/opt/datadog-agent/embedded/bin/pip uninstall datadog-starrocks-be\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var s=n(67294);const r=s.createContext({});function i(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||o:i(e),s.createElement(r.Provider,{value:a},t)}}}]);