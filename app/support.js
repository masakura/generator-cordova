'use strict';

module.exports = (function () {
    return {
        replaceConfigLabel: function (data) {
            if (data.match(/<%=\s*config\./)) {
                return data.replace(/(<%=\s*)yeoman\./g, '$1config.');
            }
            return data;
        }
    };
})();
