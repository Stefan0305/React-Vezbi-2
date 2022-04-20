import React, { useState } from 'react';

function TempConverter() {

    const [degC, setDegC] = useState(0);
    const [degF, setDegF] = useState(0);
    const [isBoiling, setIsBoiling] = useState(false);
    
    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    return <div>
        <label>Enter temperature in Celsius:</label>
        <br />
        <input value={degC} onChange={(event) => {
            setDegC(event.target.value);
            setDegF(toFahrenheit(event.target.value));
            event.target.value >= 100 ? setIsBoiling(true) : setIsBoiling(false);
        }}></input>
        <br />
        <label>Enter temperature in Fahrenheit:</label>
        <br />
        <input value={degF} onChange={(event) => {
            setDegF(event.target.value);
            setDegC(toCelsius(event.target.value));
            event.target.value >= 212 ? setIsBoiling(true) : setIsBoiling(false);
        }}></input>
        <br />
        <p>The water would {isBoiling ? "boil." : "not boil."}</p>
    </div>
}

export default TempConverter