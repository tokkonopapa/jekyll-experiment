/*
 * GitHub widget
 * http://developer.github.com/v3/repos/
 */
;(function($, window, document) {
	$.fn.showGitHubRepo = function(username, options) {
		options = $.extend({}, $.fn.showGitHubRepo.options, options);

		var getRepos = function(user, opts, callback) {
			return $.ajax({
				url: 'https://api.github.com' + '/users/' + user + '/repos',
				type: 'GET',
				data: opts,
				dataType: 'jsonp',
				success: function(results) {
					callback(results.data);
				}
			});
		};

		var putRepos = function(elm, args) {
			elm.empty().hide();
			var n = args.length-1;
			$.each(args, function(i, repo) {
				elm.append('<li><p><a href="' + repo.html_url + '">' + repo.name + '</a><br>' +
				'<i class="icon-star"></i>' + repo.watchers + ' / forks : ' + repo.forks + '</p></li>');
				if (i < n) {
					elm.append('<li class="divider"></li>');
				}
			});
			elm.fadeIn();
		};

		return this.each(function() {
			var elem = $(this);

			getRepos(username, options,
				function(args) {
					putRepos(elem, args.slice(0, {{ site.github.count }}));
				},
				function(args) {
					elem.empty().append('<p>' + args.statusText + '</p>');
				}
			);
		});
	};

	$.fn.showGitHubRepo.options = {
		type: 'owner',
		sort: 'pushed',
		direction: 'desc'
	};

})(jQuery, window, document);

$(function () {
	$('#github-repo').showGitHubRepo('{{ site.github.username }}', {
		count: {{ site.github.count }}
	});
});
