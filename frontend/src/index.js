import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import InputForm from './InputForm';
import GetHistoryForm from './HistoryForm';
import PrintPrediction from './PrintPrediction';
import PrintHistory from './PrintHistory';

class Predict extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textfield: '',
      currPrediction: '',
      historyOfPredictions: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getPrediction = this.getPrediction.bind(this);
    this.getHistory = this.getHistory.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      textfield: value,
    });
  }

  getPrediction() {
    if (this.state.textfield === '') {
      alert("Enter some text!");
      return;
    }
    //console.log('Asking for prediction now');
    const querystring = process.env.REACT_APP_SERVER_URL + "predict?str_input=" 
        + this.state.textfield.replaceAll(' ', '%20');
    //Can you book an appointment?";
    fetch(querystring).then(
      res => res.json()
    ).then(
      data => {
        this.setState({
          currPrediction: data["prediction"][0]['label'],
        });
        return data["prediction"]
      }
    )
  }

  getHistory() {
    this.setState({
      temp: 1,
    });
    const querystring = process.env.REACT_APP_SERVER_URL + "getHistory";
    fetch(querystring).then(
      res => res.json()
    ).then(
      data => {
        this.setState({
          historyOfPredictions: data,
        });
      }
    )
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <h1 style={{color : '#504CAF', front : 'sans-serif'}}>AutoMate Scheduler</h1>
          <h2>Hello! How may I help you?</h2>
          <InputForm
            textfield={this.state.textfield}
            onHandleChange={(val) => this.handleInputChange(val)}
            onGetPredict={this.getPrediction}
          />
          <PrintPrediction  intentText={this.state.currPrediction}></PrintPrediction>
          <br></br>
          <GetHistoryForm onGetHistory={this.getHistory}/>
          <br></br>
          <PrintHistory historyOfPredictions={this.state.historyOfPredictions}></PrintHistory>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Predict />);