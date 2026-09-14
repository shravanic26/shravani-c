/* theme.js — the desk lamp.
   Dark mode works by putting data-theme="dark" on <html>; styles.css
   swaps the color tokens when it sees that. The choice is remembered
   in localStorage so it sticks between pages and visits. */
(function () {
  var root = document.documentElement;

  // apply a remembered choice before the page paints, so it doesn't flash
  try { var saved = localStorage.getItem("theme"); if (saved) root.setAttribute("data-theme", saved); } catch (e) {}

  document.addEventListener("DOMContentLoaded", function () {
    var lamp = document.getElementById("lamp");
    if (!lamp) return;
    lamp.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  });
})();
