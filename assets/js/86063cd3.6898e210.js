"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98910],{43107:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=i(62540),r=i(43023);const o={sidebar_position:4,title:"Customizing Lima instance",description:"Customizing Lima",keywords:["podman desktop","containers","kubernetes","lima"],tags:["lima"]},t="Customizing the Lima instance for varying workloads",c={id:"lima/customizing",title:"Customizing Lima instance",description:"Customizing Lima",source:"@site/docs/lima/customizing.md",sourceDirName:"lima",slug:"/lima/customizing",permalink:"/docs/lima/customizing",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/lima/customizing.md",tags:[{inline:!0,label:"lima",permalink:"/docs/tags/lima"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Customizing Lima instance",description:"Customizing Lima",keywords:["podman desktop","containers","kubernetes","lima"],tags:["lima"]},sidebar:"mySidebar",previous:{title:"Lima instance for Kubernetes",permalink:"/docs/lima/creating-a-kubernetes-instance"},next:{title:"OpenShift",permalink:"/docs/openshift/"}},a={},l=[{value:"Procedure",id:"procedure",level:4},{value:"Directory",id:"directory",level:3},{value:"Resources",id:"resources",level:3},{value:"VM and Mount",id:"vm-and-mount",level:3},{value:"Containers",id:"containers",level:3},{value:"Docker",id:"docker",level:4},{value:"Podman",id:"podman",level:4},{value:"Kubernetes",id:"kubernetes",level:3},{value:"k3s.io",id:"k3sio",level:4},{value:"k8s.io",id:"k8sio",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"customizing-the-lima-instance-for-varying-workloads",children:"Customizing the Lima instance for varying workloads"})}),"\n",(0,s.jsxs)(n.p,{children:["You can customize Lima instance, using YAML and ",(0,s.jsx)(n.code,{children:"yq"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information on yq, see the yq ",(0,s.jsx)(n.a,{href:"https://mikefarah.gitbook.io/yq/",children:"documentation"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To create a new instance:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ limactl create <instance>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To edit an existing instance:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ limactl edit <instance>\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Some of the things you can edit:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Change the number of CPUs, the memory, and the disk size"}),"\n",(0,s.jsx)(n.li,{children:"Change the operating system (the Linux distribution)"}),"\n",(0,s.jsx)(n.li,{children:"Modify the cluster setup (the Kubernetes distribution)"}),"\n",(0,s.jsxs)(n.li,{children:["Run ",(0,s.jsx)(n.strong,{children:"both"})," of container workloads and Kubernetes workloads"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"See also:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://lima-vm.io/docs/",children:"Lima documentation"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/afbjorklund/lima-gui",children:"Lima GUI"})," (with editor)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"directory",children:"Directory"}),"\n",(0,s.jsxs)(n.p,{children:["To find the location of the instance directory (",(0,s.jsx)(n.code,{children:"Dir"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"limactl list <instance> --format '{{.Dir}}'\n"})}),"\n",(0,s.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)(n.p,{children:"The resources can be set per instance, or as a global default."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# CPUs\n# \ud83d\udfe2 Builtin default: min(4, host CPU cores)\ncpus: null\n\n# Memory size\n# \ud83d\udfe2 Builtin default: min("4GiB", half of host memory)\nmemory: null\n\n# Disk size\n# \ud83d\udfe2 Builtin default: "100GiB"\ndisk: null\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To set the default, edit ",(0,s.jsx)(n.code,{children:"_config/default.yaml"})," in Lima home."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# The builtin defaults can be changed globally by creating a $LIMA_HOME/_config/default.yaml\n# file. It will be used by ALL instances under the same $LIMA_HOME, and it\n# will be applied on each `limactl start`, so can affect instance restarts.\n\n# A similar mechanism is $LIMA_HOME/_config/override.yaml, which will take\n# precedence even over the settings in an instances lima.yaml file.\n# It too applies to ALL instances under the same $LIMA_HOME, and is applied\n# on each restart. It can be used to globally override settings, e.g. make\n# the mount of the home directory writable.\n"})}),"\n",(0,s.jsx)(n.h3,{id:"vm-and-mount",children:"VM and Mount"}),"\n",(0,s.jsx)(n.p,{children:"Any virtual machine (or server) with ssh can be used for Lima."}),"\n",(0,s.jsxs)(n.p,{children:['Most compatible mount type is "reverse-sshfs" (from ',(0,s.jsx)(n.a,{href:"https://github.com/lima-vm/sshocker",children:"sshocker"}),")."]}),"\n",(0,s.jsx)(n.p,{children:'Optionally you can use "qemu" vm with "9p" (aka virtfs) mount.'}),"\n",(0,s.jsx)(n.p,{children:'On macOS 13+, you can also use "vz" vm with "virtiofs" mount.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# VM type: "qemu" or "vz" (on macOS 13 and later).\n# The vmType can be specified only on creating the instance.\n# The vmType of existing instances cannot be changed.\n# \ud83d\udfe2 Builtin default: "qemu"\nvmType: null\n\n# Mount type for above mounts, such as "reverse-sshfs" (from sshocker),\n# "9p" (EXPERIMENTAL, from QEMU\u2019s virtio-9p-pci, aka virtfs),\n# or "virtiofs" (EXPERIMENTAL, needs `vmType: vz`)\n# \ud83d\udfe2 Builtin default: "reverse-sshfs" (for QEMU), "virtiofs" (for vz)\nmountType: null\n'})}),"\n",(0,s.jsx)(n.h3,{id:"containers",children:"Containers"}),"\n",(0,s.jsx)(n.p,{children:"You can install a container engine, in addition to the existing runtime."}),"\n",(0,s.jsxs)(n.p,{children:["For instance you can install ",(0,s.jsx)(n.a,{href:"https://github.com/containers/podman",children:"Podman Engine"}),",\nor you can install ",(0,s.jsx)(n.a,{href:"https://github.com/docker/docker",children:"Docker Engine"}),".\nAfter that you can port forward the socket, to the host ",(0,s.jsx)(n.code,{children:"Dir"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"docker",children:"Docker"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"portForwards:\n  - guestSocket: '/var/run/docker.sock'\n    hostSocket: '{{.Dir}}/sock/docker.sock'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/var/run/docker.sock"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export DOCKER_HOST="unix://{{.Dir}}/sock/docker.sock"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"podman",children:"Podman"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"portForwards:\n  - guestSocket: '/run/podman/podman.sock'\n    hostSocket: '{{.Dir}}/sock/podman.sock'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/run/podman/podman.sock"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export CONTAINER_HOST="unix://{{.Dir}}/sock/podman.sock"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,s.jsx)(n.p,{children:"You can install Kubernetes, on top of the existing container engine."}),"\n",(0,s.jsxs)(n.p,{children:["For instance you can use ",(0,s.jsx)(n.a,{href:"https://github.com/cri-o/cri-o",children:"CRI-O"})," for Podman,\nor ",(0,s.jsx)(n.a,{href:"https://github.com/Mirantis/cri-dockerd",children:"CRI-Dockerd"})," for Docker.\nAfter that you can copy the ",(0,s.jsx)(n.code,{children:"kubeconfig.yaml"})," file, to the host ",(0,s.jsx)(n.code,{children:"Dir"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"k3sio",children:"k3s.io"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"copyToHost:\n  - guest: '/etc/rancher/k3s/k3s.yaml'\n    host: '{{.Dir}}/copied-from-guest/kubeconfig.yaml'\n    deleteOnStop: true\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/etc/rancher/k3s/k3s.yaml"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export KUBECONFIG="{{.Dir}}/copied-from-guest/kubeconfig.yaml"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"k8sio",children:"k8s.io"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"copyToHost:\n  - guest: '/etc/kubernetes/admin.conf'\n    host: '{{.Dir}}/copied-from-guest/kubeconfig.yaml'\n    deleteOnStop: true\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/etc/kubernetes/admin.conf"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export KUBECONFIG="{{.Dir}}/copied-from-guest/kubeconfig.yaml"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(63696);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);