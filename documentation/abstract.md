# Scope
The **version.link schema** does specify a schema to handle different **versions** of **identities** within **hierarchies**. Identities according to this schema are the principal ressources of interest and are very broadly understood. Identities could be municipalities, businesses, addresses, political positions, budget entities, public authorities, measurement stations et cetera. These identities all evolve in their state thereby creating different versions of themselves. The versions build the unbroken history of the indentity in representing a snapshot of the indentity for a given point in time or a given development stage. The version.link schema enables to model identities in hierarchical systems like communities that are parts of districts that are in turn parts of a country. In contrast to the versioning of datasets, the schema is specialized on the morphology of identities and its changes in time. 

# The Monotonic *Version Graph*

# The Changing *Identity Graph*


The reason for not only having successing versions but also a current identity is the idea to make it possible to link to stable identity IDs that do not change with every version and also to hide the complexity of a evolving identity if the user has no interest in the development but only in the current state of the identity. The following image tries to illustrate the connections between versions, identities and change events:

![Basic version.link schema structure](./img/basics.svg)

A new version of a identity is the result of one of the following changes:

* **Morphological change**: e.g. separation or combination of identities
* **Change of name**: the identity changes its name
* **Change in hierarchy**: the identity changes its level within the hierarchy

# History
The version.link schema was developed for the specific use case of the [Swiss official commune register](https://www.bfs.admin.ch/bfs/en/home/basics/swiss-official-commune-register.html). Communes (municipalities) build a hierarchical system and undergo certain changes within time. Communes merge, split, change their names and belonging to the upper hierarchy levels. The Federal Statistical Office publishes a "Historisiertes Gemeindeverzeichnis" (only in [DE](https://www.bfs.admin.ch/bfs/de/home/grundlagen/agvch/historisiertes-gemeindeverzeichnis.html)/FR/IT) as XML files that are converted based on the version.link schema into [[[rdf11-primer]]].

# Monotonic Growth
An important principle of version.link is the idea to have a continuous and complete documentation of all the changes of the elements. Therefore it is important to note, that the different Versions of an Identity can only be changed by adding further triples. Existing triples in Versions must not be altered or deleted otherwise parts of the history would be destroyed.
