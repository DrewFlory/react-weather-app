import React from "react";
import Titles from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "8130cd9aa5353512b52150f82bbe94f6";


class App extends React.Component {

    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?
            id=524901&APPID=${API_KEY}`);
    }
       render(){
        return (
            <div>
                <Titles />
                <Form />
                <Weather />
            </div>
        );
    }
};

export default App;