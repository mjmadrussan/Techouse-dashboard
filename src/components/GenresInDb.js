import React, { useEffect, useState } from 'react';
import Compatibility  from './Genre';

function CompatibilityInDb(){
    //countByCategory

    let [categoryCounter, setcategoryCounter]= useState([]) 
    
    useEffect(() => {

            fetch('/api/products')
            .then(res => res.json())
            
            .then((apiData) => { 

                let alexaCount = {
                        compatibility: Object.keys(apiData.countByCategory)[0],
                        count: apiData.countByCategory.Alexa
                    }

                let siriCount = {
                        compatibility: Object.keys(apiData.countByCategory)[1],
                        count: apiData.countByCategory.Siri
                    }
                    
                setcategoryCounter ([alexaCount, siriCount])
                })
    }, [])

    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Cantidad de productos por sistema</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    categoryCounter.map((compatibility,index)=>{
                                        return  <Compatibility  {...compatibility}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}
export default CompatibilityInDb;