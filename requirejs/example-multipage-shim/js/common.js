/**
 * Created by yueych on 8/31/2016.
 */
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        react: {
            exports: 'React'
        },
        'react-dom': {
            exports: 'ReactDOM'
        },
        testMid: {
            deps: ['react', 'react-dom'],
            exports: 'TestMid'
        }
    }
});