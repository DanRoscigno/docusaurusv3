"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16560],{12825:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var r=s(85893),o=s(11151);const i={},l=void 0,t={id:"developers/build-starrocks/build_starrocks_on_ubuntu",title:"build_starrocks_on_ubuntu",description:"Support build on x86_64 and aarch64",source:"@site/versioned_docs/version-3.1/developers/build-starrocks/build_starrocks_on_ubuntu.md",sourceDirName:"developers/build-starrocks",slug:"/developers/build-starrocks/build_starrocks_on_ubuntu",permalink:"/doc/zh/docs/developers/build-starrocks/build_starrocks_on_ubuntu",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/developers/build-starrocks/build_starrocks_on_ubuntu.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"\u4f7f\u7528 Docker \u7f16\u8bd1 StarRocks",permalink:"/doc/zh/docs/developers/build-starrocks/Build_in_docker"},next:{title:"How to build StarRocks",permalink:"/doc/zh/docs/developers/build-starrocks/handbook"}},c={},d=[{value:"Prerequisite",id:"prerequisite",level:3},{value:"Compiler",id:"compiler",level:3},{value:"1. GCC/G++",id:"1-gccg",level:5},{value:"2. JDK",id:"2-jdk",level:5},{value:"3. CMake",id:"3-cmake",level:5},{value:"Improve the compile speed",id:"improve-the-compile-speed",level:3},{value:"FAQ",id:"faq",level:3}];function a(e){const n=Object.assign({p:"p",h3:"h3",pre:"pre",code:"code",h5:"h5",a:"a",strong:"strong",ol:"ol",li:"li"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Support build on x86_64 and aarch64"}),"\n",(0,r.jsx)(n.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo apt-get update\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo apt-get install automake binutils-dev bison byacc ccache flex libiberty-dev libtool maven zip python3 python-is-python3 -y\n"})}),"\n",(0,r.jsx)(n.h3,{id:"compiler",children:"Compiler"}),"\n",(0,r.jsx)(n.p,{children:"If the ubuntu version >= 22.04, you can"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo apt-get install cmake gcc g++ default-jdk -y\n"})}),"\n",(0,r.jsx)(n.p,{children:"If the ubuntu version < 22.04.\nCheck the version of following tools and compilers"}),"\n",(0,r.jsx)(n.h5,{id:"1-gccg",children:"1. GCC/G++"}),"\n",(0,r.jsx)(n.p,{children:"GCC/G++ version must be >= 10.3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"gcc --version\ng++ --version\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Install GCC/G++(",(0,r.jsx)(n.a,{href:"https://gcc.gnu.org/releases.html",children:"https://gcc.gnu.org/releases.html"}),")"]}),"\n",(0,r.jsx)(n.h5,{id:"2-jdk",children:"2. JDK"}),"\n",(0,r.jsx)(n.p,{children:"OpenJDK version must be >= 8"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"java --version\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Install OpenJdk(",(0,r.jsx)(n.a,{href:"https://openjdk.org/install",children:"https://openjdk.org/install"}),")"]}),"\n",(0,r.jsx)(n.h5,{id:"3-cmake",children:"3. CMake"}),"\n",(0,r.jsx)(n.p,{children:"cmake version must be >= 3.20.1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cmake --version\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Install cmake(",(0,r.jsx)(n.a,{href:"https://cmake.org/download",children:"https://cmake.org/download"}),")"]}),"\n",(0,r.jsx)(n.h3,{id:"improve-the-compile-speed",children:"Improve the compile speed"}),"\n",(0,r.jsxs)(n.p,{children:["The default compiling paralleilsim equals to the ",(0,r.jsx)(n.strong,{children:"CPU Cores / 4"}),".\nIf you want to improve the compile speed. If You can improve the paralleilsim."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Suppose you have 32 Cpu cores, the default paralleilsim is 8."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"./build.sh\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Suppose you have 32 Cpu cores, want to use 24 cores to compile."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"./build.sh -j 24\n"})}),"\n",(0,r.jsx)(n.h3,{id:"faq",children:"FAQ"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Failed to build ",(0,r.jsx)(n.code,{children:"aws_cpp_sdk"})," in the Ubuntu 20.04."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Error: undefined reference to pthread_create\n"})}),"\n",(0,r.jsx)(n.p,{children:"The error comes from the lower CMake version; you can upgrade the CMake version to at least 3.20.1"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>i});var r=s(67294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||l:i(e),r.createElement(o.Provider,{value:t},n)}}}]);