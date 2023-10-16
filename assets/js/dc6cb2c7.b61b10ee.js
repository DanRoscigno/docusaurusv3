"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[19625],{65520:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=r(85893),n=r(11151);const o={displayed_sidebar:"English"},a="Deploy StarRocks with Helm",c={id:"deployment/helm",title:"Deploy StarRocks with Helm",description:"Helm is a package manager for Kubernetes. A Helm Chart is a Helm package and contains all of the resource definitions necessary to run an application on a Kubernetes cluster. This topic describes how to use Helm to automatically deploy a StarRocks cluster on a Kubernetes cluster.",source:"@site/versioned_docs/version-3.1/deployment/helm.md",sourceDirName:"deployment",slug:"/deployment/helm",permalink:"/doc/docs/deployment/helm",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/deployment/helm.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Deploy StarRocks with Operator",permalink:"/doc/docs/deployment/sr_operator"},next:{title:"Deploy StarRocks on AWS",permalink:"/doc/docs/deployment/starrocks_on_aws"}},l={},i=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Procedure",id:"procedure",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",ol:"ol",pre:"pre",code:"code",strong:"strong"},(0,n.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"deploy-starrocks-with-helm",children:"Deploy StarRocks with Helm"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://helm.sh/",children:"Helm"})," is a package manager for Kubernetes. A ",(0,t.jsx)(s.a,{href:"https://helm.sh/docs/topics/charts/",children:"Helm Chart"})," is a Helm package and contains all of the resource definitions necessary to run an application on a Kubernetes cluster. This topic describes how to use Helm to automatically deploy a StarRocks cluster on a Kubernetes cluster."]}),"\n",(0,t.jsx)(s.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"./sr_operator#create-kubernetes-cluster",children:"Create a Kubernetes cluster"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://helm.sh/docs/intro/quickstart/",children:"Install Helm"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"procedure",children:"Procedure"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Add the Helm Chart Repo for StarRocks. The Helm Chart contains the definitions of the StarRocks Operator and the custom resource StarRocksCluster."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Add the Helm Chart Repo."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Bash",children:"helm repo add starrocks-community https://starrocks.github.io/starrocks-kubernetes-operator\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Update the Helm Chart Repo to the latest version."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Bash",children:"helm repo update\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"View the Helm Chart Repo that you added."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Bash",children:"$ helm search repo starrocks-community\nNAME                                    CHART VERSION    APP VERSION  DESCRIPTION\nstarrocks-community/kube-starrocks      1.8.0            3.1-latest   kube-starrocks includes two subcharts, starrock...\nstarrocks-community/operator            1.8.0            1.8.0        A Helm chart for StarRocks operator\nstarrocks-community/starrocks           1.8.0            3.1-latest   A Helm chart for StarRocks cluster\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Use the default ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-kubernetes-operator/blob/main/helm-charts/charts/kube-starrocks/values.yaml",children:"values.yaml"})})," of the Helm Chart to deploy the StarRocks Operator and StarRocks cluster, or create a YAML file to customize your deployment configurations."]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Deployment with default configurations"}),"\n",(0,t.jsx)(s.p,{children:"Run the following command to deploy the StarRocks Operator and the StarRocks cluster which consists of one FE and one BE:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Bash",children:"$ helm install starrocks starrocks-community/kube-starrocks\n# If the following result is returned, the StarRocks Operator and StarRocks cluster are being deployed.\nNAME: starrocks\nLAST DEPLOYED: Tue Aug 15 15:12:00 2023\nNAMESPACE: starrocks\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Deployment with custom configurations"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Create a YAML file, for example, ",(0,t.jsx)(s.strong,{children:"my-values.yaml"}),", and customize the configurations for the StarRocks Operator and StarRocks cluster in the YAML file. For the supported parameters and descriptions, see the comments in the default ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-kubernetes-operator/blob/main/helm-charts/charts/kube-starrocks/values.yaml",children:"values.yaml"})})," of the Helm Chart."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Run the following command to deploy the StarRocks Operator and StarRocks cluster with the custom configurations in ",(0,t.jsx)(s.strong,{children:"my-values.yaml"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Bash",children:"helm install -f my-values.yaml starrocks starrocks-community/kube-starrocks\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Deployment takes a while. During this period, you can check the deployment status by using the prompt command in the returned result of the deployment command above. The default prompt command is as follows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Bash",children:'$ kubectl --namespace default get starrockscluster -l "cluster=kube-starrocks"\n# If the following result is returned, the deployment has been successfully completed.\nNAME             FESTATUS   CNSTATUS   BESTATUS\nkube-starrocks   running               running\n'})}),"\n",(0,t.jsxs)(s.p,{children:["You can also run ",(0,t.jsx)(s.code,{children:"kubectl get pods"})," to check the deployment status. If all Pods are in the ",(0,t.jsx)(s.code,{children:"Running"})," state and all containers within the Pods are ",(0,t.jsx)(s.code,{children:"READY"}),", the deployment has been successfully completed."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Bash",children:"$ kubectl get pods\nNAME                                       READY   STATUS    RESTARTS   AGE\nkube-starrocks-be-0                        1/1     Running   0          2m50s\nkube-starrocks-fe-0                        1/1     Running   0          4m31s\nkube-starrocks-operator-69c5c64595-pc7fv   1/1     Running   0          4m50s\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Access StarRocks cluster"}),"\n",(0,t.jsxs)(s.p,{children:["You can access the StarRocks cluster from inside and outside the Kubernetes cluster. For detailed instructions, see ",(0,t.jsx)(s.a,{href:"/doc/docs/deployment/sr_operator#access-starrocks-cluster",children:"Access StarRocks Cluster"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Manage StarRocks operator and StarRocks cluster"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["If you need to update the configurations of the StarRocks operator and StarRocks cluster, see ",(0,t.jsx)(s.a,{href:"https://helm.sh/docs/helm/helm_upgrade/",children:"Helm Upgrade"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"If you need to uninstall the StarRocks Operator and StarRocks cluster, run the following command:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"helm uninstall starrocks\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Search Helm Chart maintained by StarRocks on Artifact Hub"}),"\n",(0,t.jsxs)(s.p,{children:["See  ",(0,t.jsx)(s.a,{href:"https://artifacthub.io/packages/helm/kube-starrocks/kube-starrocks",children:"kube-starrocks"}),"."]}),"\n"]}),"\n"]})]})}const d=function(e={}){const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,s,r)=>{r.d(s,{Zo:()=>c,ah:()=>o});var t=r(67294);const n=t.createContext({});function o(e){const s=t.useContext(n);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function c({components:e,children:s,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||a:o(e),t.createElement(n.Provider,{value:c},s)}}}]);