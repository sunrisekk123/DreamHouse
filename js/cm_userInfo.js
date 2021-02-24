$(document).ready(function () {
    var objArray = [];

    $.getJSON('json/allUser.json', function (jd) {
        $('#userCard').html("");
        for (var i = 0; i < jd.user.length; i++) {
            objArray.push(jd.user[i].userName);
            $('#userCard').append("<div class=\"card\" style=\"width: 19rem;\"> <img src=\"images/user/"+i+".png\" class=\"card-img-top\" alt=\"Icon\"> <div class=\"card-body\"> <h5 class=\"card-title\">" + jd.user[i].userName + "</h5><p class=\"card-text\">Email Address: " + jd.user[i].email + "<br>Phone Number: " + jd.user[i].phoneNo + "<br>Join Date: " + jd.user[i].joinDate + "<br>Last Login: " + jd.user[i].lastLogin + "<br> </p></div></div>");
        }
    });
    var nameOrEmail = $("#nameOrEmail").val().trim();
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    var fromLastLogin = $("#fromLastLogin").val();
    var toLastLogin = $("#toLastLogin").val();
    $("#btnSearch").click(function () {
        if (nameOrEmail == "" || fromDate == "" || toDate == "" || fromLastLogin == "" || toLastLogin == "") {
            $.getJSON('json/allUser.json', function (jd) {
                $('#userCard').html("");
                for (var i = 0; i < jd.user.length; i++) {
                    $('#userCard').append("<div class=\"card\" style=\"width: 19rem;\"> <img src=\"images/user/"+j+".png\" class=\"card-img-top\" alt=\"Icon\"> <div class=\"card-body\"> <h5 class=\"card-title\">" + jd.user[i].userName + "</h5><p class=\"card-text\">Email Address: " + jd.user[i].email + "<br>Phone Number: " + jd.user[i].phoneNo + "<br>Join Date: " + jd.user[i].joinDate + "<br>Last Login: " + jd.user[i].lastLogin + "<br> </p></div></div>");
                }
            });

        } else {

        }
    })
    $("#nameOrEmail").keyup(function () {
        var value = $(this).val();
        $('#userCard').html("");
        $.getJSON('json/allUser.json', function (jd) {
            for (var j = 0; j < jd.user.length; j++) {
                var username = jd.user[j].userName;
                var email = jd.user[j].email;
                var phoneNo = jd.user[j].phoneNo;

                if (username.indexOf(value) !== -1 || email.indexOf(value) !== -1) {
                    $('#userCard').append("<div class=\"card\" style=\"width: 19rem;\"> <img src=\"images/user/"+j+".png\" class=\"card-img-top\" alt=\"Icon\"> <div class=\"card-body\"> <h5 class=\"card-title\">" + jd.user[j].userName + "</h5><p class=\"card-text\">Email Address: " + jd.user[j].email + "<br>Phone Number: " + jd.user[j].phoneNo + "<br>Join Date: " + jd.user[j].joinDate + "<br>Last Login: " + jd.user[j].lastLogin + "<br> </p></div></div>");
                }
            }
        });
    });

    $("#phoneNo").keyup(function () {
        var value = $(this).val();
        $('#userCard').html("");
        $.getJSON('json/allUser.json', function (jd) {
            for (var j = 0; j < jd.user.length; j++) {
                var phoneNo = jd.user[j].phoneNo;
                if (phoneNo.indexOf(value) !== -1) {
                    $('#userCard').append("<div class=\"card\" style=\"width: 19rem;\"> <img src=\"images/avatar.png\" class=\"card-img-top\" alt=\"Icon\"> <div class=\"card-body\"> <h5 class=\"card-title\">" + jd.user[j].userName + "</h5><p class=\"card-text\">Email Address: " + jd.user[j].email + "<br>Phone Number: " + jd.user[j].phoneNo + "<br>Join Date: " + jd.user[j].joinDate + "<br>Last Login: " + jd.user[j].lastLogin + "<br> </p></div></div>");
                }
            }

        });
    });

    $("#btnAtoZ").click(function () {
//        objArray.sort();
//        $.getJSON('json/allUser.json', function (jd) {
//            for (var i = 0; i < objArray.length; i++) {
//                if (objArray[i] == jd.user[i].userName) {
//                    $('#userCard').append("<div class=\"card\" style=\"width: 19rem;\"> <img src=\"images/avatar.png\" class=\"card-img-top\" alt=\"Icon\"> <div class=\"card-body\"> <h5 class=\"card-title\">" + jd.user[i].userName + "</h5><p class=\"card-text\">Email Address: " + jd.user[i].email + "<br>Phone Number: " + jd.user[i].phoneNo + "<br>Join Date: " + jd.user[i].joinDate + "<br>Last Login: " + jd.user[i].lastLogin + "<br> </p></div></div>");
//                } else {
//                    i--;
//                }
//            }
//        });
    });
    $("#btnJoinDate").click(function () {

    });
    $("#btnLastLogin").click(function () {

    });
});
