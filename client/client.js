reCAPTCHA = {
    settings: {
      "timeout": 3000, // Add a default timeout
      "ajax-done": null,
      "ajax-fail": null,
      "captcha-callback": null, // Add callback property after captcha request
      "captcha-expired": null // Add callback for expired captcha
    },

    config: function(settings) {
        return _.extend(this.settings, settings);
    }
};


window.onloadcaptcha = function() {
    $('[name=reCaptcha]').each( function(index){
        $(this).empty();

        grecaptcha.render(this.id, {
                sitekey: reCAPTCHA.settings.publickey,
                theme: reCAPTCHA.settings.theme,
                callback: reCAPTCHA.settings["captcha-callback"],
                "expired-callback": reCAPTCHA.settings["captcha-expired"]
        });
    });
};

Template.reCAPTCHA.rendered = function() {
    console.debug("recaptcha rendered",this);
    $.ajax({
        url: '//www.google.com/recaptcha/api.js?onload=onloadcaptcha&render=explicit',
        dataType: "script",
        // timeout: reCAPTCHA.settings.timeout
        timeout: 500
    }).done(function() {
      reCAPTCHA.settings["ajax-done"](arguments);
    }).fail(reCAPTCHA.settings["ajax-fail"]);
};
