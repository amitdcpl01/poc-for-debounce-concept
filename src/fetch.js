// Import the hook first
import React, {useState, useEffect} from 'react'
import lodash from "lodash";

function AddItemPopup (){

    // const handleInputChange = e => {
    //     const {name, value} = e.target
    //     setValues({...values, [name]: value})
    // }
    const [message, setMessage] = useState( '' );
    const ITEMS_API_URL =
  "https://github-trending-api.now.sh/repositories?language=";
const DEBOUNCE_DELAY = 500;
// State and setter for search term
const [searchTerm, setSearchTerm] = useState('');
// State and setter for search results
const [results, setResults] = useState([]);

// useEffect(() => {
//     effect
//     return () => {
//         cleanup
//     };
// }, [input])

const [data, setData] = useState({ hits: [] });

//   useEffect(async () => {
//     const result = await axios(
//       'https://hn.algolia.com/api/v1/search?query=redux',
//     );
//     setData(result.data);
//   }, []);

  useEffect(() => {
    if(message){
    lodash.debounce(alert('hello'), DEBOUNCE_DELAY);}
  }
);


  return (
    <div>
      <input
         type="text"
         value={message}
         placeholder="Enter a message"
         onChange={e => setMessage(e.target.value)}
       />
      <p>
        <strong>{message}</strong>
      </p>
    </div>
  );

      }

export default AddItemPopup;