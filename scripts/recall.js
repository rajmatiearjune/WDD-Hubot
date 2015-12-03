//  Description:
//    Total channel recall for Hubot
//
//  Dependencies:
//    none
//
//  Configuration:
//    None
//
//  Commands:
//    hubot recall [number of messages to recall]
//
//  Author:
//    Chris Chapman

module.exports = function(robot) {  // export the function as a module


    robot.hear(/@res (.*)/i, function(res) {
        var message = res.match[1];  // stores into message the string after "@hubot"
          //  console.log(robot);
            return res.send(robot);  // send cleverbot's response

    });
};

//
// Robot {
//   name: 'bot',
//   events:
//    EventEmitter {
//      domain: null,
//      _events: { running: [Function], error: [Function] },
//      _eventsCount: 2,
//      _maxListeners: undefined },
//   brain:
//    Brain {
//      data: { users: [Object], _private: {} },
//      autoSave: false,
//      saveInterval:
//       { _called: false,
//         _idleTimeout: 5000,
//         _idlePrev: [Object],
//         _idleNext: [Object],
//         _idleStart: 537,
//         _onTimeout: [Function: wrapper],
//         _repeat: [Function] },
//      _events: { save: [Function], close: [Function] },
//      _eventsCount: 2 },
//   alias: false,
//   adapter:
//    Shell {
//      robot: [Circular],
//      _events: {},
//      _eventsCount: 0,
//      cli:
//       EventEmitter {
//         stream: [Object],
//         domain: null,
//         _events: [Object],
//         _eventsCount: 2,
//         _maxListeners: undefined,
//         commands: [Object],
//         modes: [],
//         _prompt: 'bot> ',
//         _nextTick: [Function],
//         mask: null,
//         fn: [Function] } },
//   Response: [Function: Response],
//   commands:
//    [ '@hubot <your conversation with hubot / cleverbot>',
//      'hubot recall [number of messages to recall]',
//      'hubot help - Displays all of the help commands that Hubot knows about.',
//      'hubot help <query> - Displays all help commands that match <query>.' ],
//   listeners:
//    [ TextListener {
//        robot: [Circular],
//        regex: /@hubot (.*)/i,
//        options: [Object],
//        callback: [Function],
//        matcher: [Function] },
//      TextListener {
//        robot: [Circular],
//        regex: /@res (.*)/i,
//        options: [Object],
//        callback: [Function],
//        matcher: [Function] },
//      TextListener {
//        robot: [Circular],
//        regex: /^\s*[@]?bot[:,]?\s*(?:help(?:\s+(.*))?$)/i,
//        options: [Object],
//        callback: [Function],
//        matcher: [Function] } ],
//   middleware:
//    { listener: Middleware { robot: [Circular], stack: [] },
//      response: Middleware { robot: [Circular], stack: [] },
//      receive: Middleware { robot: [Circular], stack: [] } },
//   logger:
//    EventEmitter {
//      level: 6,
//      stream:
//       WriteStream {
//         _connecting: false,
//         _hadError: false,
//         _handle: [Object],
//         _parent: null,
//         _host: null,
//         _readableState: [Object],
//         readable: false,
//         domain: null,
//         _events: [Object],
//         _eventsCount: 4,
//         _maxListeners: undefined,
//         _writableState: [Object],
//         writable: true,
//         allowHalfOpen: false,
//         destroyed: false,
//         bytesRead: 0,
//         _bytesDispatched: 222,
//         _sockname: null,
//         _writev: null,
//         _pendingData: null,
//         _pendingEncoding: '',
//         columns: 72,
//         rows: 18,
//         _type: 'tty',
//         fd: 1,
//         _isStdio: true,
//         destroySoon: [Function],
//         destroy: [Function] } },
//   pingIntervalId: null,
//   globalHttpOptions: {},
//   version: '2.17.0',
//   server:
//    Server {
//      domain: null,
//      _events:
//       { request: [Object],
//         connection: [Function: connectionListener],
//         clientError: [Function] },
//      _eventsCount: 3,
//      _maxListeners: undefined,
//      _connections: 0,
//      _handle:
//       TCP {
//         _externalStream: {},
//         fd: 20,
//         reading: false,
//         owner: [Circular],
//         onread: null,
//         onconnection: [Function: onconnection],
//         writeQueueSize: 0 },
//      _usingSlaves: false,
//      _slaves: [],
//      _unref: false,
//      allowHalfOpen: true,
//      pauseOnConnect: false,
//      httpAllowHalfOpen: false,
//      timeout: 120000,
//      _pendingResponseData: 0,
//      _connectionKey: '4:0.0.0.0:8080' },
//   router:
//    { [Function: app]
//      use: [Function],
//      handle: [Function],
//      listen: [Function],
//      domain: undefined,
//      _events: { mount: [Function] },
//      _maxListeners: undefined,
//      setMaxListeners: [Function: setMaxListeners],
//      getMaxListeners: [Function: getMaxListeners],
//      emit: [Function: emit],
//      addListener: [Function: addListener],
//      on: [Function: addListener],
//      once: [Function: once],
//      removeListener: [Function: removeListener],
//      removeAllListeners: [Function: removeAllListeners],
//      listeners: [Function: listeners],
//      listenerCount: [Function: listenerCount],
//      route: '/',
//      stack:
//       [ [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object] ],
//      init: [Function],
//      defaultConfiguration: [Function],
//      engine: [Function],
//      param: [Function],
//      set: [Function],
//      path: [Function],
//      enabled: [Function],
//      disabled: [Function],
//      enable: [Function],
//      disable: [Function],
//      configure: [Function],
//      acl: [Function],
//      bind: [Function],
//      checkout: [Function],
//      connect: [Function],
//      copy: [Function],
//      delete: [Function],
//      get: [Function],
//      head: [Function],
//      link: [Function],
//      lock: [Function],
//      'm-search': [Function],
//      merge: [Function],
//      mkactivity: [Function],
//      mkcalendar: [Function],
//      mkcol: [Function],
//      move: [Function],
//      notify: [Function],
//      options: [Function],
//      patch: [Function],
//      post: [Function],
//      propfind: [Function],
//      proppatch: [Function],
//      purge: [Function],
//      put: [Function],
//      rebind: [Function],
//      report: [Function],
//      search: [Function],
//      subscribe: [Function],
//      trace: [Function],
//      unbind: [Function],
//      unlink: [Function],
//      unlock: [Function],
//      unsubscribe: [Function],
//      all: [Function],
//      del: [Function],
//      render: [Function],
//      request: IncomingMessage { app: [Circular] },
//      response: ServerResponse { app: [Circular] },
//      cache: {},
//      settings:
//       { 'x-powered-by': true,
//         etag: 'weak',
//         'etag fn': [Function: wetag],
//         env: 'development',
//         'subdomain offset': 2,
//         'trust proxy': false,
//         'trust proxy fn': [Function: trustNone],
//         view: [Function: View],
//         views: '/Users/chapman/_projectbox/FullSail/hubot/views',
//         'jsonp callback name': 'callback',
//         'json spaces': 2 },
//      engines: {},
//      _eventsCount: 1,
//      _router:
//       Router {
//         map: [Object],
//         params: {},
//         _params: [],
//         caseSensitive: false,
//         strict: false,
//         middleware: [Function: router] },
//      routes: { get: [Object] },
//      router: [Getter],
//      locals: { [Function: locals] settings: [Object] },
//      _usedRouter: true },
//   adapterName: 'shell',
//   errorHandlers: [],
//   onUncaughtException: [Function] }
