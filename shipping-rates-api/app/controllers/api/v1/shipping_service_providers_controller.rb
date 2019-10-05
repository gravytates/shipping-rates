module Api::V1
  class ShippingServiceProvidersController < ApplicationController
    def index
      @shipping_service_providers = ShippingServiceProvider.order(:id)
      render json: @shipping_service_providers
    end

    def show
      render json: @shipping_service_providers
    end


    def new
      @shipping_service_provider = ShippingServiceProvider.new
    end

    def create
      @shipping_service_provider = ShippingServiceProvider.new(service_provider_params)

      if @shipping_service_provider.save
        render json: @shipping_service_provider, status: :created
      else
        render json: @shipping_service_provider.errors, status: :unprocessable_entity
      end
    end

    def update 
      @shipping_service_provider = ShippingServiceProvider.find(params[:id])
      @shipping_service_provider.update!(service_provider_params)
      if @shipping_service_provider.save 
        render json: @shipping_service_provider, status: 200
      else
        render json: @shipping_service_provider.errors, status: :unprocessable_entity
      end
    end

    private
    
    def service_provider_params
      params.require(:shipping_service_provider).permit(:name, :flat_rate, :currency)
    end
  end
end
