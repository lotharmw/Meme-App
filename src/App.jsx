import MemeCard from "./components/MemeCard";
import { useState, useEffect } from "react";

function App() {
  const [memeData, setMemeData] = useState([]);
  const all = memeData;

  const shuffleMeme = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        if (!response.ok)
          throw new Error(
            `The fetch failed with a status of ${response.status}`
          );
        const responseData = await response.json();
        const memes = responseData.data.memes;
        shuffleMeme(memes);
        setMemeData(memes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <h1 className="text-5xl font-bold text-center mt-16">Meme Generator</h1>
        {all.length ? <MemeCard all={all} /> : <></>}
      </div>
    </>
  );
}

export default App;
