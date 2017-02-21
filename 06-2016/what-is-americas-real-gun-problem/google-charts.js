				google.load('visualization', '1', {
				'packages': ['corechart']
				});
				google.setOnLoadCallback(drawChart);
r
				function drawChart() {
				// The URL of the spreadsheet to source data from.

				var scatquery = new google.visualization.Query(
				'https://docs.google.com/spreadsheets/d/1YgtVLUlQJa4KzLdCy47Wp_BBx-CrSIA7_VKA1IfxdZE/gviz/tq?sheet=Sheet1&headers=1&range=A1:C36');
				var piequery = new google.visualization.Query(
				'https://docs.google.com/spreadsheets/d/1YgtVLUlQJa4KzLdCy47Wp_BBx-CrSIA7_VKA1IfxdZE/gviz/tq?sheet=Sheet2&headers=1&range=A1:B8');
				scatquery.send(scatdraw);
				piequery.send(piedraw);
				}

				function scatdraw(response) {
				if (response.isError()) {
				alert('Error in query');
				}

				var scatdata = response.getDataTable();
				scatdata.setColumnProperty(2, 'role', 'tooltip');

				var scatoptions = {
				'title': 'Developed Countries by Gun Possession and Gun Deaths',
				backgroundColor: '#FAFAFA',
				hAxis: {
				title: 'Guns per 100 people, 2014',
				gridlines: {
				color: '#3F51B5',
				count: 4
				},
				baselineColor: '#212121',
				textStyle: {
				color: '#212121'
				},
				titleTextStyle: {
				color: '#212121'
				}
				},
				vAxis: {
				title: 'Gun Deaths per 100k people, per year',
				gridlines: {
				color: '#3F51B5',
				count: 4
				},
				baselineColor: '#212121',
				textStyle: {
				color: '#212121'
				},
				titleTextStyle: {
				color: '#212121'
				}
				},
				'legend': 'none',
				titleTextStyle: {
				color: '#212121'
				},
				tooltip: {
				trigger: 'selection',
				textStyle: {
				color: '#212121'
				},
				showColorCode: false
				},
				trendlines: {
				0: {
				type: 'linear',
				tooltip: false
				}
				},
				colors: ['#3F51B5'],
				};

				function resize() {
				var scatchart = new google.visualization.ScatterChart(
				document.getElementById('scat_div'));
				scatchart.draw(scatdata, scatoptions);
				}

// don't forget to add theses in!
				window.onload = resize();
				window.onresize = resize;

				}

				function piedraw(response) {
				if (response.isError()) {
				alert('Error in query');
				}

				var piedata = response.getDataTable();

				var pieoptions = {
				'title': 'Sources of Guns for Criminals',
				backgroundColor: '#FAFAFA',
				titleTextStyle: {
				color: '#212121'
				},
				legend: {
				textStyle: {
				color: '#212121'
				}
				},
				pieStartAngle: -50,
				pieSliceText: 'label',
				pieSliceTextStyle: {
				color: '#FAFAFA'
				},
				tooltip: {
				trigger: 'selection',
				textStyle: {
				color: '#212121'
				},
				showColorCode: false
				},
				'legend': 'none',
				colors: ['#3F51B5', '#009688', '#FF5722', '#7986CB', '#4DB6AC', '#FF8A65', '#212121', '#212121', '#212121', '#212121'],
				};

				var piechart = new google.visualization.PieChart(
				document.getElementById('pie_div'));
				piechart.draw(piedata, pieoptions);

				}

// redraws the chart once the window is resized 

				$(window).resize(function() {
				drawChart();
				});
