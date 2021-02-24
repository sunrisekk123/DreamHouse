$(document).ready(function () {
    const regCheck = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9!#$%&'*+\/=?^_`{|}~\-\.]+/g;
    $(".success").hide();

    $("#btnSignup").click(function () {
        var re_mail = $("#re_mail").val().trim();
        var mail = $("#mail").val().trim();
        $("#mail-error").css("display", "none");
        $("#reMail-error").css("display", "none");
        $("#pass-error").css("display", "none");
        $("#rePass-error").css("display", "none");
        $("#name-error").css("display", "none");
        $("#name").removeClass("was-validated-user");
        $("#mail").removeClass("was-validated-user");
        $("#password").removeClass("was-validated-user");
        $("#re_mail").removeClass("was-validated-user");
        $("#re_password").removeClass("was-validated-user");


        if ($("#name").val() == "") {
            $("#name-error").css("display", "block");
            $("#name").addClass("was-validated-user");
        }

        if ($("#mail").val() == "" || $("#re_mail").val() == "") {
            $("#mail-error").css("display", "block");
            $("#mail").addClass("was-validated-user");
            $("#re_mail").addClass("was-validated-user");
        }
        if ($("#password").val() == "" || $("#re_password").val() == "") {
            $("#pass-error").css("display", "block");
            $("#password").addClass("was-validated-user");
            $("#re_password").addClass("was-validated-user");
        }

        if ($("#name").val().trim().length > 0 && $("#password").val().trim().length > 0 && $("#re_password").val().trim().length > 0 && $("#mail").val().trim().length > 0 && $("#re_mail").val().trim().length > 0) {
            if ($('#mail').val() == "cm0001@dreamhouseproerty.hk" || $('#mail').val() == "pa0001@dreamhouseproerty.hk" || $('#mail').val() == "ckk1@gmail.com") {
                $("#dupMail-error").css("display", "block");
                $("#mail").addClass("was-validated-user");
                $("#re_mail").addClass("was-validated-user");
            } else if (mail.match(regCheck) === null || re_mail.match(regCheck) === null) {
                $("#mail-error").css("display", "block");
                $("#mail").addClass("was-validated-user");
                $("#re_mail").addClass("was-validated-user");
            } else if ($("#mail").val().trim() != $("#re_mail").val().trim()) {
                $("#reMail-error").css("display", "block");
                $("#mail").addClass("was-validated-user");
                $("#re_mail").addClass("was-validated-user");
            } else if ($("#password").val() != $("#re_password").val()) {
                $("#rePass-error").css("display", "block");
                $("#password").addClass("was-validated-user");
                $("#re_password").addClass("was-validated-user");
            } else {
                $(".container").hide();
                $(".success").show();
            }
        }
    })


    $("#btnLogin").click(function () {
        window.location.assign("login.html");
    })

    $("#dismiss-btn").click(function () {
        window.location.assign("login.html");
    })
    
    const indicator = document.querySelector(".indicator");
    const input = document.querySelector("#password");
    const weak = document.querySelector(".weak");
    const medium = document.querySelector(".medium");
    const strong = document.querySelector(".strong");
    const text = document.querySelector(".text");
    const showBtn = document.querySelector(".showBtn");
    const showEye = $(".showBtn").find("i");;
    let regExpWeak = /[a-z]/;
    let regExpMedium = /\d+/;
    let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
    $("#password").keyup(function () {
        if (input.value != "") {
            indicator.style.display = "block";
            indicator.style.display = "flex";
            if (input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong))) no = 1;
            if (input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong)))) no = 2;
            if (input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong)) no = 3;
            if (no == 1) {
                weak.classList.add("active");
                text.style.display = "block";
                text.textContent = "Your password is too week";
                text.classList.add("weak");
            }
            if (no == 2) {
                medium.classList.add("active");
                text.textContent = "Your password is medium";
                text.classList.add("medium");
            } else {
                medium.classList.remove("active");
                text.classList.remove("medium");
            }
            if (no == 3) {
                weak.classList.add("active");
                medium.classList.add("active");
                strong.classList.add("active");
                text.textContent = "Your password is strong";
                text.classList.add("strong");
            } else {
                strong.classList.remove("active");
                text.classList.remove("strong");
            }
            showBtn.style.display = "block";
            showBtn.onclick = function () {
                if (input.type == "password") {
                    input.type = "text";
                    showEye.removeClass("fa-eye");
                    showEye.addClass("fa-eye-slash");
                    showBtn.style.color = "#23ad5c";
                } else {
                    input.type = "password";
                    showEye.removeClass("fa-eye-slash");
                    showEye.addClass("fa-eye");
                    showBtn.style.color = "#000";
                }
            }
        } else {
            indicator.style.display = "none";
            text.style.display = "none";
            showBtn.style.display = "none";
        }
    })
});
