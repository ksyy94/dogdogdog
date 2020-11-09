// import React from 'react';
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
// <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.2/raphael-min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>

// const Original = () => {

// 	bootcards.init({
// 		offCanvasBackdrop: false,
// 		offCanvasHideOnMainClick: false,
// 		enableTabletPortraitMode: false,
// 		disableRubberBanding: false,
// 		disableBreakoutSelector: 'a.no-break-out'
// 	});

// 	var financeCharts = function () {
// 		$("#financesChart").empty();
// 		Morris.Bar({
// 			element: 'financesChart',
// 			data: [{
// 				year: 2013,
// 				sales: 1.1
// 			}, {
// 				year: 2014,
// 				sales: 0.9
// 			}, {
// 				year: 2015,
// 				sales: 1.3
// 			}, {
// 				year: 2016,
// 				sales: 0.7
// 			}],
// 			xkey: 'year',
// 			ykeys: ['sales'],
// 			labels: ['Sales (Mil. $)'],
// 			hideHover: 'auto'
// 		});
// 	}

// 	var growthCharts = function () {
// 		$("#growthChart").empty();
// 		Morris.Bar({
// 			element: 'growthChart',
// 			data: [{
// 				year: 2013,
// 				growth: 5
// 			}, {
// 				year: 2014,
// 				growth: 2
// 			}, {
// 				year: 2015,
// 				growth: 7
// 			}, {
// 				year: 2016,
// 				growth: 11
// 			}],
// 			xkey: 'year',
// 			ykeys: ['growth'],
// 			labels: ['Percentage (%)'],
// 			hideHover: 'auto'
// 		});
// 	}

// 	$(document).ready(function () {
// 		financeCharts();
// 		growthCharts();
// 	});
// 	$(window).on('resize', function () {
// 		financeCharts();
// 		growthCharts();
// 	});
// 	$(window).on('click', function () {
// 		financeCharts();
// 		growthCharts();
// 	});

// 	function comp(nameid) {
// 		$('.cards').addClass('hidden');
// 		$(nameid).removeClass('hidden').addClass('visible');
// 	}









// 	return (
// 		<div>
// 			<div class="container">
// 				<div class="row">
// 					<div class="col-md-offset-3 col-md-6">
// 						<div class="panel panel-default bootcards-summary">
// 							<div class="panel-heading">
// 								<h3 class="panel-title">Company Management</h3>
// 							</div>
// 							<div class="panel-body">
// 								<div class="row">
// 									<div class="col-xs-6 col-sm-4">
// 										<a class="bootcards-summary-item" href="#finances" onclick="comp('#finances')">
// 											<i class="fa fa-3x fa-dollar"></i>
// 											<h4>Finances <span class="label label-info">431</span></h4>
// 										</a>
// 									</div>
// 									<div class="col-xs-6 col-sm-4">
// 										<a class="bootcards-summary-item" href="#clients" onclick="comp('#clients')">
// 											<i class="fa fa-3x fa-users"></i>
// 											<h4>Clients <span class="label label-warning">432</span></h4>
// 										</a>
// 									</div>
// 									<div class="col-xs-6 col-sm-4">
// 										<a class="bootcards-summary-item" href="#files" onclick="comp('#files')">
// 											<i class="fa fa-3x fa-files-o"></i>
// 											<h4>Files <span class="label label-info">65</span></h4>
// 										</a>
// 									</div>
// 									<div class="col-xs-6 col-sm-4">
// 										<a class="bootcards-summary-item" href="#tasks" onclick="comp('#tasks')">
// 											<i class="fa fa-3x fa-check-square-o"></i>
// 											<h4>Tasks <span class="label label-warning">109</span></h4>
// 										</a>
// 									</div>
// 									<div class="col-xs-6 col-sm-4">
// 										<a class="bootcards-summary-item" href="#socialmedia" onclick="comp('#socialmedia')">
// 											<i class="fa fa-3x fa-share-alt"></i>
// 											<h4>Social Media <span class="label label-warning">110</span></h4>
// 										</a>
// 									</div>
// 									<div class="col-xs-6 col-sm-4">
// 										<a class="bootcards-summary-item" href="#growth" onclick="comp('#growth')">
// 											<i class="fa fa-3x fa-bar-chart"></i>
// 											<h4>Growth <span class="label label-info">110</span></h4>
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 							<div class="panel panel-default bootcards-chart cards hidden" id="finances">
// 								<div class="bootcards-chart-canvas" id="financesChart"></div>
// 							</div>
// 							<div class="table-responsive cards hidden" id="clients">
// 								<table class="table table-hover">
// 									<thead>
// 										<tr class="active">
// 											<th>Name</th>
// 											<th>Products</th>
// 											<th>Paid</th>
// 										</tr>
// 									</thead>
// 									<tbody>
// 										<tr>
// 											<td>Johan Millner</td>
// 											<td>2</td>
// 											<td>500</td>
// 										</tr>
// 										<tr>
// 											<td>Jena Torey</td>
// 											<td>3</td>
// 											<td>750</td>
// 										</tr>
// 										<tr>
// 											<td>Jesus Da Silva</td>
// 											<td>7</td>
// 											<td>1750</td>
// 										</tr>
// 										<tr>
// 											<td>Robert Ramsey</td>
// 											<td>1</td>
// 											<td>250</td>
// 										</tr>
// 										<tr>
// 											<td>Ben Rosenberg</td>
// 											<td>5</td>
// 											<td>1250</td>
// 										</tr>
// 										<tr>
// 											<td><strong>Total</strong></td>
// 											<td><strong>18</strong></td>
// 											<td><strong>4500</strong></td>
// 										</tr>
// 									</tbody>
// 								</table>
// 							</div>
// 							<div class="table-responsive cards hidden" id="files">
// 								<table class="table table-hover">
// 									<thead>
// 										<tr class="active">
// 											<th>Files</th>
// 											<th>Forecast</th>
// 											<th>Description</th>
// 										</tr>
// 									</thead>
// 									<tbody>
// 										<tr>
// 											<td>Estimated Earning</td>
// 											<td>$1.8M</td>
// 											<td>Under Norm</td>
// 										</tr>
// 										<tr>
// 											<td>Future Plan</td>
// 											<td>$12M</td>
// 											<td>2016-2020</td>
// 										</tr>
// 										<tr>
// 											<td>This Year Plan</td>
// 											<td>$0.7M</td>
// 											<td>Under Norm</td>
// 										</tr>
// 									</tbody>
// 								</table>
// 							</div>
// 							<div class="table-responsive cards hidden" id="tasks">
// 								<table class="table table-hover">
// 									<thead>
// 										<tr class="active">
// 											<th>Task</th>
// 											<th>Progress</th>
// 										</tr>
// 									</thead>
// 									<tbody>
// 										<tr>
// 											<td>Expand the existing offices</td>
// 											<td>On Progress</td>
// 										</tr>
// 										<tr>
// 											<td>Start working on the new plan</td>
// 											<td>To Do</td>
// 										</tr>
// 										<tr>
// 											<td>Implement Jira</td>
// 											<td>To Do</td>
// 										</tr>
// 									</tbody>
// 								</table>
// 							</div>
// 							<div class="table-responsive cards hidden" id="socialmedia">
// 								<table class="table table-hover">
// 									<thead>
// 										<tr class="active">
// 											<th>Name</th>
// 											<th>Nr.</th>
// 										</tr>
// 									</thead>
// 									<tbody>
// 										<tr>
// 											<td>Facebook</td>
// 											<td>2700</td>
// 										</tr>
// 										<tr>
// 											<td>Twitter</td>
// 											<td>3300</td>
// 										</tr>
// 										<tr>
// 											<td>Instagram</td>
// 											<td>2200</td>
// 										</tr>
// 										<tr>
// 											<td>Email Marketing</td>
// 											<td>1000</td>
// 										</tr>
// 										<tr>
// 											<td><strong>Total</strong></td>
// 											<td><strong>9200</strong></td>
// 										</tr>
// 									</tbody>
// 								</table>
// 							</div>
// 							<div class="panel panel-default bootcards-chart cards hidden" id="growth">
// 								<div class="bootcards-chart-canvas" id="growthChart"></div>
// 							</div>
// 							<div class="panel-footer">
// 								<small>Sample Company</small>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 		</div>
// 	);
// };

// export default Original;