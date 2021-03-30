import React, { Component } from "react";
import axios from "axios";

export class Item extends Component {
    constructor(props) {
        super();
        this.state = {
            menuItems: []
        }
    }

    componentDidMount() {
        let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/'
        for (let i = 1; i <= 9; i++){
            let newURL = apiURL + i
            const axiosData = axios.get(newURL)
            .then(response => {
                console.log('got API Back', response);
                const menu = {
                    id: i,
                    array: response.data
                }
                let newArray = this.state.menuItems.map((secObj) => {
                    secObj = menu
                    return secObj
                });
                this.setState({ menuItems: newArray })
            })
            .catch(function (error) {
                console.log(error);
            })
            console.log('axios.data is saved', axiosData)
        }
    }
    render() {
        return <div>{this.state.menuItems}</div>
        
        
    }
}

export default Item