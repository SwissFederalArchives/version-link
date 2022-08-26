# Scope
The **version.link schema** does specify a structure to handle different **versions** of **identities** (concepts) within **hierarchies**. In contrast to the versioning of datasets, the schema is specialized on the morphology of identities and its changes in time. The basic idea is to to model identities (e.g. a municipality) that are represented in their current state but also as evolving versions that show the development over time of the different identities. The reason for not only having successing versions but also a current identity is the idea to make it possible to link to stable identity IDs that do not change with every version and also to hide the complexity of a evolving identity if the user has no interest in the development but only in the current state of the identity. The following image tries to illustrate the connections between versions, identities and change events:

![Basic version.link schema structure](./img/basics.svg)

A new version of a identity is the result of one of the following changes:

* **Morphological change**: e.g. separation or combination of identities
* **Change of name**: the identity changes its name
* **Change in hierarchy**: the identity changes its level within the hierarchy

# History
The version.link schema was developed for the specific use case of the [Swiss official commune register](https://www.bfs.admin.ch/bfs/en/home/basics/swiss-official-commune-register.html). Communes (municipalities) build a hierarchical system and undergo certain changes within time. Communes merge, split, change their names and belonging to the upper hierarchy levels. The Federal Statistical Office publishes a "Historisiertes Gemeindeverzeichnis" (only in [DE](https://www.bfs.admin.ch/bfs/de/home/grundlagen/agvch/historisiertes-gemeindeverzeichnis.html)/FR/IT) as XML files that are converted based on the version.link schema into [[[rdf11-primer]]].

# Monotonic Growth
An important principle of version.link is the idea to have a coninuous and complete documentation of all the changes of the elements. Therefore it is important to note, that the different Versions of an Identity can only be changed in adding further triples. Consisting triples in Versions cannot be altered or deleted otherwise parts of the history would be deleted.
