$(document).ready(function(){
    $(".button-1").click(function(){
        $("section").not("#screen-1").hide(400)
        $("#screen-1").show(400)

    })

    $(".button-2").click(function(){
        $("section").not("#screen-2").hide(400)
        $("#screen-2").show(400)
    })

    $(".button-3").click(function(){
        $("section").not("#screen-3").hide(400)
        $("#screen-3").show(400)
    })
})
