import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ProvidersIndex from './components/ProvidersIndex';
import FormInputs from './components/FormInputs';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allRates: [],
      shippingRates: [],
      shippingServiceProviders: [],
      inputOrigin: '',
      inputDestination: '',
      inputRate: 0,
      inputCurrency: 'USD',
      inputShippingCo: ''
    }

    this.fetchServiceProviders = this.fetchServiceProviders.bind(this);
    this.joinRates = this.joinRates.bind(this);
    this.joinRate = this.joinRate.bind(this);
    this.handleOriginChange = this.handleOriginChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleShippingCoChange = this.handleShippingCoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('api/v1/shipping_rates')
      .then(response => {
        this.setState({
          shippingRates: response.data
        });
        this.fetchServiceProviders();
      })
      .catch(error => console.log(error))
  }

  fetchServiceProviders() {
    axios.get('api/v1/shipping_service_providers.json')
      .then(response => {
        this.setState({
          shippingServiceProviders: response.data,
          inputShippingCo: response.data[0].name
        })
      })
      .then(() =>{
        this.joinRates();
      })
      .catch(error => console.log(error))
  }

  joinRates() {
    let allRates = [];
    let scope = this;
    scope.state.shippingRates.forEach(function(rate) {
      let serviceProvider = scope.state.shippingServiceProviders.find(el => el.id === rate.shipping_company_id);
      let joinedRate = {
        name: serviceProvider.name,
        provider_flat_rate: serviceProvider.flat_rate,
        provider_currency: serviceProvider.currency,
        provider_common_rate: serviceProvider.common_rate,
        origin: rate.origin,
        destination: rate.destination,
        rate: rate.rate,
        currency: rate.currency,
        common_rate: rate.common_rate
      }
      allRates.push(joinedRate);
    })
    scope.setState({ allRates: allRates });
  }

  joinRate(rate) {
    let serviceProvider = this.state.shippingServiceProviders.find(el => el.id === rate.shipping_company_id);
    let allRates = this.state.allRates;
    let joinedRate = {
      name: serviceProvider.name,
      provider_flat_rate: serviceProvider.flat_rate,
      provider_currency: serviceProvider.currency,
      provider_common_rate: serviceProvider.common_rate,
      origin: rate.origin,
      destination: rate.destination,
      rate: rate.rate,
      currency: rate.currency,
      common_rate: rate.common_rate
    }
    allRates.push(joinedRate);
    this.setState({ allRates: allRates });
  }

  handleOriginChange(e) {
    this.setState({ inputOrigin: e.target.value });
  }

  handleDestinationChange(e) {
    this.setState({ inputDestination: e.target.value });
  }

  handleRateChange(e) {
    this.setState({ inputRate: e.target.value });
  }

  handleCurrencyChange(e) {
    this.setState({ inputCurrency: e.target.value });
  }

  handleShippingCoChange(e) {
    this.setState({ inputShippingCo: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let scope = this;
    let shippingServiceProvider = scope.state.shippingServiceProviders.find(el => el.name === scope.state.inputShippingCo)
    let postData = { 
      origin: scope.state.inputOrigin,
      destination: scope.state.inputDestination,
      rate: scope.state.inputRate,
      currency: scope.state.inputCurrency,
      shipping_company_id: shippingServiceProvider.id
    }
    
    axios({
      method: 'post',
      url: 'api/v1/shipping_rates',
      data: postData,
    })
    .then(function(response) {
      let newRate = response.data.pop();
      scope.joinRate(newRate);
    })
    .then(function() {
      scope.setState({
        inputOrigin: '',
        inputDestination: '',
        inputRate: 0,
        inputCurrency: 'USD',
        inputShippingCo: ''
      });
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="wrapper">
      <FormInputs inputOrigin={this.state.inputOrigin}
                  inputDestination={this.state.inputDestination}
                  inputRate={this.state.inputRate}
                  inputCurrency={this.state.inputCurrency}
                  inputShippingCo={this.state.inputShippingCo}
                  shippingCoList={this.state.shippingServiceProviders}
                  handleOriginChange={this.handleOriginChange}
                  handleDestinationChange={this.handleDestinationChange}
                  handleRateChange={this.handleRateChange}
                  handleCurrencyChange={this.handleCurrencyChange}
                  handleShippingCoChange={this.handleShippingCoChange}
                  handleSubmit={this.handleSubmit} />
        <ProvidersIndex allRates={this.state.allRates}></ProvidersIndex>
      </div>
    );
  }
}

export default App;
