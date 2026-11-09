import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { CountryType } from "./types";
import CountryCard from "./components/CountryCard";
import { filterCountriesByQuery } from "./utils/filterCountries";
import bgImage from "../src/assets/world.svg";
import loadingGif from "./assets/bouncing-circles.svg";

const API_BASE_URL = process.env.REACT_APP_RESTCOUNTRIES_API_URL || "https://restcountries.com/v3.1";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [filterCountries, setFilterCountries] = useState<CountryType[]>([]);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [search, setSearch] = useState<string>("");

  const filterCountryData = useCallback(() => {
    setFilterCountries(filterCountriesByQuery(countries, search));
  }, [search, countries]);

  const getCountries = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get<CountryType[]>("/all");
      setCountries(data);
      setFilterCountries(data);
    } catch (error) {
      console.error("API Hatası:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  useEffect(() => {
    filterCountryData();
  }, [filterCountryData]);

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          padding: "3rem 2rem 5rem 2rem ",
          overflow: "scroll",
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          maxWidth: "1200px",
          margin: "2rem auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div style={{ width: "100vw", paddingBottom: "3rem", display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            style={{ width: "20rem", height: "2rem", borderRadius: "1rem", paddingLeft: "1rem" }}
            autoFocus
            placeholder="Search..."
            value={search}
            onChange={onChangeFilter}
          />
        </div>
        {loading ? (
          <div style={{ width: "100vw", textAlign: "center", height: "100vh" }}>
            <img src={loadingGif} alt="" style={{ width: "50px" }} />
          </div>
        ) : (
          <>
            {filterCountries?.length > 0 ? (
              filterCountries.map((country) => (
                <CountryCard key={country?.name?.common} country={country} />
              ))
            ) : (
              <div style={{ width: "100vw", textAlign: "center", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1 style={{ marginBottom: "1rem" }}>Data couldn't be retrieved.</h1>
                <p style={{ marginBottom: "1rem" }}>
                  This issue caused by the API provider. Please refresh the page.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  style={{
                    padding: "0.2rem 0.5rem",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#007BFF",
                    color: "#FFF",
                    cursor: "pointer"
                  }}
                >
                  Refresh Page
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
