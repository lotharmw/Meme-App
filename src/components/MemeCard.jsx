import { useState, useEffect } from "react";

function MemeCard({ all }) {
  const [memeIndex, setMemeIndex] = useState(0);
  const [caption, setCaption] = useState([]);

  function handleCaption(event, index) {
    const text = event.target.value || "";
    setCaption(
      caption.map((cap, i) => {
        if (index === i) {
          return text;
        } else {
          return cap;
        }
      })
    );
  }

  useEffect(() => {
    setCaption(Array(all[memeIndex].box_count).fill(" "));
  }, [memeIndex, all]);

  useEffect(() => {
    console.log(caption);
  }, [caption]);

  return (
    <>
      <div className="card card-side bg-base-300 shadow-xl lg:max-w-screen-lg m-auto">
        <figure className="w-1/2 relative">
          <img src={all[memeIndex].url} alt="" />
          <div className="flex flex-col justify-between items-center absolute">
            {caption.map((cap, index) => (
              <textarea
                key={index}
                className="textarea textarea-xs w-full max-w-xs bg-white text-black font-['Impact'] text-2xl"
                value={cap}
              ></textarea>
            ))}
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{all[memeIndex].name}</h2>
          {caption.map((cap, index) => (
            <div key={index} className="flex justify-between mt-4">
              <input
                onChange={(event) => handleCaption(event, index)}
                type="text"
                placeholder="Type here"
                className="input w-full max-w-xs"
              />
              <div className="flex items-center">
                <div className="w-6 h-6 bg-black mx-4 rounded border border-white cursor-pointer"></div>
                <div className="w-6 h-6 bg-white rounded border border-black cursor-pointer"></div>
              </div>
            </div>
          ))}
          <div className="card-actions mt-auto pt-16">
            {memeIndex > 0 ? (
              <button
                onClick={() => setMemeIndex(memeIndex - 1)}
                className="btn btn-primary"
              >
                Previous
              </button>
            ) : (
              <></>
            )}
            <button
              onClick={() => setMemeIndex(memeIndex + 1)}
              className="btn btn-primary mr-auto"
            >
              Next
            </button>
            <button className="btn btn-primary">Generate Meme</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemeCard;
