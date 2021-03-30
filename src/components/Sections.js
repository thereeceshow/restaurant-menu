import React, { Component } from "react";
import axios from "axios";
import Items from './Items'

export class Sections extends Component {
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
                this.setState({ sectionURL: response.data })
                // return response.data
            })
            .catch(function (error) {
                console.log(error);
            })
        console.log('axios.data is saved', axiosData)
    }
    render() {

        let sections = this.state.sectionURL.map((el, i) => {
            return (
                <div key={i} className="accordion-item d-flex justify-content-center">
                    <h2 className="accordion-header" id="{el}">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">{el.type}
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                        <Items 
                            index={i + 1}
                        />
                        </div>
                    </div>
                </div>)
        });
        return (
            <div className="accordion accordion-flush" id="accordion1">
                {sections}
            </div>
        )
    }
}

export default Sections