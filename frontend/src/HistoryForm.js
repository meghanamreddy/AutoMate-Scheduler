import React from 'react';

class GetHistoryForm extends React.Component {
  render() {
    return (
      <div className="input">
      <br></br>
      <button className="buttonHist" onClick={() => this.props.onGetHistory()}>
	      Get history
	    </button>
      </div>
    );
  }
}

export default GetHistoryForm; // Don’t forget to use export default!