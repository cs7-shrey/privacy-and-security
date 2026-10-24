These are the concepts worth remembering.

1. **Actionable information = enough information to decide what to do.**
    
    “This city sucks” expresses dissatisfaction. “Cars are blocking the hospital entrance on Road X every evening at 6” gives police something they can investigate.
    
    Useful components include:
    
    - **Temporal:** when—“Saturday, 5:30–6 pm.”
    - **Spatial:** where—“outside the railway station.”
    - **Incident details:** what happened, who was involved.
    
    Actionable information need not be a complaint: information about an upcoming public celebration can help plan security or traffic arrangements.
    
2. **Thematic analysis asks “what is being discussed?”**
    
    Keep the **topic** separate from the **emotion**. “I’m furious about illegal parking” has parking as its topic and anger as its emotion.
    
    Two methods from the lecture:
    
    - **N-grams:** sequences of _n_ consecutive words. For “please take action,” unigrams are `please`, `take`, `action`; bigrams are `please take`, `take action`; the trigram is `please take action`. Counting them reveals recurring expressions.
    - **K-means clustering:** represent posts numerically and group similar ones into _K_ clusters. Those groups may correspond to traffic, missing people, appreciation, etc. **You choose K; the algorithm finds the groups.** Someone still needs to interpret what each group means.
3. **LIWC connects word usage to psychological categories.**
    
    **LIWC = Linguistic Inquiry and Word Count.** It uses dictionaries of words associated with categories such as anger, anxiety, social relationships, and cognitive processes.
    
    For example, a post containing many anxiety-related words gets a higher anxiety-category score. A word can belong to multiple categories.
    
    Remember the distinction:
    
    |Tool/method|Main purpose here|
    |---|---|
    |N-grams|Find recurring words and phrases|
    |K-means|Group similar posts|
    |LIWC|Measure linguistic and psychological categories|
    |ANEW|Supply word ratings for emotional dimensions|
    
    These are indicators inferred from language, not direct measurements of someone’s mental state.
    
4. **Valence and arousal measure different things.**
    
    - **Valence:** how positive or negative the emotion is.
    - **Arousal:** how intense or activated the emotion is.
    
    |Example|Valence|Arousal|
    |---|---|---|
    |“I feel peaceful and content.”|Positive|Low|
    |“YES! We finally won!”|Positive|High|
    |“I feel sad and drained.”|Negative|Low|
    |“I’m absolutely furious!”|Negative|High|
    
    **High arousal does not mean positive sentiment.** On the assignment’s −1 to +1 scale, valence `0.75` and arousal `0.85` mean positive and intense.
    
5. **Engagement: distinguish totals, averages, and variability.**
    
    A page with more posts can have more total comments while receiving fewer comments **per post**.
    
    **Standard deviation measures spread around the mean:**

![[Pasted image 20261023225532.png]]

