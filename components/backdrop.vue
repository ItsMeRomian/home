<template>
  <div
    ref="bgRef"
    id="bg"
    class="fixed bg-cover w-auto h-auto m-0 p-0 z-[-2]"
  ></div>
</template>
<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core";

const bgRef = ref<HTMLElement>();

onMounted(async () => {
  _onLoad();

  useResizeObserver(bgRef, () => {
    _onResize();
  });
});

const refreshDuration = 10000;
let refreshTimeout: string | number | NodeJS.Timeout | undefined;
let numPointsX: number;
let numPointsY: number;
let unitWidth: number;
let unitHeight: number;
let points: { x: number; y: number; originX: number; originY: number }[] = [];

function _onLoad() {
  if (!bgRef.value) return;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", window.outerWidth.toString());
  svg.setAttribute("height", window.outerHeight.toString());
  bgRef.value.appendChild(svg);

  const unitSize = (window.innerWidth + window.innerHeight) / 15;
  numPointsX = Math.ceil(window.innerWidth / unitSize) + 1;
  numPointsY = Math.ceil(window.innerHeight / unitSize) + 1;
  unitWidth = Math.ceil(window.innerWidth / (numPointsX - 1));
  unitHeight = Math.ceil(window.innerHeight / (numPointsY - 1));

  for (var y = 0; y < numPointsY; y++) {
    for (var x = 0; x < numPointsX; x++) {
      points.push({
        x: unitWidth * x,
        y: unitHeight * y,
        originX: unitWidth * x,
        originY: unitHeight * y,
      });
    }
  }

  randomize();

  for (var i = 0; i < points.length; i++) {
    if (
      points[i].originX != unitWidth * (numPointsX - 1) &&
      points[i].originY != unitHeight * (numPointsY - 1)
    ) {
      var topLeftX = points[i].x;
      var topLeftY = points[i].y;
      var topRightX = points[i + 1].x;
      var topRightY = points[i + 1].y;
      var bottomLeftX = points[i + numPointsX].x;
      var bottomLeftY = points[i + numPointsX].y;
      var bottomRightX = points[i + numPointsX + 1].x;
      var bottomRightY = points[i + numPointsX + 1].y;

      var rando = Math.floor(Math.random() * 2);

      for (var n = 0; n < 2; n++) {
        let polygon = document.createElementNS(
          svg.namespaceURI,
          "polygon"
        ) as any;

        if (rando == 0) {
          if (n == 0) {
            polygon.point1 = i;
            polygon.point2 = i + numPointsX;
            polygon.point3 = i + numPointsX + 1;
            polygon.setAttribute(
              "points",
              topLeftX +
                "," +
                topLeftY +
                " " +
                bottomLeftX +
                "," +
                bottomLeftY +
                " " +
                bottomRightX +
                "," +
                bottomRightY
            );
          } else if (n == 1) {
            polygon.point1 = i;
            polygon.point2 = i + 1;
            polygon.point3 = i + numPointsX + 1;
            polygon.setAttribute(
              "points",
              topLeftX +
                "," +
                topLeftY +
                " " +
                topRightX +
                "," +
                topRightY +
                " " +
                bottomRightX +
                "," +
                bottomRightY
            );
          }
        } else if (rando == 1) {
          if (n == 0) {
            polygon.point1 = i;
            polygon.point2 = i + numPointsX;
            polygon.point3 = i + 1;
            polygon.setAttribute(
              "points",
              topLeftX +
                "," +
                topLeftY +
                " " +
                bottomLeftX +
                "," +
                bottomLeftY +
                " " +
                topRightX +
                "," +
                topRightY
            );
          } else if (n == 1) {
            polygon.point1 = i + numPointsX;
            polygon.point2 = i + 1;
            polygon.point3 = i + numPointsX + 1;
            polygon.setAttribute(
              "points",
              bottomLeftX +
                "," +
                bottomLeftY +
                " " +
                topRightX +
                "," +
                topRightY +
                " " +
                bottomRightX +
                "," +
                bottomRightY
            );
          }
        }
        polygon.setAttribute("fill", "rgba(0,0,0," + Math.random() / 3 + ")");
        var animate = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "animate"
        );
        animate.setAttribute("fill", "freeze");
        animate.setAttribute("attributeName", "points");
        animate.setAttribute("dur", refreshDuration + "ms");
        animate.setAttribute("calcMode", "linear");
        polygon.appendChild(animate);
        svg.appendChild(polygon);
      }
    }
  }

  refresh();
}

function randomize() {
  for (var i = 0; i < points.length; i++) {
    if (
      points[i].originX != 0 &&
      points[i].originX != unitWidth * (numPointsX - 1)
    ) {
      points[i].x =
        points[i].originX + Math.random() * unitWidth - unitWidth / 2;
    }
    if (
      points[i].originY != 0 &&
      points[i].originY != unitHeight * (numPointsY - 1)
    ) {
      points[i].y =
        points[i].originY + Math.random() * unitHeight - unitHeight / 2;
    }
  }
}

function refresh() {
  const intro = document.querySelector("#bg svg");
  if (!intro) return;
  randomize();
  for (var i = 0; i < intro.childNodes.length; i++) {
    let polygon = intro.childNodes[i] as any;
    let animate = polygon.childNodes[0];
    if (animate.getAttribute("to")) {
      animate.setAttribute("from", animate.getAttribute("to"));
    }
    animate.setAttribute(
      "to",
      points[polygon.point1].x +
        "," +
        points[polygon.point1].y +
        " " +
        points[polygon.point2].x +
        "," +
        points[polygon.point2].y +
        " " +
        points[polygon.point3].x +
        "," +
        points[polygon.point3].y
    );
    animate.beginElement();
  }
  refreshTimeout = setTimeout(function () {
    refresh();
  }, refreshDuration);
}

function _onResize() {
  document.querySelector("#bg svg")?.remove();
  clearTimeout(refreshTimeout);
  _onLoad();
}
</script>
