import React, { useEffect, useState } from 'react';

const UseFetch = (url) => {
    const [data, setData]=useState();                               //variable named data using useState hook along with setData as the function
    useEffect(()=>{                                                 //This is a React Hook used for performing side effects in functional components. It’s typically used for fetching data, subscribing to events, or any other side effects that don’t involve rendering.
        fetch(url).then((res)=>res.json())                          //This initiates an HTTP request to the specified url, .then(res) converts the response from the server to JSON
        .then((data)=>setData(data))                                //This sets the retrieved data to the state variable data. setData is a function that updates the state in React functional components.
    },[])
    return [data]
}

export default UseFetch
