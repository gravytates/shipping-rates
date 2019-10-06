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
          <div className="data-div">Total</div>
          <div className="data-div">Total (USD)</div>
        </li>
        {props.allRates.map(rate => (
          <li key={rate.id}>
            <div className="data-div shipping-service-name">{rate.name}</div>
            {rate.provider_currency !== "USD" ?
              <div className="data-div">{rate.provider_flat_rate} {rate.provider_currency}</div>
            :
              <div className="data-div">n/a</div>
            }
            <div className="data-div">${rate.provider_common_rate} USD</div>
            <div className="data-div">{rate.origin}</div>
            <div className="data-div">{rate.destination}</div>
            {rate.currency  !== "USD" ?
              <div className="data-div">{rate.rate} {rate.currency}</div>
            :
              <div className="data-div">n/a</div>
            }
            <div className="data-div">${rate.common_rate} USD</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProvidersIndex;
