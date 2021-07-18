"use strict";

$(document).ready(function () {
  $(".testView__test-content").hide();
  $("#tabs-1").show();
  $(".testView__types a").click(function () {
    var link = $(this).attr("href");
    console.log(link);
    $(".testView__types a").removeClass("active-link");
    $(this).addClass("active-link");
    $(".testView__test-content").hide();
    $(link).show();
  }); //  Get Text Lines

  var text = document.getElementById('textContent');
  var divHeight = text.scrollHeight;
  var myText = window.getComputedStyle(text);
  var lineHeight = parseInt(myText.getPropertyValue('line-height'));
  var lines = Math.round(divHeight / lineHeight);
  var linesContainer = document.getElementById('linesCountContainer');

  for (var i = 1; i < lines; ++i) {
    var pElem = document.createElement('p');

    if (i === 1 || i % 5 === 0) {
      pElem.innerHTML = "Line ".concat(i);
    } else {
      pElem.innerHTML = "&nbsp";
    }

    linesContainer.appendChild(pElem);
  } // add bacground to choosen answer


  $(".test-content__question").find(".question-answer__index ").click(function (event) {
    var link = $(this);

    if (this == event.target) {
      console.log(link);
    }

    $(".question-answer__index").removeClass("active");
    $(this).addClass("active");
  });
});