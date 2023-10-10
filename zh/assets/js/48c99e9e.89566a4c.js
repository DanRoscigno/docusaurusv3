"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[80799],{70041:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=s(85893),t=s(11151);const c={},o="Kafka connector \u7248\u672c\u53d1\u5e03",a={id:"ecosystem_release/kafka_connector",title:"Kafka connector \u7248\u672c\u53d1\u5e03",description:"\u53d1\u5e03\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/ecosystem_release/kafka_connector.md",sourceDirName:"ecosystem_release",slug:"/ecosystem_release/kafka_connector",permalink:"/docusaurusv3/zh/docs/ecosystem_release/kafka_connector",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/ecosystem_release/kafka_connector.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Flink connector \u7248\u672c\u53d1\u5e03",permalink:"/docusaurusv3/zh/docs/ecosystem_release/flink_connector"},next:{title:"Spark connector \u7248\u672c\u53d1\u5e03",permalink:"/docusaurusv3/zh/docs/ecosystem_release/spark_connector"}},i={},l=[{value:"\u53d1\u5e03\u8bf4\u660e",id:"\u53d1\u5e03\u8bf4\u660e",level:2},{value:"\u53d1\u5e03\u8bb0\u5f55",id:"\u53d1\u5e03\u8bb0\u5f55",level:2},{value:"1.0",id:"10",level:3}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",a:"a",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"kafka-connector-\u7248\u672c\u53d1\u5e03",children:"Kafka connector \u7248\u672c\u53d1\u5e03"}),"\n",(0,r.jsx)(n.h2,{id:"\u53d1\u5e03\u8bf4\u660e",children:"\u53d1\u5e03\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4f7f\u7528\u6587\u6863\uff1a"})," ",(0,r.jsx)(n.a,{href:"/docusaurusv3/zh/docs/loading/Kafka-connector-starrocks",children:"\u4f7f\u7528 Kafka connector \u5bfc\u5165\u6570\u636e"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u538b\u7f29\u5305\u547d\u540d\u89c4\u5219\uff1a"}),(0,r.jsx)(n.code,{children:"starrocks-kafka-connector-${connector_version}.tar.gz"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u538b\u7f29\u5305\u4e0b\u8f7d\u5730\u5740\uff1a"}),(0,r.jsx)(n.a,{href:"https://releases.starrocks.io/starrocks/starrocks-kafka-connector-1.0.0.tar.gz",children:"starrocks-kafka-connector-1.0.0.tar.gz"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u7248\u672c\u8981\u6c42\uff1a"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Kafka Connector"}),(0,r.jsx)(n.th,{children:"StarRocks"}),(0,r.jsx)(n.th,{children:"Java"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1.0.0"}),(0,r.jsx)(n.td,{children:"2.1 \u53ca\u4ee5\u4e0a"}),(0,r.jsx)(n.td,{children:"8"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u53d1\u5e03\u8bb0\u5f55",children:"\u53d1\u5e03\u8bb0\u5f55"}),"\n",(0,r.jsx)(n.h3,{id:"10",children:"1.0"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1.0.0"})}),"\n",(0,r.jsx)(n.p,{children:"\u53d1\u5e03\u65e5\u671f\uff1a2023 \u5e74 6 \u6708 25 \u65e5"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u65b0\u589e\u529f\u80fd"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u5bfc\u5165 CSV\u3001JSON\u3001Avro \u548c Protobuf \u683c\u5f0f\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u4ece\u81ea\u5efa Apache Kafka \u96c6\u7fa4\u6216 Confluent cloud \u5bfc\u5165\u6570\u636e\u3002"}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>c});var r=s(67294);const t=r.createContext({});function c(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||o:c(e),r.createElement(t.Provider,{value:a},n)}}}]);