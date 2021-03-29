import React, { Component } from "react";
import axios from "axios";

export class Section extends Component {
    constructor(props) {
        super();
        this.state = {
            sectionURL: []
        }
    }

    componentDidMount() {
        let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/sections'
        const axiosData = axios.get(apiURL)
            .then(response => {
                console.log('got API Back', response);
                this.setState({sectionURL: response.data})
                // return response.data
            })
            .catch(function (error) {
                console.log(error);
            })
        console.log('axios.data is saved', axiosData)
    }
    render() {
        let sections = this.state.sectionURL.map(el => {
            return <h3 className="col-12">{el.type}</h3>
        });
        return (
            <div className="row text-center">
                {sections}
            </div>
        )
    }
}

export default Section