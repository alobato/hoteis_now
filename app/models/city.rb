class City < ActiveRecord::Base
  attr_accessible :name, :slug, :state
end
