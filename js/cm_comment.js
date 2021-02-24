$(document).ready(function () {
    $(".moreInfo").click(function(){
        $('#moreInfoModalCenter').modal();
    })
    $(".action").click(function(){
        $('#moreInfoModalCenter').modal();
    })
    $(".check").click(function(){
        window.location.replace("cm_viewAppointment2.html");
    })    
});