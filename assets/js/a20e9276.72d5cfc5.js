"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[97713],{47096:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=n(85893),s=n(11151);const t={displayed_sidebar:"English"},i="array_map",l={id:"sql-reference/sql-functions/array-functions/array_map",title:"array_map",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_map.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_map",permalink:"/doc/docs/sql-reference/sql-functions/array-functions/array_map",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_map.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_length",permalink:"/doc/docs/sql-reference/sql-functions/array-functions/array_length"},next:{title:"array_max",permalink:"/doc/docs/sql-reference/sql-functions/array-functions/array_max"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const a=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"array_map",children:"array_map"}),"\n",(0,r.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(a.p,{children:"array_map() is a higher-order SQL function that can take lambda functions as arguments.It applies the lambda function to the input arrays and returns a new array."}),"\n",(0,r.jsxs)(a.p,{children:["array_map() can accept multiple arrays and can be nested with lambda functions to capture a variable. For more information about lambda functions, see ",(0,r.jsx)(a.a,{href:"/doc/docs/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"}),". This function is supported from v2.5."]}),"\n",(0,r.jsx)(a.p,{children:"The alias is transform()."}),"\n",(0,r.jsx)(a.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-Haskell",children:"array_map(lambda_function, arr1, arr2...)\narray_map(arr1, arr2..., lambda_function)\n"})}),"\n",(0,r.jsx)(a.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Lambda functions can only be used as the ",(0,r.jsx)(a.strong,{children:"first"})," or ",(0,r.jsx)(a.strong,{children:"last"})," parameter of a higher-order function. Either position does not affect the calculation."]}),"\n",(0,r.jsx)(a.li,{children:"The number of arrays must be the same as the input parameters in the lambda function. Otherwise, an error is returned."}),"\n",(0,r.jsx)(a.li,{children:"All the arrays must have the same number of elements. Otherwise, an error is returned."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(a.p,{children:"Example 1: Increment every element of the array by 100."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-Plain",children:"select array_map(x -> x+100,[1,2,3]);\n+------------------------------------+\n| array_map(x -> x + 100, [1, 2, 3]) |\n+------------------------------------+\n| [101,102,103]                      |\n+------------------------------------+\n"})}),"\n",(0,r.jsx)(a.p,{children:"Example 2: Sum array1 [1,2,3] and array2 [11,12,13] element by element."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-Plain",children:"select array_map((x,y) -> x + y, [1,2,3], [11,12,13]);\n+-----------------------------------------------------+\n| array_map((x, y) -> x + y, [1, 2, 3], [11, 12, 13]) |\n+-----------------------------------------------------+\n| [12,14,16]                                          |\n+-----------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Example 3: Determine whether the element in ",(0,r.jsx)(a.code,{children:"x"})," is greater than 1.5. If yes, log(x) is returned for the element. If not, (x+y) is returned for the corresponding element."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-Plain",children:"select array_map((x,y) -> if(x>1.5,log(x),x+y), [1,2,3], [11,12,13]);\n+--------------------------------------------------------------------------+\n| array_map((x, y) -> if(x > 1.5, log(x), x + y), [1, 2, 3], [11, 12, 13]) |\n+--------------------------------------------------------------------------+\n| [12,0.6931471805599453,1.0986122886681098]                               |\n+--------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(a.p,{children:"Example 4: Use array_map() to capture variables. The returned element whose value is 1 indicates the condition is met."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-Plain",children:"-- In the example table, last_avg is the average score in the last exam. score represents the scores of three subjects in the current exam.\n\n+------+----------+------------+\n| id   | last_avg | score      |\n+------+----------+------------+\n|    1 |       55 | [50,60,70] |\n|    2 |       73 | [70,65,75] |\n|    3 |       89 | [88,92,90] |\n+------+----------+------------+\n\n-- Find the score that is higher than the average score of the last exam.\nselect array_map(x -> x > last_avg, score) from test_tbl;\n+--------------------------------------+\n| array_map(x -> x > last_avg, score)  |\n+--------------------------------------+\n| [0,1,1]                              |\n| [0,0,1]                              |\n| [0,1,1]                              |\n+--------------------------------------+\n"})}),"\n",(0,r.jsx)(a.p,{children:"Example 5: Use nested lambda functions."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-Plain",children:"select array_map(x -> array_map(x->x+100, x),[[1,2.3],[4,3,2]]);\n+-------------------------------------------------------------------+\n| array_map(x -> array_map(x -> x + 100, x), [[1, 2.3], [4, 3, 2]]) |\n+-------------------------------------------------------------------+\n| [[101,102.3],[104,103,102]]                                       |\n+-------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(a.p,{children:"Example 6: An error is returned because the numbers of arrays and lambda parameters are inconsistent. The lambda function requires only one array but two arrays are passed in."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-Plain",children:"select array_map(x -> x,[1],[2,4]);\nERROR 1064 (HY000): Lambda arguments should equal to lambda input arrays.\n"})})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,r.jsx)(a,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,a,n)=>{n.d(a,{Zo:()=>l,ah:()=>t});var r=n(67294);const s=r.createContext({});function t(e){const a=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const i={};function l({components:e,children:a,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:t(e),r.createElement(s.Provider,{value:l},a)}}}]);