import { DateRangePicker } from 'react-date-range';
import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import { useState } from 'react';


export default class Home2 extends Component {
  handleSelect(ranges){
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }
  render(){
    const selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
    return (
      <><div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a class="navbar-brand" href="#">petkeepers.ie</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Requests</a> 
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Logout</a> 
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
        <div className="main">
          <div className="header-container">
            <h3 className="section-header">Please Enter Available Date : </h3>
          </div>
          <div className="section-container keeper-calendar-container">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={this.handleSelect}/>
            <Button className="btn btn-outline-primary btn-lg">
              Submit
            </Button>
          </div>
         
        </div>
      </div>    
      </>
      )
  }
}