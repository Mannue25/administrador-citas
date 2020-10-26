import React from 'react'
import {Link} from 'react-router-dom';
 
const CitasVacias = () => {
    return (
        <>
            <h1 className="my-5">No hay citas, agrega una nueva</h1>
 
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/nueva'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear Cita</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default CitasVacias;