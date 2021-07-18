$(document).ready(function () {

    $(".pricing__services").hide();
    $("#pricing_paypal").show()

    $(".pricing__paypal a").click(function () {

        let link = $(this).attr("href");
        $(".pricing__services").hide()
        $(link).show();
    });

});