# Scope
The **version.link schema** does specify a structure to handle different **versions** of **identities** (concepts) within **hierarchies**. In contrast to the versioning of datasets, the schema is specialized on the morphology of identities and its changes in time. 

A new version of a identity is the result of one of the following changes:

* **Morphological change**: e.g. separation or combination of identities
* **Change of name**: the identity changes its name
* **Change in hierarchy**: the identity changes its level within the hierarchy

# History
The version.link schema was developed for the specific use case of the [Swiss official commune register](https://www.bfs.admin.ch/bfs/en/home/basics/swiss-official-commune-register.html). Communes (municiaplities) build a hierarchical system and undergo certain changes within time. Communes merge, split, change their names and belonging to the upper hierarchy levels. The Federal Statistical Office publishes a "Historisiertes Gemeindeverzeichnis" (only in the [DE](https://www.bfs.admin.ch/bfs/de/home/grundlagen/agvch/historisiertes-gemeindeverzeichnis.html)/FR/IT) as XML Files that are converted based on the version.link schema into RDF.
