reCAPTCHA = {
    settings: {
      timeout: 3000 // Add a default timeout
    },

    config: function(settings) {
        return _.extend(this.settings, settings);
    },

    verifyCaptcha: function(clientIP, response) {
        var captcha_data = {
            privatekey: this.settings.privatekey,
            remoteip: clientIP,
            response: response
        };

        var serialized_captcha_data =
            'secret=' + captcha_data.privatekey +
            '&remoteip=' + captcha_data.remoteip +
            '&response=' + captcha_data.response;

        var captchaVerificationResult = null;
        // Add default timeout
        var timeout = this.settings.timeout || 3000;

        try {
            captchaVerificationResult = HTTP.call("POST", "https://www.google.com/recaptcha/api/siteverify", {
                content: serialized_captcha_data.toString('utf8'),
                timeout: timeout,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': serialized_captcha_data.length
                }
            });
        } catch (e) {
            console.log(e);
            return {
                'success': false,
                'error-codes': 'reCaptcha service not available'
            };
        }

        return captchaVerificationResult;
    }
}
