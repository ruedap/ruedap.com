#= require_tree .
#= require_self

d3BannerLogoNode = d3.select('#templateSvgLogo > svg').node()

setLogoAttr = (svg) ->
  svg
    .attr
      width: 156
      height: 200
    .each (d, i) ->
      @appendChild d3BannerLogoNode.cloneNode(true)

header = d3.select('#jsHeaderLogo').append('svg')
setLogoAttr(header)

footer = d3.select('#jsFooterLogo').append('svg')
setLogoAttr(footer)
