let base;
let playPause = 0;

function playFunc() {
  playPause = playPause + 1;
  if (playPause === 1) {
    play();
    document.getElementById("play").classList.add("pause");
    $("#animateCircle").addClass("addAnimation");
    $("#animateCircle.addAnimation").css("animation-play-state", "running");
  } else if (playPause === 2) {
    document.getElementById("play").classList.remove("pause");
    

    $("#animateCircle").css("animation-play-state", "paused");
    playPause = 0;
    stop();
  }
}

function play() {
  base = setInterval(timer, 10);
}

function stop() {
  clearInterval(base);
}

let millisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;

let millisecondVal = 0;
let secondVal = 0;
let minuteVal = 0;
let hourVal = 0;

function timer() {
  millisecondVal = updateTime(millisecond);
  secondVal = updateTime(second);
  minuteVal = updateTime(minute);
  hourVal = updateTime(hour);

  millisecond = ++millisecond;
  if (millisecond === 100) {
    millisecond = 0;
    second = ++second;
  }
  if (second === 60) {
    minute = ++minute;
    second = 0;
  }

  if (minute === 60) {
    minute = 0;
    hour = ++hour;
  }

  $("#millisecond").text(millisecondVal);
  $("#second").text(secondVal);
  $("#minute").text(minuteVal);
  $("#hour").text(hourVal);
}

function updateTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function resetFunc() {
  millisecond = 0;
  second = 0;
  minute = 0;
  hour = 0;
  $("#millisecond").text("00");
  $("#second").text("00");
  $("#minute").text("00");
  $("#hour").text("00");

  if (!$("#play").hasClass("pause")) {
    $("#animateCircle").removeClass("addAnimation");
  } else {
    $("#animateCircle").removeClass("addAnimation");
    setTimeout(function () {
      $("#animateCircle").addClass("addAnimation");
    }, 10);
  }
}

function stopFunc() {
  clearInterval(base);
  resetFunc();
  if ($("#play").hasClass("pause")) {
    $("#animateCircle").removeClass("addAnimation");
    playFunc();
  }
}
