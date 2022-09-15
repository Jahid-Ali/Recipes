import { React, useState } from 'react';
import axios from 'axios';
import './App.css';
import Recipes from './components/Recipes';
import { v4 as uuidv4 } from "uuid";
import { IoFastFood } from "react-icons/io5";

const App = () => {

  const [recipes, setrecipes] = useState([]);
  const [query, setquery] = useState("");
  const [healthLabels, setHealthLabels] = useState("vegan");

  const YOUR_APP_ID = process.env.REACT_APP_Application_ID
  const YOUR_APP_KEY = process.env.REACT_APP_Application_Keys

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&Health=${healthLabels}`;

  const getRecipes = async () => {
    try {
      const result = await axios.get(url);
      setrecipes(result.data.hits);
      // console.log(result.data.hits);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await getRecipes();

      //! after submit clear input box
      setquery("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <h1 onClick={getRecipes} >FOODIES <IoFastFood /> </h1>
      <form className="form" onSubmit={(e) => { onSubmit(e) }}>
        <input
          className="input"
          type="text"
          placeholder="What do you have to make"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <button className="submit" type="submit">Submit</button>

        <select className='healthLabels'>
          <option value="vegan" onClick={() => setHealthLabels("vegan")}>Vegan</option>
          <option value="alcohol-free" onClick={() => setHealthLabels("alcohol-free")}>alcohol-free</option>
          <option value="celery-free" onClick={() => setHealthLabels("celery-free")}>celery-free</option>
          <option value="dairy-free" onClick={() => setHealthLabels("dairy-free")}>dairy-free</option>
          <option value="egg-free" onClick={() => setHealthLabels("egg-free")}>egg-free</option>
          <option value="gluten-fre" onClick={() => setHealthLabels("gluten-fre")}>gluten-fre</option>
          <option value="low-sugar" onClick={() => setHealthLabels("low-sugar")}>low-sugar</option>
        </select>
      </form>

      <div className="recipes">
        {
          recipes.map((item) => {
            return <Recipes items={item} key={uuidv4()} />
          })}
      </div>
    </div>
  );
}

export default App;
