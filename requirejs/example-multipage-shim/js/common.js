/**
 * Created by yueych on 8/31/2016.
 */
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        es6:'./bower_components/requirejs-babel/es6',
        babel:'./bower_components/requirejs-babel/babel-5.8.34.min'
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
        },
        cyyReact: {
            deps: ['react', 'react-dom', 'cyyReactPlus'],
            exports: 'CyyReact'
        },
        cyyReactPlus: {
            deps: ['react', 'react-dom'],
            exports: 'CyyReactPlus'
        }
    }
});