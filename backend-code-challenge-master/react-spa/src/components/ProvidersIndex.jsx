import React from 'react';

function ProvidersIndex(props) {
  
  return (
    <div className="ProvidersIndex">
      <h2>Providers</h2>
      <ul>
        <li className="title">
          <div className="data-div shipping-service-name">Company Name</div>
          <div className="data-div">Flat Rate</div>
          <div className="data-div">Flat Rate (USD)</div>
          <div className="data-div">Origin</div>
          <div className="data-div">Destination</div>
          <div className="data-div">Rate/Kilo</div>
          <div className="data-div">Rate (USD)/Kilo</div>
        </li>
        {props.allRates.map(rate => (
          <li key={rate.id}>
            <div className="data-div shipping-service-name">{rate.name}</div>
            <div className="data-div">{rate.provider_flat_rate.toFixed(2)} {rate.provider_currency}</div>
            <div className="data-div common-rate-values">${rate.provider_common_rate.toFixed(2)} USD</div>
            <div className="data-div">{rate.origin}</div>
            <div className="data-div">{rate.destination}</div>
            <div className="data-div">{rate.rate.toFixed(2)} {rate.currency}</div>
            <div className="data-div common-rate-values">${rate.common_rate.toFixed(2)} USD</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProvidersIndex;
