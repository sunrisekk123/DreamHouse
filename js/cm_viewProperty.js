$(document).ready(function () {
    $(".filterBox").hide();
    $(".btnFilter").click(function () {
        $(".filterBox").toggle();
    });

    $(".slider-range").slider({
        range: true,
        min: 0,
        max: 1000000,
        values: [0, 1000000],
        slide: function (event, ui) {
            $(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $(".amount").val("$" + $(".slider-range").slider("values", 0) +
        " - $" + $(".slider-range").slider("values", 1));

    $('#buyBox').html("");
    $('#rentBox').html("");
    $('#npBox').html("");
    $.getJSON('json/cm_property.json', function (jd) {
        for (var i = 0; i < jd.buy.length; i++) {
            $("#buyBox").append("<div class=\"boxx\"><div class=\"row\"><div class=\"col-2\"><img src=\"images/property/" + i + ".png\"></div><div class=\"col-10 cardInfo\"><h4>" + jd.buy[i].propertyName + "</h4><p><font>" + jd.buy[i].address + "<br></font>" + jd.buy[i].propertySize + "ft<sup>2</sup><br>" + jd.buy[i].perPrice + "@ $20,921</p><div class=\"row\"><span class=\"col-2 propertyTag\">" + jd.buy[i].tag1 + "</span><span class=\"col-2 propertyTag\">" + jd.buy[i].tag2 + "</span><span class=\"col-3 propertyTag\">" + jd.buy[i].tag3 + "</span><span class=\"col-4 price\"><h3>" + jd.buy[i].price + "<small>M</small></h3></span></div><div class=\"row\"><span class=\"col-3 Mortgage\">Latest Transaction</span><span class=\"col-6 Mortgage\"><font>Monthly $" + jd.buy[i].monthly + "</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mortgage/Expenses</span></div></div></div></div>");

            $("#rentBox").append("<div class=\"boxx\"><div class=\"row\"><div class=\"col-2\"><img src=\"images/property/" + i + ".png\"></div><div class=\"col-10 cardInfo\"><h4>" + jd.buy[i].propertyName + "</h4><p><font>" + jd.buy[i].address + "<br></font>" + jd.buy[i].propertySize + "ft<sup>2</sup><br>" + jd.buy[i].perPrice + "@ $20,921</p><div class=\"row\"><span class=\"col-2 propertyTag\">" + jd.buy[i].tag1 + "</span><span class=\"col-2 propertyTag\">" + jd.buy[i].tag2 + "</span><span class=\"col-3 propertyTag\">" + jd.buy[i].tag3 + "</span><span class=\"col-4 price\"><h3>" + jd.buy[i].price + "<small>M</small></h3></span></div><div class=\"row\"><span class=\"col-3 Mortgage\">Latest Transaction</span><span class=\"col-6 Mortgage\"><font>Monthly $" + jd.buy[i].monthly + "</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mortgage/Expenses</span></div></div></div></div>");

            $("#npBox").append("<div class=\"boxx\"><div class=\"row\"><div class=\"col-2\"><img src=\"images/property/" + i + ".png\"></div><div class=\"col-10 cardInfo\"><h4>" + jd.buy[i].propertyName + "</h4><p><font>" + jd.buy[i].address + "<br></font>" + jd.buy[i].propertySize + "ft<sup>2</sup><br>" + jd.buy[i].perPrice + "@ $20,921</p><div class=\"row\"><span class=\"col-2 propertyTag\">" + jd.buy[i].tag1 + "</span><span class=\"col-2 propertyTag\">" + jd.buy[i].tag2 + "</span><span class=\"col-3 propertyTag\">" + jd.buy[i].tag3 + "</span><span class=\"col-4 price\"><h3>" + jd.buy[i].price + "<small>M</small></h3></span></div><div class=\"row\"><span class=\"col-3 Mortgage\">Latest Transaction</span><span class=\"col-6 Mortgage\"><font>Monthly $" + jd.buy[i].monthly + "</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mortgage/Expenses</span></div></div></div></div>");
        }
    });

    $("#nameOrBranches").keyup(function () {
        var value = $(this).val();
        $('#buyBox').html("");
        $('#rentBox').html("");
        $('#npBox').html("");
        $.getJSON('json/cm_property.json', function (jd) {
            for (var i = 0; i < jd.buy.length; i++) {
                var name = jd.buy[i].propertyName;

                if (name.indexOf(value) !== -1) {
                    $("#buyBox").append("<div class=\"boxx\"><div class=\"row\"><div class=\"col-2\"><img src=\"images/property/" + i + ".png\"></div><div class=\"col-10 cardInfo\"><h4>" + jd.buy[i].propertyName + "</h4><p><font>" + jd.buy[i].address + "<br></font>" + jd.buy[i].propertySize + "ft<sup>2</sup><br>" + jd.buy[i].perPrice + "@ $20,921</p><div class=\"row\"><span class=\"col-2 propertyTag\">" + jd.buy[i].tag1 + "</span><span class=\"col-2 propertyTag\">" + jd.buy[i].tag2 + "</span><span class=\"col-3 propertyTag\">" + jd.buy[i].tag3 + "</span><span class=\"col-4 price\"><h3>" + jd.buy[i].price + "<small>M</small></h3></span></div><div class=\"row\"><span class=\"col-3 Mortgage\">Latest Transaction</span><span class=\"col-6 Mortgage\"><font>Monthly $" + jd.buy[i].monthly + "</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mortgage/Expenses</span></div></div></div></div>");

                    $("#rentBox").append("<div class=\"boxx\"><div class=\"row\"><div class=\"col-2\"><img src=\"images/property/" + i + ".png\"></div><div class=\"col-10 cardInfo\"><h4>" + jd.buy[i].propertyName + "</h4><p><font>" + jd.buy[i].address + "<br></font>" + jd.buy[i].propertySize + "ft<sup>2</sup><br>" + jd.buy[i].perPrice + "@ $20,921</p><div class=\"row\"><span class=\"col-2 propertyTag\">" + jd.buy[i].tag1 + "</span><span class=\"col-2 propertyTag\">" + jd.buy[i].tag2 + "</span><span class=\"col-3 propertyTag\">" + jd.buy[i].tag3 + "</span><span class=\"col-4 price\"><h3>" + jd.buy[i].price + "<small>M</small></h3></span></div><div class=\"row\"><span class=\"col-3 Mortgage\">Latest Transaction</span><span class=\"col-6 Mortgage\"><font>Monthly $" + jd.buy[i].monthly + "</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mortgage/Expenses</span></div></div></div></div>");

                    $("#npBox").append("<div class=\"boxx\"><div class=\"row\"><div class=\"col-2\"><img src=\"images/property/" + i + ".png\"></div><div class=\"col-10 cardInfo\"><h4>" + jd.buy[i].propertyName + "</h4><p><font>" + jd.buy[i].address + "<br></font>" + jd.buy[i].propertySize + "ft<sup>2</sup><br>" + jd.buy[i].perPrice + "@ $20,921</p><div class=\"row\"><span class=\"col-2 propertyTag\">" + jd.buy[i].tag1 + "</span><span class=\"col-2 propertyTag\">" + jd.buy[i].tag2 + "</span><span class=\"col-3 propertyTag\">" + jd.buy[i].tag3 + "</span><span class=\"col-4 price\"><h3>" + jd.buy[i].price + "<small>M</small></h3></span></div><div class=\"row\"><span class=\"col-3 Mortgage\">Latest Transaction</span><span class=\"col-6 Mortgage\"><font>Monthly $" + jd.buy[i].monthly + "</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mortgage/Expenses</span></div></div></div></div>");
                }
            }
        });
    });

    $("input:checkbox").click(function () {
        $('#buyBox').html("");
        $('#rentBox').html("");
        $('#npBox').html("");
        $.getJSON('json/cm_property.json', function (jd) {
            for (var i = 0; i < jd.buy.length; i++) {
                $("#buyBox").append("<div class=\"boxx\"><div class=\"row\"><div class=\"col-2\"><img src=\"images/property/" + i + ".png\"></div><div class=\"col-10 cardInfo\"><h4>" + jd.buy[i].propertyName + "</h4><p><font>" + jd.buy[i].address + "<br></font>" + jd.buy[i].propertySize + "ft<sup>2</sup><br>" + jd.buy[i].perPrice + "@ $20,921</p><div class=\"row\"><span class=\"col-2 propertyTag\">" + jd.buy[i].tag1 + "</span><span class=\"col-2 propertyTag\">" + jd.buy[i].tag2 + "</span><span class=\"col-3 propertyTag\">" + jd.buy[i].tag3 + "</span><span class=\"col-4 price\"><h3>" + jd.buy[i].price + "<small>M</small></h3></span></div><div class=\"row\"><span class=\"col-3 Mortgage\">Latest Transaction</span><span class=\"col-6 Mortgage\"><font>Monthly $" + jd.buy[i].monthly + "</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mortgage/Expenses</span></div></div></div></div>");

                $("#rentBox").append("<div class=\"boxx\"><div class=\"row\"><div class=\"col-2\"><img src=\"images/property/" + i + ".png\"></div><div class=\"col-10 cardInfo\"><h4>" + jd.buy[i].propertyName + "</h4><p><font>" + jd.buy[i].address + "<br></font>" + jd.buy[i].propertySize + "ft<sup>2</sup><br>" + jd.buy[i].perPrice + "@ $20,921</p><div class=\"row\"><span class=\"col-2 propertyTag\">" + jd.buy[i].tag1 + "</span><span class=\"col-2 propertyTag\">" + jd.buy[i].tag2 + "</span><span class=\"col-3 propertyTag\">" + jd.buy[i].tag3 + "</span><span class=\"col-4 price\"><h3>" + jd.buy[i].price + "<small>M</small></h3></span></div><div class=\"row\"><span class=\"col-3 Mortgage\">Latest Transaction</span><span class=\"col-6 Mortgage\"><font>Monthly $" + jd.buy[i].monthly + "</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mortgage/Expenses</span></div></div></div></div>");

                $("#npBox").append("<div class=\"boxx\"><div class=\"row\"><div class=\"col-2\"><img src=\"images/property/" + i + ".png\"></div><div class=\"col-10 cardInfo\"><h4>" + jd.buy[i].propertyName + "</h4><p><font>" + jd.buy[i].address + "<br></font>" + jd.buy[i].propertySize + "ft<sup>2</sup><br>" + jd.buy[i].perPrice + "@ $20,921</p><div class=\"row\"><span class=\"col-2 propertyTag\">" + jd.buy[i].tag1 + "</span><span class=\"col-2 propertyTag\">" + jd.buy[i].tag2 + "</span><span class=\"col-3 propertyTag\">" + jd.buy[i].tag3 + "</span><span class=\"col-4 price\"><h3>" + jd.buy[i].price + "<small>M</small></h3></span></div><div class=\"row\"><span class=\"col-3 Mortgage\">Latest Transaction</span><span class=\"col-6 Mortgage\"><font>Monthly $" + jd.buy[i].monthly + "</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mortgage/Expenses</span></div></div></div></div>");

            }
        });
    })

});
