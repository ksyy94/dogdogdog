import React from 'react';

const TestItem = () => {
	return (
		<div>
			<div class="container">
				<div class="row">
					<div class="col-md-offset-3 col-md-6">
						<div class="panel panel-default bootcards-summary">
							<div class="panel-heading">
								<h3 class="panel-title">모임 목록</h3>
							</div>
							<div class="panel-body">
								<div class="row">
									<div class="col-xs-6 col-sm-4">
										<a class="bootcards-summary-item" href="#clients" onclick="comp('#clients')">
											<i class="fa fa-3x fa-users"></i>
											<h4>Clients <span class="label label-warning">432</span></h4>
										</a>
									</div>
								</div>
							</div>
							<div class="panel panel-default bootcards-chart cards hidden" id="finances">
								<div class="bootcards-chart-canvas" id="financesChart"></div>
							</div>
							<div class="table-responsive cards hidden" id="clients">
								<table class="table table-hover">
									<thead>
										<tr class="active">
											<th>Name</th>
											<th>Products</th>
											<th>Paid</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Johan Millner</td>
											<td>2</td>
											<td>500</td>
										</tr>
										<tr>
											<td>Jena Torey</td>
											<td>3</td>
											<td>750</td>
										</tr>
										<tr>
											<td>Jesus Da Silva</td>
											<td>7</td>
											<td>1750</td>
										</tr>
										<tr>
											<td>Robert Ramsey</td>
											<td>1</td>
											<td>250</td>
										</tr>
										<tr>
											<td>Ben Rosenberg</td>
											<td>5</td>
											<td>1250</td>
										</tr>
										<tr>
											<td><strong>Total</strong></td>
											<td><strong>18</strong></td>
											<td><strong>4500</strong></td>
										</tr>
									</tbody>
								</table>
							</div>
							
							
							
							<div class="panel panel-default bootcards-chart cards hidden" id="growth">
								<div class="bootcards-chart-canvas" id="growthChart"></div>
							</div>
							<div class="panel-footer">
								<small>Sample Company</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestItem;