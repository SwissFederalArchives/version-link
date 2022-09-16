# Scope
The **version.link schema** does specify a schema to handle different **Versions** of **Identities** within **Hierarchies**. Identities according to this schema are the principal resources of interest and are very broadly understood. Identities could be municipalities, businesses, addresses, political positions, budget entities, public authorities, measurement stations et cetera. These Identities all evolve in their state thereby creating different Versions of themselves. The Versions build the unbroken history of the Indentity in representing a snapshot of the Identity for a given point in time or a given development stage. The version.link schema enables to model Identities in hierarchical systems like communities that are parts of districts that are in turn parts of a country. In contrast to the versioning of datasets, the version.link schema is specialized on the morphology of Identities and its changes over time.

The version.link schema has deliberately quite a narrow focus and does not try to solve every imaginable challenge concering versioning of Identities. This is to ensure the compactness of the version.link schema. Respecting the fact, that different data has got different needs, version.link schema contains a [FAQ](#faq) that hints at possible individual extensions to the version.link schema for customized solutions.  

# The Strictly Growing *Version Graph*
All the Versions of Identities are collected within the *Version Graph*. The important characteristic of this graph is its strict growth, meaning that triples on the *Version Graph* must not be changed or deleted. The only allowed operation ist to add new triples. This will ensure the complete history of any Identity.

# The Ever Changing *Identity Graph*
The idea of the *Identity Graph* is to have a snapshot of every Identity without any history attached to it. The *Identity Graph* does not add any knowledge to the *Version Graph* it only duplicates certain elements from the *Version Graph* from Identites in a certain state. Usually the *Identity Graph* will be a snapshot of the current time. The *Identity Graph* can be materialised in the triple store or generated "on the fly" or can be omissioned altogether. A reason for not only having successing Versions but also a current Identity is the idea of making it possible to link to stable Identity IDs that do not change with every Version and also to hide the complexity of an evolving Identity if the user has no interest in the development but only in the current state of the Identity. 

The following image tries to illustrate the relationship between Itentities and its Versions residing in ther respective graphs. For better clarity, the picture does not represent all the mandatory triples required by the version.link schema:

![Basic version.link schema structure](./img/basics.svg "Relationship between Identities and Versions.")

A new Version of an Identity is the result of one of the following changes:

* **Morphological change**: e.g. separation or combination of Identities
* **Change of name**: the Identity changes its name
* **Change in hierarchy**: the Identity changes its level or its position within the hierarchy

The set of all possible changes is deliberately chosen quite narrow. Recommendations to extensions to the changes that lead to new Versions of Identies are given in the [FAQ](#faq).

# Identities and Identifiers
The Identity is bound to a certain identifier. E.g. a certain municipality usually has got a unique number that identifies the municipality within the country. This number is usually used to create the URI of this Identity. There are changes that do not change the Identity itself, meaning the new Version still belongs to the same entity (e.g. change of name). Other changes involve the deprecation of Identities (e.g. combination of two municipalities: not every Identity "survives" this process). It is important that such deprecated Identities are not deleted from the *Identity Graph* to preserve links to this Identity. To clarify that the Identity does not exist anymore, a class [Deprecated](#Deprecated) is added.

# History
The version.link schema was developed for the specific use case of the [Swiss official commune register](https://www.bfs.admin.ch/bfs/en/home/basics/swiss-official-commune-register.html). Communes (municipalities) build a hierarchical system and undergo certain changes within time. Communes merge, split, change their names and belonging to the upper hierarchy levels. The Federal Statistical Office publishes a "Historisiertes Gemeindeverzeichnis" (only in [DE](https://www.bfs.admin.ch/bfs/de/home/grundlagen/agvch/historisiertes-gemeindeverzeichnis.html)/FR/IT) in XML format.
