window.WRITING_ARTICLES = [
    {
        "title": "Understanding Graph Neural Networks",
        "description": "A compact, example-led introduction to how message passing lets neural networks work with connected data.",
        "date": "2026-10-22",
        "updated": "2026-10-22",
        "category": "Machine Learning",
        "tags": [
            "Graph Neural Networks",
            "PyTorch",
            "Deep Learning"
        ],
        "featured": true,
        "published": false,
        "example": true,
        "slug": "understanding-graph-neural-networks",
        "readingTime": 1,
        "author": "Olen Shofiti",
        "content": "<blockquote><p>**Example article.** This demonstration content exists to show the writing layout. It is not presented as original research or a personal claim.</p></blockquote>\n<h2 id=\"connected-data-changes-the-question\">Connected data changes the question</h2>\n<p>Graphs model entities and the relationships between them. They are useful for social networks, molecules, recommendations, and dependencies.</p>\n<h2 id=\"message-passing-in-one-sentence\">Message passing in one sentence</h2>\n<p>Each node receives information from its neighbours, combines it with its current state, and produces a new representation.</p>\n<pre><code class=\"language-python\">for node in graph.nodes:\n    node.state = update(node.state, aggregate(node.neighbours))</code></pre>"
    },
    {
        "title": "Building Modern Web Applications",
        "description": "An example engineering note on keeping interfaces quick, dependable, and understandable as a project grows.",
        "date": "2026-10-18",
        "updated": "2026-10-20",
        "category": "Software Engineering",
        "tags": [
            "Web Development",
            "Performance",
            "Architecture"
        ],
        "featured": false,
        "published": false,
        "example": true,
        "slug": "building-modern-web-applications",
        "readingTime": 1,
        "author": "Olen Shofiti",
        "content": "<blockquote><p>**Example article.** This demonstration content exists to show the writing layout. It is not a retrospective of a real project.</p></blockquote>\n<h2 id=\"start-with-constraints\">Start with constraints</h2>\n<p>Start with the limits of a project: deployment, maintenance, and the tasks visitors need to complete.</p>\n<h2 id=\"performance-is-a-product-feature\">Performance is a product feature</h2>\n<p>Use responsive images, avoid unnecessary dependencies, and make the first useful screen available quickly.</p>\n<h2 id=\"design-for-maintenance\">Design for maintenance</h2>\n<p>Keep content separate from presentation and document decisions that are hard to infer from code.</p>"
    }
];
