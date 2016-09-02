define(['testMid', 'es6!./cyyjsx', 'es6!./ReactButton'], function (TestMid, cyyjsx, ReactButton) {
    var data = "yooooooooo";
    var action = function () {
        console.info("YOOOOOOOOOOOOOO");
    };
    var id = "cyy";
    TestMid.bindReactAction(ReactButton, data, action, id);
});
