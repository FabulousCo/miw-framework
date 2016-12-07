var Miw = function(cssSelector){
    this.element = false;

    if (cssSelector) {
        this.element = this.select(cssSelector);
    }
};