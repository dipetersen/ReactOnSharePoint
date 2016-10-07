class Utils {

    static CombineClasses(staticClassName, conditionalClassNames) {
        var classNames = []
        if (typeof conditionalClassNames === 'undefined') {
            conditionalClassNames = staticClassName
        }
        else {
            classNames.push(staticClassName)
        }
        for (var className in conditionalClassNames) {
            if (!!conditionalClassNames[className]) {
            classNames.push(className)
            }
        }
        return classNames.join(' ')
    }

    static Trim() {
        var TRIM_RE = /^\s+|\s+$/g
        return function trim(string) {
            return string.replace(TRIM_RE, '')
        }
    }

    /**
     * Get the value of a querystring
     * @param  {String} field The field to get the value of
     * @param  {String} url   The URL to get the value from (optional)
     * @return {String}       The field value
    */
    static getQueryStringValue(field, url) {
        var href = url ? url : window.location.href;
        var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
        var string = reg.exec(href);
        return string ? string[1] : null;
    };
}

export default Utils;