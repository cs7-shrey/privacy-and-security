
**Reddit + PRAW**

**PRAW = Python Reddit API Wrapper.** Reddit returns JSON; PRAW exposes it as Python objects.

```python
reddit = praw.Reddit(
    client_id="...",
    client_secret="...",
    user_agent="..."
)

for post in reddit.subreddit("technology").hot(limit=5):
    print(post.title)
```

- `.hot()` → currently popular; `.new()` → newest; `.top()` → highest scoring within a time range.
- Use `"technology"`, without `r/`.
- Read-only access can use the three credentials above; user-specific actions need additional authentication.
- Attributes: `title`, `selftext` (body), `score`, `id`, `url`, `num_comments`, `created_utc`.
- **Score is not simply the total number of upvotes**; it reflects voting.
- Empty `selftext` can mean an image, video, or link post.
- **Subreddit** = community; **flair** = label/category; comments support nested replies.
- `reddit.subreddit("all")` accesses the aggregate listing across subreddits.

**2. Facebook Graph API — the main unfamiliar bit**

Facebook models information as a graph:

|Component|Meaning|Examples|
|---|---|---|
|Nodes|Objects|Users, pages, posts, photos|
|Edges|Connections/interactions|Friendships, likes, comments|
|Fields|Object attributes|Name, birthday, post text|

**Access token → identifies/authorizes the request. Permissions → determine what it can access.** A valid token does **not** grant every permission. Tokens can expire and are associated with an app.

Recognize the lecture’s queries:

```
/me?fields=id,name,email       Selected fields of authenticated user
/me/posts                     User’s posts
/PAGE_ID/feed                 Page feed
/POST_ID/reactions?type=LOVE  Filter reactions
```

Exam details from the **historical tutorial**:

- Friends returned were those also using the same app, rather than the complete friends list.
- Post IDs followed `USER_OR_PAGE_ID_POST_ID`.
- Newer API versions could require explicitly requesting fields previously returned by default.
- Pagination used `previous`/`next` links; the demonstrated default was **25 results**. `limit` changes page size.
- Feed results generally appeared newest first; a pinned post could appear first on the website.
- These historical endpoints and limits describe the lecture, rather than a guarantee about today’s API.
- More generally, API access depends on permissions and privacy settings; **“APIs only return public data” is an oversimplification.**

**3. Credibility and misinformation**

| Feature type       | Examples                                               |
| ------------------ | ------------------------------------------------------ |
| Linguistic/content | Negative emotion words, pronouns                       |
| User/account       | Follower count, account age                            |
| Network            | Who connects to whom, interaction and sharing patterns |
Credibility features are **signals, not proof**. Many followers, likes, or shares do not establish truth. Misinformation is false/inaccurate information; **disinformation adds deliberate intent to deceive**. Lack of evidence alone does not logically prove a claim false.