# FAQ

## More Specific [vl:ChangeEvent](#ChangeEvent)s

Question: What should be done, if the [vl:ChangeEvent](#ChangeEvent) classes are not specific enough for a certain use case?

Answer: In this case, subclasses of [vl:ChangeEvent](#ChangeEvent) (or the already more specific [vl:ChangeEvent](#ChangeEvent)s like [vl:Combination](#Combination)) should be created in the namespace of the use case via the [rdfs:subClassOf](https://www.w3.org/TR/rdf-schema/#ch_subclassof)-mechanism.

## Sub-ChangeEvents

Question: What should be done, if a [vl:ChangeEvent](#ChangeEvent) like [vl:Combination](#Combination) has different sets for [vl:successor](#successor)s and [vl:predecessor](#predecessor)s in some kind of "SubChangeEvent"? E.g. a [vl:Combination](#Combination) of municipalities involves two [vl:predecessor](#predecessor)s and one [vl:successor](#successor). The situation is as follows: A smaller municipality merges into a larger one. This operation renders the [vl:Identity](#Identity) of the smaller municipality [vl:Deprecated](#Deprecated) whereas the larger municipality continues to exist as the same [vl:Identity](#Identity) as before. There could be a need to express this not only as a generic [vl:Combination](#Combination) but to explicitly state that the smaller municipality "merges" into the larger whereas the larger undergoes some kind of "reshape".

Answer: This situation can be modelled as a hierarchical [vl:ChangeEvent](#ChangeEvent). The generalised event would be a [vl:Combination](#Combination) with both municipalities as [vl:predecessor](#predecessor) and the resulting municipality as [vl:successor](#successor). In addition two new [rdfs:subClassOf](https://www.w3.org/TR/rdf-schema/#ch_subclassof) [vl:Combination](#Combination) could be created (e.g. "Merge" and "Reshape"). These additional two [vl:ChangeEvent](#ChangeEvent)s would be modelled with only the corresponding one [vl:predecessor](#predecessor) and attached to the generalized [vl:ChangeEvent](#ChangeEvent) via [schema:isPartOf](https://schema.org/isPartOf).

## Reactivating [vl:Identity](#Identity)s

Question: What should be done, if a certain [vl:Identity](#Identity) is to be reactivated after that it has been [vl:Deprecated](#Deprecated) for some time?

Answer: Connect the two [vl:Version](#Version)s as usual with [vl:predecessor](#predecessor) and [vl:successor](#successor) and use the date predicates to signal that there was a gap in the existence of the [vl:Identity](#Identity). If necessary a domain-specific [vl:ChangeEvent](#ChangeEvent) as [rdfs:subClassOf](https://www.w3.org/TR/rdf-schema/#ch_subclassof) [vl:ChangeEvent](#ChangeEvent) can be created for such changes ("PauseAndReactivate").
