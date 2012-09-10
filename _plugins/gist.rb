# {% gist 1577100 %}

module Jekyll
  class Gist < Liquid::Tag
    def initialize(tag_name, num, tokens)
      super
      @num = num.rstrip
    end

    def render(context)
      "<script src='https://gist.github.com/" + @num + ".js'></script>"
    end
  end
end

Liquid::Template.register_tag('gist', Jekyll::Gist)
