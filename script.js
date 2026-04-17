function showView(viewName){
    document.querySelectorAll('.view').forEach(view => {
        view.style.display = 'none';
    });

    document.getElementById(viewName).style.display = 'block';
}

const data = [];


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
        const finPosition = positions[positions.length - 1].position; //{last index of json}.position

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
        sleep(500);
    }

    console.log(data);
}

acquireRaceData();

showView('home');