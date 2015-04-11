<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>UTM-Builder, Creating Easy, Repeatable Link Tracking</title>
    <script type="text/javascript" src="/js/utm-builder.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
</head>

<body>
<div class="container">
	<h1>Druby's UTM Code Generator</h1>
	<div class="row">
        <div class="col-md-6 col-lg-6 col-xs-12">
            <h2>Enter the URL you wish to share:</h2>
            <form><input type="text" class="form-control" name="inputhere" id="inputhere"></form>
            <p>
                <center><i class="fa fa-area-chart fa-4x"></i><br /></center>
            </p>

            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h2 class="panel-title">
                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                <i class="fa fa-chevron-circle-right"></i> Standard Social Links
                            </a>
                        </h2>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <form>
                                <input type="button" value="Get social links" onclick="combobreak();" class="btn btn-primary"><br /><br />
                                Twitter Link:<br /><input type="text" class="form-control" id="twitteroutput" size="70"><br />
                                Facebook Link: <br /><input type="text" class="form-control" id="facebookoutput" size="70"><br />
                                Linkedin Link: <br /><input type="text" class="form-control" id="linkedinoutput" size="70"><br />
                                Google Plus Link: <br /><input type="text" class="form-control" id="gplusoutput" size="70"><br />
                            </form>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h2 class="panel-title">
                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                <i class="fa fa-chevron-circle-right"></i> Custom Links
                            </a>
                        </h2>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse">
                        <div class="panel-body">
                            Pick a lead source (utm_medium):<br />
                            <select name="inputsource" class="form-control" id="inputsource">
                                <option value=null>None</option>
                                <option value="advertising">Advertising (banner, direct)</option>
                                <option value="paid-search">SEM (paid search)</option>
                                <option value="social">Social</option>
                                <option value="referral">Referral</option>
				                <option value="partner">Partner</option>
                            </select>
                            <form>
                                Enter a Lead Source Detail (utm_source):<br /><br />
                                <input type="text" class="form-control" name="inputdetail" id="inputdetail" size="70"><br /><br />
                                <input type="button" value="Get custom link" onclick="superpants();" class="btn btn-primary"><br /><br />
                                Custom Link:<br />
                                <input type="text" class="form-control" name="customoutput" id="customoutput" size="70"><br />
                            </form>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h2 class="panel-title">
                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                <i class="fa fa-chevron-circle-right"></i> IN PROCESS: Shareable Links
                            </a>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse">
                        <div class="panel-body">
                            <form role="form">
				                Enter your Headline (for Facebook, G+ and LinkedIn):<br /><br />
                                <input type="text" class="form-control" name="shareheadline" id="shareheadline" size="70"><br />
                                Enter your body text for Twitter, Facebook, G+ and LinkedIn:<br />
                                <textarea class="form-control" name="sharecontent" id="sharecontent"></textarea><br /><br />
                                <input type="button" value="Get sharable links" onclick="oneclickshare();" class="btn btn-primary"><br /><br />
                                <div class="row">
                                    <div class="col-md-6 col-xs-6">
                                        <i class="fa fa-twitter"></i> Twitter:<br />
                                        <i class="fa fa-facebook"></i> Facebook (CURRENTLY BROKEN):<br />
                                        <i class="fa fa-linkedin"></i> LinkedIn:<br />
                                        <i class="fa fa-google-plus"></i> Google Plus:<br />
                                    </div>
                                    <div class="col-md-6 col-xs-6">
                                        <a id="shareontwitter" target="_blank"></a><br />
                                        <a id="shareonfacebook" target="_blank"></a><br />
                                        <a id="shareonlinkedin" target="_blank"></a><br />
                                        <a id="shareonplus" target="_blank"></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xs-12">
            <h2>Want More?</h2>
            <p>Coming soon: Personalized, saved links, plus inbound referral tracking.</p>
            <p>Coming now: Git integration</p>
        </div>
    </div>
    <br />
    <center><input type="button" value="Clear all fields" onclick="clearall();" class="btn btn-primary"></center><br /><br />
    <br />
    <p><center>&copy; 2015, <a href="http://www.danielruby.com">UTM-Builder.com</a></center></p>
</div>
</body>
<footer>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-18600380-2', 'auto');
  ga('send', 'pageview');

</script>
</footer>
</html>>