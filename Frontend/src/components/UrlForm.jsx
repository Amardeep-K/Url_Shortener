import { useState } from "react";
import axios from "axios";
import Loader from "./Loader";



export default function App() {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://www.example.com/");
  const [shortUrl, setShortUrl] = useState("");
 

  const handleShorten = async () => {
  try {
    setLoading(true);
    const { data } = await axios.post("https://url-shortener-5-a1ek.onrender.com", {url}  // <-- match the field your backend expects
    );
    console.log(data);

    setShortUrl(data); 
  } catch (err) {
    console.error(err);
  }
};
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div
        className="bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md"
        
      >
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          🔗 URL Shortener
        </h1>

        {/* Input + Button */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="https://www.example.com/"           
            value={url}
            onInput={(e) => {setUrl(e.target.value)
               
                
            }}
             onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleShorten();
              }}}
            
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
           
            onClick={handleShorten}
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition cursor-pointer"
          >
            Shorten URL
          </button>
        </div>
        {loading && <Loader />}

        {/* Result */}
        {shortUrl && (
          <div
            className="mt-6 bg-gray-700 rounded-lg p-4 text-center"
          
          >
            <p className="text-gray-300 mb-2">Your shortened URL :</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-medium hover:underline"
            >
           {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
