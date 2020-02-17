$(document).ready(function(){
        $("#collapsebtn").click(function(){
                $("#mycollapse").toggleClass('show-menu');
                $("body").toggleClass("margin-right");
                $(".overlay").fadeToggle();
        });

        $("#collapsebtn2").click(function(){
                $("#mycollapse").removeClass('show-menu');
                $("body").toggleClass("margin-right");
                $(".overlay").fadeToggle();
        });

        $(".contact").click(function(){
                $(".sub-menu").fadeToggle();
        });
});