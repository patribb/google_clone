import { useState, useContext, createContext } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setisLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "ES",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "b86a7c6700msh1b49ab78bc422ecp1165dcjsn8b9a50a2c5dd",
      },
    });
    const data = await response.json();
    console.log(data);
    setResults(data);
    setisLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading} }
    >
      {children}
    </ResultContext.Provider>
  );
};


export const useResultContext = () => useContext(ResultContext);