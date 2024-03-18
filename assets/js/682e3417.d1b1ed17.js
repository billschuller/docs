"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4516],{2308:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(7624),r=t(2172);const o={sidebar_position:2},s="At a Glance",i={id:"at-a-glance",title:"At a Glance",description:"Understand the fundemental concepts in Nodestream.",source:"@site/docs/at-a-glance.md",sourceDirName:".",slug:"/at-a-glance",permalink:"/docs/docs/at-a-glance",draft:!1,unlisted:!1,editUrl:"https://github.com/nodesteram-proj/docs/tree/main/packages/create-docusaurus/templates/shared/docs/at-a-glance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome to Nodestream",permalink:"/docs/docs/intro"},next:{title:"Tutorial - Basics",permalink:"/docs/docs/category/tutorial---basics"}},d={},l=[{value:"What is Nodestream?",id:"what-is-nodestream",level:2},{value:"Core Concepts",id:"core-concepts",level:2},{value:"Pipelines",id:"pipelines",level:3},{value:"Extractors",id:"extractors",level:3},{value:"Transformers and Filters",id:"transformers-and-filters",level:3},{value:"Interpreters and Interpretations",id:"interpreters-and-interpretations",level:3},{value:"Migrations",id:"migrations",level:3},{value:"Projects, Targets, Plugins, Scopes Oh My!",id:"projects-targets-plugins-scopes-oh-my",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"at-a-glance",children:"At a Glance"}),"\n",(0,a.jsx)(n.p,{children:"Understand the fundemental concepts in Nodestream."}),"\n",(0,a.jsx)(n.h2,{id:"what-is-nodestream",children:"What is Nodestream?"}),"\n",(0,a.jsxs)(n.p,{children:["Nodestream is a framework for dealing with semantically modeling data as a graph.\nIt is designed to be flexible and extensible, allowing you to define how data is collected and modeled as a graph.\nIt uses a pipeline-based approach to define how data is collected and processed, and it provides a way to define how the graph should be updated when the schema changes.\nAll of this is done using a simple, human-readable configuration file in ",(0,a.jsx)(n.code,{children:"yaml"})," format.\nTo accomplish this, Nodestream uses a number of core concepts, including pipelines, extractors, transformers, filters, interpreters, interpretations, and migrations.\nThese tools together describe the venacular of nodestream and its Domain Specific Language (DSL)."]}),"\n",(0,a.jsxs)(n.p,{children:["The goal of this document is to provide a high-level overview of the core concepts in Nodestream. It is not intended to be a guide or a tutorial, but rather a reference for understanding the core concepts. If thats what you are looking for, ",(0,a.jsx)(n.strong,{children:"check out the"})," ",(0,a.jsx)(n.a,{href:"../tutorial-basics/create-a-new-project",children:"Tutorial Series"})," starting with creating a new project."]}),"\n",(0,a.jsx)(n.h2,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,a.jsx)(n.h3,{id:"pipelines",children:"Pipelines"}),"\n",(0,a.jsx)(n.p,{children:"Pipelines are the core of nodestream.\nThey define how data is collected and eventually processed into nodes and relationships.\nPipelines are literally a sequence of steps that are executed in order for each piece of data.\nThey consist of extractors (which get data), transformers and filters (which massage data) and interpreters and interpretations (which model data as a graph)."}),"\n",(0,a.jsx)(n.p,{children:"For example, this is a simple pipeline that creates a bunch of numbered nodes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'# This extractor generates numbers ad produces records like this:\n# { "index": 1 }\n- implementation: nodestream.pipeline:IterableExtractor\n  factory: range\n  arguments:\n    stop: 100000\n\n# This interpreter takes the records and creates a node for each one.\n- implementation: nodestream.interpreting:Interpreter\n  arguments:\n    interpretations:\n      - type: source_node\n        node_type: Number\n        key:\n          number: !jmespath index\n'})}),"\n",(0,a.jsxs)(n.p,{children:["While nodestream implements the same ETL (Extract, Transform, Load) pattern as other tools, it is primarily focused on the last mile of the process: the Load into a graph database.\nThis is why the pipeline is focused on defining how data is modeled as a graph, rather than how it is transformed or extracted.\nNodestream does have support for transforming and filtering data, but it is not the primary focus of the framework.\nIf you have big data or complex transformations, you should consider using a tool like ",(0,a.jsx)(n.a,{href:"https://airflow.apache.org/",children:"Apache Airflow"})," to do the heavy lifting and then use nodestream to model the data as a graph and load it into a graph database."]}),"\n",(0,a.jsx)(n.h3,{id:"extractors",children:"Extractors"}),"\n",(0,a.jsxs)(n.p,{children:["Extractors are the first step in a pipeline.\nThey are responsible for getting data from somewhere and producing records. Records are just dictionaries of data that are passed through the pipeline. And nodstream ",(0,a.jsx)(n.a,{href:"../reference/extractors",children:"has a bunch built in"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"transformers-and-filters",children:"Transformers and Filters"}),"\n",(0,a.jsx)(n.p,{children:"Transformers and filters are optional steps in a pipeline.\nThey are responsible for massaging the data in some way.\nTransformers are used to change the data in some way, while filters are used to remove records from the pipeline based on some condition."}),"\n",(0,a.jsx)(n.p,{children:"For example, you might make a transformer that does some math on the number, or a filter that removes numbers that are not even.\nThese could be implemented in python and referenced in your pipeline file."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from nodestream.pipeline import Transformer, Filter\n\nclass AddOne(Transformer):\n    async def transform_reocrd(self, record):\n        record['number'] += 1\n        return record\n\n\nclass IsEven(Filter):\n    async def filter_record(self, record):\n        return record['number'] % 2 == 0\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"- implementation: nodestream.pipeline:IterableExtractor\n  factory: range\n  arguments:\n    stop: 100000\n\n- implementation: my_module.AddOne # Transformer\n- implementation: my_module.IsEven # Filter\n\n- implementation: nodestream.interpreting:Interpreter\n  arguments:\n    interpretations:\n      - type: source_node\n        node_type: Number\n        key:\n          number: !jmespath index\n"})}),"\n",(0,a.jsx)(n.h3,{id:"interpreters-and-interpretations",children:"Interpreters and Interpretations"}),"\n",(0,a.jsx)(n.p,{children:"Interpreters provide a way to map your data that you have extracted (and optionally transformed and filtered) into nodes and relationships in the graph.\nInterpretations are the individual instructions that define how the data should be modeled as nodes and relationships."}),"\n",(0,a.jsxs)(n.p,{children:["For example, from our previous example, we have an interpreter that creates a node for each number by using the ",(0,a.jsx)(n.code,{children:"source_node"})," interpretation:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"- implementation: nodestream.interpreting:Interpreter\n  arguments:\n    interpretations:\n      - type: source_node\n        node_type: Number\n        key:\n          number: !jmespath index\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to dive deeper into the interpretation system, ",(0,a.jsx)(n.strong,{children:"check out the"})," ",(0,a.jsx)(n.a,{href:"../tutorials-intermediate/source-nodes",children:"Source Node Model"})," and ",(0,a.jsx)(n.a,{href:"../tutorials-intermediate/relationship-building-techniques",children:"Relationship Building"})," tutorials."]}),"\n",(0,a.jsx)(n.h3,{id:"migrations",children:"Migrations"}),"\n",(0,a.jsxs)(n.p,{children:["In nodestream, migrations are a way to define how the graph should be updated when the schema changes.\nSimilar to frameworks like ",(0,a.jsx)(n.a,{href:"https://docs.djangoproject.com/en/5.0/topics/migrations/",children:"Django"})," and ",(0,a.jsx)(n.a,{href:"https://alembic.sqlalchemy.org/en/latest/",children:"Alembic"}),", migrations are a way to define how the graph should be updated when the schema changes."]}),"\n",(0,a.jsxs)(n.p,{children:["In nodestream, after you make changes to one of your pipelines, you can run ",(0,a.jsx)(n.code,{children:"nodestream migrations make"})," to generate a migration file.\nAssume you just added a new relationship to a node type in your schema.\nIf you ran ",(0,a.jsx)(n.code,{children:"nodestream migrations make"}),", it would generate a file in the ",(0,a.jsx)(n.code,{children:"migrations"})," directory of your project that looks something like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  - \"20240223074039.yaml\"\nname: '20240223074041'\noperations:\n- arguments:\n    keys: !!set {}\n    name: KNOWS\n    properties: !!set\n      last_ingested_at: null\n  operation: CreateRelationshipType\n- arguments:\n    field_name: last_ingested_at\n    relationship_type: KNOWS\n  operation: AddAdditionalRelationshipPropertyIndex\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you look carefully, you can see that this file is a list of operations that need to be performed to update the graph to reflect the new schema and should reflect the changes you made to your pipeline."}),"\n",(0,a.jsxs)(n.p,{children:["This file will contain the changes that need to be made to the graph to reflect the new schema.\nThen you can run ",(0,a.jsx)(n.code,{children:"nodestream migrations run -t my-db"})," to apply the migration and update the graph to the ",(0,a.jsx)(n.code,{children:"my-db"})," target in your configuration."]}),"\n",(0,a.jsx)(n.h3,{id:"projects-targets-plugins-scopes-oh-my",children:"Projects, Targets, Plugins, Scopes Oh My!"}),"\n",(0,a.jsxs)(n.p,{children:["A nodestream project is defined in terms of a project file (",(0,a.jsx)(n.code,{children:"nodestream.yaml"}),").\nThis file contains the configuration for the project, including the pipelines, database targets, and plugin configurations.\nA project can have multiple targets, which are different databases that you want to load data into.\nFor example, you might have a ",(0,a.jsx)(n.code,{children:"dev"})," target that points to a local development database, and a ",(0,a.jsx)(n.code,{children:"prod"})," target that points to a production database."]}),"\n",(0,a.jsx)(n.p,{children:"A plugin is a way to extend nodestream with custom functionality.\nSince many parts of nodestream are pluggable, there is many possible things a plugin could do.\nPlugins can vary from adding new pipelines and pipeline steps, to adding new database connectors, to adding new interpreters and interpretations.\nThe possibilities are endless."}),"\n",(0,a.jsxs)(n.p,{children:["A scope is effectively a namespace for your pipelines.\nIt is a way to organize your pipelines into logical groups.\nFor example, you might have a ",(0,a.jsx)(n.code,{children:"crons"})," scope for pipelines that are run on a schedule, and a ",(0,a.jsx)(n.code,{children:"manual"})," scope for pipelines that are run on demand."]}),"\n",(0,a.jsxs)(n.p,{children:["If you are interested in diving deeper into project configuration, ",(0,a.jsx)(n.strong,{children:"check out the"})," ",(0,a.jsx)(n.a,{href:"../tutorials-intermediate/configuring-projects",children:"Project Configuration Tutorial"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>s});var a=t(1504);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);