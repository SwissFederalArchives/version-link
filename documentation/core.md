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
Represents the current version of an identity (concept). The reason to not only have different [Versions](#Version) but also a current Identity is the idea to build easy SPARQL queries as long as the Identity history is not relevant. The Identity can usually be created programmatically (e.g. SPARQL Update) from the corresponding version.  

#### vl:Version {#Version}
A certain state of the [Identity](#Identity). A change in the Identity leads to a new Version.

#### vl:VersionedIdentitySet {#VersionedIdentitySet}
Connects all the different objects of the versioned hierarchy.

### Properties

#### vl:identity {#identity}
Links a [Version](#Version) to a correspondent [Identity](#Identity).

#### vl:version {#version}
Links a [Identity](#Identity) to the [Version](#Version) its based on.

#### vl:predecessor {#predecessor}
Links a certain [Version](#Version) to its predecessor Version. Can be used multiple times in a version if multiple predecessor versions exist (e.g. [Combination](#Combination).

#### vl:successor {#successor}
Links a certain [Version](#Version) to its successor Version. Can be used multiple times in a version if multiple successor versions exist (e.g. [Separation](#Separation).

#### vl:startEvent {#startEvent}
#### vl:endEvent {#endEvent}

## Change Event Schema

### Classes
#### vl:ChangeEvent {#ChangeEvent}
#### vl:ChangeOfName {#ChangeOfName}
#### vl:ChangeInHierarchy {#ChangeInHierarchy}
#### vl:Separation {#Separation}
#### vl:Combination {#Combination}

## Relation Schema

### Classes
#### vl:Relation {#Relation}

## Profile Schema

### Classes
#### vl:Profile {#Profile}

### Properties
#### vl:identityPredicate {#identiyPredicate}
#### vl:namePredicate {#namePredicate}
#### vl:startDatePredicate {#startDatePredicate}
#### vl:endDatePredicate {#endDatePredicate}
#### vl:hasPartPredicate {#hasPartPredicate}
#### vl:isPartOfPredicate {#isPartOfPredicate}
