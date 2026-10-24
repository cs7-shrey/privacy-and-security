**1. Centrality: what makes a node “important”?**

Different centrality measures capture different kinds of importance:

|Measure|What it measures|Intuition|
|---|---|---|
|**Degree**|Number of connections|“How many people am I connected to?”|
|**Indegree**|Number of incoming edges|“How many people follow me?”|
|**Outdegree**|Number of outgoing edges|“How many people do I follow?”|
|**Betweenness**|Share of shortest paths passing through a node|“How often am I the bridge between others?”|
|**Closeness**|Inverse of distance to other nodes|“How quickly can I reach everyone?”|
|**Eigenvector**|Connections weighted by the importance of neighbours|“Am I connected to important people?”|

For Twitter, **A → B means A follows B**. This adds one to A’s outdegree and B’s indegree.

In a directed graph, **total degree = indegree + outdegree**. A self-loop adds one to each, so it contributes **two** to total degree.

The useful distinctions:

- **Degree versus eigenvector:** having 100 ordinary connections can give high degree; having a few highly important connections can give high eigenvector centrality.
- **Degree versus betweenness:** someone with only two connections can have high betweenness if they connect two otherwise separate groups.
- **Closeness versus betweenness:** closeness means short distances to everyone; betweenness means sitting along routes between others.

**MCQ cues:** followers → indegree; following → outdegree; bridge/broker → betweenness; quickly reachable → closeness; important neighbours → eigenvector.

**2. Calculating betweenness centrality**

For each pair of **other nodes**, find their shortest paths. Your node gets credit for the fraction passing through it:

\[ \text{Credit for a pair} = \frac{\text{shortest paths passing through your node}} {\text{total shortest paths between that pair}} \]

Then **add the credits across all pairs**. The node must be an intermediate stop; being the starting or ending node earns no credit.

For example:

- One shortest path, passing through A → A gets **1**.
- Two equally short paths, only one through A → A gets **½**.
- Shortest paths bypass A → A gets **0**.

**Apply it to the assignment graph**

The friendships are **A–B, A–C, B–D, C–D**. This forms a four-node cycle.

To calculate **A’s betweenness**, consider pairs among the other three nodes: B, C and D.

![[Pasted image 20261023232245.png]]
