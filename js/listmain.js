(function ($) {

    "use strict";

    $(window).on('load', function () {

        //        /* Page Loader active
        //        ========================================================*/
        //        $('#preloader').fadeOut();
        //
        //        /* MixitUp
        //        ========================================================================== */
        //        $('#portfolio').mixItUp();

        /* Property Grids active
        ========================================================*/
        var itemList = $('.listing-container');
        var gridStyle = $('.grid');
        var listStyle = $('.list');

        $('.list,switchToGrid').on('click', function (e) {
            e.preventDefault();
            itemList.addClass("list-layout");
            itemList.removeClass("grid-layout");
            gridStyle.removeClass("active");
            listStyle.addClass("active");
        });

        gridStyle.on('click', function (e) {
            e.preventDefault();
            listStyle.removeClass("active");
            $(this).addClass("active");
            itemList.addClass("grid-layout");
            itemList.removeClass("list-layout");
        });

        /* Back Top Link active
        ========================================================*/
        var offset = 200;
        var duration = 500;
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });

        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        /* stellar js
              ========================================================*/
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 40
        });

    });

}(jQuery));

$(document).ready(function () {
    $(".btnSearch").click(function () {
        var status = $(".selStatus").val()
        var district = $(".selDistrict").val()
        var area1 = $(".selAreaRange1").val()
        var price1 = $(".selPriceRange1").val()

        if (status != "Any Status") {
            if (status == "For Sale") {
                $('.property1').show();
                $('.property2').hide();
                $('.property3').hide();
                $('.property4').show();
                if (district != "All District") {
                    if (district == "Hong Kong island") {
                        $('.property1').hide();
                        $('.property4').hide();
                    } else if (district == "New Territories") {
                        $('.property1').show();
                        $('.property4').show();
                    } else {
                        $('.property1').hide();
                        $('.property4').hide();
                    }
                } else {
                    $('.property1').show();
                    $('.property4').show();
                }
            } else {
                $('.property1').hide();
                $('.property2').show();
                $('.property3').show();
                $('.property4').hide();
                if (district != "All District") {
                    if (district == "Hong Kong island") {
                        $('.property2').hide();
                        $('.property3').hide();
                    } else if (district == "New Territories") {
                        $('.property2').show();
                        $('.property3').hide();
                    } else {
                        $('.property2').hide();
                        $('.property3').show();
                    }
                } else {
                    $('.property2').show();
                    $('.property3').show();
                }
            }
        } else {
            if (district != "All District") {
                if (district == "Hong Kong island") {
                    $('.property1').hide();
                    $('.property2').hide();
                    $('.property3').hide();
                    $('.property4').hide();
                } else if (district == "New Territories") {
                    $('.property1').show();
                    $('.property2').show();
                    $('.property3').hide();
                    $('.property4').show();
                } else {
                    $('.property1').hide();
                    $('.property2').hide();
                    $('.property3').show();
                    $('.property4').hide();

                }
            } else {
                $('.property-main').show();
            }
        }

        $('.property-main:has(.property-price:not(:contains("' + price1 + '")))').hide();
        $('.property-main:has(.property-area:not(:contains("' + area1 + '")))').hide();

    });

    $(".property-main").mouseenter(function () {
        $(".btnlike").css("display", "block");
    });

    $(".property-main").mouseleave(function () {
        $(".btnlike").css("display", "none");
    });

    $(".btnlike").click(function () {
//        if($(".btnlike").style.color == "#000")
            $(".btnlike").find("i").toggleClass("text-danger");
            $(".btnlike").toggleClass("animate__rotateIn");
//        } else {
//            $(".btnlibtnlike").find("i").removeClass("fas");
//            $(".btnlike").find("i").addClass("far");
//            $(".btnlike").style.color = "#000";
//        }
    });

});
