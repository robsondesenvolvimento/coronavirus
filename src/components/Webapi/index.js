async function Webapi(){
      return await fetch("https://coronavirus.m.pipedream.net")
      .then(res => res.json())
      .then(
        (result) => {      
            return { isLoaded: true, rawData: result.rawData }
            //return result.rawData
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          return { isLoaded: true, rawData: error }
          //return error          
        }
      )
}

export default Webapi