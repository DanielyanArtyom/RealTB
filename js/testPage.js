
$(document).ready(function () {
    $(".testView__test-content").hide();
    $("#tabs-1").show();

    $(".testView__types a").click(function () {
        let link = $(this).attr("href");
        console.log(link)
        $(".testView__types a").removeClass("active-link");
        $(this).addClass("active-link");
        $(".testView__test-content").hide();
        $(link).show();
    });

    //  Get Text Lines
    let text = document.getElementById('textContent')
    if (text) {
        let divHeight = text.scrollHeight
        let myText = window.getComputedStyle(text);
        let lineHeight = parseInt(myText.getPropertyValue('line-height'));
        let lines = Math.round(divHeight / lineHeight);

        let linesContainer = document.getElementById('linesCountContainer')
        for (let i = 1; i < lines; ++i) {
            let pElem = document.createElement('p');
            if (i === 1 || i % 5 === 0) {
                pElem.innerHTML = `Line ${i}`;
            } else {
                pElem.innerHTML = `&nbsp`;
            }
            linesContainer.appendChild(pElem);
        }
    }


    // Timers
    const startingMinutes = 65
    let time = startingMinutes * 60

    const countDownEl = document.getElementById("countDown")

    setInterval(updateCountDown, 1000)

    function updateCountDown() {
        const minutes = Math.floor(time / 60)
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds
        countDownEl.innerHTML = `Remaining : ${minutes} min ${seconds}
        secs`
        time--;
    }


    // add bacground to choosen answer

    let answers = {}

    function bordered(box, select) {
        box.removeClass("active");
        $(select).addClass("active");
    }

    function findAnswer(questNumber, elAns, type) {
        $(".test-content__answer").each(function (number, answer) {
            let answers = $(this).find(".answer__index").html()
            if (questNumber == answers) {
                if (type === "chosenAnswer") {
                    $(this).find($(".answer__content")).each(function (i, questAnswer) {
                        if ($(questAnswer).html() == elAns) {
                            bordered(($(answer).find(".answer__content")), $(this));
                        }
                    })
                } else {
                    console.log('here')
                    $(this).find($(".answer__content-input")).text(elAns)
                }
            }
        })
    }

    $(".test-content__question").each(function (index, el) {
        let questNumber = $(this).find(".qustion-number").html()
        $(this).find($(".question-answer__index")).on("click", function () {
            bordered(($(el).find(".question-answer__index")), $(this));
            let key = +questNumber;
            answers[key] = $(this).html()
            findAnswer((questNumber), $(this).html(), 'chosenAnswer')

        });
        $(this).find($(".test-content__write-answer")).each(function () {
            $(this).change(function () {
                let key = questNumber;
                answers[key] = $(this).val()
                findAnswer(questNumber, $(this).val(), 'inputAnswer')
            })
        })

    })


    function isLetter(str) {
        let addWord = '';
        let newWord = str.toString()
        alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-'];
        for (let i = 0; i < newWord.length; ++i) {
            for (let j = 0; j < alphabet.length; ++j) {
                if (newWord[i] === alphabet[j]) {
                    addWord += newWord[i]
                }
            }
        }
        return addWord

    }

    let Enabled = false;
    $('#highlighter').click(function () {
        // Addind word to the vocabulary
        const selection = window.getSelection();
        Enabled = !Enabled
        $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass('active')
        $(".test-content__content-text").each(function () {
            $(this).mouseup(function (event) {
                if (Enabled) {
                    const range = selection.getRangeAt(0);
                    let start = range.toString();
                    let word = start.split(' ');
                    let newWord = word[0];
                    isLetter(newWord);
                    // Open Modal
                    ($(".bg-modal").find('.modal__word').html(isLetter(newWord)))
                    $("#bgModal").css({ left: event.pageX })
                    $("#bgModal").css({ top: event.pageY })
                    $(".bg-modal").addClass("opened")
                    // /   / close modal on Click BTn
                    $(".bg-modal").find("#cancelVobacBtn").click(function () {
                        $(".bg-modal").removeClass("opened")
                        $("#highlighter").removeClass('active')
                        Enabled = false;
                    })
                    $("#addVocabBtn").click(function () {
                        $("#highlighter").removeClass('active')
                        Enabled = false;
                    })
                }
            })
        })
    })


})



