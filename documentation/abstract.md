# Scope
The **version.link schema** does specify a schema to handle different **versions** of **identities** within **hierarchies**. Identities according to this schema are the principal ressources of interest and are very broadly understood. Identities could be municipalities, businesses, addresses, political positions, budget entities, public authorities, measurement stations et cetera. These identities all evolve in their state thereby creating different versions of themselves. The versions build the unbroken history of the indentity in representing a snapshot of the indentity for a given point in time or a given development stage. The version.link schema enables to model identities in hierarchical systems like communities that are parts of districts that are in turn parts of a country. In contrast to the versioning of datasets, the schema is specialized on the morphology of identities and its changes in time. 

# The Monotonic Growing *Version Graph*
Alle the versions of identities are collected within the *version graph*. The important characteristic of this graph is its monotonic growth, meaning that triples on the *version graph* must not be changed or deleted. The only allowed operation ist to add new triples. This will ensure the complete history of any identity.

# The Ever Changing *Identity Graph*
The idea of the *identity graph* is to have a snapshot of every identity without any history attached to it. The *identity graph* does not add any knowledge to the *version graph* it only duplicates certain elements from the *version graph* from identites in a certain state. Usually the *identity graph* will be a snapshot of the current time. The *identity graph* can be materialised in the triple store or generated "on the fly" or can be omissioned alltogether. A reason for not only having successing versions but also a current identity is the idea of making it possible to link to stable identity IDs that do not change with every version and also to hide the complexity of an evolving identity if the user has no interest in the development but only in the current state of the identity. 

The following image tries to illustrate the connections between itentities and its versions residing in ther respective graphs. For better clarity, the picture does not represent all the mandatory triples required by the version.link schema:

![Basic version.link schema structure](./img/basics.svg)

A new version of a identity is the result of one of the following changes:

* **Morphological change**: e.g. separation or combination of identities
* **Change of properties**: the identity changes its properties (e.g. name or competence)
* **Change in hierarchy**: the identity changes its level or its position within the hierarchy

# History
The version.link schema was developed for the specific use case of the [Swiss official commune register](https://www.bfs.admin.ch/bfs/en/home/basics/swiss-official-commune-register.html). Communes (municipalities) build a hierarchical system and undergo certain changes within time. Communes merge, split, change their names and belonging to the upper hierarchy levels. The Federal Statistical Office publishes a "Historisiertes Gemeindeverzeichnis" (only in [DE](https://www.bfs.admin.ch/bfs/de/home/grundlagen/agvch/historisiertes-gemeindeverzeichnis.html)/FR/IT) in XML format.
