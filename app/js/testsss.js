$(document).ready(function() {

    function isEmail(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email);
    }

    function isValidPhoneNumber(phoneNumber) {
        var regex = /^\d+$/;
        if (regex.test(phoneNumber)) {
            if (phoneNumber.indexOf('0') == 0) {
                return phoneNumber.length == 10 || phoneNumber.length == 11;
            } else {
                return phoneNumber.length == 9 || phoneNumber.length == 10;
            }
        }
        return false;
    }

    function isDate(dtValue) {
        var dtRegex = new RegExp(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/);
        return dtRegex.test(dtValue);
    }


    /**
     * validate form
     */
    var el = $("#errormess");
    var validator = new FormValidator('testsss', [{
        name: 'subscription[customer_attributes][email]',
        display: 'Email',
        rules: 'required|valid_email|callback_check_email'
    }, {
        name: 'subscription[customer_attributes][phone]',
        display: 'Điện thoại',
        rules: 'required|is_natural|callback_check_phone_number'
    }, {
        name: 'subscription[customer_attributes][full_name]',
        display: 'Họ tên',
        rules: 'required'
    }, {
        name: 'subscription[customer_attributes][gender]',
        display: 'Giới tính',
        rules: 'required'
    }, {
        name: 'subscription[customer_attributes][birthday]',
        display: 'Sinh nhật',
        rules: 'required|callback_check_date_format'
    }], function(errors, event) {
        if (errors.length > 0) {
            if (errors.length > 0) {
                var errorString = '';

                for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
                    errorString += errors[i].message + '<br />';
                }

                el.html(errorString);
            }
        }
    });
    validator.setMessage('required', '%s không được để trống!');
    validator.setMessage('is_natural', '%s chỉ được nhập số!');

    /**
     * Custom check email
     */
    validator.registerCallback('check_email', function(value) {
        if (isEmail(value)) {
            return true;
        }
        return false;
    }).setMessage('check_email', '%s sai định dạng!');

    /**
     * Custom check phone number
     */
    validator.registerCallback('check_phone_number', function(value) {
        if (isValidPhoneNumber(value)) {
            return true;
        }
        return false;
    }).setMessage('check_phone_number', '%s số điện thoại phải từ 10 đến 11 số!');

    /**
     * Custom check date format
     */
    validator.registerCallback('check_date_format', function(value) {
        if (isDate(value)) {
            return true;
        }
        return false;
    }).setMessage('check_date_format', '%s định dạng dd/mm/yyyy or dd-mm-yyyy!'); 
});
