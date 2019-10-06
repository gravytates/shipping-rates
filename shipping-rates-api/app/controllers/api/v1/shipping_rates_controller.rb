module Api::V1
  class ShippingRatesController < ApplicationController
    def index
      @shipping_rates = ShippingRate.all
      render json: @shipping_rates
    end

    def show
      render json: @shipping_rate
    end

    def new
      @shipping_rate = ShippingRate.new
    end

    def create
      @shipping_rate = ShippingRate.create(shipping_rate_params)

      if @shipping_rate.save
        render json: ShippingRate.all, status: :created
      else
        render json: @shipping_rate.errors, status: :unprocessable_entity
      end
    end

    def update 
      @shipping_rate = ShippingRate.find(params[:id])
      @shipping_rate.update!(shipping_rate_params)
      if @shipping_rate.save 
        render json: @shipping_rate, status: 200
      else
        render json: @shipping_rate.errors, status: unprocessable_entity
      end
    end

    private

    def shipping_rate_params
      # helps prevent direct update of the common_rate field
      params.require(:shipping_rate).permit(:origin, :destination, :rate, :currency, :shipping_company_id)
    end
  end
end