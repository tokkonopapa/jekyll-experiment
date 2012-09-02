---
layout: post
date: 2012-08-25 22:18
title: "Jekyllとliquidで作る本格ブログ"
description: "Jekyllとliquidを使った本格的なブログの作り方"
keywords: "jekyll, liquid, GitHub, ruby"
excerpt: "Jekyllとliquidを使った本格的なブログの作り方を解説します。"
image: 
thumbnail: 
category: [ブログ]
tags: [jekyll, liquid]
comments: true
published: true
---
基本構成
--------

<!--more-->

	.
	├── _config.yml
	├── _includes
	├── _layouts
	│   ├── default.html
	│   └── post.html
	├── _plugins
	├── _posts
	│   └── 1970-1-7-first-article.md
	├── _site
	└── index.html

* `_config.yml`  
	
* `_includes`  
	
* `layouts`  
	
	* `default.html`  
		
	* `post.html`  
		
* `_plugins`  
	
* `_posts`  
	
* `_site`  
	
* `index.html`  
	

{% highlight text %}
.
├── Rakefile
├── _config.yml
├── _includes
│   ├── asides
│   │   ├── about.html
│   │   └── ...
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   ├── pagenation.html
│   ├── asides.html
│   ├── bottom.html
│   ├── script.html
│   └── post
│       ├── comment.html
│       ├── post_pagenation.html
│       └── ...
├── _layouts
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _plugins
│   ├── domain_name.rb
│   ├── postmore.rb
│   └── ...
├── _posts
│   └── 1970-1-7-first-article.md
├── _site
├── assets
│   ├── bootstrap-2.1.0
│   ├── css
│   │   └── style.css
│   └── js
│       ├── libs
│       │   ├── html5shiv.js
│       │   └── jquery-1.7.2.min.js
│       └── script.js
├── 404.html
├── about.html
├── index.html
├── atom.xml
├── rss.xml
├── sitemap.xml
├── blog
│   ├── archives.html
│   ├── categories.html
│   └── tags.html
└── project
    └── index.html
{% endhighlight %}

{% highlight html linenos %}
			<section id="tags">
				<h1><a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a></h1>
				<ul class="tag-list clearfix">
{% include libs/list_tags %}
				</ul>
{% for tag in site.tags %}
	{% if tag[0].first %}{% capture name %}{{ tag[0].first }}{% endcapture %}
	{% else %}{% capture name %}{{ tag[0] }}{% endcapture %}{% endif %}
				<h2 id="ref-{{ name | cgi_escape | remove:'%' }}">{{ tag[0] }}</h2>
				<ul>
	{% assign list_pages = tag[1] %}
	{% include libs/list_pages %}
				</ul>
{% endfor %}
			</section>
{% endhighlight %}