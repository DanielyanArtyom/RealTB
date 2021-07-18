// open modal

$(document).ready(function () {

    // Open modals
    $(".openModal").each(function (element, index) {
        $(this).click(function () {
            let id = $(this).attr("data-modal-id")
            $(`#${id}`).addClass("opened")

            // /   / close modal on Click BTn
            $(`#${id}`).find(".modal__close").click(() => {
                $(`#${id}`).removeClass("opened")
            })
        })
    })

    // OutSide click
    $(".bg-modal").on('click', function (event) {
        if (!$(event.target).closest('.modal').length) {
            $(".bg-modal").removeClass("opened");
        }
    });

    // Choose tests types

    let types = {}

    $(".tab-header").each(function (element, index) {
        $(this).on('click', function () {
            if (!$(this).hasClass('active-link')) {
                $(this).addClass('active-link')
                types[$(this).html()] = true;
                console.log(types)
            } else {
                $(this).removeClass('active-link')
                delete types[$(this).html()]
                console.log(types)
            }
        })
    })



});



