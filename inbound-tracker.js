function oitCookie() {
    var currentPage, query;
	
	if (jQuery.cookie('leadsource')) {
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

        var leadsource = "";
        var leadsourcedetails = "";		
		
		if (gclid != "") {
           leadsource = "Paid Search";
           leadsourcedetails = "Google Adwords";
        }
		else {
			if (utm_medium != "") {
                if ((utm_medium == "paidsearch") || (utm_medium == "cpc") || (utm_medium == "ppc")) {
                   leadsource = "Paid Search";
                }
                else {
                   leadsource = Correct_String(utm_medium);
                }
				addToCookieSource(leadsource);
            }
            else {
                trackReferrerSource(new URI(document.referrer).domain());
            }
			if (utm_source != "")  {
                leadsourcedetails = Correct_String(utm_source);
				addToCookieSourceDetails(leadsourcedetails)
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

function addToCookieSource (source) {
	var COOKIE_OPTS = { expires: 14, path: '/', domain: 'observeit.com' };
    jQuery.cookie('leadsource', source, COOKIE_OPTS);
}

function addToCookieSourceDetails(details) {
	var COOKIE_OPTS = { expires: 14, path: '/', domain: 'observeit.com' };
    jQuery.cookie('leadsourcedetails', details, COOKIE_OPTS);
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
