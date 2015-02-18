'use strict';

var React = require('react/addons');
var merge = require('lodash.merge');
var cx = React.addons.classSet;

var sizes = [
  'mini', 'tiny', 'small',
  'medium', 'large', 'big',
  'huge', 'massive'
];

function sizeStyles(size) {
  // TODO: switch with (array.first || empty string)
  return sizes.reduce(function(prev, curr){
    prev[curr] = (curr === size);
    return prev;
  }, {});
}

module.exports = React.createClass({
  propTypes: {
    fluid: React.PropTypes.bool,
    circular: React.PropTypes.bool,
    focusable: React.PropTypes.bool,
    labeled: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    size: React.PropTypes.oneOf(sizes),
    attached: React.PropTypes.oneOf(['bottom', 'top'])
  },

  getDefaultProps: function() {
    return {
      fluid: false,
      circular: false,
      focusable: false,
      loading: false,
      labeled: false,
      size: null,
      attached: null
    };
  },

  render: function() {
    var ctor = this.props.focusable ? React.DOM.button : React.DOM.div;
    var classes = cx(merge({
      ui: true,
      button: true,
      fluid: this.props.fluid,
      circular: this.props.circular,
      labeled: this.props.labeled,
      loading: this.props.loading,
      attached: !!this.props.attached,
      top: (this.props.attached === 'top'),
      bottom: (this.props.attached === 'bottom')
    }, sizeStyles(this.props.size)));

    var props = merge(this.props, {className: classes});
    return ctor(props, this.props.children);
  }
});