$(document).ready(function(){
        $("#collapsebtn").click(function(){
                $("#mycollapse").toggleClass('show-menu');
                $("body").toggleClass("margin-right");
        });

        $("#collapsebtn2").click(function(){
                $("#mycollapse").removeClass('show-menu');
                $("body").toggleClass("margin-right");
        });
});