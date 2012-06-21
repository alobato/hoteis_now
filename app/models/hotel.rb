class Hotel < ActiveRecord::Base
  attr_accessible :address, :city, :contact_email, :contact_function, :contact_name, :description, :disabled, :fax, :hotel_email, :hotel_type, :name, :neighborhood, :phone1, :phone2, :priority, :site, :situation, :slug, :stars, :state, :zipcode
end
