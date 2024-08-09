"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6349],{8811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var a=t(4848),o=t(8453);const s={title:"Migrations Design in Nodestream 0.12",authors:["zprobst"],tags:["migrations","nodestream"]},i="Migrations Design in Nodestream 0.12",r={permalink:"/docs/blog/2024/05/14/migrations-evolution",editUrl:"https://github.com/nodesteram-proj/docs/tree/main/packages/create-docusaurus/templates/shared/blog/2024-05-14-migrations-evolution/index.md",source:"@site/blog/2024-05-14-migrations-evolution/index.md",title:"Migrations Design in Nodestream 0.12",description:"In the release notes for Nodestream 0.12, we mentioned that we had added support for migrations.",date:"2024-05-14T00:00:00.000Z",formattedDate:"May 14, 2024",tags:[{label:"migrations",permalink:"/docs/blog/tags/migrations"},{label:"nodestream",permalink:"/docs/blog/tags/nodestream"}],readingTime:6.82,hasTruncateMarker:!1,authors:[{name:"Zach Probst",title:"Maintainer of Nodestream",url:"https://github.com/zprobst",imageURL:"https://github.com/zprobst.png",key:"zprobst"}],frontMatter:{title:"Migrations Design in Nodestream 0.12",authors:["zprobst"],tags:["migrations","nodestream"]},unlisted:!1,prevItem:{title:"Nodestream 0.13 Release",permalink:"/docs/blog/2024/08/09/nodestream-0-13"},nextItem:{title:"Nodestream Neptune Support",permalink:"/docs/blog/2024/04/26/nodestream-neptune-support"}},d={authorsImageUrls:[void 0]},h=[{value:"Evolutionary Database Design",id:"evolutionary-database-design",level:2},{value:"Why Migrations?",id:"why-migrations",level:2},{value:"Surveying All The Types of Schema Changes",id:"surveying-all-the-types-of-schema-changes",level:2},{value:"Creating New Nodes and Edges Types",id:"creating-new-nodes-and-edges-types",level:3},{value:"Removing Nodes and Edges Types",id:"removing-nodes-and-edges-types",level:3},{value:"Adding Properties to Nodes and Edges",id:"adding-properties-to-nodes-and-edges",level:3},{value:"Removing Properties from Nodes and Edges",id:"removing-properties-from-nodes-and-edges",level:3},{value:"Adding and Removing Indexes",id:"adding-and-removing-indexes",level:3},{value:"Topological Changes",id:"topological-changes",level:3},{value:"How Migrations Work in Nodestream",id:"how-migrations-work-in-nodestream",level:2},{value:"Are Migrations Any Good?",id:"are-migrations-any-good",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In the release notes for Nodestream 0.12, we mentioned that we had added support for migrations.\nThis is a feature that we have been wanting to add for a long time, and we are excited to finally have it in place.\nIn this post, we will discuss what migrations are, why they are important, and how they work in Nodestream."}),"\n",(0,a.jsx)(n.h2,{id:"evolutionary-database-design",children:"Evolutionary Database Design"}),"\n",(0,a.jsxs)(n.p,{children:["Evolutionary database design is the idea that the database schema should evolve over time as the application changes.\nThis is in contrast to the traditional approach of creating a fixed schema at the beginning of a project and then never changing it.\nWith evolutionary database design, the schema is treated as a living document that can be updated and modified as needed.\nIf you want to go deep into this topic, we recommend reading the ",(0,a.jsx)(n.a,{href:"https://martinfowler.com/articles/evodb.html",children:"Martin Fowler's page"})," on the subject."]}),"\n",(0,a.jsx)(n.h2,{id:"why-migrations",children:"Why Migrations?"}),"\n",(0,a.jsx)(n.p,{children:"Migrations are a way to manage the evolution of the database schema in a controlled and repeatable way.\nThey allow you to define the changes that need to be made to the schema in a series of files that can be run in sequence.\nThis makes it easy to track changes to the schema over time and to apply those changes to multiple environments, such as development, staging, and production."}),"\n",(0,a.jsx)(n.h2,{id:"surveying-all-the-types-of-schema-changes",children:"Surveying All The Types of Schema Changes"}),"\n",(0,a.jsx)(n.p,{children:"Graph databases are schema-less, but the data model is still defined by the relationships between nodes and edges and the properties of those nodes and edges.\nThis means that there is still a schema to manage, even if it is not as rigid as a traditional relational database schema.\nSince nodestream is agnostic to the underlying database, we need to be able to support migrations for all types of databases that nodestream can work with.\nTherefore we need to support migrations that are designed against an abstract graph model and leave the implementation details to the specific database connector.\nSo lets examine the types of schema changes that can exist in a graph database:"}),"\n",(0,a.jsx)(n.h3,{id:"creating-new-nodes-and-edges-types",children:"Creating New Nodes and Edges Types"}),"\n",(0,a.jsx)(n.p,{children:"The most basic type of schema change is creating new node and edge types.\nThis is equivalent to creating a new table in a relational database.\nWhen you create a new node or edge type, you may need to define the properties that it will have and the relationships that it will have with other nodes and edges."}),"\n",(0,a.jsx)(n.p,{children:"Depending on the underlying database, this might involve creating a new index or constraint to enforce the uniqueness of the new node or edge type."}),"\n",(0,a.jsx)(n.h3,{id:"removing-nodes-and-edges-types",children:"Removing Nodes and Edges Types"}),"\n",(0,a.jsx)(n.p,{children:"Conversely, you may also need to remove existing node and edge types.\nThis is equivalent to dropping a table in a relational database.\nMost graph databases do not support leaving orphaned nodes or edges, so you may need to delete all nodes and edges of the type that you are removing."}),"\n",(0,a.jsx)(n.h3,{id:"adding-properties-to-nodes-and-edges",children:"Adding Properties to Nodes and Edges"}),"\n",(0,a.jsx)(n.p,{children:"Another common type of schema change is adding properties to existing nodes and edges.\nThis is equivalent to adding a new column to a table in a relational database.\nWhen you add a property to a node or edge, you may need to define a default value for that property or update existing nodes and edges to have a value for that property."}),"\n",(0,a.jsx)(n.p,{children:"One tricky case is when you add a property that is part of the nodes or edges key.\nIn this case, you may need to update the key of the node or edge to include the new property."}),"\n",(0,a.jsx)(n.h3,{id:"removing-properties-from-nodes-and-edges",children:"Removing Properties from Nodes and Edges"}),"\n",(0,a.jsx)(n.p,{children:"Conversely, you may also need to remove properties from existing nodes and edges.\nThis is equivalent to dropping a column from a table in a relational database.\nWhen you remove a property from a node or edge, you may need to update existing nodes and edges to remove the value for that property."}),"\n",(0,a.jsx)(n.h3,{id:"adding-and-removing-indexes",children:"Adding and Removing Indexes"}),"\n",(0,a.jsx)(n.p,{children:"Another common type of schema change is adding and removing indexes.\nIndexes are used to speed up queries by allowing the database to quickly find nodes and edges that match certain criteria.\nWhen you add an index, you may need to define the properties that the index will be based on and the type of index that will be used.\nWhen you remove an index, you may need to update existing indexes to remove the properties that the index was based on."}),"\n",(0,a.jsx)(n.h3,{id:"topological-changes",children:"Topological Changes"}),"\n",(0,a.jsx)(n.p,{children:"Finally, you may need to make topological changes to the schema such as adding or removing relationships between nodes and edges.\nThis is equivalent to adding or removing foreign keys in a relational database."}),"\n",(0,a.jsx)(n.p,{children:"When you change the adjancency of nodes and edges, you may want to clean up the data to ensure that it is consistent with the new schema.\nThis may involve updating existing nodes and edges to reflect the new relationships or deleting nodes and edges that are no longer needed."}),"\n",(0,a.jsx)(n.h2,{id:"how-migrations-work-in-nodestream",children:"How Migrations Work in Nodestream"}),"\n",(0,a.jsx)(n.p,{children:"In nodestream, migrations are defined as a series of yaml files that describe the changes that need to be made to the schema.\nEach migration file contains a list of operations that need to be performed.\nFor example, creating a new node type or adding a property to an existing node type."}),"\n",(0,a.jsxs)(n.p,{children:["When you run ",(0,a.jsx)(n.code,{children:"nodestream migrations make"})," nodestream will create a new migration file in the ",(0,a.jsx)(n.code,{children:"migrations"})," directory.\nThat process works roughly like this:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Nodestream will look at the current state of the schema by initializing and introspecting all pipelines (A)."}),"\n",(0,a.jsx)(n.li,{children:"Build the state of the schema that is represented by the current migrations (B)."}),"\n",(0,a.jsx)(n.li,{children:"Diff the two states (A and B) to determine the changes that need to be made to the schema."}),"\n",(0,a.jsx)(n.li,{children:"Generate a new migration file that describes the changes that need to be made to the schema."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["When you run ",(0,a.jsx)(n.code,{children:"nodestream migrations run"})," nodestream will apply the migrations in sequence to evolve the schema.\nThat process works roughly like this:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Nodestream reads the migration files into memory and builds a graph of the dependencies between the migrations."}),"\n",(0,a.jsx)(n.li,{children:"Nodestream runs the migrations in topological order, applying the changes to the schema as it goes."}),"\n",(0,a.jsx)(n.li,{children:"Nodestream keeps track of which migrations have been applied so that it can skip them in the future."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Crucially, nodestream does not track all possible schema changes.\nTopological changes are not tracked(see ",(0,a.jsx)(n.a,{href:"#topological-changes",children:"here"}),"), so you will need to handle those manually.\nAdditionally, nodestream does not support rolling back migrations, so you will need to handle that manually as well."]}),"\n",(0,a.jsx)(n.h2,{id:"are-migrations-any-good",children:"Are Migrations Any Good?"}),"\n",(0,a.jsxs)(n.p,{children:["Wondering what Martin Fowler would think of this design given is ",(0,a.jsx)(n.a,{href:"https://martinfowler.com/articles/evodb.html",children:"page on the subject"}),'?\nHe describes the concept of "evolutionary database design" with a set of characterisitcs.\nSome of them are more organizational than technical.']}),"\n",(0,a.jsx)(n.p,{children:"However, some of the technical ones are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"All Database Artifacts are Version Controlled with Application Code:"})," Nodestream's migrations are intended to be source controlled files that are run in sequence and define their dependencies. This makes it easy to evolve changes and continuously integrate them (which is another of the characteristics)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"All database changes are database refactorings"})," Nodestream's migrations are a series of database refactorings that are run in sequence. This makes it easy to track changes to the schema over time and to apply those changes to multiple environments, such as development, staging, and production. We are detecting the changes that need to be made to the schema and applying them in a controlled and repeatable way."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Clearly Separate Database Access Code"})," You generally don't need to write database access code in nodestream, so this is taken care of ","\ud83c\udf86"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Automated the Refactorings"})," This is the main point of migrations. They are automated and can be run in sequence to evolve the schema."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"We are happy with the design of the migrations in nodestream and we think that they are a good fit for the project.\nAs we've mentioned, there are still some major evolutions to be made to migrations, such as the ability to rollback a migration, but we are confident that we are on the right track."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(6540);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);