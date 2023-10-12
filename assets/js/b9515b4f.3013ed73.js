"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76956],{2909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var s=t(85893),i=t(11151);const a={},l="sub_bitmap",r={id:"sql-reference/sql-functions/bitmap-functions/sub_bitmap",title:"sub_bitmap",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/sub_bitmap.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/sub_bitmap",permalink:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/sub_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/sub_bitmap.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"intersect_count",permalink:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/intersect_count"},next:{title:"to_bitmap",permalink:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/to_bitmap"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sub_bitmap",children:"sub_bitmap"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Intercepts ",(0,s.jsx)(n.code,{children:"len"})," elements from a BITMAP value ",(0,s.jsx)(n.code,{children:"src"})," starting from the position specified by ",(0,s.jsx)(n.code,{children:"offset"}),". The output elements are a subset of ",(0,s.jsx)(n.code,{children:"src"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This function is mainly used for scenarios such as paginated queries. It is supported from v2.5."}),"\n",(0,s.jsxs)(n.p,{children:["This function is similar to ",(0,s.jsx)(n.a,{href:"./bitmap_subset_limit.md",children:"bitmap_subset_limit"}),". The difference is that this function intercepts elements starting from an offset whereas bitmap_subset_limit intercepts elements starting from an element value (",(0,s.jsx)(n.code,{children:"start_range"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"BITMAP sub_bitmap(BITMAP src, BIGINT offset, BIGINT len)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"src"}),": the BITMAP value from which you want to obtain elements."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"offset"}),": the starting position. It must be a BIGINT value. Note the following points when you use ",(0,s.jsx)(n.code,{children:"offset"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Offsets start from 0."}),"\n",(0,s.jsx)(n.li,{children:"Negative offsets are counted from right to left. See Examples 3 and 4."}),"\n",(0,s.jsxs)(n.li,{children:["If the starting position specified by ",(0,s.jsx)(n.code,{children:"offset"})," exceeds the actual length of the BITMAP value, NULL is returned. See Example 6."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"len"}),": the number of elements to obtain. It must be a BIGINT value greater than or equal to 1. If the number of matching elements is less than the value of ",(0,s.jsx)(n.code,{children:"len"}),", all the matching elements are returned. See Examples 2, 3, and 7."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the BITMAP type. NULL is returned if any of the input parameters is invalid."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["In the following examples, the input of sub_bitmap() is the output of ",(0,s.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_from_string",children:"bitmap_from_string"}),". For example, ",(0,s.jsx)(n.code,{children:"bitmap_from_string('1,1,3,1,5,3,5,7,7,9')"})," returns ",(0,s.jsx)(n.code,{children:"1, 3, 5, 7, 9"}),". sub_bitmap() takes this BITMAP value as the input."]}),"\n",(0,s.jsx)(n.p,{children:"Example 1: Obtain two elements from the BITMAP value with the offset set to 0."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 0, 2)) value;\n+-------+\n| value |\n+-------+\n| 1,3   |\n+-------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 2: Obtain 100 elements from the BITMAP value with the offset set to 0. 100 exceeds the length of the BITMAP value and all the matching elements are returned."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 0, 100)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,3,5,7,9 |\n+-----------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 3: Obtain 100 elements from the BITMAP value with the offset set to -3. 100 exceeds the length of the BITMAP value and all the matching elements are returned."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), -3, 100)) value;\n+-------+\n| value |\n+-------+\n| 5,7,9 |\n+-------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 4: Obtain two elements from the BITMAP value with the offset set to -3."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), -3, 2)) value;\n+-------+\n| value |\n+-------+\n| 5,7   |\n+-------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 5: NULL is returned because ",(0,s.jsx)(n.code,{children:"-10"})," is an invalid input of ",(0,s.jsx)(n.code,{children:"len"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 0, -10)) value;\n+-------+\n| value |\n+-------+\n| NULL  |\n+-------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 6: The starting position specified by offset 5 exceeds the length of the BITMAP value ",(0,s.jsx)(n.code,{children:"1,3,5,7,9"}),". NULL is returned."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 5, 1)) value;\n+-------+\n| value |\n+-------+\n| NULL  |\n+-------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 7: ",(0,s.jsx)(n.code,{children:"len"})," is set to 5 but only two elements match the condition. All of these two elements are returned."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), -2, 5)) value;\n+-------+\n| value |\n+-------+\n| 7,9   |\n+-------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||l:a(e),s.createElement(i.Provider,{value:r},n)}}}]);