* Added: Timeout for google captcha queries
* Added: configurable callbacks

var captchaCallback = function() {
  console.debug("render callback");
};

var captchaCallbackExpired = function() {
  console.debug("captcha expired");
};

reCAPTCHA.config({
  "captcha-callback":captchaCallback,
  "captcha-expired": captchaCallbackExpired,
  "ajax-fail": function(jqxhr, settings, exception) {
    console.debug("ajax loading failed.");
  }
});
