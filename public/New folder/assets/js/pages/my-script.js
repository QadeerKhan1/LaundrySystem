$(() => {
    setInputMask();
})
const setInputMask = () => {
    var selectors = $("input[data-inputmask]");
    selectors.each((i, element) => {
        var mask = $(element).data().Inputmask;

        var im = new Inputmask(mask, {

            "clearIncomplete": true
        });
        im.mask(element);
    })
}
$(document).scroll(function () {
    stickHeader();
});
$(window).resize(function () {
});
function stickHeader() {
    var navbarElementTop = $('nav.header .header-top').height();
    if ($('nav.header .header-top').hasClass('stuck')) {
        $('body').css('padding-top', navbarElementTop);
    }
    if (window.innerWidth < 992)
        $('nav.header .header-top').removeClass('stuck');
    else if ($(window).scrollTop() > navbarElementTop)
        $('nav.header .header-top').addClass('stuck');

}
//$(() => {
//    DisplaySessionTimeout();
//})
function DisplaySessionTimeout() {
    //assigning minutes left to session timeout to Label
    $(".SessionTimeout").text(sessionTimeout)
    sessionTimeout = sessionTimeout - 1;
    sessionTimer = window.setTimeout("DisplaySessionTimeout()", 1000);
   // debugger;
    if (sessionTimeout > 0) {
        if (!$("#session-timeout-modal").hasClass("show")) {
            $("#session-timeout-modal").modal();
        }
    } else if (sessionTimeout < 1) {
        $("#session-timeout-modal").modal("hide");
        window.location = "/Account/LogOff";
    }
}
function retainSession() {

    $.ajax({
        url: "/Account/RetainSession",
        type: "Post",
        success: function (res) {
            if (res.success) {
                $("#session-timeout-modal").modal("hide");

                 clearTimeout(sessionTimer);
                sessionTimeout = sessionTimeoutVaue;

            }
        }
    });
}

function appendChangePasswordSubmit() {
    var $form = $('#changePasswordForm');
    $form.off("submit");
    changePasswordFormValidator = $form.validate({
        rules: {
            NewPassword: {
                required: true,
                minlength: 8
            },
            OldPassword: {
                required: true
            },
            ConfirmPassword: {
                required: true,
                equalTo: "#changePasswordForm [name=NewPassword]"
            }
        }, messages: {
            NewPassword: {
                required: "Please enter a new password"
            },
            OldPassword: {
                required: "Please enter an old password"
            },
            ConfirmPassword: {
                required: "Please enter confirm password",
                equalTo: "Do not match with new password"
            }
        },
    });

    $form.submit(function (data, event) {

        var saveBtn = $form.find("[type=submit]");



        var _buttonSpinnerClasses = 'spinner spinner-right spinner-white pr-15';
        var data = $form.serialize();
        var isFormValide = $form.valid();
        if (isFormValide) {
            KTUtil.btnWait(saveBtn[0], _buttonSpinnerClasses, "Please wait");

            $.ajax({
                url: '/Account/UpdateNewPassword',
                type: "Post",
                data: data,
                success: function (res) {
                    debugger
                    if (res.success) {
                        Swal.fire(
                            "Password Updated!",
                            res.message,
                            "success"
                        );

                        $form.parents(".modal").modal('hide');
                        KTUtil.btnRelease(saveBtn[0]);
                    } else {
                        $(".message-area").text(res.message).parents(".alert").fadeIn();

                        KTUtil.btnRelease(saveBtn[0]);
                    }
                }

            });

        }
        return false;

    });
}

$(document).on('click', '#changePasswordModal [type=reset]', function (e) {
    clearChangePasswordForm();
});

$(document).on('hidden.bs.modal', '#changePasswordModal', function (e) {
    clearChangePasswordForm();
});
function checkStrength(password) {
    var strength = 0;


    //If password contains both lower and uppercase characters, increase strength value.
    if (password.match(/(.*[A-Z])/)) {
        strength += 1;
        $('.upper-case').addClass('text-success');
        resetElement('.upper-case i', 'fa fa-check text-success');
        $('#popover-password-top').addClass('hide');
    } else {
        $('.upper-case').removeClass('text-success');
        resetElement('.upper-case i', 'fa fa-exclamation-circle text-warning');
        $('#popover-password-top').removeClass('hide');
    }

    if (password.match(/(.*[a-z])/)) {
        strength += 1;
        $('.lower-case').addClass('text-success');
        resetElement('.lower-case i', 'fa fa-check text-success');
        $('#popover-password-top').addClass('hide');
    } else {
        $('.lower-case').removeClass('text-success');
        resetElement('.lower-case i', 'fa fa-exclamation-circle text-warning');
        $('#popover-password-top').removeClass('hide');
    }
    //If it has numbers and characters, increase strength value.
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
        strength += 1;
        $('.one-number').addClass('text-success');
        resetElement('.one-number i', 'fa fa-check text-success');
        $('#popover-password-top').addClass('hide');

    } else {
        $('.one-number').removeClass('text-success');
        resetElement('.one-number i', 'fa fa-exclamation-circle text-warning');
        $('#popover-password-top').removeClass('hide');
    }

    //If it has one special character, increase strength value.
    if (password.match(/([!,%,&,@@,#,$,^,*,?,_,~])/)) {
        strength += 1;
        $('.one-special-char').addClass('text-success');
        resetElement('.one-special-char i', 'fa fa-check text-success');
        $('#popover-password-top').addClass('hide');

    } else {
        $('.one-special-char').removeClass('text-success');
        resetElement('.one-special-char i', 'fa fa-exclamation-circle text-warning');
        $('#popover-password-top').removeClass('hide');
    }

    if (password.length > 7) {
        strength += 1;
        $('.eight-character').addClass('text-success');
        resetElement('.eight-character i', 'fa fa-check text-success');
        $('#popover-password-top').addClass('hide');
    } else {
        $('.eight-character').removeClass('text-success');
        resetElement('.eight-character i', 'fa fa-exclamation-circle text-warning');
        $('#popover-password-top').removeClass('hide');
    }




    // If value is less than 2

    if (strength == 0) {
        resetElement('#password-strength', '');
        $('#password-strength').css('width', '0%');

        resetElement('#result', '');
        $('#result').text('');

    }
    else if (strength == 1) {

        resetElement('#password-strength', 'progress-bar bg-danger');
        $('#password-strength').css('width', '20%');

        resetElement('#result', 'text-danger');
        $('#result').text('Very Weak');

    } else if (strength == 2) {
        resetElement('#password-strength', 'progress-bar bg-danger');
        $('#password-strength').css('width', '40%');

        resetElement('#result', 'text-danger');
        $('#result').text('Weak');
        return 'Weak'
    } else if (strength == 3) {
        resetElement('#password-strength', 'progress-bar bg-warning');
        $('#password-strength').css('width', '60%');

        resetElement('#result', 'text-warning');
        $('#result').text('Fair');
        return 'Weak'
    } else if (strength == 4) {
        resetElement('#password-strength', 'progress-bar bg-primary');
        $('#password-strength').css('width', '80%');

        resetElement('#result', 'text-primary');
        $('#result').text('Good');
        return 'Weak'
    }  else if (strength == 5) {

        resetElement('#password-strength', 'progress-bar bg-success');
        $('#password-strength').css('width', '100%');

        resetElement('#result', 'text-success');
        $('#result').text('Strong');

        return 'Strong'
    }

}
function resetElement(elementClass, addClass) {
    var element = $(elementClass);
    element[0].removeAttribute("class");
    element.addClass(addClass);
}
$(document).on('keyup', '#NewPassword',function () {
    var password = $('#NewPassword').val();
    if (checkStrength(password) == false) {
        $('#sign-up').attr('disabled', true);
    }
});
function clearChangePasswordForm() {
    var $form = $('#changePasswordForm');
    $form[0].reset();
    changePasswordFormValidator.resetForm();
    $(".error").removeClass("error");
    checkStrength("")
}
function openChangeProfileInfoForm() {
    KTApp.blockPage({
        overlayColor: '#000000',
        state: 'primary',
        message: 'Please wait...'
    });
    $.ajax({
        type: "Get",
        url: '/Account/UpdateMyProfileInfo',
        success: function (view) {
            KTApp.unblockPage();
            $('#changeProfileInfoModal').find("#changeProfileInfoFormWrapper").html(view);
            setInputMask();
            $('#changeProfileInfoModal').modal();
            appendChangeProfileInfoSubmit();
        }

    });
}
function appendChangeProfileInfoSubmit() {

    var $form = $('#changeProfileInfoForm');
    $form.off("submit");
    $form.validate({
        rules: {
            UserName: {
                required: true,
            },
            FirstName: {
                required: true
            },
            LastName: {
                required: true,
            },
            UserEmail: {
                required: true,
                email: true,
            },
            MobilePhone: {
                required: true,
            }
        }, messages: {
            UserName: {
                required: "Please enter a User name"
            },
            FirstName: {
                required: "Please enter a First Name"
            },
            LastName: {
                required: "Please enter a Last Name"
            },
            UserEmail: {
                required: "Please enter a User Email",
                email: "Please enter a valid Email Address"
            },
            MobilePhone: {
                required: "Please enter a Mobile Phone Number"
            }
        },
    });
    $form.submit(function (data, event) {

        var saveBtn = $form.find("[type=submit]");

        var _buttonSpinnerClasses = 'spinner spinner-right spinner-white pr-15';
        var data = $form.serialize();
        var isFormValide = $form.valid();
        if (isFormValide) {
            KTUtil.btnWait(saveBtn[0], _buttonSpinnerClasses, "Please wait");

            $.ajax({
                url: '/Account/UpdateMyProfileInfo',
                type: "Post",
                data: data,
                success: function (res) {
                    debugger
                    if (res.success) {
                        Swal.fire(
                            "Profile Info Updated!",
                            res.message,
                            "success"
                        );
                        $(".loggedUserPartial").html(res.view);
                        $form.parents(".modal").modal('hide');
                        KTUtil.btnRelease(saveBtn[0]);
                    } else {
                        $(".message-area").text(res.message).parents(".alert").fadeIn();

                        KTUtil.btnRelease(saveBtn[0]);
                    }
                }

            });

        }
        return false;

    });
}


//Primary Insured Edit Code Start
function openCustomerSummaryForm(customerId) {
    debugger
    KTApp.blockPage({
        overlayColor: '#000000',
        state: 'primary',
        message: 'Please wait...'
    });
    $.ajax({
        type: "Get",
        url: '/Policy/UpdateCustomerSummaryInfo',
        data: { customerId: customerId },
        success: function (view) {
            KTApp.unblockPage();
            $('#CustomerSummaryModal').find(".formWrapper").html(view);
            setInputMask();
            $('#CustomerSummaryModal').modal();
            appendCustomerSummarySubmit();
        }

    });
}
function appendCustomerSummarySubmit() {

    var $form = $('#CustomerSummaryForm');
    $form.off("submit");
    $form.validate({
        rules: {
            CustomerFirstName: {
                required: true,
            },
            CustomerLastName: {
                required: true
            },
            CustomerEmail: {
                required: true,
                email: true
            },
            CustomerPhoneHome: {
                required: true,
            },
            CustomerAddressLine1: {
                required: true,
            },
           
        }, messages: {
            CustomerFirstName: {
                required: "Please enter a User name"
            },
            CustomerLastName: {
                required: "Please enter a First Name"
            },
            CustomerEmail: {
                required: "Please enter an Email Address",
                email: "Please enter a valid Email Address"
            },
            CustomerPhoneHome: {
                required: "Please enter a Mobile Phone Number 1"
            },
            CustomerPhoneMobile: {
                required: "Please enter a Mobile Phone Number 2"
            },
            CustomerAddressLine1: {
                required: "Please enter a Address Line 1"
            },
            CustomerAddressLine2: {
                required: "Please enter a Address Line 2"
            }
            //CustomerNotes: {
            //    required: "Please enter Notes"
            //}
        },
    });
    $form.submit(function (data, event) {

        var saveBtn = $form.find("[type=submit]");

        var _buttonSpinnerClasses = 'spinner spinner-right spinner-white pr-15';
        var data = $form.serialize();
        var isFormValide = $form.valid();
        if (isFormValide) {
            KTUtil.btnWait(saveBtn[0], _buttonSpinnerClasses, "Please wait");
            $form.find(".message-area").parents(".alert").fadeOut();
            $.ajax({
                url: '/Policy/UpdateCustomerSummaryInfo',
                type: "Post",
                data: data,
                success: function (res) {
                    debugger
                    if (res.success) {
                        Swal.fire(
                            "Information Updated!",
                            res.message,
                            "success"
                        );
                        $(".PrimaryInsuredCardView").html(res.view);
                        $form.parents(".modal").modal('hide');
                        KTUtil.btnRelease(saveBtn[0]);
                        $("#kt_accountNotes").DataTable().ajax.reload();
                    } else {
                        $form.find(".message-area").text(res.message).parents(".alert").fadeIn().addClass("shakeMe");
                        KTUtil.btnRelease(saveBtn[0]);
                    }
                }

            });

        }
        return false;

    });
}

function scrollTo(element) {
    $('html, body').animate({
        scrollTop: $(element).offset().top - 90
    }, 800)
}
function getQueryString(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}