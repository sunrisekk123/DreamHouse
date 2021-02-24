$(document).ready(function () {
    let bg = document.getElementById("bg");
    let moon = document.getElementById("moon");
    let background1 = document.getElementById("backgroud1");
    let sea = document.getElementById("sea");
    let text = document.getElementById("companyName");

    window.addEventListener('scroll', function () {
        var value = window.scrollY;

        bg.style.top = value * 0.5 + 'px';
        moon.style.left = -value * 0.9 + 'px';
        text.style.top = value * 1 + 'px';
    })

});


$(document).ready(function () {
    $("#logined").hide();
    let urlString = window.location.href;
    let paramString = urlString.split('?')[1];
    let params_arr = paramString.split('&');

    for (let i = 0; i < params_arr.length; i++) {

        let pair = params_arr[i].split('=');

        console.log("Key is:" + pair[0]);
        console.log("Value is:" + pair[1]);

        if (pair[0] == "login" && pair[1] == "true") {
            $("#logined").show();
            $("#sign").hide();
            $("#login").hide();
        }
    }

});

$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
    $('#autoWidth-hotpick').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});
