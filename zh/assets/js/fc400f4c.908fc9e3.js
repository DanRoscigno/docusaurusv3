"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[10159],{79970:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=r(85893),t=r(11151);const o={},i="Setup StarRocks FE development environment on IDEA",c={id:"developers/development-environment/IDEA",title:"Setup StarRocks FE development environment on IDEA",description:"This tutorial is based on macOS and has been tested on Apple Chip(M1, M2).",source:"@site/versioned_docs/version-3.0/developers/development-environment/IDEA.md",sourceDirName:"developers/development-environment",slug:"/developers/development-environment/IDEA",permalink:"/docusaurusv3/zh/docs/3.0/developers/development-environment/IDEA",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/developers/development-environment/IDEA.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"\u4f7f\u7528 debuginfo \u6587\u4ef6\u8fdb\u884c\u8c03\u8bd5",permalink:"/docusaurusv3/zh/docs/3.0/developers/debuginfo"},next:{title:"Setup IDE  for developing StarRocks",permalink:"/docusaurusv3/zh/docs/3.0/developers/development-environment/ide-setup"}},l={},a=[{value:"Requirements",id:"requirements",level:2},{value:"Configure the StarRocks",id:"configure-the-starrocks",level:2},{value:"Generate source code",id:"generate-source-code",level:2},{value:"Compile FE",id:"compile-fe",level:2},{value:"Open StarRocks in IDEA",id:"open-starrocks-in-idea",level:2},{value:"Run StarRocks FE in MacOS",id:"run-starrocks-fe-in-macos",level:2},{value:"DEBUG StarRocks FE in MacOS",id:"debug-starrocks-fe-in-macos",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",pre:"pre",code:"code",ol:"ol",li:"li",img:"img",a:"a"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"setup-starrocks-fe-development-environment-on-idea",children:"Setup StarRocks FE development environment on IDEA"}),"\n",(0,s.jsx)(n.p,{children:"This tutorial is based on macOS and has been tested on Apple Chip(M1, M2).\nEven if you are not using macOS, you can also refer to this tutorial."}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Thrift 0.13"})}),"\n",(0,s.jsx)(n.p,{children:"If you installed Thrift directly with brew, you will find that there is no version 0.13, you can use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew tap-new $USER/local-tap\nbrew extract --version='0.13.0' thrift $USER/local-tap\nbrew install thrift@0.13.0\n"})}),"\n",(0,s.jsx)(n.p,{children:"After installing Thrift successfully, you can check by executing following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ thrift -version\nThrift version 0.13.0\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Protobuf"})}),"\n",(0,s.jsx)(n.p,{children:"Just use the latest version v3, because the latest version of Protobuf is compatible with the v2 version of the Protobuf used in StarRocks."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install protobuf\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Maven"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew install maven\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Openjdk 1.8 or 11"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install openjdk@11\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Python3"})}),"\n",(0,s.jsx)(n.p,{children:"MacOS is already installed by default."}),"\n",(0,s.jsx)(n.p,{children:"Everyone's Thrift and Protobuf installation directories may be different, you can use the brew list command to inspect:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew list thrift@0.13.0\nbrew list protobuf\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configure-the-starrocks",children:"Configure the StarRocks"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Download the StarRocks"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git clone https://github.com/StarRocks/starrocks.git\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Setup thirdparty directory"})}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:"installed/bin"})," directory in ",(0,s.jsx)(n.code,{children:"thirdparty"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd starrocks && mkdir -p thirdparty/installed/bin\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then create soft link for Thrift and Protobuf respectively."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ln -s /opt/homebrew/bin/thrift thirdparty/installed/bin/thrift\nln -s /opt/homebrew/bin/protoc thirdparty/installed/bin/protoc\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Setting environment variables"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export JAVA_HOME="/opt/homebrew/Cellar/openjdk@11/11.0.15" # Caution: The jdk version may be different in you desktop\nexport PYTHON=/usr/bin/python3\nexport STARROCKS_THIRDPARTY=$(pwd)/thirdparty # Caution: Make sure you are in the starrocks directory\n'})}),"\n",(0,s.jsx)(n.h2,{id:"generate-source-code",children:"Generate source code"}),"\n",(0,s.jsx)(n.p,{children:"Many source files in FE need to be generated manually, otherwise IDEA will report an error due to missing files.\nExecute the following command to automatically generate:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd gensrc\nmake clean\nmake\n"})}),"\n",(0,s.jsx)(n.h2,{id:"compile-fe",children:"Compile FE"}),"\n",(0,s.jsxs)(n.p,{children:["Enter ",(0,s.jsx)(n.code,{children:"fe"})," directory and use Maven to compile:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd fe\nmvn install -DskipTests\n"})}),"\n",(0,s.jsx)(n.h2,{id:"open-starrocks-in-idea",children:"Open StarRocks in IDEA"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"StarRocks"})," directory in IDEA."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add Coding style setting\nTo standardize the coding style, you should import the ",(0,s.jsx)(n.code,{children:"fe/starrocks_intellij_style.xml"})," code style file in IDEA.\n",(0,s.jsx)(n.img,{alt:"image-20220701193938856",src:r(90372).Z+"",width:"1201",height:"897"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"run-starrocks-fe-in-macos",children:"Run StarRocks FE in MacOS"}),"\n",(0,s.jsxs)(n.p,{children:["Use IDEA to open the ",(0,s.jsx)(n.code,{children:"fe"})," directory."]}),"\n",(0,s.jsxs)(n.p,{children:["If you execute the Main function directly in ",(0,s.jsx)(n.code,{children:"StarRocksFE.java"}),", some errors will be reported. You only need to do some simple settings to run it smoothly."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTICE:"}),"  ",(0,s.jsx)(n.code,{children:"StarRocksFE.java"})," is in the ",(0,s.jsx)(n.code,{children:"fe/fe-core/src/main/java/com/starrocks"})," directory."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Copy the conf, bin and webroot directories from the StarRocks directory to ",(0,s.jsx)(n.code,{children:"fe"})," directory:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp -r conf fe/conf\ncp -r bin fe/bin\ncp -r webroot fe/webroot\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Enter the ",(0,s.jsx)(n.code,{children:"fe"})," directory and create the log and meta folders under the ",(0,s.jsx)(n.code,{children:"fe"})," directory:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd fe\nmkdir log\nmkdir meta\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Set the environment variable, as shown in the following figure:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20220701193938856",src:r(80450).Z+"",width:"2152",height:"1418"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export PID_DIR=/Users/smith/Code/starrocks/fe/bin\nexport STARROCKS_HOME=/Users/smith/Code/starrocks/fe\nexport LOG_DIR=/Users/smith/Code/starrocks/fe/log\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Modify the priority_networks in ",(0,s.jsx)(n.code,{children:"fe/conf/fe.conf"})," to ",(0,s.jsx)(n.code,{children:"127.0.0.1/24"})," to prevent FE from using the current computer's LAN IP and cause the port fail to bind."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Then you have run StarRocks FE successfully."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"debug-starrocks-fe-in-macos",children:"DEBUG StarRocks FE in MacOS"}),"\n",(0,s.jsx)(n.p,{children:"If you started the FE with the debug option, you can then attach the IDEA debugger to the FE process."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"./start_fe.sh --debug\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://www.jetbrains.com/help/idea/attaching-to-local-process.html#attach-to-local",children:"https://www.jetbrains.com/help/idea/attaching-to-local-process.html#attach-to-local"}),"."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},80450:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/IDEA-1-10bdc0d1013b0b63c1ee394608e3091a.png"},90372:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/IDEA-2-8dd4f3fe0da44fb9d1c6f4f035b0a432.png"},11151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>o});var s=r(67294);const t=s.createContext({});function o(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||i:o(e),s.createElement(t.Provider,{value:c},n)}}}]);