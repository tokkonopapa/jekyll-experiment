---
---
/* Author: tokkonopapa@yahoo.com
 */
 
{% if site.asides.tweets and site.twitter %}{% include js/twitter.js %}{% endif %}
{% if site.asides.github and site.github  %}{% include js/github.js  %}{% endif %}

$(function () {
	$('.carousel').carousel();
});
