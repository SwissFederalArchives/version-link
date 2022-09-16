# Scope
The **version.link schema** does specify a schema to handle different **Versions** of **Identities** within **Hierarchies**. Identities according to this schema are the principal resources of interest and are very broadly understood. Identities could be municipalities, businesses, addresses, political positions, budget entities, public authorities, measurement stations et cetera. These Identities all evolve in their state thereby creating different Versions of themselves. The Versions build the unbroken history of the Indentity in representing a snapshot of the Identity for a given point in time or a given development stage. The version.link schema enables to model Identities in hierarchical systems like communities that are parts of districts that are in turn parts of a country. In contrast to the versioning of datasets, the version.link schema is specialized on the morphology of Identities and its changes over time.

The version.link schema has deliberately quite a narrow focus and does not try to solve every imaginable challenge concering versioning of Identities. This is to ensure the compactness of the version.link schema. Respecting the fact, that different data has got different need, version.link schema contains a [FAQ](#FAQ) that gives some hints for individual extensions to the version.link schema for customized solutions.  

# The Strictly Growing *Version Graph*
Alle the versions of identities are collected within the *version graph*. The important characteristic of this graph is its strict growth, meaning that triples on the *version graph* must not be changed or deleted. The only allowed operation ist to add new triples. This will ensure the complete history of any identity.

# The Ever Changing *Identity Graph*
The idea of the *identity graph* is to have a snapshot of every identity without any history attached to it. The *identity graph* does not add any knowledge to the *version graph* it only duplicates certain elements from the *version graph* from identites in a certain state. Usually the *identity graph* will be a snapshot of the current time. The *identity graph* can be materialised in the triple store or generated "on the fly" or can be omissioned alltogether. A reason for not only having successing versions but also a current identity is the idea of making it possible to link to stable identity IDs that do not change with every version and also to hide the complexity of an evolving identity if the user has no interest in the development but only in the current state of the identity. 

The following image tries to illustrate the connections between itentities and its versions residing in ther respective graphs. For better clarity, the picture does not represent all the mandatory triples required by the version.link schema:

![Basic version.link schema structure](./img/basics.svg)

A new version of a identity is the result of one of the following changes:

* **Morphological change**: e.g. separation or combination of identities
* **Change of properties**: the identity changes its properties (e.g. name or competence)
* **Change in hierarchy**: the identity changes its level or its position within the hierarchy

# Identities and Identifiers
The Identity is bound to a certain Identifier. E.g. a certain municipality usually has got a unique number that identifies the municipality within the country. This number is usually used to create the URI of this identity. There are changes that do not change the identity itself, meaning the new Version still belongs to the same entity (e.g. change of name). Other changes involve the deprecation of Identities (e.g. combination of two municipalities, at most one identity "survives" this process). It is important that such deprecated Identities are not deleted from the *identity graph* to preserve links to this identity. To clarify that the identity does not exist anymore, a class [Deprecated](#Deprecated) is added.

# History
The version.link schema was developed for the specific use case of the [Swiss official commune register](https://www.bfs.admin.ch/bfs/en/home/basics/swiss-official-commune-register.html). Communes (municipalities) build a hierarchical system and undergo certain changes within time. Communes merge, split, change their names and belonging to the upper hierarchy levels. The Federal Statistical Office publishes a "Historisiertes Gemeindeverzeichnis" (only in [DE](https://www.bfs.admin.ch/bfs/de/home/grundlagen/agvch/historisiertes-gemeindeverzeichnis.html)/FR/IT) in XML format.
