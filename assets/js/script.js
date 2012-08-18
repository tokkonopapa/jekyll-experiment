/* Author: tokkonopapa@yahoo.com
 */

/*
 * Twitter widget
 */
(function ($) {
	$.fn.showTweets = function (username, options) {
		var $this = this;

		var defaults = {
//			user_id: username,
			count: 5,
			trim_user: true,
			include_entities: true,
			exclude_replies: true
		}

		options = $.extend({}, defaults, options);

		var getTweets = function (username) {
			return $.ajax({
//				url: 'https://api.twitter.com/1/statuses/user_timeline.json',
				url: 'http://api.twitter.com/1/statuses/user_timeline/' + username + '.json',
				data: options,
				dataType: 'jsonp'
			});
		}

		var putTweets = function (elm, args) {
			var n = args.length-1;
			elm.empty().hide();
			$.each(args, function (i, tweet) {
				if (tweet.text !== undefined) {
					elm.append('<li><p>' + makeLinks(tweet.text) + '</p></li>');
					if (i < n) {
						elm.append('<li class="divider"></li>');
					}
				}
			});
			elm.fadeIn();
		}

		var makeLinks = function (text) {
			return text.replace(/(https?:\/\/)([\w\-:;?&=+.%#\/]+)/gi, '<a href="$1$2">$2</a>')
				.replace(/(^|\W)@(\w+)/g, '$1<a href="http://twitter.com/$2">@$2</a>')
				.replace(/(^|\W)#(\w+)/g, '$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>');
		};

		var now = (new Date(now)).getTime();
		var prettyDate = function (now, time) {
			var date = new Date(time || ""),
				diff = ((now - date.getTime()) / 1000),
				day_diff = Math.floor(diff / 86400);

			if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) {
				return;
			}

			return day_diff == 0 && (
					diff < 60 && "just now" ||
					diff < 120 && "1 minute ago" ||
					diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
					diff < 7200 && "1 hour ago" ||
					diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
				day_diff == 1 && "Yesterday" ||
				day_diff < 7 && day_diff + " days ago" ||
				day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
		}

		var n = options.count;
		options.count += 5;

		getTweets(username, options).done(function(args) {
			putTweets($this, args.slice(0, n));
		});

		return this;
	};
})(jQuery);

/* Truncate excerpt string
 * The filter `truncate` of Liquid 2.2.2 on GitHub 
 * would truncate multi-byte character incorrectly.
 */
$(function (){
	$('.excerpt p').each(function() {
		var p = this.innerHTML;
		this.innerHTML = p.slice(0, p.length-4) + '...';
	});
});
