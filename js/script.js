// fix scaling of canavs as per media
// let mediaQuery1 = window.matchMedia("screen and (max-width: 540px)");
// let mediaQuery2 = window.matchMedia("screen and (max-width: 704px)");
// let mediaQuery3 = window.matchMedia("screen and (max-width: 820px)");
// let mediaQuery4 = window.matchMedia("screen and (max-width: 912px)");

function hidehp() {
  document.getElementById("hp1").classList.add("hide");
  document.getElementById("hp2").classList.add("hide");
}

function initSet() {
  document.getElementById("2-1").classList.remove("hide");
  document.getElementById("header").classList.remove("hide");
  document.getElementById("s1").classList.remove("hide");
  document.getElementById("s2").classList.remove("hide");
  document.getElementById("1-1").classList.add("hide");
}

function reset() {
  document.getElementById("a1").classList.add("hide");
  document.getElementById("i11").classList.add("hide");
  document.getElementById("i12").classList.add("hide");
  document.getElementById("i21").classList.add("hide");
  document.getElementById("i22").classList.add("hide");

  document.getElementById("a1").classList.add("hide");
  document.getElementById("o1").classList.add("hide");
  document.getElementById("op").classList.add("hide");
  document.getElementById("a2").classList.add("arrow-1");
  document.getElementById("a2").classList.add("hide");
  document.getElementById("e1").style.animation = "";
  document.getElementById("hp1").style.animation = "";
  document.getElementById("hp2").style.animation = "";
  document.getElementById("s1").style.animation = "";
  document.getElementById("s2").style.animation = "";
  document.getElementById("c1").style.animation = "";
  document.getElementById("c2").style.animation = "";
  document.getElementById("c1").classList.add("hide");
  document.getElementById("c2").classList.add("hide");
  document.getElementById("e1").classList.add("hide");
  document.getElementById("lamp").classList.add("hide");
}

function disableButton() {
  document.querySelectorAll("button").forEach((btn) => {
    btn.disabled = true;
  });
}
function enableButton() {
  document.querySelectorAll("button").forEach((btn) => {
    btn.disabled = false;
  });
}

function s1s2off() {
  disableButton();
  reset();
  initSet();
  document.getElementById("header").innerHTML =
    "When S<sub>1</sub>&nbsp;is&nbsp;OFF and S<sub>2</sub>&nbsp;is&nbsp;OFF, light doesn't glow";
  setTimeout(function () {
    document.getElementById("i12").innerHTML = "0";
    document.getElementById("i12").classList.remove("hide");
    setTimeout(function () {
      document.getElementById("i11").innerHTML = "Open";
      document.getElementById("i11").classList.remove("hide");
      setTimeout(function () {
        document.getElementById("i22").innerHTML = "0";
        document.getElementById("i22").classList.remove("hide");
        setTimeout(function () {
          document.getElementById("i21").innerHTML = "Open";
          document.getElementById("i21").classList.remove("hide");
          setTimeout(function () {
            document.getElementById("o1").innerHTML = "De-energized";
            document.getElementById("o1").classList.remove("hide");
            setTimeout(function () {
              document.getElementById("a1").classList.remove("hide");
              document.getElementById("output").textContent = "OFF";
              document.getElementById("op").classList.remove("hide");
              enableButton();
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

function s1OnANDs2Off() {
  disableButton();
  reset();
  initSet();
  document.getElementById("header").innerHTML =
    "When S<sub>1</sub>&nbsp;is&nbsp;ON and S<sub>2</sub>&nbsp;is&nbsp;OFF, light doesn't glow";
  setTimeout(function () {
    document.getElementById("hp1").classList.remove("hide");
    document.getElementById("hp1").style.animation = "moveHand 1.8s forwards";
    setTimeout(function () {
      document.getElementById("s1").style.animation =
        "moveSwitch 0.75s forwards";
      setTimeout(function () {
        hidehp();
        document.getElementById("i12").innerHTML = "1";
        document.getElementById("i12").classList.remove("hide");
        setTimeout(function () {
          document.getElementById("c1").classList.remove("hide");
          document.getElementById("c1").style.transformOrigin = "left bottom";
          document.getElementById("c1").style.animation =
            "rotateLine 1.5s forwards";
          setTimeout(function () {
            document.getElementById("i11").innerHTML = "Closed";
            document.getElementById("i11").classList.remove("hide");
            setTimeout(function () {
              document.getElementById("i22").innerHTML = "0";
              document.getElementById("i22").classList.remove("hide");
              setTimeout(function () {
                document.getElementById("i21").innerHTML = "Open";
                document.getElementById("i21").classList.remove("hide");
                setTimeout(function () {
                  document.getElementById("o1").innerHTML = "De-energized";
                  document.getElementById("o1").classList.remove("hide");
                  setTimeout(function () {
                    document.getElementById("a1").classList.remove("hide");
                    document.getElementById("output").textContent = "OFF";
                    document.getElementById("op").classList.remove("hide");
                    enableButton();
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1750);
        }, 1000);
      }, 1500);
    }, 500);
  }, 1000);
}

function s1OffANDs2On() {
  disableButton();
  reset();
  initSet();
  document.getElementById(
    "header"
  ).innerHTML = `When S<sub>1</sub>&nbsp;is&nbsp;OFF and S<sub>2</sub> &is ON, light doesn't glow`;
  setTimeout(function () {
    document.getElementById("hp2").classList.remove("hide");
    document.getElementById("hp2").style.animation = "moveHand 1.8s forwards";
    setTimeout(function () {
      document.getElementById("s2").style.animation =
        "moveSwitch 0.75s forwards";
      setTimeout(function () {
        hidehp();
        document.getElementById("i12").innerHTML = "0";
        document.getElementById("i12").classList.remove("hide");
        setTimeout(function () {
          document.getElementById("i11").innerHTML = "Open";
          document.getElementById("i11").classList.remove("hide");
          setTimeout(function () {
            document.getElementById("i22").innerHTML = "1";
            document.getElementById("i22").classList.remove("hide");
            setTimeout(function () {
              document.getElementById("c2").classList.remove("hide");
              document.getElementById("c2").style.transformOrigin =
                "left bottom";
              document.getElementById("c2").style.animation =
                "rotateLine 1.5s forwards";
              setTimeout(function () {
                document.getElementById("i21").innerHTML = "Closed";
                document.getElementById("i21").classList.remove("hide");
                setTimeout(function () {
                  document.getElementById("o1").innerHTML = "De-energized";
                  document.getElementById("o1").classList.remove("hide");
                  setTimeout(function () {
                    document.getElementById("a1").classList.remove("hide");
                    document.getElementById("output").textContent = "OFF";
                    document.getElementById("op").classList.remove("hide");
                    enableButton();
                  }, 1000);
                }, 1000);
              }, 1750);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1500);
    }, 500);
  }, 1000);
}

function s1ANDs2On() {
  disableButton();
  reset();
  initSet();
  document.getElementById(
    "header"
  ).innerHTML = `When S<sub>1</sub> &nbsp;is&nbsp; ON and S<sub>2</sub>&nbsp;is&nbsp;ON, light glows`;
  setTimeout(function () {
    document.getElementById("hp1").classList.remove("hide");
    document.getElementById("hp1").style.animation = "moveHand 1.8s forwards";
    document.getElementById("hp2").classList.remove("hide");
    document.getElementById("hp2").style.animation = "moveHand 1.8s forwards";
    setTimeout(function () {
      document.getElementById("s1").style.animation =
        "moveSwitch 0.75s forwards";
      document.getElementById("s2").style.animation =
        "moveSwitch 0.75s forwards";
      setTimeout(function () {
        document.getElementById("a2").classList.remove("hide");
        setTimeout(function () {
          hidehp();
          document.getElementById("i12").innerHTML = "1";
          document.getElementById("i12").classList.remove("hide");
          setTimeout(function () {
            document.getElementById("c1").classList.remove("hide");
            document.getElementById("c1").style.transformOrigin = "left bottom";
            document.getElementById("c1").style.animation =
              "rotateLine 1.5s forwards";
            setTimeout(function () {
              document.getElementById("i11").innerHTML = "Closed";
              document.getElementById("i11").classList.remove("hide");
              setTimeout(function () {
                document.getElementById("a2").classList.add("arrow-2");
                setTimeout(function () {
                  document.getElementById("i22").innerHTML = "1";
                  document.getElementById("i22").classList.remove("hide");
                  setTimeout(function () {
                    document.getElementById("c2").classList.remove("hide");
                    document.getElementById("c2").style.transformOrigin =
                      "left bottom";
                    document.getElementById("c2").style.animation =
                      "rotateLine 1.5s forwards";
                    setTimeout(function () {
                      document.getElementById("i21").innerHTML = "Closed";
                      document.getElementById("i21").classList.remove("hide");
                      setTimeout(function () {
                        document.getElementById("a2").classList.add("arrow-3");
                        setTimeout(function () {
                          document
                            .getElementById("e1")
                            .classList.remove("hide");
                          document.getElementById("e1").style.animation =
                            "enlarge 1s linear infinite";
                          document.getElementById("o1").innerHTML = "Energized";
                          document
                            .getElementById("o1")
                            .classList.remove("hide");
                          setTimeout(function () {
                            document
                              .getElementById("a2")
                              .classList.add("arrow-4");
                            setTimeout(function () {
                              document
                                .getElementById("lamp")
                                .classList.remove("hide");
                              document
                                .getElementById("a1")
                                .classList.remove("hide");
                              document.getElementById("output").textContent =
                                "ON";
                              document
                                .getElementById("op")
                                .classList.remove("hide");
                              enableButton();
                            }, 500);
                          }, 500);
                        }, 1000);
                      }, 1000);
                    }, 1750);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1750);
          }, 1000);
        }, 1000);
      }, 1750);
    }, 500);
  }, 1000);
}
