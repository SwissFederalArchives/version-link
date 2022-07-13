# version.link

## Prefixes
### version.link
| PREFIX | IRI | Description |
| --- | --- | --- |
| `vl` | `https://version.link/` | version.link|

### External
| PREFIX | IRI | Description |
| --- | --- | --- |
| schema | [http://schema.org/](http://schema.org) | To describe basic properties. |
| sh | [http://www.w3.org/ns/shacl#](https://www.w3.org/TR/shacl/) | Inherited from the RDF Cube Schema for constratins. |

## Core Schema

### Classes

#### vl:Identity {#Identity}
Represents the Identity (concept). The reason to not only have different [Versions](#Version) but also an actual Identity is the idea to have the possibility to build easier [[[sparql11-query]]] queries as long as the Identity history is not of much relevance. The Identity can usually be created programmatically (e.g. [[[sparql11-update]]]) from the corresponding Versions.

#### vl:Version {#Version}
A certain state of the [Identity](#Identity). A change in the Identity leads to a new Version.

#### vl:Deprecated {#Deprecated}
Added to [Versions](#Version) and [Identities](#Identity) to signal that they are deprecated. This class is especially useful, if Identities and Versions do not use start- and stop dates. Deprecated Identities should not be deleted in the [VersionedIdentitySet](#VersionedIdentitySet) to avoid broken links.

In [[[turtle]]] syntax, an example Version might look like this:

<aside class='example' title='Version example'>

```turtle example
cityv:42 a vl:Version;
    a ex:CityVersion;
    vl:identity city:1;
    vl:inVersionedIdentitySet ex:csc_set;
    schema:identifier "42";
    schema:name "Suncity";
    schema:isPartOf statev:1;
    vl:predecessor cityv:40;
    vl:predecessor cityv:41;
    vl:successor cityv:43.
```

</aside>

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


## Change Event Schema

### Classes

#### vl:ChangeEvent {#ChangeEvent}
A ChangeEvent connects different [predecessors](#predecessor) and [successors](#successor) of a specific change and has a single change type added. It is also possible to add multiple ChangeEvents with other change types and ChangeEvent that connect only a subset of all the predecessors and successors with more domain specific change types. The ChangeEvent should also have a date. ChangeEvents are instantaneous events with no duration.

### Change Type Classes

#### vl:InitialRecording
Change type of a [ChangeEvent](#ChangeEvent). To create a [Version](#Version) without any [predecessors](#predecessor).

#### vl:ChangeOfName {#ChangeOfName}
Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a change of name of the corresponding [Identity](#Identity).

#### vl:ChangeInHierarchy {#ChangeInHierarchy}
Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a change in hierarchy (level within the hierarchy) of the corresponding [Identity](#Identity).

#### vl:Separation {#Separation}
Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a separation of the corresponding [Identity](#Identity) into multiple Identities.

#### vl:Combination {#Combination}
Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a combination of the corresponding [Identities](#Identity) into a single Identity.


## Profile Schema

### Classes

#### vl:Profile {#Profile}
The Profile enables the use of different vocabularies for the generic link.version properties depending on the domain practices.

In [[[turtle]]] syntax, an example Profile might look like this:

<aside class='example' title='Profile example'>

```turtle example
ex:vl_schemaorg a vl:Profile;
    vl:identificationPredicate schema:identifier;
    vl:namePredicate schema:name;
    vl:datePredicate schema:date;
    vl:startDatePredicate schema:startDate;
    vl:endDatePredicate schema:endDate;
    vl:hasPartPredicate schema:hasPart;
    vl:isPartOfPredicate schema:isPartOf.
```

</aside>

### Properties

#### vl:identificationPredicate {#identificationPredicate}
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
