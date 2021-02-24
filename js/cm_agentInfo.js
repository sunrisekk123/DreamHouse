$(document).ready(function () {
    $("#filterBox").hide();
    $("#btnFilter").click(function () {
        $("#filterBox").toggle();
    });
        $(".contact").click(function(){
        alert("");
        $('[data-toggle=\"popover\"]').popover();  
    })
    
    $("#btnCreateNew").click(function(){
        $('#createACModalLong').modal();
    })
    $('#agentBox').html("");
    $.getJSON('json/allUser.json', function (jd) {
        for (var i = 0; i < jd.agent.length; i++) {
            $("#agentBox").append("<div class=\"boxx\"><div class=\"row\"><div class=\"col-2\"><img src=\"images/agent/" + i + ".png\"></div><div class=\"col-10 cardInfo\"><h4>" + jd.agent[i].name + "<input type=\"checkbox\" class=\"able\" style=\"float: right\" checked></h4><p><font>" + jd.agent[i].post + "(" + jd.agent[i].employeeNo + ")<br>" + jd.agent[i].branches + "</font></p><div class=\"row\"><span class=\"col-2 live\"><i class=\"fa fa-comments-o fa-lg\" aria-hidden=\"true\"></i>&nbsp;Live Chat</span><span class=\"col-2 contact\" data-toggle=\"popover\" title=\"Phone No.\" data-content=\"78787898\"><i class=\"fa fa-phone fa-mg\" aria-hidden=\"true\"></i>&nbsp;Contact No.</span><span class=\"col-2 wts\"><i class=\"fa fa-whatsapp fa-lg\" aria-hidden=\"true\"></i>&nbsp;Whatsapp</span><span class=\"col-5 stock\"><font>No. of stock &nbsp;</font><strong>" + jd.agent[i].numOfProperty + "</strong></span></div></div></div></div>");

        }
    });

    $("#nameOrBranches").keyup(function () {
        var value = $(this).val();
        $('#agentBox').html("");
        $.getJSON('json/allUser.json', function (jd) {
            for (var j = 0; j < jd.agent.length; j++) {
                var name = jd.agent[j].name;

                if (name.indexOf(value) !== -1) {
                    $("#agentBox").append("<div class=\"boxx\"><div class=\"row\"><div class=\"col-2\"><img src=\"images/agent/" + i + ".png\"></div><div class=\"col-10 cardInfo\"><h4>" + jd.agent[i].name + "<input type=\"checkbox\" class=\"able\" style=\"float: right\" checked></h4><p><font>" + jd.agent[i].post + "(" + jd.agent[i].employeeNo + ")<br>" + jd.agent[i].branches + "</font></p><div class=\"row\"><span class=\"col-2 live\"><i class=\"fa fa-comments-o fa-lg\" aria-hidden=\"true\"></i>&nbsp;Live Chat</span><span class=\"col-2 contact\"><i class=\"fa fa-phone fa-mg\" aria-hidden=\"true\"></i>&nbsp;Contact No.</span><span class=\"col-2 wts\"><i class=\"fa fa-whatsapp fa-lg\" aria-hidden=\"true\"></i>&nbsp;Whatsapp</span><span class=\"col-5 stock\"><font>No. of stock &nbsp;</font><strong>" + jd.agent[i].numOfProperty + "</strong></span></div></div></div></div>");
                }
            }
        });
    });
$("input:checkbox").click(function(){
        $('#agentBox').html("");
    $.getJSON('json/allUser.json', function (jd) {
        for (var i = 0; i < jd.agent.length; i++) {
            $("#agentBox").append("<div class=\"boxx\"><div class=\"row\"><div class=\"col-2\"><img src=\"images/agent/" + i + ".png\"></div><div class=\"col-10 cardInfo\"><h4>" + jd.agent[i].name + "<input type=\"checkbox\" class=\"able\" style=\"float: right\" checked></h4><p><font>" + jd.agent[i].post + "(" + jd.agent[i].employeeNo + ")<br>" + jd.agent[i].branches + "</font></p><div class=\"row\"><span class=\"col-2 live\"><i class=\"fa fa-comments-o fa-lg\" aria-hidden=\"true\"></i>&nbsp;Live Chat</span><span class=\"col-2 contact\"><i class=\"fa fa-phone fa-mg\" aria-hidden=\"true\"></i>&nbsp;Contact No.</span><span class=\"col-2 wts\"><i class=\"fa fa-whatsapp fa-lg\" aria-hidden=\"true\"></i>&nbsp;Whatsapp</span><span class=\"col-5 stock\"><font>No. of stock &nbsp;</font><strong>" + jd.agent[i].numOfProperty + "</strong></span></div></div></div></div>");

        }
    });
})

    
//    $("#btnCreateNew").click(function(){
//        window.location.replace("createAgentAc.html");
//    })
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
    $("#createAgentForm").submit(function(){
        $('#createACModalLong').modal('toggle');
        $('.alert').addClass("show");
        $('.alert').removeClass("hide");
        $('.alert').addClass("showAlert");
        setTimeout(function(){
          $('.alert').removeClass("show");
          $('.alert').addClass("hide");
        },5000);
      });
      
    $('.close-btn').click(function(){
        $('.alert').removeClass("show");
        $('.alert').addClass("hide");
      });
});
