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

#### vl:Version {#Version}

#### vl:VersionedIdentitySet {#VersionedIdentitySet}

### Properties

#### vl:identity {#identity}

#### vl:version {#version}

#### vl:predecessor {#predecessor}

#### vl:successor {#successor}

#### vl:startEvent {#startEvent}

#### vl:endEvent {#endEvent}

<aside class='advisement'>
Example of an "advisement".
</aside>

## Change Event Schema
### Classes

#### vl:ChangeEvent {#ChangeEvent}

#### vl:ChangeOfName {#ChangeOfName}

#### vl:ChangeInHierarchy {#ChangeInHierarchy}

#### vl:Seperation {#Seperation}

#### vl:Combination {#Combination}


## Profile Schema

### Classes

#### vl:Profile {#Profile}


### Properties
#### vl:namePredicate {#namePredicate}
