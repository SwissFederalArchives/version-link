# Examples

The following sections shows two workings examples in [[[turtle]]] syntax of a [VersionedIdentitySet](#VersionedIdentitySet) hierarchy. The first [minimal example](#MinimalExample) has only the very fundamental and mandatory parts whereas the [advanced example](#AdvancedExample) has all the "bells and whistles" defined in version.link. Both examples shall be comprised of three hierarchy levels:

* **Countries**
* **States**
* **Cities**

The hierarchy is as following: Every City is part of a State which in turn is part of a Country.

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
city:1 a vl:Identity;
    a vl:Deprecated;
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

## Advanced Example {#AdvancedExample}

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
    vl:successor cityv:43;
    vl:startDate "1900-01-01T00:00:00"^^xsd:dateTime;
    vl:endDate "2022-01-01T00:00:00""^^xsd:dateTime;
    vl:startEvent cityv:changeevent\/1;
    vl:endEvent cityv:changeevent\/2.
    
cityv:changeevent\/1 a vl:ChangeEvent;
    a vl:InitialRecording;
    vl:date "1900-01-01T00:00:00"^^xsd:dateTime;
    vl:inVersionedIdentitySet ex:csc_set;
    vl:successor cityv:42.
    
cityv:changeevent\/2 a vl:ChangeEvent;
    a vl:ChangeOfName;
    vl:date "2022-01-01T00:00:00"^^xsd:dateTime;
    vl:inVersionedIdentitySet ex:csc_set;
    vl:predecessor cityv:42;
    vl:successor cityv:43
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
    vl:successor cityv:44;
    vl:startDate "2022-01-01T00:00:00"^^xsd:dateTime;
    vl:endDate "2023-01-01T00:00:00"^^xsd:dateTime;
    vl:startEvent cityv:changeevent\/2;
    vl:endEvent cityv:changeevent\/3;
    vl:endEvent cityv:changeevent\/4.
    
cityv:changeevent\/3 a vl:ChangeEvent;
    a vl:Combination;
    vl:date "2023-01-01T00:00:00"^^xsd:dateTime;
    vl:inVersionedIdentitySet ex:csc_set;
    vl:predecessor cityv:41;
    vl:predecessor cityv:43;
    vl:successor cityv:44.

cityv:changeevent\/4 a vl:ChangeEvent;
    a vl:Merge;
    vl:date "2023-01-01T00:00:00"^^xsd:dateTime;
    vl:inVersionedIdentitySet ex:csc_set;
    vl:predecessor cityv:43;
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
    vl:successor cityv:44;
    vl:startDate "1900-01-01T00:00:00"^^xsd:dateTime;
    vl:endDate "2023-01-01T00:00:00"^^xsd:dateTime;
    vl:startEvent cityv:changeevent\/6;
    vl:endEvent cityv:changeevent\/3;
    vl:endEvent cityv:changeevent\/5.
    
cityv:changeevent\/6 a vl:ChangeEvent;
    a vl:InitialRecording;
    vl:date "1900-01-01T00:00:00"^^xsd:dateTime;
    vl:inVersionedIdentitySet ex:csc_set;
    vl:successor cityv:41.

cityv:changeevent\/5 a vl:ChangeEvent;
    a vl:Reshape;
    vl:date "2023-01-01T00:00:00"^^xsd:dateTime;
    vl:inVersionedIdentitySet ex:csc_set;
    vl:predecessor cityv:41;
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
    vl:predecessor cityv:43;
    vl:startDate "2023-01-01T00:00:00"^^xsd:dateTime;
    vl:startEvent cityv:changeevent\/3;
    vl:startEvent cityv:changeevent\/4;
    vl:startEvent cityv:changeevent\/5.
```

</aside>

### Cities

<aside class='example' title='Second Version of second City - after merge'>

```turtle example
city:1 a vl:Identity;
    a vl:Deprecated;
    a ex:City;
    vl:version cityv:43;
    vl:inVersionedIdentitySet ex:csc_set;
    schema:identifier "1";
    schema:name "Shadowcity";
    schema:isPartOf state:1;
    vl:startDate "1900-01-01T00:00:00"^^xsd:dateTime;
    vl:endDate "2023-01-01T00:00:00"^^xsd:dateTime.
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
    vl:startDate "1900-01-01T00:00:00"^^xsd:dateTime.
```

</aside>
