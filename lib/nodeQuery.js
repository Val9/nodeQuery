var Browserify = require('browserify');
var url = require('url');
var _ = require('underscore');
var qs = require('querystring');

module.exports = function (client, conn) {

    conn.$ = function (context) {
    
        this.context = context;
        var self = this;
        _.extend(self, conn);
        
        // Gets (fn)
        self.get = function get(fn) {
            client.nQget({
                context:context, 
                fn:arguments.callee.name,
            }, fn);
        };
        self.size = function size(fn) {
            client.nQget({
                context:context, 
                fn:arguments.callee.name,
            }, fn);
        };
        self.index = function index(fn) {
            client.nQget({
                context:context, 
                fn:arguments.callee.name,
            }, fn);
        };
        self.offset = function offset(fn) {
            client.nQget({
                context:context, 
                fn:arguments.callee.name,
            }, fn);
        };
        self.height = function height(fn) {
            client.nQget({
                context:context, 
                fn:arguments.callee.name,
            }, fn);
        };
        self.width = function width(fn) {
            client.nQget({
                context:context, 
                fn:arguments.callee.name,
            }, fn);
        };
        self.serialize = function serialize(fn) {
            if (typeof fn === 'function') {
                client.nQattr({
                    context:context, 
                    fn:arguments.callee.name,
                    args:''
                }, fn);
            }
        };
        
        // Live binding (string, callback)
        self.live = function live() {
            var args = Array.prototype.slice.call(arguments);
            client.nQlive({
                context:context, 
                fn:arguments.callee.name,
                args:args[0]
            }, args[1]);
        };
        self.bind = function bind() {
            var args = Array.prototype.slice.call(arguments);
            client.nQlive({
                context:context, 
                fn:arguments.callee.name,
                args:args[0]
            }, args[1]);
        };
        self.unbind = function unbind() {
            var args = Array.prototype.slice.call(arguments);
            client.nQlive({
                context:context, 
                fn:arguments.callee.name,
                args:args[0]
            }, args[1]);
        };
        
        
        // Sets (string, [function])
        self.html = function html(fn) {
            var args = Array.prototype.slice.call(arguments);
            if (typeof fn !== 'function') {
                client.nQset({
                    context:context, 
                    fn:arguments.callee.name, 
                    args:args
                });
                return self;
            } else {
                client.nQhtml({
                    context:context, 
                    fn:arguments.callee.name,
                }, fn);
            }
        };
        self.text = function text(fn) {
            var args = Array.prototype.slice.call(arguments);
            if (typeof fn !== 'function') {
                client.nQset({
                    context:context, 
                    fn:arguments.callee.name, 
                    args:args
                });
                return self;
            } else {
                client.nQtext({
                    context:context, 
                    fn:arguments.callee.name,
                }, fn);
            }
        };
        self.attr = function attr(attr, fn) {
            var args = Array.prototype.slice.call(arguments);
            if (typeof fn === 'function') {
                client.nQattr({
                    context:context, 
                    fn:arguments.callee.name,
                    args:attr
                }, fn);
            } else {
                client.nQset({
                    context:context, 
                    fn:arguments.callee.name, 
                    args:args
                });
                return self;
            }
        };
        self.css = function css(attr, fn) {
            var args = Array.prototype.slice.call(arguments);
            if (typeof fn === 'function') {
                client.nQattr({
                    context:context, 
                    fn:arguments.callee.name,
                    args:attr
                }, fn);
            } else {
                client.nQset({
                    context:context, 
                    fn:arguments.callee.name, 
                    args:args
                });
                return self;
            }
        };
        self.toggleClass = function toggleClass(attr, fn) {
            var args = Array.prototype.slice.call(arguments);
            if (typeof fn === 'function') {
                client.nQattr({
                    context:context, 
                    fn:arguments.callee.name,
                    args:attr
                }, fn);
            } else {
                client.nQset({
                    context:context, 
                    fn:arguments.callee.name, 
                    args:args
                });
                return self;
            }
        };
        self.addClass = function addClass() {
            var args = Array.prototype.slice.call(arguments);
            client.nQset({
                context:context, 
                fn:arguments.callee.name, 
                args:args
            });
            return self;
        };
        self.removeClass = function removeClass() {
            var args = Array.prototype.slice.call(arguments);
            client.nQset({
                context:context, 
                fn:arguments.callee.name, 
                args:args
            });
            return self;
        };
        
        // Sets (string)
        self.replaceWith = function replaceWith() {
            var args = Array.prototype.slice.call(arguments);
            client.nQset({
                context:context, 
                fn:arguments.callee.name, 
                args:args
            });
            return self;
        };
        self.append = function append() {
            var args = Array.prototype.slice.call(arguments);
            client.nQset({
                context:context, 
                fn:arguments.callee.name, 
                args:args
            });
            return self;
        };
        self.prepend = function prepend() {
            var args = Array.prototype.slice.call(arguments);
            client.nQset({
                context:context, 
                fn:arguments.callee.name, 
                args:args
            });
            return self;
        };
        self.before = function before() {
            var args = Array.prototype.slice.call(arguments);
            client.nQset({
                context:context, 
                fn:arguments.callee.name, 
                args:args
            });
            return self;
        };
        self.after = function after() {
            var args = Array.prototype.slice.call(arguments);
            client.nQset({
                context:context, 
                fn:arguments.callee.name, 
                args:args
            });   
            return self;     
        };
        self.appendTo = function appendTo(params) {
            var args = Array.prototype.slice.call(arguments);
            client.nQset({
                context:context, 
                fn:arguments.callee.name, 
                args:args
            });     
            return self;   
        };
        self.prependTo = function prependTo(params) {
            var args = Array.prototype.slice.call(arguments);
            client.nQset({
                context:context, 
                fn:arguments.callee.name, 
                args:args
            });     
            return self;   
        };
        
        
        // Sets (no parameters)
        self.show = function show() {
            var args = Array.prototype.slice.call(arguments);
            client.nQset({
                context:context, 
                fn:arguments.callee.name,
                args:args
            });
            return self;
        };
        self.hide = function hide() {
            var args = Array.prototype.slice.call(arguments);
            client.nQset({
                context:context, 
                fn:arguments.callee.name, 
                args:args
            });
            return self;
        };
        self.remove = function remove() {
            var args = Array.prototype.slice.call(arguments);
            client.nQset({
                context:context, 
                fn:arguments.callee.name, 
                args:args
            });
            return self;
        };

        if (module.exports.debug) console.log(conn.nQstream, context );
        return self;
    };

    // Utility functions (no RPC)

    conn.$.parseQuerystring = function (str) {
        return qs.parse(str);
    };
    
    conn.$.stringifyQuerystring = function (obj) {
        return qs.stringify(obj);
    };
        
    this.nodeQuery = function (location, isReady) {
        conn.nQhref = location;
        conn.isReady = isReady;
        var nQurl = url.parse(location);
        conn.nQpath = nQurl.pathname;
        conn.nQstream = '$' + conn.id + ' ' + conn.nQpath;
        if (module.exports.debug) {
            console.log(conn.nQstream, 'routing to ', conn.nQpath);
        }
        conn.emit(conn.nQpath, isReady);
        conn.emit('$', isReady);
    };
    
    conn.on('end', function () {
        if (module.exports.debug) console.log('End nQstream:' + conn.nQstream);
        if (module.exports.debug) console.log('nQpath:' + conn.nQpath);
    });

};

module.exports.entryPath = __dirname + '/browser.js';
var pkg = {
    'entry': module.exports.entryPath,
    'require': ['dnode'],
    'mount': '/nquery.js',
};
var fns = [];

module.exports.middleware = function (client, conn , fn) {
    if (client.res) {
        var req = client,
            res = conn,
            next = fn;
        if (module.exports.debug) console.log('express middleware loaded', req.url);

    } else {
        if (module.exports.debug) console.log('dnode middleware loaded');
        
        fns.forEach(function (fn) {
            fn.call(this, client, conn, $);
        });

    }
};

module.exports.use = function (fn) {
    fns.push(fn);
};

if (!module.exports.debug) pkg.filter = require('uglify-js');
module.exports.bundle = Browserify(pkg);
