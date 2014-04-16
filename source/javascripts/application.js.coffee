#= require_tree .
#= require_self

# D3
d3.xml 'images/logo_ruedapcom.svg', 'image/svg+xml', (xml) ->
  d3HeaderLogoNode = document.importNode(xml.documentElement, true)
  d3.select('#jsHeaderLogo').node().appendChild(d3HeaderLogoNode)

# Shadow DOM
XRuedapFooterPrototype = Object.create(HTMLElement.prototype)
XRuedapFooterPrototype.createdCallback = ->
  template = document.getElementById('x-ruedap-footer-template')
  clone = document.importNode(template.content, true)
  shadowRoot = this.createShadowRoot()
  shadowRoot.appendChild(clone)

XRuedapFooter = document.registerElement(
  'x-ruedap-footer',
  prototype: XRuedapFooterPrototype
)

xRuedapFooter = new XRuedapFooter()
document.querySelector('.root__inner').appendChild(xRuedapFooter)
