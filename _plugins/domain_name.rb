require 'liquid'

module DomainNameFilter

  # Return the url's domain name
  def domain_name(input)
    return input.sub(%r{(https?://){0,1}([^/]*)(/.*$){0,1}}i, '\\2')
  end

end

Liquid::Template.register_filter(DomainNameFilter)
