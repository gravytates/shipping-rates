import React from 'react';

const FormInputs = (props) => {
  return (
    <div className="ProvidersIndex">
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
          <input type="text" value={props.inputCurrency} onChange={props.handleCurrencyChange} />
        </div>
        <div>
          <label>Shipping Company</label>
          <select onChange={props.handleShippingCoChange} value={props.inputShippingCo}>
            <option value="GTR, Inc">GTR, Inc</option>
            <option value="Emmert, Inc">Emmert, Inc</option>
          </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default FormInputs;