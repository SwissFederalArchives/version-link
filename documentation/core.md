# version.link

## Prefixes

### version.link

| PREFIX | IRI | Description |
| :--- | :--- | :--- |
| vl | https://version.link/ | version.link|
| schema | [http://schema.org/](http://schema.org) | Used for the profile. |
| skos | [http://www.w3.org/2004/02/skos/core#](https://www.w3.org/2009/08/skos-reference/skos.html) | Used for the profile. |
| dcterm | [http://purl.org/dc/terms/](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) | Used for the profile. |
| xsd | [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#) | Used for string literal types. |
| rdfs | [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#) | Used for building the class hierarchy of ChangeEvents. |
| rdf | [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#) | Used for typing classes. |

### For the examples

| PREFIX | IRI | Description |
| :--- | :--- | :--- |
| admin | [https://schema.ld.admin.ch/](https://schema.ld.admin.ch/) | |
| mi | https://ld.admin.ch/municipality/ | |
| miv | https://ld.admin.ch/municipality/version/ | |
| dt | https://ld.admin.ch/district/ | |
| dtv | https://ld.admin.ch/district/version/ | |
| mce | https://ld.admin.ch/municipality/changeevent/ | |

## Introduction to the schemata of version.link

version.link consists of three schemata:

* [**Core Schema**](#Core_Schema): Defines the fundamental principle of [Identities](#Identity) their [Versions](#Version) and the current [status](#Deprecated) of these elements. Furthermore, the [VersionedIdentitySet](#VersionedIdentitySet) as a super set of the Identities and Versions is introduced.
* [**Change Event Schema**](#Change_Event_Schema): The ChangeEvent as element that links different [Versions](#Version) together is introduced with the corresponding change types.
* [**Profile Schema**](#Profile_Schema): version.link allows to define different profiles and therefore is able to take into account different already existing vocabularies to describe the [Identities](#Identity), [Versions](#Version) and [ChangeEvents](#ChangeEvent).

## Core Schema {#Core_Schema}

### Classes

#### vl:Identity {#Identity}

Represents the Identity (concept). The reason to not only have different [Versions](#Version) but also an actual Identity is the idea to have the possibility to build easier [[[sparql11-query]]] queries if the Identity history is not of much relevance. The Identity can usually be created programmatically (e.g. [[[sparql11-update]]]) from the corresponding Versions. Identities are part of the *Identity Graph*.

Mandatory and optional properties (and values) for [vl:Identity](#Identity):
| Mandatory | Optional |
| :--- | :--- |
|rdf:type [vl:Identity](#Identity)|[schema:name](https://schema.org/name)|
|[vl:version](#version)|[schema:hasPart](https://schema.org/hasPart)|
|[vl:inVersionedIdentitySet](#inVersionedIdentitySet)|[schema:isPartOf](https://schema.org/isPartOf)|
|[schema:identifier](https://schema.org/identifier)|rdf:type [vl:Deprecated](#Deprecated)|


In [[[turtle]]] syntax, an example Version might look like this:

<aside class='example' title='Identity example'>

```turtle example
mi:3871 a vl:Identity;
    a admin:PoliticalMunicipality;
    vl:version miv:16610;
    vl:inVersionedIdentitySet <https://ld.admin.ch/municipality>;
    schema:identifier "3871";
    schema:name "Klosters";
    schema:isPartOf dt:1849.
```

</aside>

#### vl:Version {#Version}

Versions represent a specified state of the [Identity](#Identity). Certain changes to the property of the real Identity (e.g. change of name) can lead to the creation of a new Version.

Mandatory and optional properties (and values) for [vl:Version](#Version):
| Mandatory | Optional |
| :--- | :--- |
|rdf:type [vl:Version](#Version)|[schema:name](https://schema.org/name)|
|[vl:identity](#identity) (if *Identity Graph* exists)|[vl:startEvent](#startEvent)|
|[vl:identityIdentifier](#identityIdentifier)|[vl:endEvent](#endEvent)|
|[vl:inVersionedIdentitySet](#inVersionedIdentitySet)|[schema:hasPart](https://schema.org/hasPart)|
|[schema:identifier](https://schema.org/identifier)|[schema:isPartOf](https://schema.org/isPartOf)|
|[vl:predecessor](#predecessor) (if applicable)|[schema:validFrom](https://schema.org/validFrom)|
|[vl:successor](#successor) (if applicable)|[schema:validThrough](https://schema.org/validThrough)|
||rdf:type [vl:Deprecated](#Deprecated)|

<aside class='example' title='Version example'>

```turtle example
miv:13233 a vl:Version;
    a admin:MunicipalityVersion;
    vl:identity mi:3871;
    vl:identityIdentifier "3871";
    vl:inVersionedIdentitySet <https://ld.admin.ch/municipality>;
    schema:identifier "13233";
    schema:name "Klosters-Serneus";
    schema:isPartOf dtv:10175;
    vl:predecessor miv:11299;
    vl:successor miv:14310.
```

</aside>
    
#### vl:Deprecated {#Deprecated}

A class Deprecated is added to the last [Version](#Version) *and* the corresponding [Identity](#Identity), if a [ChangeEvent](#ChangeEvent) leads to the deprecation of the Identity. Deprecated Identities should not be deleted in the [VersionedIdentitySet](#VersionedIdentitySet) to avoid broken links. The reason for adding Deprecated to the Version is the fact, that this helps to create the Identity programmatically and that all info should be available through the *Version Graph* alone.

#### vl:VersionedIdentitySet {#VersionedIdentitySet}

Represents the class of all the different objects of the versioned hierarchy and includes all the different [Identities](#Identity), [Versions](#Version) and [ChangeEvents](#ChangeEvent) in one set.

### Properties

#### vl:identity {#identity}

Links a [Version](#Version) to the corresponding [Identity](#Identity).

#### vl:identityIdentifier {#identityIdentifier}

Connects a literal identifier (not the complete IRI) of the corresponding [Identity](#Identity) to the [Version](#Version). Allows to create the *Identity Graph* from the *Version Graph* because the identifier can be used to create the URI of the Identity.

#### vl:version {#version}

Links an [Identity](#Identity) to the [Version](#Version) its currently based on. This link can only be set once. The history of all the Versions involved in the Identity has to be queried through the [predecessor](#predecessor) and [successor](#successor) of Versions.

#### vl:predecessor {#predecessor}

Links a certain [Version](#Version) to its preceding Version. Can be used multiple times in a Version if multiple preceding Versions exist (e.g. [Combination](#Combination)). This predicate is also used to denote the Versions in a [ChangeEvent](#ChangeEvent) that are involved at the beginning of the change ('entry Versions').

#### vl:successor {#successor}

Links a certain [Version](#Version) to its subsequent Version. Can be used multiple times in a Version if multiple subsequent Versions exist (e.g. [Separation](#Separation)). This predicate is also used to denote the Versions in a [ChangeEvent](#ChangeEvent) that result from the change ('exit Versions').

#### vl:startEvent {#startEvent}

Links a certain [Version](#Version) to the [ChangeEvent](#ChangeEvent) that started the Version.

#### vl:endEvent {#endEvent}

Links a certain [Version](#Version) to the [ChangeEvent](#ChangeEvent) that ended the Version.

#### vl:inVersionedIdentitySet {#inVersionedIdentitySet}

Connects an [Identity](#Identity), [Version](#Version) or [ChangeEvent](#ChangeEvent) to a specific [VersionedIdentitySet](#VersionedIdentitySet).


## Change Event Schema {#Change_Event_Schema}

The succession of different [Versions](#Version) of an [Identity](#Identity) can be constructed either with direct linking of the Versions with [successor](#successor) and [predecessor](#predecessor) or by inserting a [ChangeEvent](#ChangeEvent) that enables to state more precisely the kind of ChangeEvent that led to the new Version. The following picture illustrates these two variants:

![Successor Variants](./img/successor_variants.svg "Succession by direct linking or with means of a ChangeEvent")

### Classes

#### vl:ChangeEvent {#ChangeEvent}

A ChangeEvent connects different [predecessors](#predecessor) ('entry Versions') and [successors](#successor) ('exit Versions') of a specific change and has a single change type added as subclass. It is also possible to add multiple ChangeEvents with other change types and ChangeEvent that connect only a subset of all the predecessors and successors with more domain specific change types. The ChangeEvent should also have a date. ChangeEvents are instantaneous events with no duration.

### Change Types

The following classes allow to further specify the change type of [ChangeEvents](#ChangeEvent) and are built as rdfs:subClassOf vl:ChangeEvent.

#### vl:InitialRecording {#InitialRecording}

Change type of a [ChangeEvent](#ChangeEvent). To create a [Version](#Version) without any [predecessors](#predecessor).

#### vl:ChangeOfName {#ChangeOfName}

Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a change of name of the corresponding [Identity](#Identity).

#### vl:Separation {#Separation}

Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a separation of the corresponding [Identity](#Identity) into multiple Identities.

#### vl:Combination {#Combination}

Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a combination of the corresponding [Identities](#Identity) into a single Identity.

#### vl:ChangeInHierarchy {#ChangeInHierarchy}

Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a change of the position of the corresponding [Identity](#Identity) in hierarchy (on the same level). E.g. a municipality changes its belonging to the upper level district.

#### vl:ChangeOfHierarchyLevel {#ChangeOfHierarchyLevel}

Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a change of the hierarchy level of the corresponding [Identity](#Identity). E.g. a municipality becomes a district or a public authority moves up in the hierarchy.

#### vl:Deprecation {#Deprecation}

Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a deprecation of the corresponding [Identity](#Identity). E.g. a public authority just stops to exist (without merging into another Identity which would be modeled as [Combination](#Combination)).

## Profile Schema {#Profile_Schema}

### Classes

#### vl:Profile {#Profile}

The Profile enables the use of different vocabularies for the generic properties depending on the domain practices. By setting this profile it is possible to use the version.link SPARQL queries for different ontologies. This ontology provides some common mappings which can be considered as guidelines.

Throughout this schema, the 'schema.org' profile is used for defining the mandatory properties and the examples.

In [[[turtle]]] syntax, an example Profile might look like this:

<aside class='example' title='Schema.org Profile example'>

```turtle example
vl:Profile_SchemaOrg a vl:Profile;
    vl:identifierPredicate schema:identifier;
    vl:namePredicate schema:name;
    vl:validFromPredicate schema:validFrom;
    vl:validThroughPredicate schema:validThrough;
    vl:hasPartPredicate schema:hasPart;
    vl:isPartOfPredicate schema:isPartOf.
```

</aside>

<aside class='example' title='SKOS Profile example'>

```turtle example
vl:Profile_SKOS a vl:Profile;
    vl:identifierPredicate skos:notation;
    vl:namePredicate skos:prefLabel;
    vl:validFromPredicate dcterms:date;
    vl:validThroughPredicate dcterms:date;
    vl:hasPartPredicate skos:narrower;
    vl:isPartOfPredicate skos:broader.
```
See use of [dcterms:date](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/date/) for periods of time

</aside>


### Properties

#### vl:identifierPredicate {#identifierPredicate}

Binds the identification to a [Version](#Version) or [Identity](#Identity). Allows to use an arbitrary system of identification tokens.

#### vl:namePredicate {#namePredicate}

Binds the name to a [Version](#Version) or [Identity](#Identity).

#### vl:validFromPredicate {#validFromPredicate}

Binds the start date to a [Version](#Version) or the date to a [ChangeEvent](#ChangeEvent) (as there is no schema:date).

#### vl:validThroughPredicate {#validThroughPredicate}

Binds the end date to a [Version](#Version).

#### vl:hasPartPredicate {#hasPartPredicate}

Allows to construct the hierarchy of objects within the [VersionedIdentitySet](#VersionedIdentitySet). Connects a higher level [Version](#Version) to a lower level Version or a higher level [Identity](#Identity) to a lower level Identity. These links are only created within Versions or Identities.

#### vl:isPartOfPredicate {#isPartOfPredicate}

Allows to construct the hierarchy of objects within the [VersionedIdentitySet](#VersionedIdentitySet). Connects a lower level [Version](#Version) to a higher level Version or a lower level [Identity](#Identity) to a higher level Identity. These links are only created within Versions or Identities.

## Linking Across Hierarchy Levels
    
To establish the **hierarchy** with the version.link schema, links across hierarchy levels have to be established by using [hasPartPredicate](#hasPartPredicate) and [isPartOfPredicate](#isPartOfPredicate) constructs. These links create some difficulties during changes in one level of the hierarchy.

If one accepts, that Versions on a certain hierarchy level have multiple 'partOf' links to other hierarchy levels (even if e.g. a community can only be part of one upper level district), the problem is mitigated and has to be accounted for in querying the data. A query must therefore take into account the temporal validity of the Versions involved.

For example, if a district changes its name and therefore, a new [Version](#Version) of this district is created, all municipalities belonging to this district, have to have a second [isPartOfPredicate](#isPartOfPredicate) added with the new Version of the district as object. Because the two Versions of the district are in a temporal succession (only one Version of the district is valid a certain time), also only one [isPartOfPredicate](#isPartOfPredicate) link is valid at a certain time. But the validity of the link is only visible through the temporal validity of the linked Versions.

If such multiple 'partOf' links are not tolerated, a single change in one Version on one level of the hierarchy would create a 'cascading explosion' of new Versions: The new district Version would call for new Versions of all belonging municipalities but also for a new Version of the higher up hierarchy level (e.g. Canton) which would in turn lead to new Versions for all districts in this canton and again for all belonging municipalities of these districts. This cascade would not stop until all the Versions of the [VersionedIdentitySet](#VersionedIdentitySet) are newly created.

A pragmatic middle course can be chosen by allowing Versions to have only one 'uplink' to the next hierarchy level but multiple (and some of them not valid at all times) 'downlinks' to the lower hierarchy level. This means that a change in a certain hierarchy level with a new Version creates all new Versions for the belonging Versions in the lower hierarchy levels but not to the hierarchy above and therefore contains the 'cascading explosion'.

A complete different approach would be to link *Versions* in one hierarchy level to *Identities* in other hierarchy levels with the idea that e.g. a change of name in a district does not lead to a new Identity and that therefore all belonging municipality Versions still can point to the Identity of the district.

The version.link schema does not impose restrictions on this linking accross hierarchy levels but allows the user to choose a domain-adapted solution.

The following image illustrates two Versions linking to a Version in a upper hierarchy level with schema:isPartOf. A query has to take into account the schema:validThrough and schema:validFrom of the Versions to check the validity of the schema:isPartOf links:

![Linking across hierarchy levels](./img/linking_hierarchies.svg "Linking across hierarchy levels.")
### Linking Directions

Different possibilities for choosing the linking direction across hierarchy levels exist:
    
* Linking only from lower hierarchy levels to the upper level(s) with [isPartOfPredicate](#isPartOfPredicate)
* Linking only from upper hierarchy levels to the lower level(s) with [hasPartPredicate](#hasPartPredicate)
* Linking in both directions
    
From the point of view of a SPARQL query, these three variants are more or less identical and do not exhibit any particular advantages. If there are lots of Versions in a lower level belonging to one Identity in an upper hierarchy level, it may be advantageous to only link from the lower to the upper level because of clarity in dereferencing the upper level (otherwise it is possible that the upper level has a myriad of [hasPartPredicate](#hasPartPredicate) entries).