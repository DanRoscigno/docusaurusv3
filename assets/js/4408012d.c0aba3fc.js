"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[48003],{4e4:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=t(85893),s=t(11151);const r={},l="bit_shift_right_logical",c={id:"sql-reference/sql-functions/bit-functions/bit_shift_right",title:"bit_shift_right_logical",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bit-functions/bit_shift_right.md",sourceDirName:"sql-reference/sql-functions/bit-functions",slug:"/sql-reference/sql-functions/bit-functions/bit_shift_right",permalink:"/doc/docs/sql-reference/sql-functions/bit-functions/bit_shift_right",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bit-functions/bit_shift_right.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bit_shift_left",permalink:"/doc/docs/sql-reference/sql-functions/bit-functions/bit_shift_left"},next:{title:"bit_shift_right",permalink:"/doc/docs/sql-reference/sql-functions/bit-functions/bit_shift_right_logical"}},a={},h=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function o(e){const i=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"bit_shift_right_logical",children:"bit_shift_right_logical"}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"Shifts the binary representation of a numeric expression to the right by a specified number of bits."}),"\n",(0,n.jsxs)(i.p,{children:["This function performs a ",(0,n.jsx)(i.strong,{children:"logical right shift,"})," during which the bit length does not change, the low bit is dropped, and 0 is appended to the high bit despite whether the original bit is positive or negative. ",(0,n.jsx)(i.strong,{children:"Logical"})," shifts are unsigned shifts. For example, shifting ",(0,n.jsx)(i.code,{children:"10101"})," by one bit results in ",(0,n.jsx)(i.code,{children:"00101"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"bit_shift_right() and bit_shift_right_logical() return the same result for a positive value."}),"\n",(0,n.jsx)(i.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-Haskell",children:"bit_shift_right_logical(value, shift)\n"})}),"\n",(0,n.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"value"}),": the value or numeric expression to shift. Supported data types are TINYINT, SMALLINT, INT, BIGINT, and LARGEINT."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"shift"}),": the number of bits to shift. The supported data type is BIGINT."]}),"\n",(0,n.jsx)(i.h2,{id:"return-value",children:"Return value"}),"\n",(0,n.jsxs)(i.p,{children:["Returns a value of the same type as ",(0,n.jsx)(i.code,{children:"value"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"If any input parameter is NULL, NULL is returned."}),"\n",(0,n.jsxs)(i.li,{children:["If ",(0,n.jsx)(i.code,{children:"shift"})," is less than 0, 0 is returned."]}),"\n",(0,n.jsxs)(i.li,{children:["Shifting a ",(0,n.jsx)(i.code,{children:"value"})," by ",(0,n.jsx)(i.code,{children:"0"})," always results in the original ",(0,n.jsx)(i.code,{children:"value"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Shifting ",(0,n.jsx)(i.code,{children:"0"})," by a ",(0,n.jsx)(i.code,{children:"shift"})," always results in ",(0,n.jsx)(i.code,{children:"0"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["If the data type of ",(0,n.jsx)(i.code,{children:"value"})," is numeric but not an integer, that value will be cast to an integer. See ",(0,n.jsx)(i.a,{href:"#examples",children:"Examples"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["If the data type of ",(0,n.jsx)(i.code,{children:"value"}),' is a string, the value will be cast to an integer if possible. For example, the string "2.3" will be cast to 2. If the value cannot be cast to an integer, the value will be treated as NULL. See ',(0,n.jsx)(i.a,{href:"#examples",children:"Examples"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.p,{children:"Use this function to shift numeric values."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-Plain",children:"SELECT bit_shift_right_logical(2, 1);\n+-------------------------------+\n| bit_shift_right_logical(2, 1) |\n+-------------------------------+\n|                             1 |\n+-------------------------------+\n\nSELECT bit_shift_right_logical(2.2, 1);\n+---------------------------------+\n| bit_shift_right_logical(2.2, 1) |\n+---------------------------------+\n|                               1 |\n+---------------------------------+\n\nSELECT bit_shift_right_logical(\"2\", 1);\n+---------------------------------+\n| bit_shift_right_logical('2', 1) |\n+---------------------------------+\n|                               1 |\n+---------------------------------+\n\nSELECT bit_shift_right_logical(cast('-2' AS INTEGER(32)), 1);\n+-----------------------------------------------+\n| bit_shift_right_logical(CAST('-2' AS INT), 1) |\n+-----------------------------------------------+\n|                                    2147483647 |\n+-----------------------------------------------+\n"})}),"\n",(0,n.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/doc/docs/sql-reference/sql-functions/bit-functions/bit_shift_left",children:"bit_shift_left"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/doc/docs/sql-reference/sql-functions/bit-functions/bit_shift_right",children:"bit_shift_right"})}),"\n"]})]})}const d=function(e={}){const{wrapper:i}=Object.assign({},(0,s.ah)(),e.components);return i?(0,n.jsx)(i,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,i,t)=>{t.d(i,{Zo:()=>c,ah:()=>r});var n=t(67294);const s=n.createContext({});function r(e){const i=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const l={};function c({components:e,children:i,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||l:r(e),n.createElement(s.Provider,{value:c},i)}}}]);