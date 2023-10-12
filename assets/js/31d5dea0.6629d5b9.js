"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[72301],{95733:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=i(85893),r=i(11151);const t={},a="to_binary",c={id:"sql-reference/sql-functions/binary-functions/to_binary",title:"to_binary",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/binary-functions/to_binary.md",sourceDirName:"sql-reference/sql-functions/binary-functions",slug:"/sql-reference/sql-functions/binary-functions/to_binary",permalink:"/doc/docs/3.0/sql-reference/sql-functions/binary-functions/to_binary",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/binary-functions/to_binary.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"from_binary",permalink:"/doc/docs/3.0/sql-reference/sql-functions/binary-functions/from_binary"},next:{title:"Conditional Functions",permalink:"/doc/docs/3.0/category/conditional-functions-1"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"to_binary",children:"to_binary"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Converts a VARCHAR string to a binary value based on the specified binary format (",(0,s.jsx)(n.code,{children:"binary_type"}),") of the input string. The following binary formats are supported: ",(0,s.jsx)(n.code,{children:"hex"}),", ",(0,s.jsx)(n.code,{children:"encode64"}),", and ",(0,s.jsx)(n.code,{children:"utf8"}),". If no ",(0,s.jsx)(n.code,{children:"binary_type"})," is specified, ",(0,s.jsx)(n.code,{children:"hex"})," is the default."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"to_binary(str[, binary_type])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"str"}),": the string to convert, required. It must be a VARCHAR string."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"binary_type"}),": the binary format for conversion, optional."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hex"}),"(default): ",(0,s.jsx)(n.code,{children:"to_binary"})," assumes the input string is a hex string in which all characters are in '0123456789abcdef'. If the input string is not valid, an empty binary is returned (exceptions will not be thrown). ",(0,s.jsx)(n.code,{children:"to_binary"})," will convert the input string into binary directly. For example, ",(0,s.jsx)(n.code,{children:'"abab"'})," will be converted to ",(0,s.jsx)(n.code,{children:"x'abab'"}),". The input string is not case-sensitive."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"encode64"}),": ",(0,s.jsx)(n.code,{children:"to_binary"})," assumes the input string is a base64-encoded string . If the input string is not valid, an empty binary is returned (exceptions will not be thrown). ",(0,s.jsx)(n.code,{children:"to_binary"})," will decode the base64-encoded string as the binary result. For example, ",(0,s.jsx)(n.code,{children:'"YWJhYg=="'})," will be converted to ",(0,s.jsx)(n.code,{children:"x'abab'"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"utf8"}),": ",(0,s.jsx)(n.code,{children:"to_binary"})," converts the input string as a binary value without any transformation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a VARCHAR value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["The following examples assume that the ",(0,s.jsx)(n.code,{children:"--binary-as-hex"})," option is enabled when you access StarRocks from your MySQL client. This way, binary data is displayed using hexadecimal notation."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> select to_binary('ABAB', 'hex');\n+----------------------------------------------------+\n| to_binary('ABAB', 'hex')                           |\n+----------------------------------------------------+\n| 0xABAB                                             |\n+----------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select to_binary('U1RBUlJPQ0tT', 'encode64');\n+------------------------------------------------------------------------------+\n| to_binary('U1RBUlJPQ0tT', 'encode64')                                        |\n+------------------------------------------------------------------------------+\n| 0x53544152524F434B53                                                         |\n+------------------------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql> select to_binary('STARROCKS', 'utf8');\n+----------------------------------------------------------------+\n| to_binary('STARROCKS', 'utf8')                                 |\n+----------------------------------------------------------------+\n| 0x53544152524F434B53                                           |\n+----------------------------------------------------------------+\n1 row in set (0.00 sec)\n\n-- The input string does not match the binary format and an empty binary is returned.\n\nmysql> select to_binary('U1RBUlJPQ0tT', 'hex');\n+--------------------------------------------------------------------+\n| to_binary('U1RBUlJPQ0tT', 'hex')                                   |\n+--------------------------------------------------------------------+\n| 0x                                                                 |\n+--------------------------------------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/binary-functions/from_binary",children:"from_binary"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-types/BINARY",children:"BINARY/VARBINARY data type"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>c,ah:()=>t});var s=i(67294);const r=s.createContext({});function t(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:i}){let c;return c=i?"function"==typeof e?e({}):e||a:t(e),s.createElement(r.Provider,{value:c},n)}}}]);