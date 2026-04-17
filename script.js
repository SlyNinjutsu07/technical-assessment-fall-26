function showView(viewName){
    document.querySelectorAll('.view').forEach(view => {
        view.style.display = 'none';
    });

    document.getElementById(viewName).style.display = 'block';
}

const data = [
    { driverName: "Charles Leclerc", racePos: 2, fastestLap: 85.271, numLaps: 57, circuitLocation: "Melbourne", countryCode: "AUS" },
    { driverName: "Charles Leclerc", racePos: 1, fastestLap: 83.456, numLaps: 56, circuitLocation: "Shanghai", countryCode: "CHN" },
    { driverName: "Charles Leclerc", racePos: 3, fastestLap: 91.234, numLaps: 53, circuitLocation: "Suzuka", countryCode: "JPN" },
    { driverName: "Charles Leclerc", racePos: 4, fastestLap: 88.123, numLaps: 50, circuitLocation: "Sakhir", countryCode: "BRN" },
    { driverName: "Charles Leclerc", racePos: 1, fastestLap: 86.789, numLaps: 50, circuitLocation: "Jeddah", countryCode: "KSA" },
    { driverName: "Charles Leclerc", racePos: 2, fastestLap: 87.234, numLaps: 57, circuitLocation: "Miami", countryCode: "USA" },
    { driverName: "Charles Leclerc", racePos: 5, fastestLap: 89.567, numLaps: 63, circuitLocation: "Imola", countryCode: "ITA" },
    { driverName: "Charles Leclerc", racePos: 1, fastestLap: 74.123, numLaps: 78, circuitLocation: "Monaco", countryCode: "MON" },
    { driverName: "Charles Leclerc", racePos: 3, fastestLap: 82.456, numLaps: 66, circuitLocation: "Barcelona", countryCode: "ESP" },
    { driverName: "Charles Leclerc", racePos: 2, fastestLap: 76.234, numLaps: 70, circuitLocation: "Montreal", countryCode: "CAN" },
    { driverName: "Charles Leclerc", racePos: 4, fastestLap: 67.890, numLaps: 71, circuitLocation: "Spielberg", countryCode: "AUT" },
    { driverName: "Charles Leclerc", racePos: 1, fastestLap: 88.345, numLaps: 52, circuitLocation: "Silverstone", countryCode: "GBR" },
    { driverName: "Charles Leclerc", racePos: 3, fastestLap: 105.234, numLaps: 44, circuitLocation: "Spa-Francorchamps", countryCode: "BEL" },
    { driverName: "Charles Leclerc", racePos: 2, fastestLap: 78.456, numLaps: 70, circuitLocation: "Budapest", countryCode: "HUN" },
    { driverName: "Charles Leclerc", racePos: 5, fastestLap: 73.234, numLaps: 72, circuitLocation: "Zandvoort", countryCode: "NED" },
    { driverName: "Charles Leclerc", racePos: 1, fastestLap: 81.234, numLaps: 53, circuitLocation: "Monza", countryCode: "ITA" },
    { driverName: "Charles Leclerc", racePos: 2, fastestLap: 103.456, numLaps: 51, circuitLocation: "Baku", countryCode: "AZE" },
    { driverName: "Charles Leclerc", racePos: 3, fastestLap: 95.678, numLaps: 62, circuitLocation: "Singapore", countryCode: "SGP" },
    { driverName: "Charles Leclerc", racePos: 4, fastestLap: 96.234, numLaps: 56, circuitLocation: "Austin", countryCode: "USA" },
    { driverName: "Charles Leclerc", racePos: 2, fastestLap: 79.456, numLaps: 71, circuitLocation: "Mexico City", countryCode: "MEX" },
    { driverName: "Charles Leclerc", racePos: 1, fastestLap: 71.234, numLaps: 69, circuitLocation: "Sao Paulo", countryCode: "BRA" },
    { driverName: "Charles Leclerc", racePos: 3, fastestLap: 93.456, numLaps: 50, circuitLocation: "Las Vegas", countryCode: "USA" },
    { driverName: "Charles Leclerc", racePos: 2, fastestLap: 87.123, numLaps: 57, circuitLocation: "Lusail", countryCode: "QAT" },
    { driverName: "Charles Leclerc", racePos: 4, fastestLap: 84.567, numLaps: 58, circuitLocation: "Yas Marina", countryCode: "UAE" },
];

/*
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

//MAKES way to many calls, so the API starts rate limiting
async function acquireRaceData(){
    const raceData = await fetch("https://api.openf1.org/v1/sessions?year=2025&session_name=Race");
    const races = await raceData.json();

    for(const race of races){ //of different than in, of looks at values, in goes over indices. i still dk
        //Lap Data
        const lapData = await fetch(`https://api.openf1.org/v1/laps?session_key=${race.session_key}&driver_number=16`);
        const laps = await lapData.json();

        //Final Position Information
        const positionData = await fetch(`https://api.openf1.org/v1/position?session_key=${race.session_key}&driver_number=16`);
        const positions = await positionData.json();
        const finPosition = positions.length > 0 ? positions[positions.length - 1].position : null; //{last index of json}.position

        const race_session = {
            driverName: "Charles Leclerc",
            racePos: race.is_cancelled == false ? finPosition : "Cancelled",
            //Converts lapData into an array of laps that map to each index's lap_duration
            //and then "..." returns the values from an array into a list of numbers (cancels out the "[]")
            fastestLap: race.is_cancelled == false ? Math.min(...laps.map(lap => lap.lap_duration)) : "---",
            numLaps: race.is_cancelled == false ? laps.length : "---",
            circuitLocation: race.location,
            countryCode: race.country_code,
        }

        data.push(race_session);
        await sleep(1000);
    }

    console.log(data);
}

acquireRaceData();
*/

showView('home');