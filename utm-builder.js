var t = "?utm_medium=social&utm_source=twitter";
var f = "?utm_medium=social&utm_source=facebook";
var l = "?utm_medium=social&utm_source=linkedin";
var g = "?utm_medium=social&utm_source=googleplus";

function combobreak() {
	var inputhere = document.getElementById('inputhere').value;
	if(! inputhere) {
		window.alert("Please enter a URL")
	}
	else {
		var twitter = inputhere.concat(t);
		var facebook = inputhere.concat(f);
		var gplus = inputhere.concat(g);
		var linkedin = inputhere.concat(l);
		document.getElementById('twitteroutput').value = twitter;
		document.getElementById('facebookoutput').value = facebook;
		document.getElementById('linkedinoutput').value = linkedin;
		document.getElementById('gplusoutput').value = gplus;
	}
}

function superpants() {
	var inputhere = document.getElementById('inputhere').value;
	if(! inputhere) {
		window.alert("Please enter a URL")
	}
	else {
		var source = document.getElementById('inputsource').value;
		var detail = document.getElementById('inputdetail').value;
		if(! detail) {
			var customoutput = inputhere.concat('?utm_medium=').concat(source);
		}
		else {
			var customoutput = inputhere.concat('?utm_medium=').concat(source).concat('&utm_source=').concat(detail);
		}
		document.getElementById('customoutput').value = customoutput;
	}
}

function oneclickshare() {
	var content = document.getElementById('sharecontent').value;
	var headline = document.getElementById('shareheadline').value;
	var inputhere = document.getElementById('inputhere').value;
	var twittershare = 'https://twitter.com/intent/tweet?text='.concat(content).concat('+').concat(inputhere).concat('?utm_medium=social&utm_source=twitter');
	var linkedinshare = 'https://www.linkedin.com/shareArticle?summary='.concat(content).concat('&title=').concat(headline).concat('&url=').concat(inputhere).concat('?utm_medium=social&utm_source=linkedin');
	var googleplusshare = 'https://plus.google.com/share?url='.concat(inputhere).concat('?utm_medium=social&utm_source=googleplus');
	var facebookshare = 'https://www.facebook.com/dialog/feed?app_id=1482109962069192&link='.concat(inputhere).concat('%253Futm_medium=social%2526utm_source=facebook').concat('&name=').concat(headline).concat('&description=').concat(content);
	document.getElementById('shareontwitter').text = 'Share on Twitter';
	document.getElementById('shareontwitter').href = twittershare;
	document.getElementById('shareonlinkedin').text = 'Share on LinkedIn';
	document.getElementById('shareonlinkedin').href = linkedinshare;
	document.getElementById('shareonplus').text = 'Share on Google Plus';
	document.getElementById('shareonplus').href = googleplusshare;
	document.getElementById('shareonfacebook').text = 'Share on Facebook';
	document.getElementById('shareonfacebook').href = facebookshare;
}

function clearall() {
	document.getElementById('twitteroutput').value = null;
	document.getElementById('facebookoutput').value = null;
	document.getElementById('linkedinoutput').value = null;
	document.getElementById('gplusoutput').value = null;
	document.getElementById('inputdetail').value = null;
	document.getElementById('customoutput').value = null;
	document.getElementById('inputhere').value = null;
	document.getElementById('shareonplus').text = '';
	document.getElementById('shareonplus').href = null;
	document.getElementById('shareonfacebook').text = '';
	document.getElementById('shareonfacebook').href = null;
	document.getElementById('shareontwitter').text = '';
	document.getElementById('shareontwitter').href = null;
	document.getElementById('shareonlinkedin').text = '';
	document.getElementById('shareonlinkedin').href = null;
	document.getElementById('sharecontent').value = null;
	document.getElementById('shareheadline').value = null;
}