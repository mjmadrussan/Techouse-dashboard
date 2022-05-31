import React, { useEffect, useState } from 'react';
import Register from './Register';

function Movie() {

	let [productList, setproductList] = useState([])

	useEffect(() => {

		fetch('/api/products')
			.then(res => res.json())

			.then((product) => {
				let article = product.data
			
				setproductList(article)

			})
	}, [])




	return (
		<React.Fragment>
			{/*<!-- PRODUCTS LIST -->*/}
			<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>


			{/*<!-- DataTales Example -->*/}
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
							<thead>
								<tr>
									<th>Id</th>
									<th>Nombre</th>
									<th>Descripción</th>
									<th>Compatibilidad</th>
								</tr>
							</thead>
							<tbody>


								{productList.map((register, index) => {
									return <Register  {...register} key={index} />

								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
export default Movie;