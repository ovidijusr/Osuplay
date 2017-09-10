const API = {
  location: "http://osu.hexide.com",


  search: (parameters) => {
    return new Promise ((resolve, reject) => {
      const searchString = API._buildSearchString(parameters);
      API._sendRequest(searchString, resolve);
    })
  },

  getSong: (id) => {
    return `${API.location}/beatmaps/${id}/content/mp3/full`;
  },

  getImage: (id,x,y) => {
    return `${API.location}/beatmaps/${id}/content/image/custom/${x}x${y}/crop`;
  },

  _sendRequest: (request, resolve) => {
    const adress = API.location + request;
    fetch(adress)

      .then((response) => {
        return response.json();
      })

      .then((json) => {
        resolve(json);
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