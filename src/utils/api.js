const API = {
  location: "http://osu.hexide.com",


  search: (parameters) => {
    const searchString = API._buildSearchString(parameters);
    API._sendRequest(searchString);
  },
  _sendRequest: (request) => {
    const adress = API.location + request;
    fetch(adress)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      })
  },

  _buildSearchString: (data) => {
		var tmp = [];
		for (var key in data)
		{
			if(!data.hasOwnProperty(key))
				continue;

			tmp.push("maps." + key + ".like." + data[key]);
		}
		return "/search/maps.ranked_id;maps.title/" + tmp.join("/")+ "/";
	}
}

export default API;