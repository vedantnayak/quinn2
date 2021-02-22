import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
//import MyModal from "./modal.js"
import InfiniteScroll from 'react-infinite-scroll-component'


import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);

class App extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
      <div className="App" id="appElement">
        {<Calendar
        
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />}
        {/* {
          <div
          id="scrollableDiv"
          style={{
            height: 300,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column-reverse',
          }}
        >
          
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            style={{ display: 'flex', flexDirection: 'column-reverse' }} 
            inverse={true} //
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {this.state.items.map((_, index) => (
              <div key={index}>
                div - #{index}
              </div>
            ))}
          </InfiniteScroll>
        </div>
        } */}
      </div>

    );
  }
}

export default App;
