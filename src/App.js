import React, { useEffect, useState } from 'react';
import Webapi from './components/Webapi'
import ChatsCoronavirus from './components/ChartsCoronavirus';
import TabelaCoronavirus from './components/TabelaCoronavirus';

function App() {

  const [isLoaded, SetIsLoaded] = useState(false);
  const [dados, SetDados] = useState([]);

  useEffect(() => {
    Webapi().then(value => {      
      SetDados(value.rawData);
      SetIsLoaded(value.isLoaded);

    });
  }, [isLoaded])

  const loadhandler = (country, states) => {
      const countrys = dados.filter(c => c.Country_Region === country && states.includes(c.Province_State));
      const values = countrys.map(values => ([values.Province_State, Number.parseFloat(values.Confirmed), Number.parseFloat(values.Deaths)]));
      let titulos = ["Coutry", "Infectados", "Mortos"];
      let listas = [];
      listas.push(titulos);
      listas.push(...values);
      return listas;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
         <ChatsCoronavirus dados={loadhandler("Brazil", ["Parana", "Sao Paulo", "Santa Catarina", "Distrito Federal", "Amazonas"])} country_region="Brazil"/>
         <TabelaCoronavirus dados={loadhandler("Brazil", ["Parana", "Sao Paulo", "Santa Catarina", "Distrito Federal", "Amazonas"])} />
      </div>
    )
  }
}

export default App;
