# Examples

The following sections shows two examples in [[[turtle]]] syntax of a [VersionedIdentitySet](#VersionedIdentitySet) hierarchy. The first [minimal example](#MinimalExample) has only the very fundamental parts whereas the [advanced example](#AdvancedExample) uses all the features defined in version.link. The examples are based on the [Historisiertes Gemeindeverzeichnis](https://www.bfs.admin.ch/bfs/de/home/grundlagen/agvch/historisiertes-gemeindeverzeichnis.html) of the Swiss Federal Statistical Office.

Both examples exhibit three hierarchy levels:

* **Municipalities**
* **Districts**
* **Cantons**

The hierarchy is as following: Every municipality is part of a district which in turn is part of a canton.

The example depicts the municiaplity "Klosters" and its change events over time.

## Minimal Example {#MinimalExample}

### Municipality Versions

<aside class='example' title='2 Versions of Klosters'>

```turtle example
miv:11299 a vl:Version;
    a as:MunicipalityVersion;
    vl:identity mi:3871;
    vl:identityIdentifier "3871";
    vl:inVersionedIdentitySet <https://ld.admin.ch/municipality>;
    schema:identifier "11299";
    schema:name "Klosters";
    schema:isPartOf dt:1811;
    vl:successor miv:13233.

miv:13233 a vl:Version;
    a as:MunicipalityVersion;
    vl:identity mi:3871;
    vl:identityIdentifier "3871";
    vl:inVersionedIdentitySet <https://ld.admin.ch/municipality>;
    schema:identifier "13233";
    schema:name "Klosters-Serneus";
    schema:isPartOf dt:1811;
    vl:predecessor miv:11299;
    vl:successor miv:14310.
```

</aside>

### Municipality Identity

<aside class='example' title='The Identity of Klosters'>

```turtle example
mi:3871 a vl:Identity;
    a as:PoliticalMunicipality;
    vl:version miv:13233;
    vl:inVersionedIdentitySet <https://ld.admin.ch/municipality>;
    schema:identifier "3871";
    schema:name "Klosters-Serneus";
    schema:isPartOf dt:1811.
```

</aside>

## Advanced Example {#AdvancedExample}

### Municipality Versions

<aside class='example' title='2 Versions of Klosters'>

```turtle example
miv:11299 a vl:Version;
    a as:MunicipalityVersion;
    vl:identity mi:3871;
    vl:identityIdentifier "3871";
    vl:inVersionedIdentitySet <https://ld.admin.ch/municipality>;
    schema:identifier "11299";
    schema:name "Klosters";
    schema:isPartOf dt:1811;
    schema:startDate "1960-01-01T00:00:00"^^xsd:dateTime;
    vl:startEvent mce:1000_11299;
    schema:endDate "1973-12-31T24:00:00"^^xsd:dateTime;
    vl:endEvent mce:1048;
    vl:successor miv:13233.

miv:13233 a vl:Version;
    a as:MunicipalityVersion;
    vl:identity mi:3871;
    vl:identityIdentifier "3871";
    vl:inVersionedIdentitySet <https://ld.admin.ch/municipality>;
    schema:identifier "13233";
    schema:name "Klosters-Serneus";
    schema:isPartOf dt:1811;
    schema:startDate "1974-01-01T00:00:00"^^xsd:dateTime;
    vl:startEvent mce:1048;
    schema:endDate "2000-12-31T24:00:00"^^xsd:dateTime;
    vl:endEvent mce:2110;
    vl:predecessor miv:11299;
    vl:successor miv:14310.
```

</aside>
    
### Municipality ChangeEvents

<aside class='example' title='ChangeEvents of Klosters'>

```turtle example
mce:1000_11299 a vl:ChangeEvent;
    a as:MunicipalityChangeEvent;
    a vl:InitialRecording;
    schema:date "1960-01-01T00:00:00"^^xsd:dateTime;
    vl:inVersionedIdentitySet <https://ld.admin.ch/municipality>;
    vl:successor miv:11299.

mce:1048 a vl:ChangeEvent;
    a as:MunicipalityChangeEvent;
    a vl:ChangeOfName;
    schema:date "1974-01-01T00:00:00"^^xsd:dateTime;
    vl:inVersionedIdentitySet <https://ld.admin.ch/municipality>;
    vl:predecessor miv:11299;
    vl:successor miv:13233.
```

</aside>
    
### Municipality Identity

<aside class='example' title='The Identity of Klosters'>

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
