module Api::V1
  class ShippingRateController < ApplicationController
    def index
      @shipping_rates = ShippingRate.all
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
      params.require(:shipping_rate).permit(:origin, :destination, :rate, :currency, :shipping_company_id)
    end
  end
end