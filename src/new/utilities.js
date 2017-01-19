'use strict';

class Utilities {
    static number(n) {
        let regex = new RegExp("[0-9]*\.?[0-9]*");
        let formatted = regex.test(n);
        return (formatted && typeof n != 'string');
    }
    static pair(x) {
        return (x % 2 ? false : true);
    }

    static round(x, n) {
        return parseFloat(x).toFixed(n);
    }

    static nboccurence(c, ch) {
        let regex = new RegExp(c, 'g');

        let formatted = ch.match(regex);

        return formatted.length;
    }

    static substitute(c1, c2, c) {
        let regex = new RegExp(c1, 'g');

        return c.replace(regex, c2);
    }

    // 16-11-30
    static select(cssSelector) {
        if (cssSelector) {
            return document.querySelector(cssSelector);
        }
    }
    static selectAll(cssSelector) {
        if (cssSelector) {
            return document.querySelectorAll(cssSelector);
        }
    }

    static id(id) {
        return document.getElementById(id);
    }
    static tn(n) {
        return document.getElementsByName(n);
    }
    static n(n) {
        return document.getElementsByName(n)[0];
    }
    static cf() {
        return document.createDocumentFragment();
    }
    static appendElementToNodeIns(element, nodeIns) {
        if (nodeIns) {
            if (nodeIns.element != null) {
                nodeIns.element.appendChild(element);
            } else {
                nodeIns.appendChild(element);
            }
            this.element = element;
        }

        return this;
    }
    static ce(el, nodeIns) {
        let element = document.createElement(el);

        return this.appendElementToNodeIns(element, nodeIns);
    }
    static ct(tx, nodeIns) {
        let element = document.createTextNode(tx);

        return this.appendElementToNodeIns(element, nodeIns);
    }
    static cn(node, attributes, styles, nodeIns) {
        let element = document.createElement(node);

        for (let k in attributes) {
            element.setAttribute(k, attributes[k]);
        }

        for (let k in styles) {
            element.style[k] = styles[k];
        }

        return this.appendElementToNodeIns(element, nodeIns);
    }
    static each(o,f){
        for (let i in o){ f(i,o[i])}
    }
    static convertCss(string) {
        let occurrences = string.match(new RegExp('\-[a-z]', 'g'));
        for (let i in occurrences) {
            string = string.replace(occurrences[i], occurrences[i].replace('-', '').toUpperCase());
        }

        return string;
    }
    static merge(arrayA, arrayB) {
        for (let i in arrayB) {
            arrayA.push(arrayB[i]);
        }
        return arrayA;
    }
    static p(number, power) {
        let finalNumber = 1;
        for (let i = 0; i < power; i++) {
            finalNumber *= number;
        }

        return finalNumber;
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
    // static get() {
    //     let xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange() {
    //         if (xhr.readyState == 4) {
    //             let data;
    //             if (!xhr.responseType || xhr.responseType === "text") {
    //                 data = xhr.responseText;
    //             } else if (xhr.responseType === "document") {
    //                 data = xhr.responseXML;
    //             } else {
    //                 data = xhr.response;
    //             }
    //             console.log(data);
    //         }
    //     }
    //     xhr.open('GET', 'http://www.google.com', true);
    //     xhr.send(null);
    // }
}

class __ extends Utilities {

}
