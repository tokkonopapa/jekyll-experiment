# The original `modulo` filter is buggy, so use this.
module Jekyll
  module Modulo
    def modulofilter(input, n)
      input.modulo(n)
    end
  end
end

Liquid::Template.register_filter(Jekyll::Modulo)