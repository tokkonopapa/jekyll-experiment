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
	
a

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
