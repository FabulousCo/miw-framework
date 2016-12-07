Miw.prototype.dn = function() {
    return this.element.remove();
};
Miw.prototype.text = function(text) {
    if (! this.element) return null;

    this.element.textContent = text;
};
Miw.prototype.capitalize = function() {
    if (! this.element) return null;

    var text = this.element.textContent;
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
Miw.prototype.left = function(n) {
    if (! this.element) return null;

    var string = '';
    for (var i = 0; i < n; i++) {
        string += this.element.textContent[i];
    }
    return string;
};
Miw.prototype.right = function(n) {
    if (! this.element) return null;

    var string = '';
    for (var i = this.length - 1; i > this.length - n; i--) {
        string = this.element.textContent[i] + string;
    }
    return string;
};
Miw.prototype.trim = function() {
    return this.element.textContent.replace(/^\s+|\s+$/gm,'');
};
Miw.prototype.changeId = function(val) {
    return this.element.id = val;
};
Miw.prototype.css = function(obj){
    if (! this.element) return null;
    for (var i in obj) {
        this.element.style[i] = obj[i];
    }
    return true;
};
Miw.prototype.get = function(){
    if (! this.element) return null;

    return this.element;
};