Miw.prototype.substitue = function(c1, c2) {
    var string = this.element.textContent;
    string.split(c1).join(c2);

    return this;
};
Miw.prototype.delete = function() {
    return this.element.remove();
};
Miw.prototype.text = function(text) {
    if (! this.element) return null;

    if(text == null) return text;

    this.element.textContent = text;

    return this;
};
Miw.prototype.capitalize = function() {
    if (! this.element) return null;

    var text = this.element.textContent;
    this.element.textContent = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    return this;
};
Miw.prototype.left = function(n) {
    if (! this.element) return null;

    var string = '';
    for (var i = 0; i < n; i++) {
        string += this.element.textContent[i];
    }
    this.element.textContent = string;

    return this;
};
Miw.prototype.right = function(n) {
    if (! this.element) return null;

    var string = '';
    for (var i = this.length - 1; i > this.length - n; i--) {
        string = this.element.textContent[i] + string;
    }
    this.element.textContent = string;

    return this;
};
Miw.prototype.trim = function() {
    if (! this.element) return null;
    this.element.textContent.replace(/^\s+|\s+$/gm,'');

    return this;
};
Miw.prototype.changeId = function(val) {
    if (! this.element) return null;
    this.element.id = val;

    return this;
};
Miw.prototype.css = function(obj){
    if (! this.element) return null;
    for (var i in obj) {
        this.element.style[i] = obj[i];
    }
    return this;
};
Miw.prototype.moveTo = function(x, y) {
    if (! this.element) return null;

    this.css({position: 'absolute', left: x, top: y});

    return this;
};
Miw.prototype.height = function(height) {
    if (! this.element) return null;

    if (height == null) return this.element.offsetHeight;

    this.element.innerHeight = height;

    return this;
};
Miw.prototype.width = function(width) {
    if (! this.element) return null;

    if (width == null) return this.element.offsetWidth;
    this.element.innerWidth = width;

    return this;
};
Miw.prototype.val = function(val) {
    if (! this.element) return null;

    if (val == null) return this.element.value;
    this.element.value = val;

    return this;
};
Miw.prototype.on = function(event, action) {
    if (! this.element) return null;
    if (event == null || action == null) return false;

    this.element.addEventListener(event, action);

    return this;
};
Miw.prototype.getElement = function() {
    if (! this.element) return null;

    return this.element;
};