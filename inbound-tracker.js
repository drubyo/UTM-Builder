function oitCookie() {
    var currentPage, query;
	
	if (jQuery.cookie('medium')) {
	}
	else { 
		var utm_medium = "";
        var utm_source = "";
		var utm_campaign = "";
        var gclid = "";

        currentPage = new URI();
		
        if (currentPage.hasQuery("utm_medium")) {
            query = currentPage.query(true);
			utm_medium = query["utm_medium"];
		}	
        if (currentPage.hasQuery("utm_source")) {
            query = currentPage.query(true);
			utm_source = query["utm_source"];
		}	
		if (currentPage.hasQuery("utm_campaign")) {
            query = currentPage.query(true);
			utm_campaign = query["utm_campaign"];
		}	
        if (currentPage.hasQuery("gclid")) {
            query = currentPage.query(true);
			gclid = query["gclid"];
		}		

        var medium = "";
        var source = "";		
		
		if (gclid != "") {
           medium = "Paid Search";
           source = "Google Adwords";
        }
		else {
			if (utm_medium != "") {
                if (utm_medium == "paidsearch") {
                   medium = "Paid Search";
                }
                else {
                   medium = Correct_String(utm_medium);
                }
				addToCookieSource(medium);
            }
            else {
                trackReferrerSource(new URI(document.referrer).domain());
            }
			if (utm_source != "")  {
                source = Correct_String(utm_source);
				addToCookieSourceDetails(source)
            }
            else {
                trackReferrerSourceDetails(new URI(document.referrer).domain());
            }

		}		
	}	
} 

function Correct_String(str) {
    str = str.replace(/-/g, ' ');
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

/* Make sure you replace utm-builder.com with your own domain */
function addToCookieSource (source) {
	var COOKIE_OPTS = { expires: 14, path: '/', domain: 'utm-builder.com' };
    jQuery.cookie('medium', source, COOKIE_OPTS);
}

/* Make sure you replace utm-builder.com with your own domain */
function addToCookieSourceDetails(details) {
	var COOKIE_OPTS = { expires: 14, path: '/', domain: 'utm-builder.com' };
    jQuery.cookie('source', details, COOKIE_OPTS);
}	


function trackReferrerSource(referringDomain) {
    console.log(referringDomain);
    if (jQuery.inArray(referringDomain, ['google.com', 'bing.com', 'yahoo.com']) !==-1) {
        addToCookieSource('Organic Search');
    } else if (jQuery.inArray(referringDomain, ['twitter.com', 'facebook.com', 'youtube.com']) !==-1) {
        addToCookieSource('Social');
    } else if (referringDomain === 'doubleclick.net') {
        addToCookieSource('Advertising');
    } else {
        addToCookieSource('Direct');
    }
}


function trackReferrerSourceDetails(referringDomain) {
    if (jQuery.inArray(referringDomain, ['google.com', 'bing.com', 'yahoo.com']) !==-1) {
		addToCookieSourceDetails(referringDomain);
    } else if (jQuery.inArray(referringDomain, ['twitter.com', 'facebook.com', 'youtube.com']) !==-1) {
		addToCookieSourceDetails(referringDomain);		
    } else if (referringDomain === 'doubleclick.net') {
		addToCookieSourceDetails('Google Banner Ads');			
    } else {
		addToCookieSourceDetails('Direct');		
    }
}
