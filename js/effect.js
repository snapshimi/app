function loadok() {
    $("#loading").fadeOut();
    if(document.getElementById("snapshimiframe").src == "http://snapshimi.com/"){
        $("#snlink").slideDown(1000);
    }else{
        $("#snlink").hide();   
    }
}

function showsite() {
   $("#snlink").slideUp("slow");
}
