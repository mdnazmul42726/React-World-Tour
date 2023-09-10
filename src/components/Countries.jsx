import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountry, setVisitedCountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])



    const visitedCountryHandleClick = (countray) => {
        const newVisitedCountry = [...visitedCountry, countray];
        setVisitedCountry(newVisitedCountry);
    }

    return (
        <div className="mt-10">
            <h1 className="text-3xl text-center text-[#fff] font-bold mb-4">React World Tour</h1>
            <h3 className="text-2xl text-center text-[#fff]">Country {countries.length} </h3>
            <div className="ml-5">
                <p>Visited Countres: {visitedCountry.length} </p>
                <u>
                    {
                        visitedCountry.map(countray => <li key={countray.name.common}>{countray.name.common}</li>)
                    }
                </u>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    countries.map(country => <Country key={country.cca2} country={country} visitedCountryHandleClick={visitedCountryHandleClick}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
