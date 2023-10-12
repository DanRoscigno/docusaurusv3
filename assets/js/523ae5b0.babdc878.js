"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[13007],{24717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=t(85893),i=t(11151);const r={},l="bit_shift_left",c={id:"sql-reference/sql-functions/bit-functions/bit_shift_left",title:"bit_shift_left",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/bit-functions/bit_shift_left.md",sourceDirName:"sql-reference/sql-functions/bit-functions",slug:"/sql-reference/sql-functions/bit-functions/bit_shift_left",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bit-functions/bit_shift_left",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/bit-functions/bit_shift_left.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"unnest",permalink:"/doc/docs/2.5/sql-reference/sql-functions/array-functions/unnest"},next:{title:"bit_shift_right_logical",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bit-functions/bit_shift_right"}},a={},h=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bit_shift_left",children:"bit_shift_left"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Shifts the binary representation of a numeric expression to the left by a specified number of bits."}),"\n",(0,s.jsxs)(n.p,{children:["This function performs an ",(0,s.jsx)(n.strong,{children:"arithmetic left shift"}),", during which the bit length does not change, 0 is appended to the end, and the high bit remains unchanged. For example, shifting ",(0,s.jsx)(n.code,{children:"10101"})," to the left by one bit results in ",(0,s.jsx)(n.code,{children:"11010"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"bit_shift_left(value, shift)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"value"}),": the value or numeric expression to shift. Supported data types are TINYINT, SMALLINT, INT, BIGINT, and LARGEINT."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"shift"}),": the number of bits to shift. The supported data type is BIGINT."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["Returns a value of the same type as ",(0,s.jsx)(n.code,{children:"value"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If any input parameter is NULL, NULL is returned."}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"shift"})," is less than 0, 0 is returned."]}),"\n",(0,s.jsxs)(n.li,{children:["Shifting a ",(0,s.jsx)(n.code,{children:"value"})," by ",(0,s.jsx)(n.code,{children:"0"})," always results in the original ",(0,s.jsx)(n.code,{children:"value"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Shifting ",(0,s.jsx)(n.code,{children:"0"})," by a ",(0,s.jsx)(n.code,{children:"shift"})," always results in ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If the data type of ",(0,s.jsx)(n.code,{children:"value"})," is numeric but not an integer, that value will be cast to an integer. See ",(0,s.jsx)(n.a,{href:"#examples",children:"Examples"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If the data type of ",(0,s.jsx)(n.code,{children:"value"})," is a string, the value will be cast to an integer if possible. If the value cannot be cast to an integer, it will be processed as NULL. See ",(0,s.jsx)(n.a,{href:"#examples",children:"Examples"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Use this function to shift numeric values."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"SELECT bit_shift_left(2, 1);\n+----------------------+\n| bit_shift_left(2, 1) |\n+----------------------+\n|                    4 |\n+----------------------+\n\nSELECT bit_shift_left(2.2, 1);\n+------------------------+\n| bit_shift_left(2.2, 1) |\n+------------------------+\n|                      4 |\n+------------------------+\n\nSELECT bit_shift_left(\"2\", 1);\n+------------------------+\n| bit_shift_left('2', 1) |\n+------------------------+\n|                      4 |\n+------------------------+\n\nSELECT bit_shift_left(-2, 1);\n+-----------------------+\n| bit_shift_left(-2, 1) |\n+-----------------------+\n|                    -4 |\n+-----------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-functions/bit-functions/bit_shift_right",children:"bit_shift_right"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-functions/bit-functions/bit_shift_right_logical",children:"bit_shift_right_logical"})}),"\n"]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||l:r(e),s.createElement(i.Provider,{value:c},n)}}}]);