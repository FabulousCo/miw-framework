// 16-11-30
Miw.prototype.select = function(cssSelector) {
    if (cssSelector) {
        return document.querySelector(cssSelector);
    }
};
Miw.prototype.id = function(id) {
    return document.getElementById(id);
};
Miw.prototype.tn = function(n) {
    return document.getElementsByName(n);
};
Miw.prototype.n = function(n) {
    return document.getElementsByName(n)[0];
};
Miw.prototype.cf = function() {
    return document.createDocumentFragment();
};
Miw.prototype.ce = function(el, nodeIns) {
    var element = document.createElement(el);

    if (nodeIns) nodeIns.appendChild(element);

    return element;
};
Miw.prototype.ct = function(tx, nodeIns) {
    var element = document.createTextNode(tx);

    if (nodeIns) nodeIns.appendChild(element);

    return element;
};
Miw.prototype.cn = function(node, attributes, styles, nodeIns) {
    var element = document.createElement(node);

    for (var k in attributes) {
        element.setAttribute(k, attributes[k]);
    }

    for (var k in styles) {
        element.style[k] = styles[k];
    }

    if (nodeIns) nodeIns.appendChild(element);

    return element;
};
Miw.prototype.each = function(o,f){
    for (var i in o){ f(i,o[i])}
};
Miw.prototype.convertCss = function(string) {
    var occurrences = string.match(new RegExp('\-[a-z]', 'g'));
    for (var i in occurrences) {
        string = string.replace(occurrences[i], occurrences[i].replace('-', '').toUpperCase());
    }

    return string;
};
Miw.prototype.merge = function(arrayA, arrayB) {
    for (var i in arrayB) {
        arrayA.push(arrayB[i]);
    }
    return arrayA;
};
Miw.prototype.p = function(number, power) {
    var finalNumber = 1;
    for (var i = 0; i < power; i++) {
        finalNumber *= number;
    }

    return finalNumber;
};
String.prototype.extend = function(obj) {
    for (var i in obj) {
        this[i] = obj[i];
        console.log(this[i]);
    }
    return this;
};

