$(document).ready(function () {

    $('textarea').each(function () {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    // user Img

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function () {
        readURL(this);
    })

    // Enable/ disable inputs

    $('#editBtn').click(function () {
        $('.userInputs').each(function () {
            if (!$(this).hasClass('active')) {
                $(this).prop("disabled", false);
                $(this).addClass('active');
                console.log('active')
            } else {
                $(this).prop("disabled", true);
                $(this).removeClass('active');
                console.log('remove')
            }

        })
    })

})