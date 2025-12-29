document.querySelector("#openEnvelope").addEventListener("click", () => {
  document.querySelector(".envelope").classList.add("active");
  document.querySelector(".letter").classList.add("open-letter");
  document.querySelector(".letter").classList.remove("no-anim");
  document.querySelector(".letter").classList.add("openNor");
});

$("#messageState").on("change", (x) => {
  $(".message").removeClass("openNor").removeClass("closeNor");
  if ($("#messageState").is(":checked")) {
    $(".message")
      .removeClass("closed")
      .removeClass("no-anim")
      .addClass("openNor");
    $(".heart")
      .removeClass("closeHer")
      .removeClass("openedHer")
      .addClass("openHer");
    $(".container").stop().animate({ backgroundColor: "#f48fb1" }, 2000);
    console.log("Abrindo");
  } else {
    $(".message").removeClass("no-anim").addClass("closeNor");
    $(".heart")
      .removeClass("openHer")
      .removeClass("openedHer")
      .addClass("closeHer");
    $(".container").stop().animate({ backgroundColor: "#fce4ec" }, 2000);
    console.log("fechando");
  }
});

$(".message").on(
  "webkitAnimationEnd oanimationend msAnimationEnd animationend",
  function (e) {
    console.log("Animation End");
    if ($(".message").hasClass("closeNor")) $(".message").addClass("closed");
    $(".message")
      .removeClass("openNor")
      .removeClass("closeNor")
      .addClass("no-anim");
  }
);
