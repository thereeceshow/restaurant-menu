import React, { Component } from "react";
import axios from "axios";

export class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
            data: null
        }
    }

    async componentDidMount() {
        let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/'
            let newURL = apiURL + this.props.index
            let axiosData = await axios.get(newURL)
            .then(response => {
                //.this.setState({ menuItems: response.data })
                console.log(response.data);
                let tempMenu = this.state.menuItems
                this.setState({ menuItems: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })
            console.log('axios.data is saved', typeof axiosData)
            //this.setState({ menuItems: axiosData })
    }
    render() {
        return <div>test</div>
        
        
    }
}

export default Items