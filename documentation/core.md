# version.link

## Prefixes
### version.link
| PREFIX | IRI | Description |
| --- | --- | --- |
| vl | https://version.link/ | version.link|
| schema | [http://schema.org/](http://schema.org) | Used for the profile. |
| skos | [http://www.w3.org/2004/02/skos/core#](https://www.w3.org/2009/08/skos-reference/skos.html) | Used for the profile. |
| dcterm | [http://purl.org/dc/terms/](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) | Used for the profile. |
| xsd | [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#) | Used for string literal types. |

### For the examples
| PREFIX | IRI | Description |
| --- | --- | --- |
| as | [https://schema.ld.admin.ch/](https://schema.ld.admin.ch/) | |
| mi | https://ld.admin.ch/municipality/ | |
| miv | https://ld.admin.ch/municipality/version/ | |
| dt | https://ld.admin.ch/dt/ | |
| dtv | https://ld.admin.ch/dt/version/ | |
| mce | https://ld.admin.ch/municipality/changeevent/ | |

## Introduction to the schemata of version.link

version.link consists of three schemata:

* [**Core Schema**](#Core_Schema): Defines the fundamental principle of [Identities](#Identity) their [Versions](#Version) and the current [status](#Deprecated) of these elements. Furthermore, the [VersionedIdentitySet](#VersionedIdentitySet) as a super set of the Identities and Versions is introduced.
* [**Change Event Schema**](#Change_Event_Schema): The ChangeEvent as element that links different [Versions](#Version) together is introduced with the corresponding change types.
* [**Profile Schema**](#Profile_Schema): version.link allows to define different profiles and therefore is able to tanke into account different alredy existing vocabularies to describe the [Identities](#Identity), [Versions](#Version) and [ChangeEvents](#ChangeEvent).

## Core Schema {#Core_Schema}

### Classes

#### vl:Identity {#Identity}
Represents the Identity (concept). The reason to not only have different [Versions](#Version) but also an actual Identity is the idea to have the possibility to build easier [[[sparql11-query]]] queries as long as the Identity history is not of much relevance. The Identity can usually be created programmatically (e.g. [[[sparql11-update]]]) from the corresponding Versions.

In [[[turtle]]] syntax, an example Version might look like this:

<aside class='example' title='Identity example'>

```turtle example
mi:3871 a vl:Identity;
    a as:PoliticalMunicipality;
    vl:version miv:16610;
    vl:inVersionedIdentitySet <https://ld.admin.ch/municipality>;
    schema:identifier "3871";
    schema:name "Klosters";
    schema:isPartOf dt:1849.
```

</aside>

#### vl:Version {#Version}
A certain state of the [Identity](#Identity). A change in the Identity leads to a new Version.

<aside class='example' title='Version example'>

```turtle example
miv:13233 a vl:Version;
    a as:MunicipalityVersion;
    vl:identity mi:3871;
    vl:inVersionedIdentitySet <https://ld.admin.ch/municipality>;
    schema:identifier "13233";
    schema:name "Klosters-Serneus";
    schema:isPartOf dtv:10175;
    vl:predecessor miv:11299;
    vl:successor miv:14310.
```

</aside>
    
#### vl:Deprecated {#Deprecated}
Added to [Versions](#Version) and [Identities](#Identity) to signal that they are deprecated. This class is especially useful, if Identities and Versions do not use start- and stop dates. Deprecated Identities should not be deleted in the [VersionedIdentitySet](#VersionedIdentitySet) to avoid broken links.

#### vl:VersionedIdentitySet {#VersionedIdentitySet}
Represents the class of all the different objects of the versioned hierarchy.

### Properties

#### vl:identity {#identity}
Links a [Version](#Version) to the corresponding [Identity](#Identity).

#### vl:version {#version}
Links a [Identity](#Identity) to the [Version](#Version) its currently based on.

#### vl:predecessor {#predecessor}
Links a certain [Version](#Version) to its predecessor Version. Can be used multiple times in a Version if multiple predecessor Versions exist (e.g. [Combination](#Combination).

#### vl:successor {#successor}
Links a certain [Version](#Version) to its successor Version. Can be used multiple times in a Version if multiple successor Versions exist (e.g. [Separation](#Separation).

#### vl:startEvent {#startEvent}
Links a certain [Version](#Version) to the [ChangeEvent](#ChangeEvent) that started the Version.

#### vl:endEvent {#endEvent}
Links a certain [Version](#Version) to the [ChangeEvent](#ChangeEvent) that ended the Version.

#### vl:inVersionedIdentitySet {#inVersionedIdentitySet}
Connects an [Identity](#Identity), [Version](#Version) or [ChangeEvent](#ChangeEvent) to a specific [VersionedIdentitySet](#VersionedIdentitySet)


## Change Event Schema {#Change_Event_Schema}

The succession of different [Versions](#Version) of an [Identity](#Identity) can be constructed either with direct linking of the Versions with [successor](#successor) and [predecessor](#predecessor) or by inserting a [ChangeEvent](#ChangeEvent) that enables to state more precisely the kind of ChangeEvent. The following picture illustrates this two variants:

![Successor Variants](./img/successor_variants.svg)

### Classes

#### vl:ChangeEvent {#ChangeEvent}
A ChangeEvent connects different [predecessors](#predecessor) and [successors](#successor) of a specific change and has a single change type added. It is also possible to add multiple ChangeEvents with other change types and ChangeEvent that connect only a subset of all the predecessors and successors with more domain specific change types. The ChangeEvent should also have a date. ChangeEvents are instantaneous events with no duration.

### Change Type Classes

#### vl:InitialRecording
Change type of a [ChangeEvent](#ChangeEvent). To create a [Version](#Version) without any [predecessors](#predecessor).

#### vl:ChangeOfName {#ChangeOfName}
Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a change of name of the corresponding [Identity](#Identity).

#### vl:ChangeInHierarchy {#ChangeInHierarchy}
Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a change in hierarchy: [Version](#Version) changes level within the hierarchy or other Versions in upper or lower hierarchy change with effects on the Version present.

#### vl:Separation {#Separation}
Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a separation of the corresponding [Identity](#Identity) into multiple Identities.

#### vl:Combination {#Combination}
Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a combination of the corresponding [Identities](#Identity) into a single Identity.


## Profile Schema {#Profile_Schema}

### Classes

#### vl:Profile {#Profile}
The Profile enables the use of different vocabularies for the generic properties depending on the domain practices. By setting this profile it is possible to use the version.link SPARQL queries for different ontologies. This ontology provides some common mappings which can be taken into account as guidelines.

In [[[turtle]]] syntax, an example Profile might look like this:

<aside class='example' title='Schema.org Profile example'>

```turtle example
vl:Profile_SchemaOrg a vl:Profile;
    vl:identifierPredicate schema:identifier;
    vl:namePredicate schema:name;
    vl:datePredicate schema:date;
    vl:startDatePredicate schema:startDate;
    vl:endDatePredicate schema:endDate;
    vl:hasPartPredicate schema:hasPart;
    vl:isPartOfPredicate schema:isPartOf.
```

</aside>

<aside class='example' title='SKOS Profile example'>

```turtle example
vl:Profile_SKOS a vl:Profile;
    vl:identifierPredicate skos:notation;
    vl:namePredicate skos:prefLabel;
    vl:datePredicate dcterms:date;
# missing    vl:startDatePredicate ;
# missing    vl:endDatePredicate ;
    vl:hasPartPredicate skos:narrower;
    vl:isPartOfPredicate skos:broader.
```

</aside>


### Properties

#### vl:identifierPredicate {#identifierPredicate}
Binds the identification to a [Version](#Version) or [Identity](#Identity). Allows to use an arbitrary system of identification tokens.

#### vl:namePredicate {#namePredicate}
Binds the name to a [Version](#Version) or [Identity](#Identity).

#### vl:datePredicate {#datePredicate}
Binds the date to a [ChangeEvent](#ChangeEvent).

#### vl:startDatePredicate {#startDatePredicate}
Binds the start date to a [Version](#Version).

#### vl:endDatePredicate {#endDatePredicate}
Binds the end date to a [Version](#Version).

#### vl:hasPartPredicate {#hasPartPredicate}
Allows to construct the hierarchy of objects within the [VersionedIdentitySet](#VersionedIdentitySet). Connects a higher level [Version](#Version) to a lower level Version or a higher level [Identity](#Identity) to a lower level Identity. This links are only created within Versions or Identities.

#### vl:isPartOfPredicate {#isPartOfPredicate}
Allows to construct the hierarchy of objects within the [VersionedIdentitySet](#VersionedIdentitySet). Connects a lower level [Version](#Version) to a higher level Version or a lower level [Identity](#Identity) to a higher level Identity. This links are only created within Versions or Identities.

## Linking Across Hierarchy Boundaries
    
For linking Versions of one hierarchy level to Versions of another hierarchy level (municipalities link to their district), different possibilities exist:
    
* Linking only from lower hierarchy levels to the upper level(s)
* Linking only from upper hierarchy levels to the lower level(s)
* Linking in both directions
    
From the point of view of a SPARQL query, these three variants are more or less identical and do not exhibit any particular advantages. If there are lots of Versions in a lower level belonging to one version in an upper hierarchy level, it may be advantegous to only link from the lower to the uper level because of clarity in dereferencing the upper level (otherwise it is possible that the upper level has a myriad of [hasPartPredicate](#hasPartPredicate) entries).
    
It is important to decide how to handle changes in one hierarchy level with regard to the linked Versions in other hierarchy levels: If it is not acceptable to have isPartOfPredicates or hasPartPredicates from current versions (i.e. without Deprecated) to Versions with a Deprecated class or vice versa, each change of a Version in any hiearchy level will lead to a cascading change of every single Version in every single hierarchy level:
    
For example, if a municipality changes, a new municipality Version will be created. The old Version will get a class Deprecated added and therefore, a Link from a Deprecated Version of a municipality to a current Version of district will be established. This can only be prevented by creating a new Version for this district as well and adding a class Deprecated to the old district Version. But this "deprecation" of the old district means that all the municipalities belonging to this now Deprecated district must iterate to the next Version. At the same time, the new Version of the district will influence the upper hierarchy as well (with the same reasoning as before) and these changes will in turn propagate down to other districts as well, leading to the complete cascding iteration of all Versions in all hierarchy levels.

To prevent these cascading iterations, it could be accepted, that there are links from Deprecated Versions to current Versions in other hierarchy levels and vice versa. To get the current picture of links from Versions without Deprecated to Versions without Deprecated only, the SPARQL query must filter these links: To decide which of both (or even more) isPartOfPredicate relations is the current one, the linked district Versions could be examined for a Deprecated class or an endDatePredicate.
