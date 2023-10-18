'use strict';
function getElementWidth(content, padding, border) {
  const width = Number.parseFloat(content) + 2 * Number.parseFloat(padding) + 2 * Number.parseFloat(border);
  return width;
}