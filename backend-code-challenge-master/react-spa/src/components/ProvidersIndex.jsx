import React from 'react';

function ProvidersIndex(props) {
  
  return (
    <div className="ProvidersIndex">
      <h2>Providers</h2>
      <ul>
        <li className="title">
          <div className="data-div">Company Name</div>
          <div className="data-div">Origin</div>
          <div className="data-div">Destination</div>
          <div className="data-div">Total</div>
        </li>
        {props.allRates.map(rate => (
          <li key={rate.id}>
            <div className="data-div shipping-service-name">{rate.name}</div>
            <div className="data-div">{rate.origin}</div>
            <div className="data-div">{rate.destination}</div>
            <div className="data-div">{rate.common_rate}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProvidersIndex;
