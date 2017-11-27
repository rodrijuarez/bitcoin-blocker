'use strict';

walk(document.body);

function walk(node) {
  // And I stole it from you, buddy:
  // https://github.com/afolson/buzzword-replacerator/blob/master/src/buzzwords.js
  // I stole this function from here:
  // http://is.gd/mwZp7E
  // Which I stole from here:
  // https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js
  var child, next;
  switch (node.nodeType) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;
    case 3: // Text node
      deBitconeise(node);
      break;
  }
}

function deBitconeise(textNode) {
  // Hi, I hope you like slow browsing experiences.
  textNode.nodeValue = textNode.nodeValue
    .replace(/\bbitcoin\b/gi, 'little fucker');
}

