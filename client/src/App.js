import './App.css';
import React, { Component } from 'react';
import { VictoryPie } from 'victory'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ios: '',
      android: ''
    };
  }

  callApi() {
    fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => this.setState({
        ios: res.ios,
        android: res.android
      }));
  }

  componentDidMount() {
    this.callApi();
  }

  render() {
    const { ios, android } = this.state
    const iosPer = Math.round(ios / (ios + android) * 100);
    const androidPer = Math.round(android / (ios + android) * 100);
    
    return (
      <div className="App">
        <h3>Device Type</h3>
       <div style={{
         display: "flex",
         alignItems: "center"
       }}>
        <svg width={400} height={300}>
            <VictoryPie
              colorScale = {["cyan", "purple"]} 
              standalone={false}
              width={300} height={300}
              innerRadius={75}
              data={[
                { x: "ios", y: iosPer },
                { x: "android", y: androidPer }
              ]}
            />
          </svg>
          <div>
            <table>
              <tr>
                <td>
                  <span id="ios"></span>iOS: 
                  <div style={{marginLeft: "40px", fontSize: "20px"}}>{iosPer}%</div>
                </td>
                <td>{ios}</td>
              </tr>
              <tr>
                <td>
                  <span id="android"></span>Android: 
                  <div style={{marginLeft: "40px", fontSize: "20px"}}>{androidPer}%</div>
                </td>
                <td>{android}</td>
              </tr>
            </table>
          </div>
       </div>
      </div>
    );
  }
}

export default App;
