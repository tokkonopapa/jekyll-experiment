# This is a sample of jekyll plugin just for explaining how to parse & render.
#
# Usage:
#    {% img /assets/img/sample.jpg 'some text' %}
# Result:
#    <img src='/assets/img/sample.jpg' class='thumbnail' alt='some text' title='some text'>

module Jekyll
  class Img < Liquid::Tag
    def initialize(tag_name, args, tokens)
      super
      @args = args.split(" ", 2)
    end

    def render(context)
      "<img src='" + @args[0] + "' class='thumbnail' style='margin-left:auto; margin-right:auto' alt='" + @args[1] + "' title='" + @args[1] + "'>"
    end
  end
end

Liquid::Template.register_tag('img', Jekyll::Img)
