$ = $ || null;

var API;
API = {
	Location: "http://osu.hexide.com",

	Beatmap: function(id, success, fail)
	{
		this._SendRequest("/beatmaps/" + id, success, fail);
	},

	Search: function (parameters, success, fail) {
		var search_string = this._BuildSearchString(parameters);
		this._SendRequest(search_string, success, fail)
	},

	_SendRequest: function (request, success, fail) {
		var address = this.Location + request;

		$.ajax({
			url: address,
			success: success,
			dataType: "json"
		});
	},

	_BuildSearchString: function (data) {
		var tmp = [];
		for (var key in data)
		{
			if(!data.hasOwnProperty(key))
				continue;

			tmp.push("maps." + key + ".like." + data[key]);
		}
		return "/search/maps.ranked_id;maps.title/" + tmp.join("/")+ "/";
	}
};

/*
Example:

API.Search(
	{
		name: "nightcore",
		title: "night"
	},
	function(data)
	{
		console.log(data[Math.floor(Math.random() * data.length)]);
	},
	function(){}
);

*/