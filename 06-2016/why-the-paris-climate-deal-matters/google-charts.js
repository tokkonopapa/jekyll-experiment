google.load('visualization', '1', {
				'packages': ['corechart']
				});
				google.setOnLoadCallback(drawChart);

				function drawChart() {
				// The URL of the spreadsheet to source data from.

				var areaquery = new google.visualization.Query(
				'https://docs.google.com/spreadsheets/d/1AgT_CWOHqUNtj7I_qv-DTeFzI78V3MSJ_yrkN8yqJtU/gviz/tq?sheet=Sheet2&headers=1&range=A1:J114');
				areaquery.send(areadraw);

				}

				function areadraw(response) {
				if (response.isError()) {
				alert('Error in query');
				}

				var areadata = response.getDataTable();

				var areaoptions = {
				'title': 'Countries by Historical CO2 Emissions',
				backgroundColor: '#FAFAFA',
				isStacked: true,
hAxis: {
				title: 'Year',
				format: '',
				gridlines: {
				color: '#212121',
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
				title: 'Emissions',
				gridlines: {
				color: '#212121',
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
				colors: ['#FF8A65', '#4DB6AC', '#7986CB', '#FF5722', '#009688', '#3F51B5', '#E64A19', '#00796B', '#303F9F']
				};

				function resize() {
				var areachart = new google.visualization.AreaChart(
				document.getElementById('area_div'));
				areachart.draw(areadata, areaoptions);
				}

// don't forget to add theses in!
				window.onload = resize();
				window.onresize = resize;

				}


// redraws the chart once the window is resized 

				$(window).resize(function() {
				drawChart();
				});
