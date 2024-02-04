import React from 'react';

function PrintPrediction(props) {
  return (
    <div className="container">
        <div className="box">
          {props.intentText && (
            <p>Intent: {props.intentText}</p>
          )}
        </div>
    </div>
  );
}

export default PrintPrediction;
