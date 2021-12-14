// VARIÁVEIS ---------------------------------------------
let html = document.querySelector("html");
let navbar; // pega a navbar pra deixar responsiva
let notif;
let janela_notif;

// NAVBAR RESPONSIVA ---------------------------------------
function resp_nav() {
  navbar = document.getElementById("navbar");

  if (navbar.className == "") {
    navbar.className += " responsivo";
  } else {
    navbar.className = "";
  }
}

// MANTÉM TEMA QUANDO ENTRA NO SITE COM OS COOKIES --------
if (Cookies.get("mid-mode")) {
  html.className = "mid-mode";
} else if (Cookies.get("white-mode")) {
  html.className = "white-mode";
} else if (Cookies.get("black-mode")) {
  html.className = "black-mode";
} else {
  html.className = "mid-mode";
}

// MUDAR TEMA ---------------------------------------------
function change_mode() {
  if (html.className == "white-mode") {
    Cookies.remove("white-mode");
    Cookies.remove("mid-mode");
    Cookies.set("black-mode", true, { secure: true }, { expires: 365 });
    html.className = "black-mode";
  } else if (html.className == "mid-mode") {
    Cookies.remove("mid-mode");
    Cookies.remove("black-mode");
    Cookies.set("white-mode", true, { secure: true }, { expires: 365 });
    html.className = "white-mode";
  } else {
    Cookies.remove("white-mode");
    Cookies.remove("black-mode");
    Cookies.set("mid-mode", true, { secure: true }, { expires: 365 });
    html.className = "mid-mode";
  }
}

function semScroll() {
  window.scrollTo(0, 0);
}

function notifAbre($nome_notif, $janela_notif) {
  janela_notif = document.getElementById($janela_notif);
  notif = document.getElementById($nome_notif);
  janela_notif.style.display = "block";
  notif.style.display = "block";
  //window.addEventListener("scroll", semScroll);
}

function notifFecha($nome_notif, $janela_notif) {
  janela_notif = document.getElementById($janela_notif);
  notif = document.getElementById($nome_notif);
  janela_notif.style.display = "none";
  notif.style.display = "none";
  //window.removeEventListener("scroll", semScroll);
}

function notifFechaCookies($nome_notif) {
  notif = document.getElementById($nome_notif);
  notif.style.display = "none";
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
