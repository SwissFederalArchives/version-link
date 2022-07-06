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
Represents the current version of an identity (concept). The reason to not only have different [Versions](#Version) but also a current Identity is the idea to have the possibility to build easy SPARQL queries as long as the Identity history is not relevant. The Identity can usually be created programmatically (e.g. [SPARQL Update](https://www.w3.org/TR/sparql11-update/)) from the corresponding version.

### vl:TerminatedIdentity {#TerminatedIdentity}
Represents an [Identity](#Identity) that does not exist anymore. Important to still have Identities that no longer exist in the [VersionedIdentitySet](#VersionedIdentitySet) to avoid broken links.

#### vl:Version {#Version}
A certain state of the [Identity](#Identity). A change in the Identity leads to a new Version.

#### vl:VersionedIdentitySet {#VersionedIdentitySet}
Connects all the different objects of the versioned hierarchy.

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


## Change Event Schema

### Classes

#### vl:ChangeEvent {#ChangeEvent}
A ChangeEvent connects all the [predecessors](#predecessor) and [successors](#successor) of a specific change and has one or multiple change types added. In contrast to the ChangeEvent, the [Relation](#Relation) connects a single predecessor with a single successor.

#### vl:ChangeOfName {#ChangeOfName}
Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a change of name of the corresponding [Identity](#Identity).

#### vl:ChangeInHierarchy {#ChangeInHierarchy}
Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a change in hierarchy (level within the hierarchy) of the corresponding [Identity](#Identity).

#### vl:Separation {#Separation}
Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a separation of the corresponding [Identity](#Identity) into multiple Identities.

#### vl:Combination {#Combination}
Change type of a [ChangeEvent](#ChangeEvent) that corresponds to a combination of the corresponding [Identities](#Identity) into a single Identity.


## Relation Schema

### Classes

#### vl:Relation {#Relation}
In contrast to the [ChangeEvent](#ChangeEvent), a Relation connects a single predecessor to a single successor. The reason for this class is the fact, that within a general ChangeEvent (e.g. [Combination](#Combination)), the [Versions](#Version) involved could have different change subtypes (e.g. a Version merges into the [successor](#successor) (i.e. the corresponding Identity becomes a [TerminatedIdentity](#TerminatedIdentity), another Version reshapes into the successor (i.e. the corresponding Identity lives on)).

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

#### vl:startDatePredicate {#startDatePredicate}
Binds the start date to a [Version](#Version).

#### vl:endDatePredicate {#endDatePredicate}
Binds the end date to a [Version](#Version).

#### vl:hasPartPredicate {#hasPartPredicate}
Allows to construct the hierarchy of objects within the [VersionedIdentitySet](#VersionedIdentitySet). Connects a higher level [Version](#Version) to a lower level Version or a higher level [Identity](#Identity) to a lower level Identity. This links are only created within Versions or Identities.

#### vl:isPartOfPredicate {#isPartOfPredicate}
Allows to construct the hierarchy of objects within the [VersionedIdentitySet](#VersionedIdentitySet). Connects a lower level [Version](#Version) to a higher level Version or a lower level [Identity](#Identity) to a higher level Identity. This links are only created within Versions or Identities.
