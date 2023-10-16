"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73909],{5528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var s=n(85893),r=n(11151);const d={displayed_sidebar:"English"},i="Rules",o={id:"developers/code-style-guides/thrift-guides",title:"Rules",description:"Never use required",source:"@site/versioned_docs/version-3.1/developers/code-style-guides/thrift-guides.md",sourceDirName:"developers/code-style-guides",slug:"/developers/code-style-guides/thrift-guides",permalink:"/doc/zh/docs/developers/code-style-guides/thrift-guides",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/developers/code-style-guides/thrift-guides.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Rules",permalink:"/doc/zh/docs/developers/code-style-guides/protobuf-guides"},next:{title:"\u4f7f\u7528 debuginfo \u6587\u4ef6\u8fdb\u884c\u8c03\u8bd5",permalink:"/doc/zh/docs/developers/debuginfo"}},c={},l=[{value:"Never use required",id:"never-use-required",level:2},{value:"Never change the ordinal",id:"never-change-the-ordinal",level:2},{value:"file name",id:"file-name",level:2},{value:"struct name",id:"struct-name",level:2},{value:"field name",id:"field-name",level:2}];function a(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"rules",children:"Rules"}),"\n",(0,s.jsx)(t.h2,{id:"never-use-required",children:"Never use required"}),"\n",(0,s.jsx)(t.p,{children:"As the project involving, any fields may become optional. But if it is defined as required, it can not be removed."}),"\n",(0,s.jsxs)(t.p,{children:["So ",(0,s.jsx)(t.code,{children:"required"})," should not be used."]}),"\n",(0,s.jsx)(t.h2,{id:"never-change-the-ordinal",children:"Never change the ordinal"}),"\n",(0,s.jsx)(t.p,{children:"To be back compatible, the ordinal of the field SHOULD NOT be changed."}),"\n",(0,s.jsx)(t.h1,{id:"naming",children:"Naming"}),"\n",(0,s.jsx)(t.h2,{id:"file-name",children:"file name"}),"\n",(0,s.jsxs)(t.p,{children:["The names of messages are all lowercase, with underscores between words.\nFiles should end in ",(0,s.jsx)(t.code,{children:".thrift"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"my_struct.thrift            // Good\nMyStruct.thrift             // Bad\nmy_struct.proto             // Bad\n"})}),"\n",(0,s.jsx)(t.h2,{id:"struct-name",children:"struct name"}),"\n",(0,s.jsxs)(t.p,{children:["Struct names start with a capital letter ",(0,s.jsx)(t.code,{children:"T"})," and have a capital letter for each new word, with no underscores: TMyStruct"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"struct TMyStruct;           // Good\nstruct MyStruct;            // Bad\nstruct TMy_Struct;          // Bad\nstruct TmyStruct;           // Bad\n"})}),"\n",(0,s.jsx)(t.h2,{id:"field-name",children:"field name"}),"\n",(0,s.jsx)(t.p,{children:"The names of struct members are all lowercase, with underscores between words."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"1: optional i64 my_field;       // Good\n1: optional i64 myField;        // Bad\n"})})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>d});var s=n(67294);const r=s.createContext({});function d(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:d(e),s.createElement(r.Provider,{value:o},t)}}}]);