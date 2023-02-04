// Class Definition
var KTLogin = function () {
    var _buttonSpinnerClasses = 'spinner spinner-right spinner-white pr-15';
    
    var _handleFormSignin = function () {
        var form = KTUtil.getById('kt_login_singin_form');
        var formSubmitButton = KTUtil.getById('kt_login_singin_form_submit_button');

        if (!form) {
            return;
        }

        FormValidation
            .formValidation(
                form,
                {
                    fields: {
                        UserName: {
                            validators: {
                                notEmpty: {
                                    message: 'Username is required'
                                }
                            }
                        },
                        Password: {
                            validators: {
                                notEmpty: {
                                    message: 'Password is required'
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                        bootstrap: new FormValidation.plugins.Bootstrap({
                            //	eleInvalidClass: '', // Repace with uncomment to hide bootstrap validation icons
                            //	eleValidClass: '',   // Repace with uncomment to hide bootstrap validation icons
                        })
                    }
                }
            )
            .on('core.form.valid', function () {


                KTUtil.btnWait(formSubmitButton, _buttonSpinnerClasses, "Please wait");
                var model = $(form).serialize();

                $.ajax({
                    url: "/Account/Login",
                    type: "Post",
                    data: model,
                    success: function (view) {
                        if (view.Redirect) {
                            window.location.href = view.Redirect;
                        } else {
                            $(".inner-container").html(view);
                            KTLogin.init();
                        }
                    },
                    error: function (error) {
                    }
                });

            })
            .on('core.form.invalid', function () {

            });
    }
    var _handleFormForgot = function () {
        var form = KTUtil.getById('kt_login_forgot_form');
        var formSubmitUrl = KTUtil.attr(form, 'action');
        var formSubmitButton = KTUtil.getById('kt_login_forgot_form_submit_button');

        if (!form) {
            return;
        }

        FormValidation
            .formValidation(
                form,
                {
                    fields: {
                        UserName: {
                            validators: {
                                notEmpty: {
                                    message: 'Username is required'
                                }
                            }
                        },
                        UserEmail: {
                            validators: {
                                notEmpty: {
                                    message: 'Email is required'
                                },
                                emailAddress: {
                                    message: 'The value is not a valid email address'
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                        bootstrap: new FormValidation.plugins.Bootstrap({
                            //	eleInvalidClass: '', // Repace with uncomment to hide bootstrap validation icons
                            //	eleValidClass: '',   // Repace with uncomment to hide bootstrap validation icons
                        })
                    }
                }
            )
            .on('core.form.valid', function () {
                // Show loading state on button
                KTUtil.btnWait(formSubmitButton, _buttonSpinnerClasses, "Please wait");

                var $form = $('#kt_login_forgot_form');
                var model = $form.serialize();

                $.ajax({
                    url: "/Account/Forgot",
                    type: "Post",
                    data: model,
                    success: function (view) {

                        $(".inner-container").html(view);
                        KTLogin.init();

                    },
                    error: function (error) {
                    }
                })

            })
            .on('core.form.invalid', function () {

            });
    }
    var _handleRetrieveUsername = function () {
        var form = KTUtil.getById('kt_retrieve_username_form');
        var formSubmitUrl = KTUtil.attr(form, 'action');
        var formSubmitButton = KTUtil.getById('kt_retrieve_username_form_submit_button');

        if (!form) {
            return;
        }

        FormValidation
            .formValidation(
                form,
                {
                    fields: {
                        UserEmail: {
                            validators: {
                                notEmpty: {
                                    message: 'Email is required'
                                },
                                emailAddress: {
                                    message: 'The value is not a valid email address'
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                        bootstrap: new FormValidation.plugins.Bootstrap({
                            //	eleInvalidClass: '', // Repace with uncomment to hide bootstrap validation icons
                            //	eleValidClass: '',   // Repace with uncomment to hide bootstrap validation icons
                        })
                    }
                }
            )
            .on('core.form.valid', function () {
                // Show loading state on button
                KTUtil.btnWait(formSubmitButton, _buttonSpinnerClasses, "Please wait");

                var $form = $('#kt_retrieve_username_form');
                var model = $form.serialize();

                $.ajax({
                    url: formSubmitUrl,
                    type: "Post",
                    data: model,
                    success: function (view) {

                        $(".inner-container").html(view);
                        KTLogin.init();
                    },
                    error: function (error) {
                    }
                })

            })
            .on('core.form.invalid', function () {

            });
    }
    var _handleFormSignup = function () {
        // Base elements
        var wizardEl = KTUtil.getById('kt_login');
        var form = KTUtil.getById('kt_login_signup_form');
        var wizardObj;
        var validations = [];

        if (!form) {
            return;
        }

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        // Step 1
        validations.push(FormValidation.formValidation(
            form,
            {
                fields: {
                    fname: {
                        validators: {
                            notEmpty: {
                                message: 'First name is required'
                            }
                        }
                    },
                    lname: {
                        validators: {
                            notEmpty: {
                                message: 'Last Name is required'
                            }
                        }
                    },
                    phone: {
                        validators: {
                            notEmpty: {
                                message: 'Phone is required'
                            }
                        }
                    },
                    email: {
                        validators: {
                            notEmpty: {
                                message: 'Email is required'
                            },
                            emailAddress: {
                                message: 'The value is not a valid email address'
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap()
                }
            }
        ));

        // Step 2
        validations.push(FormValidation.formValidation(
            form,
            {
                fields: {
                    address1: {
                        validators: {
                            notEmpty: {
                                message: 'Address is required'
                            }
                        }
                    },
                    postcode: {
                        validators: {
                            notEmpty: {
                                message: 'Postcode is required'
                            }
                        }
                    },
                    city: {
                        validators: {
                            notEmpty: {
                                message: 'City is required'
                            }
                        }
                    },
                    state: {
                        validators: {
                            notEmpty: {
                                message: 'State is required'
                            }
                        }
                    },
                    country: {
                        validators: {
                            notEmpty: {
                                message: 'Country is required'
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap()
                }
            }
        ));

        // Step 3
        validations.push(FormValidation.formValidation(
            form,
            {
                fields: {
                    delivery: {
                        validators: {
                            notEmpty: {
                                message: 'Delivery type is required'
                            }
                        }
                    },
                    packaging: {
                        validators: {
                            notEmpty: {
                                message: 'Packaging type is required'
                            }
                        }
                    },
                    preferreddelivery: {
                        validators: {
                            notEmpty: {
                                message: 'Preferred delivery window is required'
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap()
                }
            }
        ));

        // Step 4
        validations.push(FormValidation.formValidation(
            form,
            {
                fields: {
                    ccname: {
                        validators: {
                            notEmpty: {
                                message: 'Credit card name is required'
                            }
                        }
                    },
                    ccnumber: {
                        validators: {
                            notEmpty: {
                                message: 'Credit card number is required'
                            },
                            creditCard: {
                                message: 'The credit card number is not valid'
                            }
                        }
                    },
                    ccmonth: {
                        validators: {
                            notEmpty: {
                                message: 'Credit card month is required'
                            }
                        }
                    },
                    ccyear: {
                        validators: {
                            notEmpty: {
                                message: 'Credit card year is required'
                            }
                        }
                    },
                    cccvv: {
                        validators: {
                            notEmpty: {
                                message: 'Credit card CVV is required'
                            },
                            digits: {
                                message: 'The CVV value is not valid. Only numbers is allowed'
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap()
                }
            }
        ));

        // Initialize form wizard
        wizardObj = new KTWizard(wizardEl, {
            startStep: 1, // initial active step number
            clickableSteps: false // to make steps clickable this set value true and add data-wizard-clickable="true" in HTML for class="wizard" element
        });

        // Validation before going to next page
        wizardObj.on('beforeNext', function (wizard) {
            validations[wizard.getStep() - 1].validate().then(function (status) {
                if (status == 'Valid') {
                    wizardObj.goNext();
                    KTUtil.scrollTop();
                } else {
                    Swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn font-weight-bold btn-light-primary"
                        }
                    }).then(function () {
                        KTUtil.scrollTop();
                    });
                }
            });

            wizardObj.stop();  // Don't go to the next step
        });

        // Change event
        wizardObj.on('change', function (wizard) {
            KTUtil.scrollTop();
        });
    }

    var _handleVerifyAccessCode = function () {
        var form = KTUtil.getById('verifyAccessCodeForm');
        var formSubmitUrl = KTUtil.attr(form, 'action');
        var formSubmitButton = KTUtil.getById('kt_form_submit_button');

        if (!form) {
            return;
        }

        FormValidation
            .formValidation(
                form,
                {
                    fields: {
                        code: {
                            validators: {
                                notEmpty: {
                                    message: 'Access Code is required'
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                        bootstrap: new FormValidation.plugins.Bootstrap({
                            //	eleInvalidClass: '', // Repace with uncomment to hide bootstrap validation icons
                            //	eleValidClass: '',   // Repace with uncomment to hide bootstrap validation icons
                        })
                    }
                }
            )
            .on('core.form.valid', function () {
                // Show loading state on button
                KTUtil.btnWait(formSubmitButton, _buttonSpinnerClasses, "Please wait");
                $.ajax({
                    url: "/Account/VerifyAccessCode",
                    type: "Post",
                    data: {
                        code: form.querySelector('[name="code"]').value,
                    },
                    success: function (view) {
                        $(".inner-container").html(view);
                        KTLogin.init();
                    }
                });
            })
            .on('core.form.invalid', function () {

            });
    }
   
    // Public Functions
    return {
        init: function () {
            _handleFormSignin();
            _handleFormForgot();
            _handleRetrieveUsername();
            _handleFormSignup();
            _handleVerifyAccessCode();
        }
    };
}();

// Class Initialization
jQuery(document).ready(function () {
    KTLogin.init();
});

$(document).on("click", "[data-controlleractionlink]", (e) => {
    e.preventDefault();
    var actionUrl = $(e.currentTarget).data("controlleractionlink");
    changeLoginView(actionUrl);
});
function changeLoginView(actionUrl) {

    $.ajax({
        url: actionUrl,
        type: "Get",
        success: function (view) {
            $(".inner-container").html(view);
            KTLogin.init();
        },
        error: function (error) {
        }
    })
}
function registerUserComputer() {
    var _buttonSpinnerClasses = 'spinner spinner-right spinner-white pr-15';
    KTUtil.btnWait(document.getElementById("submitButton"), _buttonSpinnerClasses, "Please wait");
    var isRegister = $("[name=Register]:checked").val() == "Register";
    if (isRegister) {
        $.ajax({
            url: '/Account/RegisterUserComputer',
            type: "Post",
            success: function (view) {
                window.location.href = "/Home/Dashboard";
            },
            error: function (error) {
            }
        })
    } else {
        window.location.href = "/Home/Dashboard";
    }
}