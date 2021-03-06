import React from 'react';

const FormInputs = (props) => {
  return (
    <div className="form-inputs">
      <h2>New Rate</h2>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>Origin (Country Code)</label>
          <input type="text" value={props.inputOrigin} onChange={props.handleOriginChange}/>
        </div>
        <div>
          <label>Destination (Country Code)</label>
          <input type="text" value={props.inputDestination} onChange={props.handleDestinationChange} />
        </div>
        <div>
          <label>Rate</label>
          <input type="text" value={props.inputRate} onChange={props.handleRateChange} />
        </div>
        <div>
          <label>Currency</label>
          <select onChange={props.handleCurrencyChange} value={props.inputCurrency}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div>
          <label>Shipping Company</label>
          <select onChange={props.handleShippingCoChange} value={props.inputShippingCo}>
            {props.shippingCoList.map(shippingProvider => (
              <option key={shippingProvider.id} value={shippingProvider.name}>{shippingProvider.name}</option>
            ))}
          </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default FormInputs;