Miw.prototype.substitue = function(c1, c2) {
    return this.processSingleOrAll(function(element){
        element.textContent.split(c1).join(c2);
    });
};
Miw.prototype.delete = function() {
    return this.processSingleOrAll(function(element){
        element.remove();
    });
};
Miw.prototype.text = function(text) {
    if (this.element && text == null) return this.element.textContent;
    else if (this.elements && text == null) return null;

    return this.processSingleOrAll(function(element){
        element.textContent = text;
    });
};
Miw.prototype.capitalize = function() {
    return this.processSingleOrAll(function(element){
        element.textContent = element.textContent.charAt(0).toUpperCase() + element.textContent.slice(1).toLowerCase();;
    });
};
Miw.prototype.left = function(n) {
    return this.processSingleOrAll(function(element){
        var string = '';
        for (var i = 0; i < n; i++) {
            string += element.textContent[i];
        }
        element.textContent = string;
    });
};
Miw.prototype.right = function(n) {
    return this.processSingleOrAll(function(element){
        var string = '';
        for (var i = element.length - 1; i > element.length - n; i--) {
            string = element.textContent[i] + string;
        }
        element.textContent = string;
    });
};
Miw.prototype.trim = function() {
    return this.processSingleOrAll(function(element){
        element.textContent.replace(/^\s+|\s+$/gm,'');
    });
};
Miw.prototype.changeId = function(val) {
    return this.processSingleOrAll(function(element){
        element.id = val;
    });
};
Miw.prototype.css = function(obj){
    return this.processSingleOrAll(function(element){
        for (var i in obj) {
            element.style[i] = obj[i];
        }
    });
};
Miw.prototype.moveTo = function(x, y) {
    return this.processSingleOrAll(function(element){
        element.style.position = 'absolute';
        element.style.left     = x+'px';
        element.style.top      = y+'px';
    });
};
Miw.prototype.height = function(height) {
    if (this.element && height == null) return this.element.offsetHeight;
    if (this.elements) return null;

    return this.processSingleOrAll(function(element){
        if (height == null) return element.offsetHeight;

        element.style.height = height+'px';
    });
};
Miw.prototype.width = function(width) {
    if (this.element && width == null) return this.element.offsetWidth;
    if (this.elements) return null;

    return this.processSingleOrAll(function(element){
        element.style.width = width+'px';
    });
};
Miw.prototype.val = function(val) {
    if (this.element && val == null) return this.element.value;
    if (this.elements && val == null) return null;

    return this.processSingleOrAll(function(element){
        element.value = val;
    });
};
Miw.prototype.on = function(event, action) {
    return this.processSingleOrAll(function(element){
        if (event == null || action == null) return false;
        element.addEventListener(event, action);
    });
};
Miw.prototype.getElement = function() {
    if (! this.element) return null;

    return this.element;
};
Miw.prototype.parent = function() {
    if (! this.element) return null;

    var miw = new Miw();
    miw.element = this.element.parentElement;

    return miw;
};
Miw.prototype.offsetTop = function(offsetTop) {
    if (! this.element) return null;

    if (offsetTop == null) return parseInt(this.element.style.top);

    this.element.style.position = 'absolute';
    this.element.style.top      = offsetTop+'px';

    return this;
};
Miw.prototype.offsetLeft = function(offsetLeft) {
    if (! this.element) return null;

    if (offsetLeft == null) return parseInt(this.element.style.left);

    this.element.style.position = 'absolute';
    this.element.style.left     = offsetLeft+'px';

    return this;
};
Miw.prototype.hide = function() {
    return this.processSingleOrAll(function(element){
        element.style.display = 'none';
    });
};
Miw.prototype.show = function() {
    return this.processSingleOrAll(function(element){
        element.style.display = 'inline-block';
    });
};
Miw.prototype.append = function(el, attributes, styles) {
    if (! this.element) return null;

    var element = document.createElement(el);

    if (attributes != null) {
        for (var k in attributes) {
            element.setAttribute(k, attributes[k]);
        }
    }

    if (styles != null) {
        for (var k in styles) {
            element.style[k] = styles[k];
        }
    }

    this.element.appendChild(element);

    return this;
};
Miw.prototype.empty = function() {
    return this.processSingleOrAll(function(element){
        element.innerHTML = '';
    });
};
Miw.prototype.first = function() {
    if (! this.elements) return null;

    this.element  = this.elements[0];
    this.elements = false;

    return this;
};
Miw.prototype.last = function() {
    if (! this.elements) return null;

    this.element  = this.elements[this.elements.length - 1];
    this.elements = false;

    return this;
};
Miw.prototype.thisIsAnArray = function() {
    if (! this.elements) return false;

    if (typeof this.elements == Array) return true;
};