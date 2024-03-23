import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import NewItemForm from "./NewItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" 
                   element={<Home snacks={snacks} drinks={drinks}/>}
            />

            <Route path="/new"
                   element={<NewItemForm/>}
            />

            <Route path="/snacks"
                   element={<Menu items={snacks} type="snacks" title="Snacks" />}
            />

            <Route path="/drinks"
                   element={<Menu items={drinks} type="drinks" title="Drinks" />}
            />

            <Route path="/snacks/:id"
                   element={<Item items={snacks} cantFind="/snacks" />}
            />

            <Route path="/drinks/:id"
                   element={<Item items={drinks} cantFind="/drinks" />}
            /> 

            <Route path='/*'
                   element={<p>Hmmm. I can't seem to find what you want.</p>}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
