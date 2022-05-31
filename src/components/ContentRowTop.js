import React, { useEffect, useState } from 'react';
//import imagenFondo from '../assets/images/mandalorian.jpg';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';

function ContentRowTop(){
    let [lastProduct, setlastProduct]= useState({}) 
   
    useEffect(() => { 

		    let lastArticle = {}

            fetch('/api/products')

            	.then(res => res.json())

            	.then((apiData) => {
					let ultimoIndice = apiData.data.length - 1;
					let idUltimoProducto = apiData.data[ultimoIndice].id;
					console.log (idUltimoProducto);
                
					return fetch (`/api/products/${idUltimoProducto}`)
				})

				.then(res => res.json()) 

				.then ((product) => {
					lastArticle = { 
						nombre: product.product.product_name, 
						descripcion: product.product.product_description,
						imagen: "http://localhost:3001/api/products/image/" + product.product.id,
					};
					setlastProduct (lastArticle)
				})
    }, [])
	
	return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid bg-dark">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-white">TecHouse Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<h5>{lastProduct.nombre}</h5>
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={lastProduct.imagen} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>{lastProduct.descripcion}</p>
									
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;