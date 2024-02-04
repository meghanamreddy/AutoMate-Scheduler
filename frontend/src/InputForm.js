import React from 'react';

class InputForm extends React.Component {
  render() {
    return (
      <div className="input">
        <p>Enter text:</p>
      <form>
        <label>
          <input className="input-field" type="text" name={'Enter text'} value={this.props.textfield} 
            onChange={(event) => this.props.onHandleChange(event.target.value)} />
        </label>
        <br></br>
      </form>
      <br></br>
      <button className="buttonGame" onClick={() => this.props.onGetPredict()}>
	      Send
	    </button>
      <br></br>
      <br></br>
      </div>
    );
  }
}

export default InputForm; // Don’t forget to use export default!