# Original code by Jacques Fortier (jacquesf.com)
# at http://www.jacquesf.com/2011/03/creating-excerpts-in-jekyll-with-wordpress-style-more-html-comments/
module Jekyll
  module PostMore
    def postmorefilter(input)
      if input.include? "<!--more-->"
        input.split("<!--more-->").first
      else
        input
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::PostMore)