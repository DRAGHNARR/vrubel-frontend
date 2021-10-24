import { systems, southstreams } from './utils/data';

import React, { useState, useEffect } from 'react';
import './App.css';
import Head from "./components/Head/Head";
import Search from "./components/Search/Search";
import ProcessCardList from "./components/ProcessCardList/ProcessCardList";
import Foot from './components/Foot/Foot';
import Divider from './components/Divider/Divider';

function App() {
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <div className="App">
      <Head/>
      <Search setSearch={setSearch}/>
      <Divider/>
      <ProcessCardList processes={southstreams.filter(process => process.title.toLowerCase().includes(search.toLowerCase()))}/>
      <Divider/>
      <Foot/>
    </div>
  );
}

export default App;
