import React from "react";
import "../App.css";
import Sections from "./Sections"
import Bootstrap from "bootstrap"

export class App extends React.Component {
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
              <a href="#menu" className="btn-dark btn text-end mx-5 mt-2 px-4">Menu</a>
            </div>
          </div>
        </div>
        <div id="menu">
          <Sections />
        </div>
        <hr />
        <div className="text-center pt-3">
          <h4>Contact Us</h4>
          <div className="mt-3"><a href="tel:(732)829-2608">(732)829-2608</a></div>
          <div className="mt-3"><a href="mailto:ian@icooklikeaboss.com">ian@icooklikeaboss.com</a></div>
          <div className="my-3"><a href="https://www.instagram.com/wereeatinggoodtonight/">Instagram</a></div>
          <h5 className="mt-3">348 E Main St
          <br />Lexington, KY 40507
          </h5>
          <h6 className="mt-3 mb-5 pb-5">Copyright 2021 - DrunkCooks LLC</h6>
        </div>
      </div>
    );
  }
}
export default App;
