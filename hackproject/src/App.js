import { useEffect, useState } from "react";
import Nav from './views/Nav'
import axios from "axios";
import { TextField } from '@material-ui/core'
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://simpleanime.p.rapidapi.com/anime/search/${searchValue}`,
      headers: {
        "x-rapidapi-key": "cc687eba84mshcc7485fcf110baap193a15jsnfb1be463a74d",
        "x-rapidapi-host": "simpleanime.p.rapidapi.com",
      },
    }
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.data);
        console.log("Initial Data Grab from the API", response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [searchValue]);

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  return (
    <div className="App">
      <Nav data={data} />
    <div className='header' style={{height: '50vh'}}></div>
    
      <div className='d-flex flex-column flex-wrap justify-content-center' style={{backgroundColor: 'aquamarine', textAlign: 'center'}}>
        <h3 style={{alignSelf: 'center', padding: '3rem', color: '#444'}}>Start your anime adventure here</h3> 
        <TextField 
        value={searchValue}
        onChange={handleChange}
        placeholder='Enter search parameters'
        style={{paddingBottom: '7vh', maxWidth: '50vw', alignSelf: 'center'}}
        />
      </div>
     <div className='d-flex flex-row flex-wrap justify-content-center cardHolder'>
        {data &&
          data.map((item, idx) => {
            return (
              <div className='d-flex flex-column flex-wrap justify-content-center cards' key={idx} >
                <img style={{maxWidth: '50vw', padding: '4vh 0vw', alignSelf: 'center'}} src={data[idx].cover} alt={data[idx].title} />
                <h3>{data[idx].title}</h3>
                <h6>Date Added: {data[idx].date}</h6>
                <p style={{paddingBottom: '2vh'}}>{data[idx].vid_id}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
