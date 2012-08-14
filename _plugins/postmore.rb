module PostMore
  def postmorefilter(input)
    if input.include? "<!--more-->"
      input.split("<!--more-->").first
    else
      input
    end
  end
end

Liquid::Template.register_filter(PostMore)