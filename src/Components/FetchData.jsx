import React, { useState } from 'react'
import UseFetch from './UseFetch'
import './FetchData.css'

const FetchData = () => {
  const [data]=UseFetch('https://api.npoint.io/9045c260b1565daa9e15');        //Implement the custom hook by passing the specific url from which you want to fetch data inside the FetchData arrow function
  console.log(data);                                                          //console.log to check whether data has been retrieved in the variable data
  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Fruits Guide and Benefits</h1>
        {data && data.map((e)=>(                                              //retrieve the data
          <>
          <li className='list_data'>                                          {/*Deploys list of the retrieved data and its atributes*/}
            <h3>{e.name}</h3>
            <p><strong>Importance:</strong>{e.importance}</p>
            <p><strong>Benefits:</strong>{e.benefits}</p>
            <p><strong>Time: </strong>{e.best_time_to_intake}</p>
          </li>
          </>
        ))}
     </ul>
    </>
  )
}

export default FetchData