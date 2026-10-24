  

**1. TweetCred: remember the feature groups**

Assigns tweets a **credibility score from 1–7**, using a learned ranking model.

|Group|Examples|
|---|---|
|Metadata|Tweet age, posting source, geolocation|
|Content|Length, hashtags, sentiment, swear words|
|Author|Followers, following, account age|
|Network|Retweets, mentions, whether it’s a reply|
|Links|Linked domain’s WOT reputation|

Pipeline: **collect tweets → human labels → extract features → train model → serve scores**. Human labels provide the ground truth.

**2. NDCG: does the ranking put good results first?**

![[Pasted image 20261023212949.png]]​

![[Pasted image 20261023213000.png]]

**3. Reading the response-time graph**

A **CDF** answers: “What fraction finished within xx seconds?”

F(6)=0.82 means **82% finished within 6 seconds**, so 18% took longer. TweetCred’s graph: **82% under 6 seconds; 99% under 10**.

**4. Research-method MCQ distinctions**

- **Cronbach’s alpha:** internal consistency—do questionnaire items measure the same underlying construct? **Not accuracy, validity, or statistical significance.**
- **Likert scale:** ordered responses such as strongly disagree → strongly agree.
- **Interview:** individual, detailed qualitative insights.
- **Focus group:** moderated group discussion; qualitative insights.
- **Survey:** standardized responses from many people; quantitative patterns. Generalization still depends on sampling.

**5. Westin’s categories**

- **Fundamentalists:** strong privacy concerns; resist disclosure and distrust existing protection.
- **Pragmatists:** weigh benefits against privacy risks, depending on context.
- **Unconcerned:** little concern; readily disclose information.

**6. India study: memorize these**

- **20 interviews, 4 focus groups, 10,427 survey respondents, 83 questions.**
- Most common privacy association: **information privacy—51.24%**.
- Changed default settings: **about 50% in interviews**, versus **63.19% in the survey**. Different samples.
- **42.13%** believed specifying privacy settings made their data secure.
- **10.12%** would accept a friend request because of a nice profile picture.

The lesson: **stated concern and actual behavior can differ**; privacy settings also cannot prevent every inference or misuse.

**7. Facebook Inspector + WOT**

**Facebook Inspector (FBI)** applies a similar pipeline to Facebook posts: features + labeled examples → supervised model → REST API → browser annotations.

Facebook friendships are reciprocal and often personal, which can increase **perceived credibility**. That perception doesn’t establish truth.

**Web of Trust (WOT)** evaluates **domain reputation**, with ratings from very poor to excellent plus confidence. A domain’s reputation is a useful feature, not proof that every claim on it is true.

**8. Tutorial: only the less-obvious point**

Tweet ID is the **primary key**, preventing duplicate rows. INSERT IGNORE skips duplicate-key inserts; it can suppress other errors too. You already know the remaining MySQL/Python basics.