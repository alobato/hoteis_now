# encoding: UTF-8
class HoteisController < ApplicationController

  def home
    render layout: nil
  end

  def fale
    render layout: nil
  end

  def busca
    tipo = ""
    tipo = "#{params["tipo"]}-" unless params["tipo"].blank?
    
    cidade = ""
    cidade = "#{params["cidade"]}" unless params["cidade"].blank?
    
    estado = ""
    if cidade.blank?
      estado = "#{params["estado"]}" unless params["estado"].blank?
    end
    
    url = "#{tipo}#{cidade}#{estado}"
    
    redirect_to "/#{url}.aspx"
  end

  def by_state
    states = {
      'ac' => ['Acre', 'no'],
      'al' => ['Alagoas', 'em'],
      'ap' => ['Amapá', 'no'],
      'am' => ['Amazonas', 'no'],
      'ba' => ['Bahia', 'na'],
      'ce' => ['Ceará', 'no'],
      'df' => ['Distrito Federal', 'no'],
      'es' => ['Espírito Santo', 'no'],
      'go' => ['Goiás', 'em'],
      'ma' => ['Maranhão', 'no'],
      'mt' => ['Mato Grosso', 'no'],
      'ms' => ['Mato Grosso do Sul', 'no'],
      'mg' => ['Minas Gerais', 'em'],
      'pa' => ['Pará', 'no'],
      'pb' => ['Paraíba', 'na'],
      'pr' => ['Paraná', 'no'],
      'pe' => ['Pernambuco', 'em'],
      'pi' => ['Piauí', 'no'],
      'rj' => ['Rio de Janeiro (estado)', 'no'],
      'rn' => ['Rio Grande do Norte', 'no'],
      'rs' => ['Rio Grande do Sul', 'no'],
      'ro' => ['Rondônia', 'em'],
      'rr' => ['Roraima', 'em'],
      'sc' => ['Santa Catarina', 'em'],
      'sp' => ['São Paulo (estado)', 'em'],
      'se' => ['Sergipe', 'em'],
      'to' => ['Tocantins', 'em']
    }

    slug = params[:id]
    @host_type = "Hospdedagem"
    hotel_type = nil

    page = 1
    if (slug =~ /.+?-pg\d+/)
      page = slug.scan(/-pg\d+/).first.gsub('-pg', '')
    end

    types = %w(pousadas hoteis-fazenda moteis albergues flats resorts spas campings apart-hoteis alugueis-temporada hoteis)
    types.each do |type|
      if slug.include?("#{type}-")
        hotel_type = type
        slug = slug.gsub("#{type}-", '')
        @host_type = get_by_type(type).last
      end
    end

    slug = slug.gsub(/-pg\d+/, '') if slug =~ /.+?-pg\d+/

    @state_slug = slug
    @state_name = states[slug].first
    @state_prep = states[slug].last
    @cities = City.where(:state => @state_slug)
    @hotels = Hotel.where(state: slug).order('priority DESC, id ASC')
    @hotels = @hotels.where(hotel_type_slug: hotel_type) if hotel_type
    @hotels = @hotels.page(page).per(20)
  end

  def by_city
    slug = params[:id]
    @host_type = "Hospdedagem"
    hotel_type = nil

    page = 1
    if (slug =~ /.+?-pg\d+/)
      page = slug.scan(/-pg\d+/).first.gsub('-pg', '')
    end

    types = %w(pousadas hoteis-fazenda moteis albergues flats resorts spas campings apart-hoteis alugueis-temporada hoteis)
    types.each do |type|
      if slug.include?("#{type}-")
        hotel_type = type
        slug = slug.gsub("#{type}-", '')
        @host_type = get_by_type(type).last
      end
    end

    slug = slug.gsub(/-pg\d+/, '') if slug =~ /.+?-pg\d+/

    @city = City.find_by_slug(slug)
    @city_slug = @city.slug
    @city_name = @city.name
    @city_prep = 'em'
    @city_prep = 'no' if @city_name == 'Rio de Janeiro'
    @hotels = Hotel.where(city: @city_name).order('priority DESC, id ASC')
    @hotels = @hotels.where(hotel_type_slug: hotel_type) if hotel_type
    @hotels = @hotels.page(page).per(20)
  end

  def show
    @hotel = Hotel.find_by_slug(params[:id])
  end

  private

  def get_by_type(type)
    types = {
    'hoteis' => ['Hotel', 'Hotéis'],
    'pousadas' => ['Pousada', 'Pousadas'],
    'hoteis-fazenda' => ['Hotel Fazenda', 'Hotéis Fazenda'],
    'moteis' => ['Motel', 'Motéis'],
    'albergues' => ['Albergue', 'Albergues'],
    'flats' => ['Flat', 'Flats'],
    'resorts' => ['Resort', 'Resorts'],
    'spas' => ['Spa', 'Spas'],
    'campings' => ['Camping', 'Campings'],
    'apart-hoteis' => ['Apart Hotel', 'Apart Hotéis'],
    'alugueis-temporada' => ['Aluguel para Temporada', 'Aluguéis para Temporada']
    }
    types[type]
  end

end
