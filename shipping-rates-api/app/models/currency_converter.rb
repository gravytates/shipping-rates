class CurrencyConverter < ApplicationRecord
# assume USD -> EUR is 0.84663, and EUR -> USD is 1.18115
  def self.convert_to_usd rate, currency 
    @usd_rate
    eur_to_usd = 1.18115
    usd_to_eur = 0.84663
    if (currency === "EUR")
      @usd_rate = rate * eur_to_usd
    elsif (currency === "USD")
      return rate
    end
    return @usd_rate
  end
end