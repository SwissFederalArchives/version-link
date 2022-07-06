# Examples

The following sections shows two workings examples in [[[turtle]]] syntax of a [VersionedIdentitySet](#VersionedIdentitySet) hierarchy. The first [minimal example](#MinimalExample) has only the very fundamental and mandatory parts whereas the advanced example has all the "bells and whistles" defined in version.link. Bot examples shall be comprised of three hierarchy levels:

* **Countries**
* **States**
* **Cities**

Every City is part of a State which in turn is part of a Country.

The example situation shall be as following: Two Cities. One will change its name before the two Cities will merge into one. In this merge, one City will live on as a combined larger city, the other will be terminated as independent Identity.

## Minimal Example {#MinimalExample}

### City Versions

<aside class='example' title='First Version of first City'>
```turtle example
cityv:42 a vl:Version;
    a ex:CityVersion;
    vl:identity city:1;
    vl:inVersionedIdentitySet ex:csc_set;
    schema:identifier "42";
    schema:name "Suncity";
    schema:isPartOf statev:1;
    vl:successor cityv:43.
```
</aside>


<aside class='example' title='Second Version of first City'>
```turtle example
cityv:43 a vl:Version;
    a ex:CityVersion;
    vl:identity city:1;
    vl:inVersionedIdentitySet ex:csc_set;
    schema:identifier "43";
    schema:name "Shadowcity";
    schema:isPartOf statev:1;
    vl:predecessor cityv:42;
    vl:successor cityv:44.
```
</aside>

<aside class='example' title='First Version of second City'>
```turtle example
cityv:41 a vl:Version;
    a ex:CityVersion;
    vl:identity city:2;
    vl:inVersionedIdentitySet ex:csc_set;
    schema:identifier "41";
    schema:name "Cloudcity";
    schema:isPartOf statev:1;
    vl:successor cityv:44.
```
</aside>

<aside class='example' title='Second Version of second City - after merge'>
```turtle example
cityv:44 a vl:Version;
    a ex:CityVersion;
    vl:identity city:2;
    vl:inVersionedIdentitySet ex:csc_set;
    schema:identifier "44";
    schema:name "Cloudcity";
    schema:isPartOf statev:1;
    vl:predecessor cityv:41;  
    vl:predecessor cityv:43.
```
</aside>

### Cities

<aside class='example' title='Second Version of second City - after merge'>
```turtle example
city:1 a vl:TerminatedIdentity;
    a ex:City;
    vl:version cityv:43;
    vl:inVersionedIdentitySet ex:csc_set;
    schema:identifier "1";
    schema:name "Shadowcity";
    schema:isPartOf state:1;
```
</aside>

<aside class='example' title='Second Version of second City - after merge'>
```turtle example
city:2 a vl:Identity;
    a ex:City;
    vl:version cityv:44;
    vl:inVersionedIdentitySet ex:csc_set;
    schema:identifier "2";
    schema:name "Cloudcity";
    schema:isPartOf state:1;
```
</aside>
