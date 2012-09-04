Jekyll Responsive Bootstrap
===========================

Still under construction...

This software will work out of the box, without any fancy installation.

### Functions ###

+ more ... done
+ _config.yml ... almost done
	+ ブログページ設定 ... done
+ セマンティック HTML ... almost done
* サイドバーパーツ
	+ 検索機能 ... done
	+ テーマカラー変更スクリプト ... done
	+ 最新記事 ... done
	+ Tweets ... done
	+ Follow ボタン ... done
	* Google+ ボタン
	+ GitHub リポジトリ ... done
	+ タグクラウド ... done
	+ カテゴリーリスト ... done
* ナビゲーションバー機能
	+ サブページ表示 (Archives, Categories, Tags) ... done
	+ 定義のテンプレート化 ... done
	* 折り畳み機能の On/Off
* サイドバー機能
	* 配置 (left, right, bottom)
	* スマホ折り畳み
+ ページ作成
	+ Home ページ ... done
	+ Blog ページ ... done
	+ Project ページ ... done
	+ About ページ ... done
+ ブログ機能
	+ DISQUS ... done
	+ ソーシャルボタン ... done
	+ ページナビ ... done
	+ ページネーション ... done
	+ Archives ページ ... done
	+ Categories ページ ... done
	+ Tags ページ ... done
	+ About ページ ... done
	+ 日付のフォーマット化 ... done
	+ シンタックスハイライト ... done
		* スクロールバーの設定
+ page_columns ... done
	+ n記事ずつレイアウト ... done
+ サイト構成
	+ ブロク、プロジェクトのサブディレクトリ化 ... done
* サイト構築
	+ Rakefile
		+ 新規投稿、新規ページ ... done
		* デプロイ
			+ GitHub Pages ... done
			* Bitbucket
			* Heroku
	* LESS
		* CSS のダイエット
	+ .gitignore ... done
* 画像機能
	+ レスポンシブ画像 ... checked
	* フィーチャー画像、サムネイル画像
* ドキュメント作成

Development Reference
---------------------
### jekyll ###
* [jekyll](http://jekyllrb.com/)
* [mojombo](https://github.com/mojombo/jekyll/wiki)

### Liquid ###
* [Liquid Templating language](http://liquidmarkup.org/)
* [Shopify/liquid - GitHub](https://github.com/shopify/liquid/wiki)

### Liquid on GitHub ###
* [Using Jekyll with Pages - github:help](https://help.github.com/articles/using-jekyll-with-pages)
* [Configuration - mojombo/jekyll Wiki](https://github.com/mojombo/jekyll/wiki/Configuration)
* [Liquid for Designers - Shopify/liquid Wiki](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
* [Module: Liquid::StandardFilters — Documentation for liquid (2.2.2)](http://rubydoc.info/gems/liquid/2.2.2/Liquid/StandardFilters)
* [Liquid::StandardFilters](http://liquid.rubyforge.org/classes/Liquid/StandardFilters.html)
* [Jekyll hacks - HTML excerpts](http://kaspa.rs/2011/04/jekyll-hacks-html-excerpts/)

### jekyll bootstrap ###
* [plusjade/jekyll-bootstrap - GitHub](https://github.com/plusjade/jekyll-bootstrap)
* [jekyllbootstrap.com](http://jekyllbootstrap.com/)
* [ruby と jekyll と jekyll-bootstrap で静的サイトを作る](http://krakenbeal.blogspot.jp/2012/05/ruby-jekyll-jekyll-bootstrap.html)

### Template ###
* [Jekyll-Bootstrap-Template](https://github.com/jgritman/Jekyll-Bootstrap-Template)
* [html5-jekyll-template](https://bitbucket.org/bobschi/html5-jekyll-template)

### Related Posts ###
* [Migrating from Wordpress to Jekyll - Part 2: **Everything** you need to know about Jekyll](http://vitobotta.com/how-to-migrate-from-wordpress-to-jekyll/)

### Pagenation ###
* [blackwinter / jekyll-pagination](https://github.com/blackwinter/jekyll-pagination)

### Tag Could ###
* [Generating a Tag Cloud in Jekyll](http://www.justkez.com/generating-a-tag-cloud-in-jekyll/)

### jquery-cookie ###
* [A simple, lightweight jQuery plugin for reading, writing and deleting cookies](https://github.com/carhartl/jquery-cookie)

### Twitter Bootstrap ###
* [Twitter Bootstrap - GitHub](http://twitter.github.com/bootstrap/)

#### bootstrap-responsive.css の定義順 (2.0.4) ####

	@media (max-width: 767px) {...}
	@media (min-width: 768px) and (max-width: 979px) {...}
	@media (max-width: 480px) {...}
	@media (max-width: 767px) {...}
	@media (min-width: 768px) and (max-width: 979px) {...}
	@media (min-width: 1200px) {...}
	@media (max-width: 979px) {...}
	@media (min-width: 980px) {...}

#### bootstrap-responsive.css の定義順 (2.1.0) ####

	@media (min-width: 768px) and (max-width: 979px) {...}
	@media (max-width: 767px) {...}
	@media (min-width: 1200px) {...}
	@media (min-width: 768px) and (max-width: 979px) {...}
	@media (max-width: 767px) {...}
	@media (max-width: 480px) {...}
	@media (max-width: 979px) {...}
	@media (min-width: 980px) {...}

#### Twitter Bootstrap のカスタマイズ／カラーテーマ ####
* [超便利！Twitter BootstrapでさくさくWeb開発 : アシアルブログ](http://blog.asial.co.jp/887)
* [Download - Twitter Bootstrap](http://twitter.github.com/bootstrap/download.html)
* [Bootswatch: Free themes for Twitter Bootstrap](http://bootswatch.com/)
* [StyleBootstrap.info](http://stylebootstrap.info/)

Structure
---------

### Files ###

	~/jekyll-responsive-bootstrap.github.com
	├── 404.html
	├── README.md
	├── Rakefile
	├── _config.yml
	├── _includes
	├── _layouts
	├── _plugins
	├── _posts
	├── _site
	├── assets
	├── archive.html
	├── assets
	├── atom.xml
	├── categories.html
	├── changelog.md
	├── img
	├── index.html
	├── pages.html
	├── sitemap.txt
	└── tags.html

### Site ###

	.
	├── 404.html
	├── index.html
	├── about.html
	├── assets
	│   ├── css
	│   ├── ico
	│   ├── img
	│   └── js
	├── blog
	│   ├── index.html
	│   ├── archives.html
	│   ├── ategories.html
	│   ├── tags.html
	│   └── about.html
	├── project
	│   ├── index.html
	│   └── project1.html
	├── atom.xml
	├── rss.xml
	└── sitemap.xml

Disqus
------
### Combination ###

	<script type="text/javascript" src="http://tokkonopapa.disqus.com/combination_widget.js?num_items=5&hide_mods=0&color=blue&default_tab=people&excerpt_length=200"></script><a href="http://disqus.com/">Powered by Disqus</a>

### Recent Comments ###

	<div id="recentcomments" class="dsq-widget"><h2 class="dsq-widget-title">Recent Comments</h2><script type="text/javascript" src="http://tokkonopapa.disqus.com/recent_comments_widget.js?num_items=5&hide_avatars=0&avatar_size=32&excerpt_length=200"></script></div><a href="http://disqus.com/">Powered by Disqus</a>

### Popular Threads ###

	<div id="popularthreads" class="dsq-widget"><h2 class="dsq-widget-title">Popular Threads</h2><script type="text/javascript" src="http://tokkonopapa.disqus.com/popular_threads_widget.js?num_items=5"></script></div><a href="http://disqus.com/">Powered by Disqus</a>

### Top Commenters ###

	<div id="topcommenters" class="dsq-widget"><h2 class="dsq-widget-title">Top Commenters</h2><script type="text/javascript" src="http://tokkonopapa.disqus.com/top_commenters_widget.js?num_items=5&hide_mods=0&hide_avatars=0&avatar_size=32"></script></div><a href="http://disqus.com/">Powered by Disqus</a>

### Home › Developers › JavaScript configuration variables ###
* [JavaScript configuration variables](http://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables)

	<script type="text/javascript">
	  var disqus_title = 'Hello world!'; 
	</script>

#### `disqus_developer` ####
	var disqus_developer = 1; // developer mode is on

#### `disqus_shortname` ####
フォーラムの名称

	var disqus_shortname = 'example';

#### `disqus_identifier` ####
通常はページの URL

	var disqus_identifier = '/december-2010/the-best-day-of-my-life/';
	var disqus_identifier = '<? php echo $my_identifier; ?>';

#### `disqus_url` ####

	var disqus_url = 'http://example.com/helloworld.html';

通常は `window.location.href`。
`http://example.com/helloworld.html?123` と `http://example.com/helloworld.html` が
異なる URL と解釈されることを防ぐ。URL は変わることがあるので、`disqus_identifier` を指定する
ことが推奨される。

#### `disqus_title`, `disqus_category_id` ####
以下は、Disqus 開設の最初に使われるだけ。「Settings > General」で設定可能。

### Home › Developers › Universal Code ###
* [Universal Code](http://help.disqus.com/customer/portal/articles/472097-universal-code)

#### Embed code ####

	<div id="disqus_thread"></div>
	<script type="text/javascript">
		/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
		var disqus_shortname = 'tokkonopapa'; // required: replace example with your forum shortname
	
		/* * * DON'T EDIT BELOW THIS LINE * * */
		(function() {
			var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
			dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		})();
	</script>
	<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
	<a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>

#### Comment count ####

	<script type="text/javascript">
	/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
	var disqus_shortname = 'tokkonopapa'; // required: replace example with your forum shortname
	
	/* * * DON'T EDIT BELOW THIS LINE * * */
	(function () {
		var s = document.createElement('script'); s.async = true;
		s.type = 'text/javascript';
		s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);
	}());
	</script>

コメントカウントは、URL が `#disqus_thread` で終わっていなければならない。
`<a href="http://example.com/article1.html#disqus_thread" data-disqus-identifier="article_1_identifier">First article</a>`  
---> `article1.html#disqus_thread` には、`disqus_identifier` がセットされていること。

### Home › Customizing › CSS Customization/Troubleshooting ###
* [CSS Customization/Troubleshooting](http://help.disqus.com/customer/portal/articles/466250-css-customization-troubleshooting)

### Quick Start Guide ###
* [Quick Start Guide](http://help.disqus.com/customer/portal/articles/466182-quick-start-guide)

Prose
-----
* [Prose - A Content Editor for GitHub](http://prose.io/)

Plugins
-------

	https://github.com/LawrenceWoodman/domain_name-liquid_filter
	https://github.com/recurser/jekyll-plugins
	http://recursive-design.com/projects/jekyll-plugins/

GitHub の Jekyll では、`_plugin` 内のカスタム・プラグインは使えないので、ローカル生成した静的サイトを送るしかない。

* [Plugins are disabled during deployment to github pages](https://github.com/mojombo/jekyll/issues/325)
