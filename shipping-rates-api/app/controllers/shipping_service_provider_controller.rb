class ShippingServiceProviderController < ApplicationController
  def index
    @shipping_service_providers = ShippingServiceProvider.all
  end

  def new
    @shipping_service_provider = ShippingServiceProvider.new
  end

  def create
    @shipping_service_provider = ShippingServiceProvider.create(service_provider_params)

    if @shipping_service_provider.save
      render json: ShippingServiceProvider.all, status: :created
    else
      render json: @shipping_service_provider.errors, status: :unprocessable_entity
    end
  end

  def update 
    @shipping_service_provider = ShippingServiceProvider.find(params[:id])
    @shipping_service_provider.update!(service_provider_params)
    if @shipping_service_provider.save 
      render status: 200, json: { message: "Your Shipping Service Provider has successfully been updated." }
    end
  end

  private
  
  def service_provider_params
    params.require(:shipping_service_provider).permit(:name, :flat_rate, :currency)
  end
end
