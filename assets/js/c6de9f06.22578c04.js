"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[92130],{87718:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=s(85893),i=s(11151);const a={},r="bitmap_subset_in_range",l={id:"sql-reference/sql-functions/bitmap-functions/bitmap_subset_in_range",title:"bitmap_subset_in_range",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_subset_in_range.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_subset_in_range",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/bitmap-functions/bitmap_subset_in_range",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_subset_in_range.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_remove",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/bitmap-functions/bitmap_remove"},next:{title:"bitmap_subset_limit",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/bitmap-functions/bitmap_subset_limit"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bitmap_subset_in_range",children:"bitmap_subset_in_range"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Intercepts elements from a Bitmap value within the range of ",(0,t.jsx)(n.code,{children:"start_range"})," and ",(0,t.jsx)(n.code,{children:"end_range"})," (exclusive). The output elements are a subset of the Bitmap value."]}),"\n",(0,t.jsx)(n.p,{children:"This function is mainly used for scenarios such as paginated queries. It is supported from v3.1."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"BITMAP bitmap_subset_in_range(BITMAP src, BIGINT start_range, BIGINT end_range)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src"}),": the Bitmap value from which to obtain elements."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"start_range"}),": the start range to intercept elements. It must be a BIGINT value. If the specified start range exceeds the maximum length of the BITMAP value, NULL is returned. See Example 4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"end_range"}),": the end range to intercept elements. It must be a BIGINT value. If ",(0,t.jsx)(n.code,{children:"end_range"})," equals or is less than ",(0,t.jsx)(n.code,{children:"start range"}),", NULL is returned. See Example 3."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the BITMAP type. NULL is returned if any of the input parameters is invalid."}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.p,{children:["The subset elements include ",(0,t.jsx)(n.code,{children:"start_range"})," but exclude ",(0,t.jsx)(n.code,{children:"end_range"}),". See Example 5."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["In the following examples, the input of bitmap_subset_in_range() is the output of ",(0,t.jsx)(n.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-functions/bitmap-functions/bitmap_from_string",children:"bitmap_from_string"}),". For example, ",(0,t.jsx)(n.code,{children:"bitmap_from_string('1,1,3,1,5,3,5,7,7,9')"})," returns ",(0,t.jsx)(n.code,{children:"1, 3, 5, 7, 9"}),". bitmap_subset_in_range() takes this BITMAP value as the input."]}),"\n",(0,t.jsx)(n.p,{children:"Example 1: Obtain subset elements from the BITMAP value with elements values in the range of 1 to 4. The values within this range are 1 and 3."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 1, 4)) value;\n+-------+\n| value |\n+-------+\n| 1,3   |\n+-------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example 2: Obtain subset elements from the BITMAP value with elements value in the range 1 to 100. The end value exceeds the maximum length of the BITMAP value and all the matching elements are returned."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 0, 100)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,3,5,7,9 |\n+-----------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 3: NULL is returned because the end range ",(0,t.jsx)(n.code,{children:"3"})," is less than the start range ",(0,t.jsx)(n.code,{children:"4"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 4, 3)) value;\n+-------+\n| value |\n+-------+\n| NULL  |\n+-------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 4: The start range 10 exceeds the maximum length (5) of the BITMAP value ",(0,t.jsx)(n.code,{children:"1,3,5,7,9"}),". NULL is returned."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 10, 15)) value;\n+-------+\n| value |\n+-------+\n| NULL  |\n+-------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 5: The returned subset includes the start value ",(0,t.jsx)(n.code,{children:"1"})," but excludes the end value ",(0,t.jsx)(n.code,{children:"3"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,1,3,1,5,4,5,6,7,9'), 1, 3)) value;\n+-------+\n| value |\n+-------+\n| 1     |\n+-------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-functions/bitmap-functions/bitmap_subset_limit",children:"bitmap_subset_limit"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>a});var t=s(67294);const i=t.createContext({});function a(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:a(e),t.createElement(i.Provider,{value:l},n)}}}]);