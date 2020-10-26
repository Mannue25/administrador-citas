
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Cliente de Axios.
import clienteAxios from './config/axios'


import Pacientes from './components/Pacientes';
import NuevaCita from './components/Nuevacita';
import Cita from './components/Cita'


function App() {

  // STATE  de la app
  const [citas, guardarCitas] =useState([]);

  const [consultar, guardarConsulta] = useState(true);

  useEffect(()=> {
    if(consultar) {
      const consultarAPI = () => {
        clienteAxios.get('/pacientes')
          .then(res => {
            guardarCitas(res.data);

            //Deshabilitar la cosulta
            guardarConsulta(false);
          })
          .catch(error => console.log(error));
      } 

      consultarAPI()
    }

  }, [consultar]);
  return (
    <Router>
      <Switch>
        <Route
        exact
        path="/"
        component={() => <Pacientes citas={citas} />}
        />
        <Route
        exact
        path="/nueva"
        component={() => <NuevaCita guardarConsulta={guardarConsulta}/>}
        />
        <Route
        exact
        path="/cita/:id"
        render={(props) => {
         const cita = citas.filter(cita => cita._id === props.match.params.id);

          return (
            <Cita
            
            cita={cita[0]}
            guardarConsulta={guardarConsulta}
            />
           
          )
        }}
        />
      </Switch>
    </Router>
  );
}

export default App;
