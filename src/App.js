import React, { Component } from 'react';
import ReactMap from 'react-mapbox-gl';

const accessToken = "pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2l4b3V0Z3RpMDAxczJ4cWk2YnEzNTVzYSJ9.MFPmOyHy8DM5_CVaqPYhOg";
const MAP_STYLES = { street: "mapbox://styles/mapbox/streets-v9" };

const STYLES = {
  app: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
  },
  container: {
    position: 'relative',
    height: '100vh',
    width: '100vw'
  }
}

class App extends Component {
  render() {
    return (
      <div style={STYLES.app}>
        <ReactMap
          style={MAP_STYLES.street}
          accessToken={accessToken}
          containerStyle={STYLES.container}
        />
      </div>
    );
  }
}

export default App;
