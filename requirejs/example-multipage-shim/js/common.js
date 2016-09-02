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