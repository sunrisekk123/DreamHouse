$(document).ready(function () {

    $(".btnhide").click(function () {
        $(this).parents(".card").toggleClass("active");
        $(this).parents(".card").find("#hide").toggleClass("active");
    });
    
    $(".btnPin").click(function () {
        $(this).parents(".card").find("#pin").toggleClass("active");
    });

    $(".btnDelete").click(function () {
        var r = confirm("You really want to DELETE this property?");
        if (r == true) {
            $(this).parents(".card").toggleClass("animate__bounceOut").delay(750).queue(function () {
                $(this).remove();
            });
        }
    });

    $(".btnDiscount").click(function () {
        var discountAnimate = $(this).parents(".card").find("#discountAnimate");
        var discount = $(this).parents(".card").find("#discount").text();
        var discountPosition = $(this).parents(".card").find("#discount");
        var display = $(this).parents(".card").find("#discountDisplay");
        var discountedPrice = parseInt($(this).parents(".card").find("#discountPrice").text());
        var discountedPricePosition = $(this).parents(".card").find("#discountPrice");
        var price = $(this).parents(".card").find("#price");
        var priceNum = parseInt($(this).parents(".card").find("#price").text());

        $("#discountModal").modal();
        if (discount != "") {
            $("#haveDiscount").prop("checked", true);
            $("#itp_discount").val(discount);
        } else {
            $("#haveDiscount").prop("checked", false);
            $("#itp_discount").val("");
        }
        $("#discountConfirm").click(function () {
            $("#discountModal").modal("hide");
            if ($("#haveDiscount").is(':checked')) {
                var enterDiscount = parseInt($("#itp_discount").val());
                var ans;
                display.css("color", "green");
                discountedPricePosition.show();
                discountPosition.text(enterDiscount);
                ans = discountedPrice - (discountedPrice * enterDiscount / 100);
                price.text(ans);
                discountAnimate.toggleClass("animate__heartBeat").delay(950).queue(function () {
                    discountAnimate.toggleClass("animate__heartBeat")
                });

            } else {
                display.css("color", "#fff");
                price.text(discountedPrice);
                discountAnimate.toggleClass("animate__heartBeat").delay(950).queue(function () {
                    discountAnimate.toggleClass("animate__heartBeat")
                });
                discountAnimate.toggleClass("animate__heartBeat").delay(950).queue(function () {
                    discountAnimate.toggleClass("animate__heartBeat")
                });
                discountedPricePosition.hide();
                discountPosition.text("")

            }

        });
    });

    $(".btnEdit").click(function () {
        var price = $(this).parents(".card").find("#price");
        var PerPrice = $(this).parents(".card").find("#propertyPerPrice");
        var propertyName = $(this).parents(".card").find("#propertyName");
        var propertyImg = $(this).parents(".card").find("#propertyImg");

        $("#editModal").modal();
        $("#output").attr("src", propertyImg.attr("src"));
        $("#ipt_propertyName").val(propertyName.text());
        $("#ipt_pricePerSquare").val(PerPrice.text());
        $("#ipt_totalPrice").val(price.text());

        $("#btnEditSave").click(function () {
            propertyImg.attr("src", $("#output").attr("src"));
            propertyName.text($("#ipt_propertyName").val());
            PerPrice.text($("#ipt_pricePerSquare").val());
            price.text($("#ipt_totalPrice").val());
            $("#successModal").modal();
            $("#editModal").modal("hide");
        });

    });

    $("#btnInsert").click(function () {
        $("#addModal").modal();
        
        var price = $("#iptAdd_totalPrice");
        var Info = $("#iptAdd_propertyInfo");
        var PerPrice = $("#iptAdd_pricePerSquare");
        var Square = $("#iptAdd_Squarefoot");
        var Position = $("#iptAdd_propertyPosition");
        var Name = $("#iptAdd_propertyName");
        var Img = $("#iptAdd_propertyImg");
        var isRent = $(this).parents(".card").find("#ipt_isRent");
        var isBuy = $(this).parents(".card").find("#ipt_isBuy");

        $("#btnAddSave").click(function () {
            if($("#ipt_isRent").is(':checked')){
                $("#rent").append('<div class="card property"><div class="card-horizontal"><div class="img-square-wrapper"><div class="smallbar" id="smallbar"><div class="tags" id="rent" style="background: purple;display: block;">rent</div><div class="tags" id="hide" style="background: gray;">hide</div></div><img id="output2" style="width: 300px; height: 230px;"></div><div class="card-body"><div class="row"><div class="col-9"><h4 class="card-title" id="propertyName">'+Name.val()+'</h4><h6 class="card-title" style="color: gray" id="propertyPosition">'+Position.val()+'</h6><br><p class="card-text">實 '+Square.val()+'呎 @$<span id="propertyPerPrice">'+PerPrice.val()+'</span></p><p class="card-text"><button class="btn btn-secondary" style="padding: 0px 10px" id="propertyInfo">'+Info.val()+'</button></p></div><div class="col-3 text-right"><h4 class="card-title"><div class="btn-group"><button type="button" class="btn btn-light btnDiscount" data-toggle="tooltip" title="Discount"><i class="fas fa-tag"></i></button><button type="button" class="btn btn-light btnEdit" data-toggle="tooltip" title="Edit"><i class="fas fa-edit"></i></button><div class="btn-group"><button type="button" class="btn btn-light btnhide" data-toggle="tooltip" title="Hide"><i class="far fa-eye"></i></button><button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"><span class="caret"></span></button><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item btnDelete" href="#"><i class="fas fa-trash"></i><span style="padding: 0px 10px;">Delete</span></a></div></div></div></h4><br><h6 class="card-title" style="color: green" id="discountDisplay"><del style="color: red" id="discountPrice"></del><span id="discount"></span></h6><h4 class="card-title" id="discountAnimate">$<span id="price">'+price.val()+'</span></h4><button type="button" class="btn btn-info">More Infomation</button></div></div></div></div></div>');
                $("#output2").attr('src', $("#output").attr("src"));
                $("#successModal").modal();
                $("#addModal").modal("hide");
            }else if($("#ipt_isBuy").is(':checked')){
                $("#buy").append('<div class="card property"><div class="card-horizontal"><div class="img-square-wrapper"><div class="smallbar" id="smallbar"><div class="tags" id="buy" style="background: red;display: block;">buy</div><div class="tags" id="hide" style="background: gray;">hide</div></div><img id="output2" style="width: 300px; height: 230px;"></div><div class="card-body"><div class="row"><div class="col-9"><h4 class="card-title" id="propertyName">'+Name.val()+'</h4><h6 class="card-title" style="color: gray" id="propertyPosition">'+Position.val()+'</h6><br><p class="card-text">實 '+Square.val()+'呎 @$<span id="propertyPerPrice">'+PerPrice.val()+'</span></p><p class="card-text"><button class="btn btn-secondary" style="padding: 0px 10px" id="propertyInfo">'+Info.val()+'</button></p></div><div class="col-3 text-right"><h4 class="card-title"><div class="btn-group"><button type="button" class="btn btn-light btnDiscount" data-toggle="tooltip" title="Discount"><i class="fas fa-tag"></i></button><button type="button" class="btn btn-light btnEdit" data-toggle="tooltip" title="Edit"><i class="fas fa-edit"></i></button><div class="btn-group"><button type="button" class="btn btn-light btnhide" data-toggle="tooltip" title="Hide"><i class="far fa-eye"></i></button><button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"><span class="caret"></span></button><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item btnDelete" href="#"><i class="fas fa-trash"></i><span style="padding: 0px 10px;">Delete</span></a></div></div></div></h4><br><h6 class="card-title" style="color: green" id="discountDisplay"><del style="color: red" id="discountPrice"></del><span id="discount"></span></h6><h4 class="card-title" id="discountAnimate">$<span id="price">'+price.val()+'</span></h4><button type="button" class="btn btn-info">More Infomation</button></div></div></div></div></div>');
                $("#output2").attr('src', $("#output").attr("src"));
                $("#successModal").modal();
                $("#addModal").modal("hide");
            }
        });


    });


    $("#iptAdd_propertyImg").change(function () {
        loadFile(event);
    });

    var loadFile = function (event) {
        $("#output").attr('src', URL.createObjectURL(event.target.files[0]));
        $('#output').onload(function () {
            URL.revokeObjectURL($('#output').src())
        });
    };
});
