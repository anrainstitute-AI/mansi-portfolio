export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["README.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.qg30OzVM.js",app:"_app/immutable/entry/app.B-CmP68o.js",imports:["_app/immutable/entry/start.qg30OzVM.js","_app/immutable/chunks/DfmWi0Gy.js","_app/immutable/chunks/VTP6iRTi.js","_app/immutable/chunks/nD_3xWkM.js","_app/immutable/entry/app.B-CmP68o.js","_app/immutable/chunks/DfmWi0Gy.js","_app/immutable/chunks/CNlbtjGS.js","_app/immutable/chunks/Bdeke2d9.js","_app/immutable/chunks/nD_3xWkM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
