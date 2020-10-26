import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import clienteAxios from '../config/axios'
const NuevaCita = (props) => {

  const [cita, guardarCita] = useState({
    nombre: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
  
  });

 

  //Función que lea los datos del formulario.
  const actualizarState = e => {
     //leer la cita del formulario.
      guardarCita({
        ...cita,
        [e.target.name] : e.target.value
      })
    }

    //Enviar una petición a la API con AXIOS
    const crearNuevaCita = e => {

      e.preventDefault();

      clienteAxios.post('/pacientes', cita)
        .then(res =>{
          console.log(res)

          //Redireccinar.

          props.guardarConsulta(true)
          props.history.push('/')
        })
    }
  return (
    <Fragment>
      <h1 className="my-5">Crear Nueva Cita</h1>

      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link
              to={"/"}
              className="btn btn-success text-uppercase py-2 px-5 font-weight-bold"
            >
              Volver
            </Link>
          </div>
          <div className="col-md-8 mx-auto">
            <form onSubmit={crearNuevaCita}  className="bg-white p-5 bordered">
              <div className="form-group">
                <label htmlFor="propietario">Nombre del Paciente</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="propietario"
                  name="nombre"
                  placeholder="Nombre del paciente"
                 onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  id="telefono"
                  name="telefono"
                  placeholder="Teléfono"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fecha">Fecha</label>
                <input
                  type="date"
                  className="form-control form-control-lg"
                  id="fecha"
                  name="fecha"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="hora">Hora</label>
                <input
                  type="time"
                  className="form-control form-control-lg"
                  id="hora"
                  name="hora"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="sintomas">Síntomas</label>
                <textarea
                  className="form-control"
                  name="sintomas"
                  rows="6"
                  onChange={actualizarState}
                ></textarea>
                
              </div>

              <input
                type="submit"
                className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold"
                value="Crear Cita"
              />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(NuevaCita);
