HoteisNow::Application.routes.draw do

  city_slugs = Rails.cache.fetch('city_slugs') { City.all.map(&:slug) }
  states = %w(ac al ap am ba ce df es go ma mt ms mg pa pb pr pe pi rj rn rs ro rr sc sp se to)
  types = %w(pousadas hoteis-fazenda moteis albergues flats resorts spas campings apart-hoteis alugueis-temporada hoteis)
  
  root :to => 'hoteis#home'
  get "/default", :to => 'hoteis#home'
  get "/fale-conosco", :to => 'hoteis#fale'
  
  get "/:id", :to => "hoteis#by_city", :as => :by_city, :constraints => lambda { |req|
    city_slugs.each do |city|
      types.each do |type|
        return true if req.params[:id] == "#{type}-#{city}"
      end
    end
    return false
  }
  
  get "/:id", :to => "hoteis#by_city", :as => :by_city, :constraints => lambda { |req|
    city_slugs.each do |city|
      types.each do |type|
        return true if req.params[:id] =~ /#{type}-#{city}-pg\d+/
      end
    end
    return false
  }
  
  get "/:id", :to => "hoteis#by_state", :as => :by_state, :constraints => lambda { |req|
    states.each do |state|
      types.each do |type|
        return true if req.params[:id] == "#{type}-#{state}"
      end
    end
    return false
  }
  
  get "/:id", :to => "hoteis#by_state", :as => :by_state, :constraints => lambda { |req|
    states.each do |state|
      types.each do |type|
        return true if req.params[:id] =~ /#{type}-#{state}-pg\d+/
      end
    end
    return false
  }
  
  get "/:id", :to => "hoteis#by_city", :as => :by_city, :constraints => lambda { |req|
    city_slugs.each do |city|
      return true if req.params[:id] =~ /#{city}-pg\d+/
    end
    return false
  }
  
  get "/:id", :to => "hoteis#by_state", :as => :by_state, :constraints => lambda { |req|
    states.each do |state|
      return true if req.params[:id] =~ /#{state}-pg\d+/
    end
    return false
  }
  
  get "/:id", :to => "hoteis#by_state", :as => :by_state, :constraints => lambda { |req| states.include?(req.params[:id]) }
  get "/:id", :to => "hoteis#by_city", :as => :by_city, :constraints => lambda { |req| city_slugs.include?(req.params[:id]) }
  get "/:id", :to => "hoteis#show", :as => :hotel

end
