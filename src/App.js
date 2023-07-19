import { useEffect, useState } from 'react';
import './App.css';
import Api from "./components/Api"
import Card from "./components/Card"

function App() {


  const API_URL = 'http://localhost:3500/items';
  const [itemslist, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setisLoading] = useState(true)

  //side effects for fetching data from dom elements

  useEffect(() => {

    //cant use directly async in useeffect argument we can use it in inner function
    const FetchItems = async () => {

      //true
      try {
        const response = await fetch(API_URL)
        // console.log(response)
        if (!response.ok) throw Error("Data not received")


        //convert data to json
        const listItems = await response.json();
        // console.log(listItems)

        setItems(listItems)
        setFetchError(null)
      }

      //catch the error
      catch (err) {
        setFetchError(err.message)
      }
      finally {
        setisLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await FetchItems())()
    }, 2000)

    //call directly
    // FetchItems()
  }, [])



  return (

    <div className="App">
      <nav className='nav'>
        <div className='heading1'>
          Technologies
        </div>
      </nav>
      <div className='box'>
        <Api Items={itemslist} />
        <div className='whole-container'>
          {isLoading && <p>Loading...</p>}
          {fetchError && <p>{`Because the url is wrong Error:${fetchError}`}</p>}
          {!isLoading && !fetchError && <Card />}
        </div>
      </div>
    </div>

  );


}

export default App;
