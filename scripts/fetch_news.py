import feedparser
import json

RSS = "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en"

feed = feedparser.parse(RSS)

news = []

for article in feed.entries[:5]:
    news.append({
        "title": article.title,
        "link": article.link,
        "published": article.published
    })

with open("news.json", "w", encoding="utf-8") as f:
    json.dump(news, f, indent=4)