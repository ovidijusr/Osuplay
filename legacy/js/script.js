var audio = null;
var volume = null;
var queue = [];
var timesong = null;
var songtime = null;
var scrobbled = false;
var progress = null;
var currentsong = null;
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}

function playtoggle(){

	if($(".play")[0]){
		play();
	}else{
		pause();
	}
}
function keydown(e) {
	for (var i = keys.length; i--;) {
		if (e.keyCode === keys[i]) {
			preventDefault(e);
			return;
		}
	}
}

function wheel(e) {
	preventDefault(e);
}

function disable_scroll() {
	if (window.addEventListener) {
		window.addEventListener('DOMMouseScroll', wheel, false);
	}
	window.onmousewheel = document.onmousewheel = wheel;
	document.onkeydown = keydown;
}
function enable_scroll() {
	if (window.removeEventListener) {
		window.removeEventListener('DOMMouseScroll', wheel, false);
	}
	window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}
function forward(){
	var nextsong = queue.indexOf(parseInt(location.hash.slice(1)));
	if (queue[nextsong+1] == null){
		playtoggle();
		return false;
	}
	playsong(queue[nextsong+1]);
	window.location.hash = queue[nextsong+1];


}
function backward(){
	var nextsong = queue.indexOf(parseInt(location.hash.slice(1)));
	if (queue[nextsong-1] == null){
		playtoggle();
		return false;
	}
	playsong(queue[nextsong-1]);
	window.location.hash = queue[nextsong-1];


}

function resultobject(id, track)
{
	return '<div class="col-sm-2 col-xs-6">' +
			'<div class="thumbnail">' +
				'<div class="playthumb" data-id="' + id + '" style="background:url(http://osu.hexide.com/beatmaps/' + id + '/content/image/custom/165x165/crop); background-size:contain">' +
					'<div class="hoverfade"><span class="glyphicon glyphicon-play thumbplay"></span></div>' +
				'</div>' +
				'<div class="caption">' +
					'<h4>' + track + '</h4>' +
				'</div>' +

			'</div>' +
		'</div>';
}

function pause(){
	audio.pause();

	$(".big").addClass("glyphicon-play play").removeClass("glyphicon-pause pause");
}
function thumbb(id,text){
	thumb = "<div class='playthumb' data-id='"+id+"' style='background:url(http://osu.hexide.com/beatmaps/"+id+"/content/image/custom/256x256/crop)'background-size:contain;>"+text+"</div>";
	return thumb;
}
function play(){
	if ($(".player").attr("data-songid") == 0){
		return false;
	}
	audio.play();
	$(".big").addClass("glyphicon-pause pause").removeClass("glyphicon-play play");
}
function coverview(){

}
function volumescroll(way){
	if(way == "up"){
		upval = 0.02;
	}else{
		upval = -0.02;
	}
	var vol = $("#volume").val();
	var vol = (parseFloat(vol) + upval);
	if(vol > 1){
		vol = 1;
	}
	if(vol < 0){
		vol = 0;
	}
	$(audio).prop('volume', vol);
	$("#volume").val(vol);
	LS.Set("vol", vol);
}

function loadbgid(id){ // anti chrome background derp
	$(".preload").remove();
	imgurl = "http://osu.hexide.com/beatmaps/" + id + "/content/image/full";
	$("body").append("<img class='preload' width = '1px' style='opacity:0;' src='"+imgurl+"'>");
	$( ".preload" ).load(function() {
		$("body").css("background-image", "url('"+imgurl+"')").load(function () {
			var y = $(window).scrollTop();
			var x = 1;
			$(window).scrollTop(y+x);
			$(window).scrollTop(y-x);

		});
	});

}
function search(text){
	if(text.length < 3){
		alert('too short');
		return false;
	}
	$(".search").text("");
	API.Search(
		{
			name: text,
			title: text
		},
		function(data)
		{

			var i = 0;
			$.each(data, function() {
				queue.push(this.ranked_id);
				$(".search").append(resultobject(this.ranked_id,this.title))
				i++;
			});
		},
		function(){}
	);
}
function playsong(id)
{

	if(isNaN(id)){
		return false;
	}
	currentsong = id;

	API.Beatmap(id, function(data){
		$(".songname").text(data.title);
		document.title = (data.title);
		if(LASTFM.isauth() == true){
			var artistsong = data.title;
			var splitartist = artistsong.split(" - ");
			LASTFM.post("track.updateNowPlaying",splitartist[0],splitartist[1]);
		}
	}, function(){
		playsong(parseInt(id) + parseInt(1));
		return false;
	});

	$(".big").
		removeClass("glyphicon-play play").
		addClass("glyphicon-pause pause");

	$(".songname").text("Osuplay player ^^");

	$(audio).
		attr("src", "http://osu.hexide.com/beatmaps/" + id + "/content/mp3/full").
		attr("data-songid", id).
		prop('volume', volume.val());

	audio.pause();
	audio.load();
	audio.play();

	$(".jumbotron").css("background-color","rgba(93, 156, 236, 0.63)");
	loadbgid(id);


}
function scrobblecheck(){
	if(currentsong != null) {
		if (currentsong != timesong) {
			songtime = 0;
			timesong = currentsong;
			scrobbled = false;
		} else {
			if (scrobbled == false) {
				songtime += 0.5;
				progress = (songtime / audio.duration);

				if (progress > 0.4 && songtime > 30) {
					scrobbled = true;
					var artistsong = $(".songname").text();
					var splitartist = artistsong.split(" - ");
					LASTFM.post("track.scrobble",splitartist[0],splitartist[1]);
					LASTFM.post("track.updateNowPlaying",splitartist[0],splitartist[1]);
				}
			}
		}

	}
}
$(function() {
	if(LASTFM.isauth()){
		$(".lastfm").attr("href","#lastfm2");
		$(".songname").text("Hey "+ localStorage.getItem("lastfm_username")+", how are you doing?");
	}
	setInterval(function() {
		if(LASTFM.isauth()) {
			scrobblecheck();
		}

		if(audio.currentTime === audio.duration){
			forward();
		}
		if($("#timetrack").is(":focus") == false) {
		$("#timetrack").val(audio.currentTime);
		$("#timetrack").attr("max",audio.duration);

		}
	},500);
	audio = $(".player:first")[0];
	volume = $("#volume");

	volume.val(LS.Get("vol") || 0.5);
	$(audio).prop('volume', volume.val());

	$("#timetrack").change(function(){
		var time = $(this).val();
		audio.currentTime = time;
		$(this).blur();
	});

	volume.change(function(){
		var vol = $(this).val();
		$(audio).prop('volume', vol);
		LS.Set("vol", vol);
	});

	if(location.hash.slice(1) != ""){
		playsong(location.hash.slice(1));
	}
	$(window).on('hashchange',function(){
		playsong(location.hash.slice(1));
	});
	$( ".controlbar" ).hover(
		function() {
			disable_scroll();
		}, function() {
			enable_scroll();
		}
	);
	$( "body" ).on( "click", ".playthumb", function() {

		window.location.hash = $(this).data("id");
		maindiv = $(this).parent;
	});
	$(window).bind('mousewheel', function(event) {
		if (event.originalEvent.wheelDelta >= 0) {
			if($(".controlbar").is(":hover")) {
				document.ontouchmove = function(e){ e.preventDefault(); }

				volumescroll("up");
			}

		}
		else {
			if($(".controlbar").is(":hover")) {
				document.ontouchmove = function(e){ e.preventDefault(); }

				volumescroll("down");
			}
		}
	});


	$('.flat-textbox').bind("enterKey",function(e){
		search($(".flat-textbox").val());

	});
	window.onkeydown = function (event) {
		if (event.keyCode === 32) {
			if($(".flat-textbox").is(":focus") == false){
				event.preventDefault();
				playtoggle();

			}

		}
	};

	$('.flat-textbox').keyup(function(e){
		if(e.keyCode == 13)
		{
			$(this).trigger("enterKey");
		}
	});
	$('.playsong').on('click', function() {

		playsong($(this).data("songid"));
	});
	$('.lastfmlogin').on('click', function() {
		LASTFM.auth();
	});
	$('.playthumb').on('click', function() {
		alert("hi");
	});
	$('body').on('click', '.play', function() {
		play();
	});
	$('body').on('click', '.pause', function() {
		pause();
	});
	$('body').on('click', '.forward', function() {
		forward();
	});
	$('body').on('click', '.backward', function() {
		backward();
	});
});