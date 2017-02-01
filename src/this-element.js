class Miw extends Utilities {

    constructor(cssSelector){
        super();
        this.element = false;
        this.elements = false;

        if (cssSelector) {
            if (document.querySelectorAll(cssSelector).length == 1) this.element = Utilities.select(cssSelector);
            else this.elements = Utilities.selectAll(cssSelector);
        }

        return this;
    }

    processSingleOrAll(myFunction) {
        if (this.element) {
            myFunction(this.element);
        } else if (this.elements) {
            this.elements.forEach(function(element) {
                myFunction(element);
            });
        }

        return this;
    }

    substitue(c1, c2) {
        return this.processSingleOrAll(function(element){
            element.textContent.split(c1).join(c2);
        });
    }
    remove() {
        return this.processSingleOrAll(function(element){
            element.remove();
        });
    }
    text(text) {
        if (this.element && text == null) return this.element.textContent;
        else if (this.elements && text == null) return null;

        return this.processSingleOrAll(function(element){
            element.textContent = text;
        });
    }
    capitalize() {
        return this.processSingleOrAll(function(element){
            element.textContent = element.textContent.charAt(0).toUpperCase() + element.textContent.slice(1).toLowerCase();
        });
    }
    left(n) {
        return this.processSingleOrAll(function(element){
            let string = '';
            for (let i = 0; i < n; i++) {
                string += element.textContent[i];
            }
            element.textContent = string;
        });
    }
    right(n) {
        return this.processSingleOrAll(function(element){
            let string = '';
            for (let i = element.length - 1; i > element.length - n; i--) {
                string = element.textContent[i] + string;
            }
            element.textContent = string;
        });
    }
    trim() {
        return this.processSingleOrAll(function(element){
            element.textContent.replace(/^\s+|\s+$/gm,'');
        });
    }
    changeId(val) {
        return this.processSingleOrAll(function(element){
            element.id = val;
        });
    }
    css(obj){
        return this.processSingleOrAll(function(element){
            for (let i in obj) {
                element.style[i] = obj[i];
            }
        });
    }
    moveTo(x, y) {
        return this.processSingleOrAll(function(element){
            element.style.position = 'absolute';
            element.style.left     = x+'px';
            element.style.top      = y+'px';
        });
    }
    height(height) {
        if (this.element && height == null) return this.element.offsetHeight;
        if (this.elements) return null;

        return this.processSingleOrAll(function(element){
            if (height == null) return element.offsetHeight;

            element.style.height = height+'px';
        });
    }
    width(width) {
        if (this.element && width == null) return this.element.offsetWidth;
        if (this.elements) return null;

        return this.processSingleOrAll(function(element){
            element.style.width = width+'px';
        });
    }
    val(val) {
        if (this.element && val == null) return this.element.value;
        if (this.elements && val == null) return null;

        return this.processSingleOrAll(function(element){
            element.value = val;
        });
    }
    on(event, action) {
        return this.processSingleOrAll(function(element){
            if (event == null || action == null) return false;
            element.addEventListener(event, action);
        });
    }
    getElement() {
        if (! this.element) return null;

        return this.element;
    }
    parent() {
        if (! this.element) return null;

        let miw = new Miw();
        miw.element = this.element.parentElement;

        return miw;
    }
    offsetTop(offsetTop) {
        if (! this.element) return null;

        if (offsetTop == null) return parseInt(this.element.style.top);

        this.element.style.position = 'absolute';
        this.element.style.top      = offsetTop+'px';

        return this;
    }
    offsetLeft(offsetLeft) {
        if (! this.element) return null;

        if (offsetLeft == null) return parseInt(this.element.style.left);

        this.element.style.position = 'absolute';
        this.element.style.left     = offsetLeft+'px';

        return this;
    }
    hide() {
        return this.processSingleOrAll(function(element){
            element.style.display = 'none';
        });
    }
    show() {
        return this.processSingleOrAll(function(element){
            element.style.display = 'inline-block';
        });
    }
    append(el, attributes, styles) {
        if (! this.element) return null;

        let element = document.createElement(el);

        if (attributes != null) {
            for (let k in attributes) {
                element.setAttribute(k, attributes[k]);
            }
        }

        if (styles != null) {
            for (let k in styles) {
                element.style[k] = styles[k];
            }
        }

        this.element.appendChild(element);

        return this;
    }
    after(el, attributes, styles) {
        if (! this.element) return null;

        let newElement = document.createElement(el);

        if (attributes != null) {
            for (let k in attributes) {
                newElement.setAttribute(k, attributes[k]);
            }
        }

        if (styles != null) {
            for (let k in styles) {
                newElement.style[k] = styles[k];
            }
        }

        this.element.parentNode.insertBefore(newElement, this.element.nextSibling);
        this.element = this.element.nextSibling;

        return this;
    }
    html(string) {
        return this.processSingleOrAll(function(element){
            element.innerHTML = string;
        });
    }
    empty() {
        return this.processSingleOrAll(function(element){
            element.innerHTML = '';
        });
    }
    first() {
        if (! this.elements) return null;

        this.element  = this.elements[0];
        this.elements = false;

        return this;
    }
    last() {
        if (! this.elements) return null;

        this.element  = this.elements[this.elements.length - 1];
        this.elements = false;

        return this;
    }
    thisIsAnArray() {
        if (! this.elements) return false;

        if (typeof this.elements == Array) return true;
    }
    hasClass(string) {
        if (! this.element) return false;

        return (this.element.className.split(' ').indexOf(string) >= 0);
    }
    addClass(string) {
        return this.processSingleOrAll(function(element){
            element.className = element.className + ' ' + string;
        });
    }
    removeClass(string) {
        return this.processSingleOrAll(function(element){
            element.className = element.className.replace(string, '');
        });
    }
}

