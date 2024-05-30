// fix scaling of canavs as per media
let mediaQuery1 = window.matchMedia("screen and (max-width: 540px)");
let mediaQuery2 = window.matchMedia("screen and (max-width: 704px)");
let mediaQuery3 = window.matchMedia("screen and (max-width: 820px)");
let mediaQuery4 = window.matchMedia("screen and (max-width: 912px)");

function hidehp() {
  document.getElementById("hp1").style.visibility = "hidden";
  document.getElementById("hp2").style.visibility = "hidden";
}

function initSet() {
  document.getElementById("2-1").style.visibility = "visible";
  document.getElementById("header").style.visibility = "visible";
  document.getElementById("s1").style.visibility = "visible";
  document.getElementById("s2").style.visibility = "visible";
  document.getElementById("1-1").style.visibility = "hidden";
}

function reset() {
  document.getElementById("a1").style.visibility = "hidden";
  document.getElementById("i11").style.visibility = "hidden";
  document.getElementById("i12").style.visibility = "hidden";
  document.getElementById("i21").style.visibility = "hidden";
  document.getElementById("i22").style.visibility = "hidden";

  document.getElementById("a1").style.visibility = "hidden";
  document.getElementById("o1").style.visibility = "hidden";
  document.getElementById("op").style.visibility = "hidden";
  document.getElementById("a2").style =
    "position:absolute; left: 34.3%; top: 78.8%; width: 3.5%; visibility:hidden;";
  document.getElementById("e1").style.animation = "";
  document.getElementById("hp1").style.animation = "";
  document.getElementById("hp2").style.animation = "";
  document.getElementById("s1").style.animation = "";
  document.getElementById("s2").style.animation = "";
  document.getElementById("c1").style.animation = "";
  document.getElementById("c2").style.animation = "";
  document.getElementById("c1").style.visibility = "hidden";
  document.getElementById("c2").style.visibility = "hidden";
  document.getElementById("e1").style.visibility = "hidden";
  document.getElementById("lamp").style.visibility = "hidden";
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
    "When S<sub>1</sub> is OFF and S<sub>2</sub> is OFF, light doesn't glow";
  setTimeout(function () {
    document.getElementById("i12").innerHTML = "0";
    document.getElementById("i12").style.visibility = "visible";
    setTimeout(function () {
      document.getElementById("i11").innerHTML = "Open";
      document.getElementById("i11").style.visibility = "visible";
      setTimeout(function () {
        document.getElementById("i22").innerHTML = "0";
        document.getElementById("i22").style.visibility = "visible";
        setTimeout(function () {
          document.getElementById("i21").innerHTML = "Open";
          document.getElementById("i21").style.visibility = "visible";
          setTimeout(function () {
            document.getElementById("o1").innerHTML = "De-energized";
            document.getElementById("o1").style.visibility = "visible";
            setTimeout(function () {
              document.getElementById("a1").style.visibility = "visible";
              document.getElementById("output").textContent = "OFF";
              document.getElementById("op").style.visibility = "visible";
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
    "When S<sub>1</sub> is ON and S<sub>2</sub> is OFF, light doesn't glow";
  setTimeout(function () {
    document.getElementById("hp1").style.visibility = "visible";
    document.getElementById("hp1").style.animation = "moveHand 1.8s forwards";
    setTimeout(function () {
      document.getElementById("s1").style.animation =
        "moveSwitch 0.75s forwards";
      setTimeout(function () {
        hidehp();
        document.getElementById("i12").innerHTML = "1";
        document.getElementById("i12").style.visibility = "visible";
        setTimeout(function () {
          document.getElementById("c1").style.visibility = "visible";
          document.getElementById("c1").style.transformOrigin = "left bottom";
          document.getElementById("c1").style.animation =
            "rotateLine 1.5s forwards";
          setTimeout(function () {
            document.getElementById("i11").innerHTML = "Closed";
            document.getElementById("i11").style.visibility = "visible";
            setTimeout(function () {
              document.getElementById("i22").innerHTML = "0";
              document.getElementById("i22").style.visibility = "visible";
              setTimeout(function () {
                document.getElementById("i21").innerHTML = "Open";
                document.getElementById("i21").style.visibility = "visible";
                setTimeout(function () {
                  document.getElementById("o1").innerHTML = "De-energized";
                  document.getElementById("o1").style.visibility = "visible";
                  setTimeout(function () {
                    document.getElementById("a1").style.visibility = "visible";
                    document.getElementById("output").textContent = "OFF";
                    document.getElementById("op").style.visibility = "visible";
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
  document.getElementById("header").innerHTML =
    "When S<sub>1</sub> is OFF and S<sub>2</sub> is ON, light doesn't glow";
  setTimeout(function () {
    document.getElementById("hp2").style.visibility = "visible";
    document.getElementById("hp2").style.animation = "moveHand 1.8s forwards";
    setTimeout(function () {
      document.getElementById("s2").style.animation =
        "moveSwitch 0.75s forwards";
      setTimeout(function () {
        hidehp();
        document.getElementById("i12").innerHTML = "0";
        document.getElementById("i12").style.visibility = "visible";
        setTimeout(function () {
          document.getElementById("i11").innerHTML = "Open";
          document.getElementById("i11").style.visibility = "visible";
          setTimeout(function () {
            document.getElementById("i22").innerHTML = "1";
            document.getElementById("i22").style.visibility = "visible";
            setTimeout(function () {
              document.getElementById("c2").style.visibility = "visible";
              document.getElementById("c2").style.transformOrigin =
                "left bottom";
              document.getElementById("c2").style.animation =
                "rotateLine 1.5s forwards";
              setTimeout(function () {
                document.getElementById("i21").innerHTML = "Closed";
                document.getElementById("i21").style.visibility = "visible";
                setTimeout(function () {
                  document.getElementById("o1").innerHTML = "De-energized";
                  document.getElementById("o1").style.visibility = "visible";
                  setTimeout(function () {
                    document.getElementById("a1").style.visibility = "visible";
                    document.getElementById("output").textContent = "OFF";
                    document.getElementById("op").style.visibility = "visible";
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
  document.getElementById("header").innerHTML =
    "When S<sub>1</sub> is ON and S<sub>2</sub> is ON, light glows";
  setTimeout(function () {
    document.getElementById("hp1").style.visibility = "visible";
    document.getElementById("hp1").style.animation = "moveHand 1.8s forwards";
    document.getElementById("hp2").style.visibility = "visible";
    document.getElementById("hp2").style.animation = "moveHand 1.8s forwards";
    setTimeout(function () {
      document.getElementById("s1").style.animation =
        "moveSwitch 0.75s forwards";
      document.getElementById("s2").style.animation =
        "moveSwitch 0.75s forwards";
      setTimeout(function () {
        document.getElementById("a2").style.visibility = "visible";
        setTimeout(function () {
          hidehp();
          document.getElementById("i12").innerHTML = "1";
          document.getElementById("i12").style.visibility = "visible";
          setTimeout(function () {
            document.getElementById("c1").style.visibility = "visible";
            document.getElementById("c1").style.transformOrigin = "left bottom";
            document.getElementById("c1").style.animation =
              "rotateLine 1.5s forwards";
            setTimeout(function () {
              document.getElementById("i11").innerHTML = "Closed";
              document.getElementById("i11").style.visibility = "visible";
              setTimeout(function () {
                document.getElementById("a2").style =
                  "position:absolute; left:41.1%; top:78.8%; visibility:visible";
                setTimeout(function () {
                  document.getElementById("i22").innerHTML = "1";
                  document.getElementById("i22").style.visibility = "visible";
                  setTimeout(function () {
                    document.getElementById("c2").style.visibility = "visible";
                    document.getElementById("c2").style.transformOrigin =
                      "left bottom";
                    document.getElementById("c2").style.animation =
                      "rotateLine 1.5s forwards";
                    setTimeout(function () {
                      document.getElementById("i21").innerHTML = "Closed";
                      document.getElementById("i21").style.visibility =
                        "visible";
                      setTimeout(function () {
                        document.getElementById("a2").style =
                          "position:absolute; left: 47.4%;  top: 78.8%; visibility:visible";
                        setTimeout(function () {
                          document.getElementById("e1").style.visibility =
                            "visible";
                          document.getElementById("e1").style.animation =
                            "enlarge 1s linear infinite";
                          document.getElementById("o1").innerHTML = "Energized";
                          document.getElementById("o1").style.visibility =
                            "visible";
                          setTimeout(function () {
                            document.getElementById("a2").style =
                              "position:absolute; left:57.4%; top:78.8%; visibility:visible";
                            setTimeout(function () {
                              document.getElementById("lamp").style.visibility =
                                "visible";
                              document.getElementById("a1").style.visibility =
                                "visible";
                              document.getElementById("output").textContent =
                                "ON";
                              document.getElementById("op").style.visibility =
                                "visible";
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
