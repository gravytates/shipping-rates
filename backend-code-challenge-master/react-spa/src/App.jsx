import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ProvidersIndex from './components/ProvidersIndex';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allRates: [],
      shippingRates: [],
      shippingServiceProviders: [],
    }

    this.fetchServiceProviders = this.fetchServiceProviders.bind(this);
    this.joinRates = this.joinRates.bind(this);
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
          shippingServiceProviders: response.data
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
    this.state.shippingRates.forEach(function(rate) {
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
    this.setState({
      allRates: allRates
    });
  }

  render() {
    return (
      <div className="wrapper">
        <ProvidersIndex allRates={this.state.allRates}></ProvidersIndex>
      </div>
    );
  }
}

export default App;