var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var replacedText = text.replace(/burger/gi, function(match) {
        return matchCase("pancake", match);
      });

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);

      }
    }
  }
}

function matchCase(text, pattern) {
  var result = '';
  var numUppercase = 0;
  for (var i = 0; i < text.length; i++) {
    var c = text.charAt(i);
    var p = pattern.charCodeAt(i);

    if ((p >= 65 && p < 65 + 26) || pattern.length == numUppercase) {
      result += c.toUpperCase();
      numUppercase += 1;
    } else {
      result += c.toLowerCase();
    }
  }

  return result;
}
