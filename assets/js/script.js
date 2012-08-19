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
					elm.append('<li><p>' + makeLinks(tweet.text) + '&nbsp;' +
					'<a href="http://twitter.com/' + username + '/status/' + tweet.id_str + '">' + 
					'<span class="badge">' + prettyDate(tweet.created_at) + '</span></a></p></li>');
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

		var say = {
			just_now:    "now",
			minute_ago:  "1m",
			minutes_ago: "m",
			hour_ago:    "1h",
			hours_ago:   "h",
			yesterday:   "1d",
			days_ago:    "d",
			last_week:   "1w",
			weeks_ago:   "w"
		};

		var now = (new Date()).getTime();
		var prettyDate = function (time) {
			var date = new Date(time || ""),
				diff = ((now - date.getTime()) / 1000),
				day_diff = Math.floor(diff / 86400) + 1;

			if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) {
				return;
			}

			return day_diff == 0 && (
					diff < 60 && say.just_now ||
					diff < 120 && say.minute_ago ||
					diff < 3600 && Math.floor(diff / 60) + say.minutes_ago ||
					diff < 7200 && say.hour_ago ||
					diff < 86400 && Math.floor(diff / 3600) + say.hours_ago) ||
				day_diff === 1 && say.yesterday ||
				day_diff < 7 && day_diff + say.days_ago ||
				day_diff === 7 && say.last_week ||
				day_diff > 7 && Math.ceil(day_diff / 7) + say.weeks_ago;
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
 *//*
$(function () {
	$('.excerpt').each(function() {
		var p = this.innerHTML;
		this.innerHTML = p.slice(0, p.length-4) + '...';
		$(this).css('visibility', 'visible');
	});
});*/
