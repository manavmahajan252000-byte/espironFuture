/* Shared by the guide pages. Keep the number in step with index.html. */
var CONFIG = { whatsapp: "918360363971" };
(function () {
  var hi = encodeURIComponent("Hi Espiron Future, I read your guide and would like free career counselling.");
  document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + hi; });
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("[data-cta]") : null;
    if (!a) return;
    try { if (window.gtag) gtag("event", a.hasAttribute("data-wa") ? "click_whatsapp" : "guide_cta", { page: location.pathname, spot: a.getAttribute("data-cta") }); } catch (err) {}
  });
})();
