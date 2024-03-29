# Scope

The **version.link schema** does specify a schema to handle different **versions** of **identities** within **hierarchies**. Identities according to this schema are the principal resources of interest and are very broadly understood. Identities could be:

* municipalities
* businesses
* addresses
* buildings
* political positions
* budget entities
* public authorities
* measurement stations
* ... 

These identities all evolve in their state thereby creating different versions of themselves. The versions build the unbroken history of the identity in representing the identity for all points in time or all development stages. The version.link schema enables to model identities in hierarchical systems like communities that are parts of districts that are in turn parts of a country. The version.link schema is not intended for versioning observation data like population development, temperature sequences (typical tabular data) but is specialized on the morphology of identities and its changes over time.

The version.link schema has deliberately quite a narrow focus and does not try to solve every imaginable challenge concerning versioning of identities. This is to ensure the compactness of the version.link schema. Respecting the fact, that different data has got different needs, version.link schema contains a [FAQ](#faq) that hints at possible user created extensions to the version.link schema for customized and domain specific solutions.  

# The Strictly Growing *Version Graph*

All the [vl:Version](#Version)s of [vl:Identity](#Identity)s are collected within the *Version Graph*. The important characteristic of this graph is its strict growth, meaning that triples on the *Version Graph* must not be changed or deleted. The only allowed operation is to add new triples. This will ensure the complete history of any [vl:Identity](#Identity).

# The Ever Changing *Identity Graph*

The idea of the *Identity Graph* is to have a snapshot of every [vl:Identity](#Identity) without any history attached to it. The *Identity Graph* does not add any knowledge to the *Version Graph* it only duplicates certain elements from the *Version Graph* from [vl:Identity](#Identity)s in a certain state. Usually the *Identity Graph* will be a snapshot of the current time. The *Identity Graph* can be materialized in the triple store or generated "on the fly" or can be skipped altogether. A reason for not only having succeeding [vl:Version](#Version)s but also a current [vl:Identity](#Identity) is the idea of making it possible to link to [vl:Identity](#Identity) URIs that do not change with every [vl:Version](#Version) and to hide the complexity of an evolving [vl:Identity](#Identity) if the user has no interest in the development but only in the current state of the [vl:Identity](#Identity).

The following image tries to illustrate the relationship between [vl:Identity](#Identity)s and its [vl:Version](#Version)s residing in their respective graphs. For better clarity, the picture does not represent all the mandatory triples required by the version.link schema:

![Basic version.link schema structure](./img/basics.svg "Relationship between [vl:Identity](#Identity)s and [vl:Version](#Version)s.")

A new [vl:Version](#Version) of an [vl:Identity](#Identity) is the result of one of the following changes:

* **Morphological change**: e.g. separation or combination of identities
* **Change of name**: the identity changes its name
* **Change in hierarchy**: the identity changes its level or its position within the hierarchy

The set of all possible changes is deliberately chosen quite narrow. Recommendations to extensions to the changes that lead to new [vl:Version](#Version)s of Identies are given in the [FAQ](#faq).

# Identities and Identifiers

The [vl:Identity](#Identity) is bound to a certain identifier. E.g. a certain municipality usually has got a unique number that identifies the municipality within the country. This number is usually used to create the URI of this [vl:Identity](#Identity). There are changes that do not change the [vl:Identity](#Identity) itself, meaning the new [vl:Version](#Version) still belongs to the same entity (e.g. change of name). Other changes involve the deprecation or creation of [vl:Identity](#Identity)s (e.g. combination of two municipalities which leaves at least one [vl:Identity](#Identity) deprecated and can also create completely new [vl:Identity](#Identity)s). It is important that such deprecated [vl:Identity](#Identity)s are not deleted from the *Identity Graph* to preserve links to this [vl:Identity](#Identity). To clarify that the [vl:Identity](#Identity) does not exist anymore, a class [Deprecated](#Deprecated) is added.

# History of the version.link development

The version.link schema was developed for the specific use case of the [Swiss official commune register](https://www.bfs.admin.ch/bfs/en/home/basics/swiss-official-commune-register.html). Communes (municipalities) build a hierarchical system and undergo certain changes within time. Communes merge, split, change their names and belonging to the upper hierarchy levels. The Federal Statistical Office publishes a "Historisiertes Gemeindeverzeichnis" (only in [DE](https://www.bfs.admin.ch/bfs/de/home/grundlagen/agvch/historisiertes-gemeindeverzeichnis.html)/FR/IT) in XML format.
