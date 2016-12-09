'use strict'

var test = require('tape')
var exec = require('child_process').exec

test('uses npm@next', function (t) {
  exec('npm info npm dist-tags.next', function (err, expected) {
    t.ifError(err)
    expected = expected.trim()
    exec('./bin/index.js -v', function (err, actual) {
      t.ifError(err)
      actual = actual.trim()
      t.equal(actual, expected, 'uses next version')
      t.end()
    })
  })
})
