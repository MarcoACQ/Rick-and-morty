import { useEffect } from "react";
import App from "../App";

function Api(setResults, setInfo) {
  fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data => {
      setResults(data.results);
      setInfo(data.info);
    });
}

export default Api;
