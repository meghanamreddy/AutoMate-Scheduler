import React from 'react';

function PrintHistory(props) {
  let arr = [];
  Object.keys(props.historyOfPredictions).forEach(function(key) {
    arr.push(<p key={key}><span style={{color : '#504CAF'}}><b>{props.historyOfPredictions[key]}</b>:</span> {key}</p>);
  });
  return (
    <div>
      {props.historyOfPredictions && (
        <div className="historybox">
          {arr}
        </div>
      )}
    </div>
  );
}

export default PrintHistory;
