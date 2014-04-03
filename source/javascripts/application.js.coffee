#= require_tree .
#= require_self

d3.xml 'images/logo_ruedapcom.svg', 'image/svg+xml', (xml) ->
  d3HeaderLogoNode = document.importNode(xml.documentElement, true)
  d3.select('#jsHeaderLogo').node().appendChild(d3HeaderLogoNode)
  d3FooterLogoNode = document.importNode(xml.documentElement, true)
  d3.select('#jsFooterLogo').node().appendChild(d3FooterLogoNode)
