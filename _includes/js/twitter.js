/*
 * Twitter widget
 */
;(function($, window, document) {
	$.fn.showTweets = function(username, options) {
		options = $.extend({}, $.fn.showTweets.options, options);

		var getTweets = function(user, opts) {
			return $.ajax({
				url: 'http://api.twitter.com/1/statuses/user_timeline/' + user + '.json',
				data: opts,
				dataType: 'jsonp'
			});
		};

		var putTweets = function(elm, args) {
			elm.empty().hide();
			var n = args.length-1;
			var now = new Date();
			$.each(args, function(i, tweet) {
				if (tweet.text !== undefined) {
					elm.append('<li><p>' + makeLinks(tweet.text) + '&nbsp;' + 
					'<a href="http://twitter.com/' + username + '/status/' + tweet.id_str + '">' + 
					'<span class="badge">' + prettyDate(now, tweet.created_at) + '</span></a></p></li>');
					if (i < n) {
						elm.append('<li class="divider"></li>');
					}
				}
			});
			elm.fadeIn();
		};

		var makeLinks = function(text) {
			return text.replace(/(https?:\/\/)([\w\-:;?&=+.%#\/]+)/gi, '<a href="$1$2">$2</a>')
				.replace(/(^|\W)@(\w+)/g, '$1<a href="http://twitter.com/$2">@$2</a>')
				.replace(/(^|\W)#(\w+)/g, '$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>');
		};

		// This pretty word is from Sky Slavin.
		// (https://github.com/nakedslavin/prettyDate)
		var say = {
			just_now: "now",
			minute_ago: "1m",
			minutes_ago: "m",
			hour_ago: "1h",
			hours_ago: "h",
			yesterday: "1d",
			days_ago: "d",
			last_week: "1w",
			weeks_ago: "w"
		};

		/*
		 * JavaScript Pretty Date
		 * Original is copyrighted (c) 2011 by John Resig (ejohn.org)
		 * (http://ejohn.org/blog/javascript-pretty-date/)
		 * Timezone correction by Zach Leatherman (zachleat.com)
		 * (https://github.com/zachleat/Humane-Dates)
		 */
		var prettyDate = function(now, time) {
			if (typeof now.getTime !== "function") {
				return "&infin;";
			}

			var date = new Date(time || ""),
				diff = (now.getTime() - date.getTime()
					 + (now.getTimezoneOffset() - date.getTimezoneOffset()) * 60000) / 1000,
				day_diff = Math.round(diff / 86400);

			if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) {
				return "&infin;";
			}

			return day_diff === 0 && (
			  diff <    60 && say.just_now || 
			  diff <   120 && say.minute_ago || 
			  diff <  3600 && Math.floor(diff / 60) + say.minutes_ago || 
			  diff <  7200 && say.hour_ago || 
			  diff < 86400 && Math.floor(diff / 3600) + say.hours_ago) || 
			day_diff === 1 && say.yesterday || 
			day_diff <   7 && day_diff + say.days_ago || 
			day_diff === 7 && say.last_week || 
			day_diff >   7 && Math.ceil(day_diff / 7) + say.weeks_ago;
		};

		var n = options.count;
		options.count += 5;

		return this.each(function() {
			var elem = $(this);

			getTweets(username, options).then(
				function(args) {
					putTweets(elem, args.slice(0, n));
				},
				function(args) {
					elem.empty().append('<p>' + args.statusText + '</p>');
				}
			);
		});
	};

	$.fn.showTweets.options = {
		count: 5,
		trim_user: true,
		include_entities: true,
		exclude_replies: true
	};

})(jQuery, window, document);

$(function () {
	$('#tweets').showTweets('{{ site.twitter.username }}', {
		count: {{ site.twitter.count }},
		exclude_replies: {{ site.twitter.exclude_replies }}
	});
});
