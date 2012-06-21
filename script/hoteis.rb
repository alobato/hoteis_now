# encoding: UTF-8
require 'nokogiri'
require 'net/http'

module Inspector

  def search(text, r)
    text.scan(r).first
  end

  def search_first(text, r)
    if text.scan(r) && text.scan(r).size > 0
      return text.scan(r).first.first if text.scan(r).first.size > 0
    end
  end

  def search_all(text, r)
    text.scan(r).flatten.uniq
  end

  def get_source(url, cookie = nil)
    print "get_source: #{url}"
    uri = URI.parse(url)
    http = Net::HTTP.new(uri.host, 80)
    http.open_timeout = http.read_timeout = 30
    headers = { 'Cookie' => cookie } if cookie
    path = uri.path + (uri.query ? "?#{uri.query}" : "")
    if headers
      resp, data = http.get(path, headers)
    else
      resp, data = http.get(path)
    end
    puts " - done"
    resp.body
  end

  def xpath_content(body, xpath)
    html_doc = Nokogiri::HTML(body)
    return '' if html_doc.xpath(xpath).size == 0
    html_doc.xpath(xpath).first.content
  end

  def css_content(body, css, index = 0)
    html_doc = Nokogiri::HTML(body)
    return '' if html_doc.css(css).size == 0
    html_doc.css(css)[index].content
  end

  def xpath_attribute(body, xpath, attribute)
    html_doc = Nokogiri::HTML(body)
    return '' if html_doc.xpath(xpath).size == 0
    html_doc.xpath(xpath).first.attribute(attribute).to_s
  end

  def css_attribute(body, css, attribute)
    html_doc = Nokogiri::HTML(body)
    return '' if html_doc.css(css).size == 0
    html_doc.css(css).first.attribute(attribute).to_s
  end

  def collection_css_attribute(body, css, attribute)
    html_doc = Nokogiri::HTML(body)
    links = []
    html_doc.css(css).each do |link|
      links << link.attribute(attribute).to_s
    end
    links
  end

  def if_blank_css_attribute(body, css, attribute)
    if body.blank?
      puts "blank: #{css_attribute(body, css, attribute).inspect}"
      return css_attribute(body, css, attribute)
    else
      return body
    end
  end

end

include Inspector

slugs = %w(albemar-hotel
hospedaria-camelo
hotel-pousada-pescador
hotel-comodoro
porto-suites
)

slugs.each do |slug|
  source_code = get_source("http://hoteisnow.com/#{slug}.aspx")
  name = css_content(source_code, 'h1')
  description = css_content(source_code, '#hotel p')
  site = css_content(source_code, '#hotel p a')
  category = ""
  city = search(source_code, /^.*Cidade: .+?$/).gsub(/^.*Cidade: /, '')
  state = search(source_code, /^.*Estado: .+?$/).gsub(/^.*Estado: /, '')

  address = search(source_code, /^.*Endere.o: .+?$/)
  address = address.gsub(/^.*Endere.o: /, '') if address

  zipcode = search(source_code, /^.*CEP: .+?$/)
  zipcode = zipcode.gsub(/^.*CEP: /, '') if zipcode

  neighborhood = search(source_code, /^.*Bairro: .+?$/)
  neighborhood = neighborhood.gsub(/^.*Bairro: /, '')  if neighborhood

  phones = search(source_code, /^.*Telefone(s): .+?$/)
  phones = phones.gsub(/^.*Telefone(s): /, '') if phones
  
  fax = search(source_code, /<br \/>Fax: .+?$/)
  fax = fax.gsub(/<br \/>Fax: /, '') if fax

  # puts name
  # puts description
  # puts site
  # puts city
  # puts state
  # puts fax
  puts phones
end
