require 'liquid'

module DomainNameFilter
  # Strip protocol
  def shorthand_url(input)
    input.gsub /(https?:\/\/)(\S+)/ do
      $2
    end
  end
end

Liquid::Template.register_filter(DomainNameFilter)
