"use strict";

window.addEventListener(
  "DOMContentLoaded",
  function () {
    $("header").textillate({
      loop: false,
      minDisplayTime: 9000,
      initialDelay: 1000,
      autostart: true,
      in: {
        effect: "fadeInLeftBig",
        delayScale: 1.5,
        delay: 50,
        sync: false,
        shuffle: true,
      },
    });
    $(function () {
      ScrollReveal().reveal("#btn1", { duration: 9000 });
    });

    this.setTimeout(function () {
      let popMessage = "いらっしゃい! おみくじ引いてって!";
      this.window.alert(popMessage);
    }, "3000");
  },
  false,
);
const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");

btn1.addEventListener(
  "click",
  function () {
    let n = Math.floor(Math.random() * 3);
    switch (n) {
      case 0:
        omikujiText.textContent = "Very Happy!!!";
        omikujiText.style.color = "red";
        omikujiText.style.fontSize = "38px";
        break;
      case 1:
        omikujiText.textContent = "Happy!!!";
        omikujiText.style.color = "yellow";
        omikujiText.style.fontSize = "30px";
        break;
      case 2:
        omikujiText.textContent = "UnHappy!!!";
        omikujiText.style.color = "black";
        omikujiText.style.fontSize = "20px";
        break;
    }
    $(document).snowfall("clear");
    $(document).ready(function () {
      $(document).snowfall({
        maxSpeed: 10,
        minSpeed: 1,
        maxSize: 30,
        minSize: 10,
        image: "./img/sakura_hanabira.png",
      });
    });
  },
  false,
);
