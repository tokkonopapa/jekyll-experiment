google.load('visualization', '1', {
				'packages': ['corechart']
				});
				google.setOnLoadCallback(drawChart);

				function drawChart() {
				// The URL of the spreadsheet to source data from.

				var barquery = new google.visualization.Query(
				'https://docs.google.com/spreadsheets/d/1yd3urue-xF6_HUQUyMXug4qLrUaGyg6iFdGjliq_RYY/gviz/tq?sheet=Sheet3&headers=1&range=A1:F18');
				barquery.send(bardraw);

				}

				function bardraw(response) {
				if (response.isError()) {
				alert('Error in query');
				}

				var bardata = response.getDataTable();

				var baroptions = {
				'title': 'Party Affiliation: What Americans Consider Themselves',
				backgroundColor: '#FAFAFA',
				chartArea: {  width: "50%", height: "70%" },
hAxis: {
				title: 'Number of Refugees',
				gridlines: {
				color: '#3F51B5',
				count: 5
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
				title: 'Source Countries',
				gridlines: {
				color: '#3F51B5',
				count: 0
				},
				baselineColor: '#212121',
				textStyle: {
				color: '#212121'
				},
				titleTextStyle: {
				color: '#212121'
				}
				},
titleTextStyle: {
				color: '#212121'
				},
				tooltip: {
				trigger: 'selection',
				textStyle: {
				color: '#212121'
				},
				},
				colors: ['#3F51B5', '#009688', '#FF5722']
				};

				function resize() {
				var barchart = new google.visualization.BarChart(
				document.getElementById('bar_div'));
				barchart.draw(bardata, baroptions);
				}

// don't forget to add theses in!
				window.onload = resize();
				window.onresize = resize;

				}


// redraws the chart once the window is resized 

				$(window).resize(function() {
				drawChart();
				});
