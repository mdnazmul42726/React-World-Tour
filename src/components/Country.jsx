import { useState } from "react";

const Country = ({ country, visitedCountryHandleClick }) => {
    // console.log(country.name.common)

    const { name, flags, population, region, startOfWeek, status, subregion, timezones, capital } = country
    const { common, official } = name

    const [visited, setVesited] = useState(false);

    const visitedBtnHandleClick = () => {
        setVesited(!visited);
    }

    return (
        <div className="ml-4 border-2 border-[#FF3FA4] m-10 p-10 rounded">
            <h3 className="text-xl mb-3 text-[#fff]">Name: {common} </h3>
            <p className="mb-4">Official: {official} </p>
            <img className="w-[80%] " src={flags.png} alt="" />
            <p className="mb-4 mt-2">Capital: {capital}</p>
            <p>Population: {population} </p>
            <p>Region: {region}</p>
            <p>Start Of Week: {startOfWeek}</p>
            <p>Status: {status}</p>
            <p>Subregion: {subregion}</p>
            <p>Time Zones: {timezones[0]} </p>
            <button className="my-4  px-2 py-1 bg-[#FF3FA4] text-[#fff] rounded-sm" onClick={visitedBtnHandleClick}> {visited ? 'Visited' : 'Going'} </button> <br />
            {visited ? 'i visited this country' : 'i want to visit'} <br />
            <button className="my-4  px-2 py-1 bg-[#FF3FA4] text-[#fff] rounded-sm" onClick={() => visitedCountryHandleClick(country)}>Mark as visited</button>
        </div>
    );
};

export default Country;