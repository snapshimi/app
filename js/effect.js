var msg_sn = 0;
function loadok() {
    if (msg_sn == 0){
        msg_sn = 1;
        $("#loading").fadeOut();
        $("#snlink").slideDown(1000);
    }
    /*if(document.getElementById("snapshimiframe").src == "http://snapshimi.com/"){
        $("#snlink").slideDown(1000);
    }else{
        $("#snlink").hide();   
    }*/
}

function showsite() {
   $("#snlink").slideUp("slow");
}
