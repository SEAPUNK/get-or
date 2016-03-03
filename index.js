'use strict'

module.exports = function (object, path, otherwise) {
  if (path) path = path.split('.')

  if (object === null || object === undefined) return otherwise

  if (!path) return object

  var current = object
  var prop

  for (var i = 0; i < path.length; i++) {
    prop = path[i]
    if (current[prop] === null || current[prop] === undefined) return otherwise
    current = current[prop]
  }

  return current
}
