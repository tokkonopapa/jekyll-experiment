# {% gist 1577100 file: tag_cloud.rb %}
# <script src="https://gist.github.com/1577100.js?file=tag_cloud.rb"></script>

module Jekyll
  class Gist < Liquid::Tag
    def initialize(tag_name, args, tokens)
      super
      @file = ''
      if args =~ /(file:\s*([\w\.-]+))/
        @file = "?file=" + $2
        args = args.sub($1, '')
      end
      @num = args.gsub(/\D/, '')
    end

    def render(context)
      "<script src='https://gist.github.com/" + @num+ ".js" + @file + "'></script>"
    end
  end
end

Liquid::Template.register_tag('gist', Jekyll::Gist)
