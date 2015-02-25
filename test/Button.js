'use strict';

var should = require('should');
var React = require('react');
var Button = React.createFactory(require('../lib/Button'));

describe('Button()', function() {
  it('should render with no options', function(done){
    var btn = Button();
    var str = React.renderToStaticMarkup(btn);
    should.exist(str);
    str.should.equal('<div class="ui button"></div>');
    done();
  });
  it('should render with children', function(done){
    var btn = Button(null, 'Test');
    var str = React.renderToStaticMarkup(btn);
    should.exist(str);
    str.should.equal('<div class="ui button">Test</div>');
    done();
  });
});