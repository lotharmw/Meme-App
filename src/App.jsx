import { useState, useEffect } from "react";

function App() {
  const [memeData, setMemeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        if (!response.ok)
          throw new Error(
            `The fetch failed with a status of ${response.status}`
          );
        const responseData = await response.json();
        setMemeData(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // console.log(memeData.data.memes[0].url);
  }, []);

  return (
    <>
      <img src={memeData.data.memes[0].url} alt="" />
    </>
  );
}

export default App;
