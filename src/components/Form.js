import React from 'react';

class Form extends React.Component {
    render(){
        return(
            //Set up React Attribute called onSubmit
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="city"/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
            </form>
        )
    }
}

export default Form;