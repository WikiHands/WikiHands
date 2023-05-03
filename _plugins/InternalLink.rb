require "jekyll"
class InternalLink < Liquid::Tag

  def initialize(tagName, content, tokens)
    super
    @content = content
  end

  def render(context)
    link = "#{context[@content.strip]}"
      %Q{<a href="#{link}">#{link}</a>"}
    end
  end

  Liquid::Template.register_tag "l", self
end