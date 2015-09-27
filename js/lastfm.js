
var LASTFM =
{
	_api_key: "1af629fe41790c2d83f3b227b678e4f9",
	_secret: "103d1c39077ddf7faa32f0e8b49a6838",
	token: localStorage.getItem("lastfm_token"),
	_postadress: "http://ws.audioscrobbler.com/2.0/",
	_session: localStorage.getItem("lastfm_session"),
	
	post: function(action,artist, track)
	{
		if(jQuery.isFunction(md5) == false){
			console.error("MD5 doesn't work. Please include md5.js");
			return false;
		}
		
		var method = action
		var session = localStorage.getItem("lastfm_session");
		var timestamp = Math.round(new Date().getTime() / 1000)
		var token = localStorage.getItem("lastfm_token");
		var api_sig = this.getsig("api_key"+this._api_key+"artist"+artist+"method"+method+"sk"+session+"timestamp"+timestamp+"track"+track+this._secret);
		$.post(this._postadress,
			{
				api_key: this._api_key,
				method: method,
				api_sig: api_sig,
				sk: session,
				artist: artist,
				track: track,
				timestamp: timestamp,
				format: "json"

			})
			.done(function( data ) {
				
			});
		
	},
	logout: function()
	{
		localStorage.removeItem('lastfm_session');
		localStorage.removeItem('lastfm_username');
		localStorage.removeItem('lasftm_token');
	},
	isauth: function()
	{
		var username = localStorage.getItem("lastfm_username");
		if(username == null){
			return false;
		}else{
			return true;
		}
	},
	gettoken: function()
	{
		if(window.location.href.indexOf("token=") > -1){
			var token = window.location.href.split( 'token=' );
			var tokenkey = token[1];
			if(tokenkey.length == 32) {
				localStorage.setItem("lastfm_token", tokenkey);
				LASTFM.getsession();
			}
			window.history.pushState("object or string", "Title",location.pathname);
			
		};
	},
	getsession: function(){
		
		var method = "auth.getSession";
		var token = localStorage.getItem("lastfm_token");
		var api_sig = this.getsig("api_key"+this._api_key+"method"+method+"token"+token+this._secret);
		$.post(this._postadress,
			{
				api_key: this._api_key,
				method: method,
				api_sig: api_sig,
				token: token,
				format: "json"

			})
			.done(function( data ) {
				var sessionname = data.session.name;
				var sessionkey = data.session.key;
				
				if(sessionname != null){
					localStorage.setItem("lastfm_username", sessionname);
				}
				if(sessionkey.length == 32) {
					localStorage.setItem("lastfm_session", sessionkey);
				
				}
			
			});
	},
	auth: function(){
		if(this._api_key.length == 32) {
			document.location.href = 'http://www.last.fm/api/auth/?api_key=' + this._api_key;
		}else{
			console.error("last.fm api key is invalid");
		}
	},
	getsig: function() {
		var md5code = "";
		for (var i = 0; i < arguments.length; ++i){
			md5code += arguments[i];
		}
		md5code = md5(md5code);
		return md5code;
	}
	
};
LASTFM.gettoken();
