# FAQ

## More Specific ChangeEvents

Question: What should be done, if the **vl:ChangeEvent** classes are not **specific** enough for a certain use case?

Answer: In this case, subclasses of [vl:ChangeEvent](#ChangeEvent) (or the alredy more specific ChangeEvents like [vl:Combination](#Combination)) should be created in the namespace of the use case via the rdfs:subClassOf-mechanism.

## Sub-ChangeEvents

Question: What should be done, if a ChangeEvent like [vl:Combination](#Combination) has different sets for successors and predecessors in some kind of "SubChangeEvent"? E.g. a [vl:Combination](#Combination) of municipalities involves two predecessor and one successor. The situation is as follows: A smaller municipality merges into a larger one. This operation renders the Identity of the smaller municipality [vl:Deprecated](#Deprecated) whereas the larger municipality continues to exist as the same Identity as before. There could be a need to express this not only as a generic [vl:Combination](#Combination) but to explicitly state that the smaller municipality "merges" into the larger whereas the larger undergoes some kind of "reshape".

Answer: This situation can be modelled as a hierarchical [vl:ChangeEvent](#ChangeEvent). The generalised event would be a [vl:Combination](#Combination) with both municipalities as [vl:predecessor](#predecessor) and the resulting municipality as [vl:successor](#successor). In addition two new rdfs:subClassOf [vl:Combination](#Combination) could be created (e.g. "Merge" and "Reshape"). These additional two [vl:ChangeEvent](#ChangeEvent) would be modelled with only the corresponding one predecessor and attached to the generalised ChangeEvent via [vl:isPartOf].