import React, { Component } from "react";
import axios from "axios";

export class Items extends Component {
    constructor(props) {
        super(props);
        this.apiCall = this.apiCall.bind(this);
        this.state = {
            menuItems: [],
        }
    }

    apiCall(URL, menuSet) {
        axios.get(URL)
            .then(response => {
                // console.log(response.data);
                response.data.map(el => {
                    let price = this.randomPrice(el.meal_type_id)
                    el.price = price
                    menuSet.add(el)
                });
                // console.log(this.props.index, menuSet)
                if (this.props.index === 5 && menuSet.size < 12) {
                    // console.log(menuSet.size)
                    this.apiCall(URL, menuSet)
                } else {
                    let setArray = Array.from(menuSet);
                    this.setState({ menuItems: setArray });
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    componentDidMount() {
        let apiURL = 'https://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type/'
        //let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/api/menu/type/'
        let newURL = apiURL + this.props.index
        let menuItems = window.localStorage.getItem(`menuItems${this.props.index}`)
        // console.log({ menuItems });

        if (menuItems) {
            this.setState({ menuItems: JSON.parse(menuItems) });
        } else {
            let menuSet = new Set()
            // console.log({menuSet})
            this.apiCall(newURL, menuSet)
        }
    }

    componentDidUpdate() {
        window.localStorage.setItem(
            `menuItems${this.props.index}`,
            JSON.stringify(this.state.menuItems)
        );
    }

    randomPrice(sectionID) {
        let max = 0
        let min = 0
        switch (sectionID) {
            case 1: //breakfast
                max = 23;
                min = 15;
                break;
            case 2: //snacks
                max = 18;
                min = 8;
                break;
            case 3: //lunch
                max = 18;
                min = 11;
                break;
            case 4: //apps
                max = 22;
                min = 8;
                break;
            case 5: //dinner
                max = 64;
                min = 35;
                break;
            case 6: //sides
                max = 14;
                min = 4;
                break;
            case 7: //desserts
                max = 12;
                min = 8;
                break;
            case 8: //drinks
                max = 23;
                min = 4;
                break;
            case 9: //sauces
                max = 4;
                min = 2;
                break;
            default:
                max = 40;
                min = 20;
        }

        return '$ ' + Math.floor(Math.random() * (max - min) + min);
    }


    render() {

        return this.state.menuItems.map((el, index) => (
            <React.Fragment key={index}>
                <div className="d-flex justify-content-between"><h3>{el.name}</h3><h3>{el.price}</h3></div>
                <p>{el.description}</p>
            </React.Fragment>)
        );
        //return sectionItems}</>
    }
}


export default Items;