"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[296],{3924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(4848),s=n(8453);const r={title:"Nodestream 0.12 Release",authors:["zprobst"],tags:["release","nodestream"]},i="Nodestream 0.12 Release",o={permalink:"/docs/blog/2024/04/05/nodestream-0-12",editUrl:"https://github.com/nodesteram-proj/docs/tree/main/packages/create-docusaurus/templates/shared/blog/2024-04-05-nodestream-0-12/index.md",source:"@site/blog/2024-04-05-nodestream-0-12/index.md",title:"Nodestream 0.12 Release",description:"We are happy to announce the release of Nodestream 0.12.",date:"2024-04-05T00:00:00.000Z",formattedDate:"April 5, 2024",tags:[{label:"release",permalink:"/docs/blog/tags/release"},{label:"nodestream",permalink:"/docs/blog/tags/nodestream"}],readingTime:4.005,hasTruncateMarker:!1,authors:[{name:"Zach Probst",title:"Maintainer of Nodestream",url:"https://github.com/zprobst",imageURL:"https://github.com/zprobst.png",key:"zprobst"}],frontMatter:{title:"Nodestream 0.12 Release",authors:["zprobst"],tags:["release","nodestream"]},unlisted:!1,prevItem:{title:"Nodestream Neptune Support",permalink:"/docs/blog/2024/04/26/nodestream-neptune-support"},nextItem:{title:"Software Vulnerability Analysis using SBOMs, Amazon Neptune, and Nodestream",permalink:"/docs/blog/2024/04/05/nodestream-sbom-preview"}},h={authorsImageUrls:[void 0]},l=[{value:"Major Features",id:"major-features",level:2},{value:"Database Migrations",id:"database-migrations",level:3},{value:"Multi-Database Support",id:"multi-database-support",level:3},{value:"Other Features",id:"other-features",level:2},{value:"Parquet Support",id:"parquet-support",level:3},{value:"Include Properties From Maps",id:"include-properties-from-maps",level:3},{value:"Performance Improvements",id:"performance-improvements",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"We are happy to announce the release of Nodestream 0.12.\nThis release marks the largest update to Nodestream since its inception.\nWe've spent a lot of time improving the core of nodestream and we're excited to share it with you."}),"\n",(0,a.jsxs)(t.p,{children:["Before we get into the details, we want to thank the community for their support and feedback.\nAs such, we have completely revamped the documentation to make it easier to use and navigate.\nThis releases comes with two headline features ",(0,a.jsx)(t.a,{href:"#database-migrations",children:"Database Migrations"})," and ",(0,a.jsx)(t.a,{href:"#multi-database-support",children:"Multi-Database Support"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"major-features",children:"Major Features"}),"\n",(0,a.jsx)(t.h3,{id:"database-migrations",children:"Database Migrations"}),"\n",(0,a.jsx)(t.p,{children:"In the past, nodestream attempted to automatically create indexes and constraints on the database based on your pipeline at runtime.\nThis was done by introspecting the schema of the entire project and generating the appropriate queries to create the indexes and constraints.\nThis was a very powerful feature but it had a few drawbacks:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"It was redundant."})," The same indexes and constraints were being created with ",(0,a.jsx)(t.code,{children:"IF NOT EXISTS"})," clauses every time the pipeline was run."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"It was slow."})," The queries were being executed serially and the pipeline was locked until they were all completed."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"It was error prone."})," If the database was not in a state that allowed for the creation of the indexes and constraints, the pipeline would fail."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"It was high friction."})," There was no way to refactor the database without manual intervention. If the schema changed, the pipeline would fail and the user would have to manually remove the indexes, constraints, and sometimes data before running the pipeline again."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["To address these issues, ",(0,a.jsx)(t.code,{children:"nodestream"})," 0.12 has introduced the concept of migrations.\nMigrations are a way of encapsulating changes to the database schema in a way that can be applied incrementally.\nConceptually, they are similar to the migrations in the ",(0,a.jsx)(t.a,{href:"https://docs.djangoproject.com/en/5.0/topics/migrations/",children:"Django"}),", ",(0,a.jsx)(t.a,{href:"https://guides.rubyonrails.org/v3.2/migrations.html",children:"Rails"}),", ",(0,a.jsx)(t.a,{href:"https://neo4j.com/labs/neo4j-migrations/2.0/",children:"Neo4j Migrations"}),", and ",(0,a.jsx)(t.a,{href:"https://documentation.red-gate.com/fd/migrations-184127470.html",children:"Flyway"})," frameworks."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Database Migrations",src:n(2874).A+"",width:"1800",height:"600"})}),"\n",(0,a.jsxs)(t.p,{children:["Migrations are defined in a directory called ",(0,a.jsx)(t.code,{children:"migrations"})," in the root of your project.\nEach migration is a yaml file that contains data about the migration and its dependencies.\nYou can create migrations by running the ",(0,a.jsx)(t.code,{children:"nodestream migrations make"})," command."]}),"\n",(0,a.jsxs)(t.p,{children:["Check out the changes to the tutorial on ",(0,a.jsx)(t.a,{href:"/docs/docs/tutorial-basics/prepare-your-database",children:"Database Migrations"})," as well as the new tutorial on ",(0,a.jsx)(t.a,{href:"/docs/docs/tutorials-intermediate/working-with-migrations",children:"Working With Migrations"})," to learn more."]}),"\n",(0,a.jsx)(t.p,{children:"Core Contributors to this feature include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/zprobst",children:"Zach Probst"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/grantleehoffman",children:"Grant Hoffman"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/yasonk",children:"Yason Khaburzaniya"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/ccloes",children:"Chad Cloes"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/angelosantos4",children:"Angelo Santos"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"multi-database-support",children:"Multi-Database Support"}),"\n",(0,a.jsxs)(t.p,{children:["Prior to this release, the only database that was supported was neo4j.\nWhile this is a category leading database, the goal of nodestream is to be database agnostic and afford developer the ability to use the database or ",(0,a.jsx)(t.em,{children:"databases"})," that best fits their needs.\nAs such, we are happy to announce that nodestream now supports ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/neptune/",children:"Amazon Neptune"})," and ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html",children:"Amazon Neptune Analytics"}),".\nTO accommodate that, we have moved the neo4j database connector into a separate package called ",(0,a.jsx)(t.a,{href:"https://pypi.org/project/nodestream-plugin-neo4j/",children:"nodestream-plugin-neo4j"})," and added a new package called ",(0,a.jsx)(t.a,{href:"https://pypi.org/project/nodestream-plugin-neptune/",children:"nodestream-plugin-neptune"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Starting with this release, you use the ",(0,a.jsx)(t.code,{children:"--database"})," flag to generate neptune boilerplate configuration."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Database Migrations",src:n(6700).A+"",width:"1800",height:"800"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsxs)(t.strong,{children:["Check out the docs on it ",(0,a.jsx)(t.a,{href:"/docs/docs/databases/neptune/",children:"here"})]}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Core Contributors to this feature include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/zprobst",children:"Zach Probst"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/aryex",children:"Alex Le"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/Cole-Greer",children:"Cole Greer"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/bechbd",children:"Dave Bechberger"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/alexey-temnikov",children:"Alexey Temnikov"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/xiazcy",children:"Yang Xia"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"other-features",children:"Other Features"}),"\n",(0,a.jsx)(t.h3,{id:"parquet-support",children:"Parquet Support"}),"\n",(0,a.jsx)(t.p,{children:"Many customers have data stored in parquet format.\nParquet is a columnar storage format that is optimized for reading and writing large datasets.\nWe are happy to announce that nodestream now supports parquet as a first class citizen."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsxs)(t.strong,{children:["Check out the docs on it ",(0,a.jsx)(t.a,{href:"/docs/docs/reference/extractors/#the-file-extractor-family",children:"here"})]}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Core Contributors to this feature include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/zprobst",children:"Zach Probst"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/bechbd",children:"Dave Bechberger"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/Cole-Greer",children:"Cole Greer"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/leszek-bq",children:"Leszek Kurzyna"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"include-properties-from-maps",children:"Include Properties From Maps"}),"\n",(0,a.jsxs)(t.p,{children:["In the past, each property you wanted to include in the pipeline had to be explicitly defined in the pipeline configuration.\nThis was a bit cumbersome and error prone.\nStarting with this release, you can now include all properties by defining an expression that returns a map at the ",(0,a.jsx)(t.code,{children:"properties"})," key directly instead of a mapping of property names to expressions."]}),"\n",(0,a.jsxs)(t.p,{children:["For example, here are two examples on the ",(0,a.jsx)(t.code,{children:"properties"})," and ",(0,a.jsx)(t.code,{children:"source_node"})," interpretations:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"- type: source_node\n  node_type: User\n  key:\n    email: !jmespath email\n  properties: !jmespath path.to.properties.mapping\n  normalization:\n    do_trim_whitespace: true\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"- type: properties\n  properties: !jmespath path.to.properties.mapping\n  normalization:\n    do_lowercase_strings: true\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsxs)(t.strong,{children:["Check out the docs on it ",(0,a.jsx)(t.a,{href:"/docs/docs/reference/interpreting",children:"here"})]}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Core Contributors to this feature include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/zprobst",children:"Zach Probst"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/bechbd",children:"Dave Bechberger"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"performance-improvements",children:"Performance Improvements"}),"\n",(0,a.jsxs)(t.p,{children:["We've made a small number of performance improvements to the core of nodestream that should result in faster processing times and lower memory usage.\nMost notably, we've cache the ",(0,a.jsx)(t.code,{children:"last_ingested_at"})," timestamp for nodes and relationships to reduce the number of times we create objects in memory.\nWe've observed a 10% improvement in processing times and a 5% reduction in memory usage in our testing."]}),"\n",(0,a.jsx)(t.p,{children:"Core Contributors to this feature include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/zprobst",children:"Zach Probst"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/yasonk",children:"Yason Khaburzaniya"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/grantleehoffman",children:"Grant Hoffman"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2874:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/migrations-1ede1ab3d5438cdca24d66cfa6d66231.gif"},6700:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/neptune-2c1c78b173e824fc1e824f54287e467f.gif"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(6540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);