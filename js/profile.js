$(document).ready(function () {

    $(function () {
        $("#password").passwordStrength();
    });

    $("#file-upload").change(function () {
        loadFile(event);
    });

    var loadFile = function (event) {
        $("#output").attr('src', URL.createObjectURL(event.target.files[0]));
        $('#output').onload(function () {
            URL.revokeObjectURL($('#output').src())
        });
    };

    $("#btnIconChange").click(function () {
        $("#icon").attr('src', $("#output").attr("src"));
        $("#icon-top").attr('src', $("#output").attr("src"));
        $("#successModal").modal();
        $("#iconModal").modal("hide");
    });

    $("#btnInfoSave").click(function () {
        $("#successModal").modal();
    });
});

$(document).ready(function () {
    const regCheck = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9!#$%&'*+\/=?^_`{|}~\-\.]+/g;

    $("#btnChange").click(function () {
        var oldpwd = $("#oldpassword").val().trim();
        var nnewpwd = $("#password").val().trim();
        var re_nnewpwd = $("#re_newpassword").val().trim();
        $("#pass-error").css("display", "none");
        $("#oldpassword").removeClass("was-validated-user");
        $("#password").removeClass("was-validated-user");
        $("#re_newpassword").removeClass("was-validated-user");


        if ($("#oldpassword").val() == "") {
            $("#pass-error").css("display", "block");
            $("#oldpassword").addClass("was-validated-user");
        }

        if ($("#password").val() == "" || $("#re_newpassword").val() == "") {
            $("#pass-error").css("display", "block");
            $("#password").addClass("was-validated-user");
            $("#re_newpassword").addClass("was-validated-user");
        }

        if ($("#oldpassword").val().trim().length > 0 && $("#password").val().trim().length > 0 && $("#re_newpassword").val().trim().length > 0) {
            if (nnewpwd != re_nnewpwd) {
                $("#pass-error").css("display", "block");
                $("#password").addClass("was-validated-user");
                $("#re_newpassword").addClass("was-validated-user");
            } else {
                $("#successModal").modal();
                $("#pwdModal").modal("hide");
            }
        }
    })


    $("#dismiss-btn").click(function () {
        $("#successModal").modal("hide");
    })

    $("#btnGo").click(function () {
        window.location.replace("index.html");
    })
});
