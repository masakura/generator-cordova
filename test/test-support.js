/*global describe, it*/
'use strict';

var assert = require('assert');
var support = require('../app/support.js');

describe('cordova generator', function () {
    it('replace config label for generator-webapp@>=0.4.8 ', function () {
        var source =
            '<%=  yeoman.config %>\n' +
            '    hoge \n' +
            '    <%= config.app %>\n' +
            '  <%= yeoman.dist %>';
        var expected =
            '<%=  config.config %>\n' +
            '    hoge \n' +
            '    <%= config.app %>\n' +
            '  <%= config.dist %>';

        var actual = support.replaceConfigLabel(source);
        assert.equal(actual, expected);
    });
    it('replace config label for generator-webapp@<0.4.8', function () {
        var source =
            '<%=  yeoman.config %>\n' +
            '    hoge \n' +
            '    <%= yeoman.app %>\n' +
            '  <%= yeoman.dist %>';
        var expected =
            '<%=  yeoman.config %>\n' +
            '    hoge \n' +
            '    <%= yeoman.app %>\n' +
            '  <%= yeoman.dist %>';

        var actual = support.replaceConfigLabel(source);
        assert.equal(actual, expected);
    });
});
