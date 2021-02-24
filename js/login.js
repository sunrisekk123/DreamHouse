$(document).ready(function () {

    $("#btnLogin").click(function () {
        $("#user-error").css("display", "none");
        $("#username").removeClass("was-validated-user");
        $("#pass-error").css("display", "none");
        $("#password").removeClass("was-validated-user");
        $("#both-error").css("display", "none");

        if ($("#username").val() == "") {
            $("#user-error").css("display", "block");
            $("#username").addClass("was-validated-user");
        }

        if ($("#password").val() == "") {
            $("#pass-error").css("display", "block");
            $("#password").addClass("was-validated-user");
        }

        if ($("#username").val().trim().length > 0 && $("#password").val().trim().length > 0) {
            if ($('#username').val() == "cm0001@dreamhouseproerty.hk" && $('#password').val() == "iamCM1") {
                window.location.replace("cm_index.html");
            } else if ($('#username').val() == "pa0001@dreamhouseproerty.hk" && $('#password').val() == "iamPA1") {
                window.location.replace("pa_index.html?login=true");
            } else if ($('#username').val() == "ckk1@gmail.com" && $('#password').val() == "iamCkk1") {
                window.location.replace("index.html?login=true");
            } else {
                $("#both-error").css("display", "block");
            }
        }
    })


    $("#btnSignup").click(function () {
        window.location.replace("signup.html");
    })
    
    
});
