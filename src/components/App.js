import React, { Component } from "react";
import "../App.css";
import Sections from "./Sections"

export class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <div className="d-flex flex-row-reverse splash">
          <div className="mt-3">
            <div className="col-sm-9 col-1-md"></div>
            <div className="col text-end me-2 me-lg-5 transp">
              <h1 className="text-end">
                <span className="d-none d-md-block">Welcome to </span>
              Bourbon-Dynasty
            </h1>
              <h3 className="text-end d-none d-md-block">
                Lexington's Finest Bourbon Dive
            </h3>
              <h6 className="text-end text-break d-none d-md-block">
                Haute Whiskey and Cheap Food
            </h6>
              <h6 className="text-end text-break d-block d-md-none">
                Haute Whiskey <br /> & Cheap Food
            </h6>
              <p className="btn-dark btn text-end mx-5 mt-2 px-4">Menu</p>
            </div>
          </div>
        </div>
        <Sections />
      </div>
    );
  }
}
  export default App;
