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
    vl:inVersionedIdentitySet <https://ld.admin.ch/municipality>;
    schema:identifier "11299";
    schema:name "Klosters";
    schema:isPartOf dtv:10175;
    vl:successor miv:13233.

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

## Advanced Example {#AdvancedExample}


