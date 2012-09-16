# This is a sample of jekyll plugin just for explaining how to parse & render.
#
# Usage:
#    {% img /assets/img/sample.jpg I&#39;ll be back %}
# Result:
#    <img src='/assets/img/sample.jpg' alt='I&#39;ll be back' title='I&#39;ll be back'>

module Jekyll
  class Img < Liquid::Tag
    def initialize(tag_name, args, tokens)
      super
      p = args.split(" ", 2)
      @src = p[0].gsub(/['"]/, '').rstrip
      @alt = p[1].gsub(/['"]/, '').rstrip
    end

    def render(context)
      "<img src='" + @src + "' class='thumbnail' style='margin:1em auto' alt='" + @alt + "' title='" + @alt + "'>"
    end
  end
end

Liquid::Template.register_tag('img', Jekyll::Img)
