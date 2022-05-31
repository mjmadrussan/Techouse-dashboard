import React from "react"
function Register(props) {
    return(
        <React.Fragment>
				  						<tr>
											{/* Hay que hacer un componente para agregar filas */}
											<td>{props.id}</td>
											<td>{props.product_name}</td>
											<td>{props.product_description}</td>
                                            <td>{props.product_compatibilities.device_name}</td>
										</tr>
									
					           
        </React.Fragment>
    )
}
export default Register
