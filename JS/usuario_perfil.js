var infoPessoais;
var cursIniciados;
var certificados;

var infoPessoais_div;
var cursIniciados_div;
var certificados_div;

// MUDA MENU DO PERFIL DO USUÁRIO --------------------------
function usuarioPerfil_reseta() {
  infoPessoais_div = document.getElementById(
    "usuario_informacoes_pessoais_div"
  );
  cursIniciados_div = document.getElementById("usuario_cursos_iniciados_div");
  certificados_div = document.getElementById("usuario_certificados_div");
  infoPessoais_i = document.getElementById("usuario_informacoes_pessoais_i");
  cursIniciados_i = document.getElementById("usuario_cursos_iniciados_i");
  certificados_i = document.getElementById("usuario_certificados_i");
  infoPessoais = document.getElementById("usuario_informacoes_pessoais");
  cursIniciados = document.getElementById("usuario_cursos_iniciados");
  certificados = document.getElementById("usuario_certificados");

  infoPessoais_div.style.display = "none";
  cursIniciados_div.style.display = "none";
  certificados_div.style.display = "none";

  infoPessoais_i.style.display = "none";
  cursIniciados_i.style.display = "none";
  certificados_i.style.display = "none";

  infoPessoais.className = "";
  cursIniciados.className = "";
  certificados.className = "";
}

function usuarioPerfil_mudaMenu($menu) {
  usuarioPerfil_reseta();

  switch ($menu) {
    case "usuario_informacoes_pessoais":
      infoPessoais_div.style.display = "inline-block";
      //infoPessoais_i.style.display = "inline-block";
      infoPessoais.className = "usuario_ativo_p";
      break;

    case "usuario_cursos_iniciados":
      cursIniciados_div.style.display = "inline-block";
      //cursIniciados_i.style.display = "inline-block";
      cursIniciados.className = "usuario_ativo_p";
      break;

    case "usuario_certificados":
      certificados_div.style.display = "inline-block";
      //certificados_i.style.display = "inline-block";
      certificados.className = "usuario_ativo_p";
      break;
  }
}
