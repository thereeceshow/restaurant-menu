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
        let sectionURL = window.localStorage.getItem("sectionURL")
        let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/sections'
        if (sectionURL) {
            this.setState({ sectionURL: JSON.parse(sectionURL)});
        } else {
            axios.get(apiURL)
            .then(response => {
                console.log('got API Back', response);
                this.setState({ sectionURL: response.data })
                // return response.data
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }

    componentDidUpdate() {
        window.localStorage.setItem(
            "sectionURL",
            JSON.stringify(this.state.sectionURL)
        );
    }

    render() {

        let sections = this.state.sectionURL.map((el, i) => {
            return (
                <div key={i} className="accordion-item d-flex justify-content-center">
                    <h2 className="accordion-header py-2" id={`flush-heading${i}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${i}`} aria-expanded="false" aria-controls={`flush-collapse${i}`}>{el.type}
                        </button>
                    </h2>
                    <div id={`flush-collapse${i}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${i}`} data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                        <Items 
                            index={i + 1}
                        />
                        </div>
                    </div>
                </div>)
        });
        return (
            <div className="accordion accordion-flush" id="accordionFlushExample">
                {sections}
            </div>
        )
    }
}

export default Sections