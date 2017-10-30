System.register(['angular2/platform/browser', './components/welcome/welcome.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, welcome_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(welcome_component_1.WelcomeComponent);
        }
    }
});
//# sourceMappingURL=main.js.map