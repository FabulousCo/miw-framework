Miw.prototype.number = function(n) {

    var regex = new RegExp("[0-9]*\.?[0-9]*");

    var formatted = regex.test(n);

    return (formatted && typeof n == 'string');
};

// TO FINISH
Miw.prototype.positifInteger = function(n) {
    if (! nombre(n)) return false;
};

Miw.prototype.pair = function(x) {
    return (x % 2 ? false : true);
};

Miw.prototype.round = function(x, n) {
    return parseFloat(x).toFixed(n);
};

Miw.prototype.nboccurence = function(c, ch) {
    var regex = new RegExp(c, 'g');

    var formatted = ch.match(regex);

    return formatted.length;
};

Miw.prototype.substitute = function(c1, c2, c) {
    var regex = new RegExp(c1, 'g');

    return c.replace(regex, c2);
};

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
Miw.prototype.appendElementToNodeIns = function(element, nodeIns) {
    if (nodeIns) {
        if (nodeIns.element != null) {
            nodeIns.element.appendChild(element);
            this.element = nodeIns.element;
        } else {
            nodeIns.appendChild(element);
            this.element = element;
        }
    }

    return this;
};
Miw.prototype.ce = function(el, nodeIns) {
    var element = document.createElement(el);

    return this.appendElementToNodeIns(element, nodeIns);
};
Miw.prototype.ct = function(tx, nodeIns) {
    var element = document.createTextNode(tx);

    return this.appendElementToNodeIns(element, nodeIns);
};
Miw.prototype.cn = function(node, attributes, styles, nodeIns) {
    var element = document.createElement(node);

    for (var k in attributes) {
        element.setAttribute(k, attributes[k]);
    }

    for (var k in styles) {
        element.style[k] = styles[k];
    }

    return this.appendElementToNodeIns(element, nodeIns);
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

