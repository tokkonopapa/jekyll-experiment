require 'liquid'

module DomainNameFilter

  # Return the url's domain name
  def domain_name(input)
    return input.sub(%r{(http://){0,1}([^/]*)(/.*$){0,1}}i, '\\2')
  end

  def shorthand_url(input)
    input.gsub /(https?:\/\/)(\S+)/ do
	  $2
	end
  end

end

Liquid::Template.register_filter(DomainNameFilter)
