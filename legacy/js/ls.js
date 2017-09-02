var LS =
{
	Set: function(key, value)
	{
		localStorage.setItem(key, value);
	},

	Get: function(key)
	{
		return localStorage.getItem(key);
	}
};