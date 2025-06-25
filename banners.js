document.addEventListener("DOMContentLoaded", function() {
  // Alert para confirmar que el script se carga
  alert("✅ banners.js cargado");

  // Seleccionamos el body del post
  var postBody = document.querySelector(".post-body");
  if (!postBody) return;

  // Detectamos los anchors de etiquetas en varios posibles contenedores
  var labelAnchors = Array.from(
    document.querySelectorAll(
      ".post-labels a, .post-footer .post-labels a, .labels a"
    )
  );

  // Creamos el array de etiquetas (en minúscula)
  var labels = labelAnchors
    .map(function(e) { return e.textContent.trim().toLowerCase(); })
    .filter(function(l) { return !!l; });

  // Alert para mostrar qué etiquetas se han detectado
  alert("Etiquetas detectadas: " + labels.join(", "));

  // Array donde guardaremos los snippets HTML de los banners
  var banners = [];

  if (labels.includes("stocks")) {
    banners.push(
      '<div style="text-align:center;margin:20px 0;">' +
        '<a href="https://tradezero.com/partner/across-markets-group" target="_blank">' +
          '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVFgGpJRtBnQAHzud-hj0KLJz2Zmb1q2ch73prOaqYbHSeDd8VStWFH6QkCKit9pUnDQpTv9X7Eo8wsMTdVf8HJsk3Yoi5QqWuksoOZryyrMY0Leu7suv9nxgKdkZy6E28I-84IJmfq-R9TwM5vBe-xxxQZhjP8v3uhmoGBQzbE7d7stjrRE5Sm-p1Q5I/s1600/Banner%20Tradezero%20Espa%C3%B1ol.gif" width="300" height="250" alt="TradeZero"/>' +
        '</a>' +
      '</div>'
    );
    banners.push(
      '<div style="text-align:center;margin:20px 0;">' +
        '<a href="http://www.tradethepool.com?afmc=2gw" target="_blank">' +
          '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVj3Dn3kTITeM1kjktSoNPHvAFpwN5BTSqRFHpCSlPHpSQTyEIiG3VjmYouQ30-uyOsECObL8rat_CnOg0uD2Xn8S_F7aFjcg6G8FmvtAun-eTDp76KbIGyFCHVEaB630Q1Z9l7_hCNUtKB5H8mn8wjgcvNW38UJyOptWSPFMrFwNdMsWHJxOuYikJ7IE/s1600/GIF%20TTP%20Espa%C3%B1ol.gif" width="300" height="250" alt="TTP"/>' +
        '</a>' +
      '</div>'
    );
  }

  if (labels.includes("forex")) {
    banners.push(
      '<div style="text-align:center;margin:20px 0;">' +
        '<a href="https://blackbull.com/es/live-account/?cmp=5p0z2d3q&amp;refid=4155" target="_blank">' +
          '<img src="https://ib-static.blackbull.com/banners/146/blackbullmarkets146.png" width="300" height="250" alt="Blackbull"/>' +
        '</a>' +
      '</div>',
      '<div style="text-align:center;margin:20px 0;">' +
        '<a href="https://one.exnesstrack.org/intl/es/a/cj2u6xkfzk" target="_blank">' +
          '<img src="https://d3dpet1g0ty5ed.cloudfront.net/ES_Spreads_Pay_20less_20keep_20more_2_4_Google_300x250.jpg" width="300" height="250" alt="Exness"/>' +
        '</a>' +
      '</div>'
    );
  }

  if (labels.includes("cripto")) {
    banners.push(
      '<div style="text-align:center;margin:20px 0;">' +
        '<a href="https://crypto.com/exch/phybcguvzq" target="_blank">' +
          '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKcYocZbbt3o3rDip9PFTOS0wtyOg46DgKZOjgh8onqJIo5VixGLKEs3o9MIP9slXNaxugy4A5gdhAMMd3KSfKSQfFerKzalTdNZtrjttBpN-UvMwFXC4iJS-WRvBblAbCGmdkwnzTMX4d1m_ZyAA_qD5pTox8So3mzLaXrpIOfWAz7Xk0zw_sOXQR7R4/s300/Banner%20Crypto.com%20Espa%C3%B1ol.gif" width="300" height="250" alt="Crypto.com"/>' +
        '</a>' +
      '</div>'
    );
  }

  if (labels.includes("futuros")) {
    banners.push(
      '<div style="text-align:center;margin:20px 0;">' +
        '<a href="https://www.oneuptrader.com?ref=zdczowm" target="_blank">' +
          '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxdqwOG2CrUJ2GePaeJBBryKbCOQhegotao32_EofX2MvU4H5z8PzSGIEnOCRDGGzcHSX8MLMrvQHGHZLHazAxlKLfXZlCDjPWdK5lGnoNKrPKoxG31j6BcMWbITXryAU3IVgYHz0uWnuP2NVZhRXDS9PQr_RGyzabZfaL7MsMil5SRKEEMnlc0i8ZHpI/s1600/GIF%20OneUp%20Trader%20Espa%C3%B1ol.gif" width="300" height="250" alt="OneUp"/>' +
        '</a>' +
      '</div>'
    );
  }

  // Siempre añadimos los botones
  banners.push(
    '<div style="text-align:center;margin:30px 0;"><a class="animated-btn" href="https://www.vodder.icu/p/broker-list.html" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpGqybsASMSGCtOqmDPMGy4zyPkxdgC2KrBdRShpfD_9--Url-SRzZDiOWjX__f6dkgHQTnN2c87eD2yEpYxxDE9zGOvDxm2GOCdcFgITLHp7EBf_JOYN_nk1vJcCe4rgUGzvYC45tqNejcp8ZgdlkO2BLNtsKGtbSaqn8emc52n2L_Hf9U4bLAIo-Qwk/s1080/9-Photoroom.png" width="24" height="24" alt="Logo" style="margin-right:10px;"/>Opera Ahora</a></div>',
    '<div style="text-align:center;margin:30px 0;"><a class="animated-btn" href="https://www.vodder.icu/p/opera-con-capital-institucional.html" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpGqybsASMSGCtOqmDPMGy4zyPkxdgC2KrBdRShpfD_9--Url-SRzZDiOWjX__f6dkgHQTnN2c87eD2yEpYxxDE9zGOvDxm2GOCdcFgITLHp7EBf_JOYN_nk1vJcCe4rgUGzvYC45tqNejcp8ZgdlkO2BLNtsKGtbSaqn8emc52n2L_Hf9U4bLAIo-Qwk/s1080/9-Photoroom.png" width="24" height="24" alt="Logo" style="margin-right:10px;"/>Fondéate Ahora</a></div>'
  );

  // Mezclamos y los insertamos tras cada párrafo
  banners.sort(function() { return Math.random() - 0.5; });
  var paras = postBody.querySelectorAll("p");
  banners.slice(0, paras.length).forEach(function(html, i) {
    paras[i].insertAdjacentHTML("afterend", html);
  });
});
