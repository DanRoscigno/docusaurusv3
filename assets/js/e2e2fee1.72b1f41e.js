"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[81359],{24855:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=o(85893),n=o(11151);const i={},r="Stream Load",s={id:"faq/loading/Stream_load_faq",title:"Stream Load",description:"1. Does Stream Load support identifying column names held in the first few rows of a CSV-formatted file, or skipping the first few rows during data reading?",source:"@site/versioned_docs/version-3.0/faq/loading/Stream_load_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Stream_load_faq",permalink:"/doc/docs/3.0/faq/loading/Stream_load_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/faq/loading/Stream_load_faq.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"Routine Load",permalink:"/doc/docs/3.0/faq/loading/Routine_load_faq"},next:{title:"Synchronize data from MySQL in real time",permalink:"/doc/docs/3.0/faq/loading/synchronize_mysql_into_sr"}},d={},l=[{value:"1. Does Stream Load support identifying column names held in the first few rows of a CSV-formatted file, or skipping the first few rows during data reading?",id:"1-does-stream-load-support-identifying-column-names-held-in-the-first-few-rows-of-a-csv-formatted-file-or-skipping-the-first-few-rows-during-data-reading",level:2},{value:"2. The data to be loaded into the partition column is not of standard DATE or INT type. For example, the data is in a format like 202106.00. How do I transform the data if I load it by using Stream Load?",id:"2-the-data-to-be-loaded-into-the-partition-column-is-not-of-standard-date-or-int-type-for-example-the-data-is-in-a-format-like-20210600-how-do-i-transform-the-data-if-i-load-it-by-using-stream-load",level:2},{value:"3. What do I do if my Stream Load job reports the &quot;body exceed max size: 10737418240, limit: 10737418240&quot; error?",id:"3-what-do-i-do-if-my-stream-load-job-reports-the-body-exceed-max-size-10737418240-limit-10737418240-error",level:2}];function c(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a",pre:"pre"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"stream-load",children:"Stream Load"}),"\n",(0,a.jsx)(t.h2,{id:"1-does-stream-load-support-identifying-column-names-held-in-the-first-few-rows-of-a-csv-formatted-file-or-skipping-the-first-few-rows-during-data-reading",children:"1. Does Stream Load support identifying column names held in the first few rows of a CSV-formatted file, or skipping the first few rows during data reading?"}),"\n",(0,a.jsx)(t.p,{children:"Stream Load does not support identifying column names held in the first few rows of a CSV-formatted file. Stream Load considers the first few rows to be normal data like the other rows."}),"\n",(0,a.jsx)(t.p,{children:"In v2.5 and earlier, Stream Load does not support skipping the first few rows of a CSV file during data reading. If the first few rows of the CSV file you want to load hold column names, take one of the following actions:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Modify the settings of the tool that you use to export the data. Then, re-export the data as a CSV file that does not hold column names in the first few rows."}),"\n",(0,a.jsxs)(t.li,{children:["Use commands such as ",(0,a.jsx)(t.code,{children:"sed -i '1d' filename"})," to delete the first few rows of the CSV file."]}),"\n",(0,a.jsxs)(t.li,{children:["In the load command or statement, use ",(0,a.jsx)(t.code,{children:"-H \"where: <column_name> != '<column_name>'\""})," to filter out the first few rows of the CSV file. ",(0,a.jsx)(t.code,{children:"<column_name>"})," is any of the column names held in the first few rows. Note that StarRocks first transforms and then filters the source data. Therefore, if the column names in the first few rows fail to be transformed into their matching destination data types, ",(0,a.jsx)(t.code,{children:"NULL"})," values are returned for them. This means the destination StarRocks table cannot contain columns that are set to ",(0,a.jsx)(t.code,{children:"NOT NULL"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["In the load command or statement, add ",(0,a.jsx)(t.code,{children:'-H "max_filter_ratio:0.01"'})," to set a maximum error tolerance that is 1% or lower but can tolerate a few error rows, thereby allowing StarRocks to ignore the data transformation failures in the first few rows. In this case, the Stream Load job can still succeed even if ",(0,a.jsx)(t.code,{children:"ErrorURL"})," is returned to indicate error rows. Do not set ",(0,a.jsx)(t.code,{children:"max_filter_ratio"})," to a large value. If you set ",(0,a.jsx)(t.code,{children:"max_filter_ratio"})," to a large value, some important data quality issues may be missed."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["From v3.0 onwards, Stream Load supports the ",(0,a.jsx)(t.code,{children:"skip_header"})," parameter, which specifies whether to skip the first few rows of a CSV file. For more information,see ",(0,a.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/STREAM%20LOAD#csv-parameters",children:"CSV parameters"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"2-the-data-to-be-loaded-into-the-partition-column-is-not-of-standard-date-or-int-type-for-example-the-data-is-in-a-format-like-20210600-how-do-i-transform-the-data-if-i-load-it-by-using-stream-load",children:"2. The data to be loaded into the partition column is not of standard DATE or INT type. For example, the data is in a format like 202106.00. How do I transform the data if I load it by using Stream Load?"}),"\n",(0,a.jsxs)(t.p,{children:["StarRocks supports transforming data at loading. For more information, see ",(0,a.jsx)(t.a,{href:"/doc/docs/3.0/loading/Etl_in_loading",children:"Transform data at loading"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Suppose that you want to load a CSV-formatted file named ",(0,a.jsx)(t.code,{children:"TEST"})," and the file consists of four columns, ",(0,a.jsx)(t.code,{children:"NO"}),", ",(0,a.jsx)(t.code,{children:"DATE"}),", ",(0,a.jsx)(t.code,{children:"VERSION"}),", and ",(0,a.jsx)(t.code,{children:"PRICE"}),", among which the data from the ",(0,a.jsx)(t.code,{children:"DATE"})," column is in a non-standard format such as 202106.00. If you want to use ",(0,a.jsx)(t.code,{children:"DATE"})," as the partition column in StarRocks, you need to first create a StarRocks table, for example, one that consists of the following four columns: ",(0,a.jsx)(t.code,{children:"NO"}),", ",(0,a.jsx)(t.code,{children:"VERSION"}),", ",(0,a.jsx)(t.code,{children:"PRICE"}),", and ",(0,a.jsx)(t.code,{children:"DATE"}),". Then, you need to specify the data type of the ",(0,a.jsx)(t.code,{children:"DATE"})," column of the StarRocks table as DATE, DATETIME, or INT. Finally, when you create a Stream Load job, you need to specify the following setting in the load command or statement to transform data from the source ",(0,a.jsx)(t.code,{children:"DATE"})," column's data type to the destination column's data type:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Plain",children:'-H "columns: NO,DATE_1, VERSION, PRICE, DATE=LEFT(DATE_1,6)"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In the preceding example, ",(0,a.jsx)(t.code,{children:"DATE_1"})," can be considered to be a temporarily named column mapping the destination ",(0,a.jsx)(t.code,{children:"DATE"})," column, and the final results loaded into the destination ",(0,a.jsx)(t.code,{children:"DATE"})," column are computed by the ",(0,a.jsx)(t.code,{children:"left()"})," function. Note that you must first list the temporary names of the source columns and then use functions to transform data. The functions supported are scalar functions, including non-aggregate functions and window functions."]}),"\n",(0,a.jsx)(t.h2,{id:"3-what-do-i-do-if-my-stream-load-job-reports-the-body-exceed-max-size-10737418240-limit-10737418240-error",children:'3. What do I do if my Stream Load job reports the "body exceed max size: 10737418240, limit: 10737418240" error?'}),"\n",(0,a.jsx)(t.p,{children:"The size of the source data file exceeds 10 GB, which is the maximum file size supported by Stream Load. Take one of the following actions:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Use ",(0,a.jsx)(t.code,{children:"seq -w 0 n"})," to split the source data file into smaller files."]}),"\n",(0,a.jsxs)(t.li,{children:["Use ",(0,a.jsx)(t.code,{children:"curl -XPOST http:///be_host:http_port/api/update_config?streaming_load_max_mb=<file_size>"})," to adjust the value of the ",(0,a.jsx)(t.a,{href:"/doc/docs/3.0/administration/Configuration#configure-be-dynamic-parameters",children:"BE configuration item"})," ",(0,a.jsx)(t.code,{children:"streaming_load_max_mb"})," to increase the maximum file size."]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},11151:(e,t,o)=>{o.d(t,{Zo:()=>s,ah:()=>i});var a=o(67294);const n=a.createContext({});function i(e){const t=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function s({components:e,children:t,disableParentContext:o}){let s;return s=o?"function"==typeof e?e({}):e||r:i(e),a.createElement(n.Provider,{value:s},t)}}}]);