/**
 * Created by yueych on 8/31/2016.
 *
 * the top-level config script used by index.html
 */
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    }
});

requirejs(['app/main']);