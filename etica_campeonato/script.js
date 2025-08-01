// Objeto de traduções (exemplo mínimo; complete com os seus textos reais)
const texts = {
  "PT-BR": {
    titulo: "MERGULHO NA HISTÓRIA E GLÓRIA",
    etica: "Ética",
    inicio: "Início",
    clubes: "Clubes",
    quemsomos: "Quem somos",
    faleconosco: "Fale Conosco",
    mundial: "Mundial de Clubes",
    textboxhistoria: "Texto de história em português.",
    textbox01p: "Texto 01p em português.",
    titleEtica: "Ética no campeonato",
    titlePrivacidade: "Política de Privacidade FIFA",
    txtPrivacidade: "Texto de privacidade em português...",
    titleSustentabilidade: "Sustentabilidade",
    txtSustentabilidade: "Texto de sustentabilidade em português...",
    titleResponsabilidade: "Responsabilidade Social",
    txtResponsabilidade: "Texto de responsabilidade social em português...",
    titleCodigoEtica: "Código de Ética",
    txtCodigoEtica: "Texto de código de ética em português...",
    titleNormas: "Normas de conduta",
    txtNormas: "Texto de normas de conduta em português..."
  },
  "ENG": {
    titulo: "DIVE INTO HISTORY AND GLORY",
    etica: "Ethics",
    inicio: "Home",
    clubes: "Clubs",
    quemsomos: "About Us",
    faleconosco: "Contact Us",
    mundial: "Club World Cup",
    textboxhistoria: "History text in English.",
    textbox01p: "Text 01p in English.",
    titleEtica: "Ethics in the tournament",
    titlePrivacidade: "FIFA Privacy Policy",
    txtPrivacidade: "Privacy text in English...",
    titleSustentabilidade: "Sustainability",
    txtSustentabilidade: "Sustainability text in English...",
    titleResponsabilidade: "Social Responsibility",
    txtResponsabilidade: "Social responsibility text in English...",
    titleCodigoEtica: "Code of Ethics",
    txtCodigoEtica: "Code of ethics text in English...",
    titleNormas: "Code of Conduct",
    txtNormas: "Code of conduct text in English..."
  }
};

function language() {

  const titulo = document.getElementById("title-etica")
  if(titulo.textContent === "Privacy Policy"){
    titulo.textContent = "Política de Privacidade FIFA"
  } else {titulo.textContent = "Privacy Policy"}


  const title_privacidade = document.getElementById("title-privacidade")
  if( title_privacidade.textContent === "Privacy Policy FIFA"){
    title_privacidade.textContent = "Política de Privacidade FIFA"
  } else {title_privacidade.textContent ="Privacy Policy FIFA"}

  const txt_privacidade = document.getElementById("txt-privacidade")
  if(txt_privacidade.textContent === "FIFA collects your personal data when you use its services (website, store, etc.) and uses it to provide more services or improve your experience. Your data is fully protected and stored in locations with appropriate security measures. You HAVE THE RIGHT to access and correct your data, withdraw consent at any time, and file complaints with data protection authorities."){
    txt_privacidade.textContent = "A FIFA coleta seus dados pessoais quando você utiliza seus serviços (site, loja, etc), e os usa para fornecer mais serviços ou melhorar sua experiência!! Seus dados são totalmente protegidos e armazenados em locais com medidas de segurança apropriadas, você TEM O DIREITO de: Acessar e corrigir seus dados; Retirar o consentimento a qualquer momento e reclamar às autoridades de proteção de dados"
  } else {txt_privacidade.textContent = "FIFA collects your personal data when you use its services (website, store, etc.) and uses it to provide more services or improve your experience. Your data is fully protected and stored in locations with appropriate security measures. You HAVE THE RIGHT to access and correct your data, withdraw consent at any time, and file complaints with data protection authorities."}

    const title_sustentabilidade = document.getElementById("title-sustentabilidade")
  if( title_sustentabilidade.textContent === "Sustentability"){
    title_sustentabilidade.textContent = "Sustentabilidade"
  } else {title_sustentabilidade.textContent ="Sustentability"}

    const title_responsabilidade = document.getElementById("title-responsabilidade")
  if( title_responsabilidade.textContent === "Social Responsability"){
    title_responsabilidade.textContent = "Responsabilidade Social"
  } else {title_responsabilidade.textContent ="Social Responsability"}

    const txt_responsabilidade = document.getElementById("txt-responsabilidade")
  if( txt_responsabilidade.textContent === "Since 2017, FIFA has had an official policy to respect and promote Human Rights, in accordance with UN guidelines. This policy has several objectives, two of which are: assessing risks and training teams in tournament organization; combating discrimination and promoting inclusion in football. It is worth noting that FIFA still faces criticism regarding the lack of monitoring and transparency in events, such as the 2022 World Cup, for example."){
    txt_responsabilidade.textContent = "Desde 2017, a FIFA possui uma política oficial para respeitar e promover os Direitos Humanos, de acordo com as diretrizes da ONU. Essa política tem diversos objetivos, sendo 2 deles: Avaliar riscos e treinar equipes na organização de torneios; Combater a discriminação e promover a inclusão no futebol. Vale ressaltar que ainda enfrenta críticas sobre a falta de monitoramento e transparência em eventos, como a Copa 2022, por exemplo."
  } else {txt_responsabilidade.textContent ="Since 2017, FIFA has had an official policy to respect and promote Human Rights, in accordance with UN guidelines. This policy has several objectives, two of which are: assessing risks and training teams in tournament organization; combating discrimination and promoting inclusion in football. It is worth noting that FIFA still faces criticism regarding the lack of monitoring and transparency in events, such as the 2022 World Cup, for example."}



    const txt_sustentabilidade = document.getElementById("txt-sustentabilidade")
  if( txt_sustentabilidade.textContent === "FIFA aims to reduce its carbon emissions by half by 2030 and to reach net zero by 2040. It already neutralized emissions at the 2022 World Cup by using clean energy and promoting sustainable stadiums. It is also educating about climate change in football"){
    txt_sustentabilidade.textContent = "FIFA busca reduzir pela metade suas emissões de carbono até 2030 e zerá-las até 2040. Já as neutralizou na Copa de 2022, utilizando energia limpa e promovendo estádios sustentáveis. Também educando sobre mudanças climáticas no futebol."
  } else {txt_sustentabilidade.textContent ="FIFA aims to reduce its carbon emissions by half by 2030 and to reach net zero by 2040. It already neutralized emissions at the 2022 World Cup by using clean energy and promoting sustainable stadiums. It is also educating about climate change in football"}

    const title_codigo_etica = document.getElementById("title-codigo-etica")
  if( title_codigo_etica.textContent === "Code of Ethics"){
    title_codigo_etica.textContent = "Código de Ética"
  } else {title_codigo_etica.textContent ="Code of Ethics"}

  const txt_codigo_etica= document.getElementById("txt-codigo-etica")
  if( txt_codigo_etica.textContent === "The FIFA Code of Ethics establishes the principles and values that should guide the conduct of all FIFA members, including players, referees, officials, and others involved in football. Its goal is to promote integrity, fair play, and transparency in all aspects of world football."){
    txt_codigo_etica.textContent = "O Código de Ética da FIFA estabelece os princípios e valores que devem orientar a conduta de todos os membros da FIFA, incluindo jogadores, árbitros, dirigentes e demais envolvidos no futebol. O objetivo é promover a integridade, o jogo limpo e a transparência em todos os aspectos do futebol mundial."
  } else {txt_codigo_etica.textContent ="The FIFA Code of Ethics establishes the principles and values that should guide the conduct of all FIFA members, including players, referees, officials, and others involved in football. Its goal is to promote integrity, fair play, and transparency in all aspects of world football."}

    const title_normas = document.getElementById("title-normas")
  if( title_normas.textContent === "Conduct Rules"){
    title_normas.textContent = "Normas de Conduta"
  } else {title_normas.textContent ="Conduct Rules"}

    const txt_normas = document.getElementById("txt-normas")
  if( txt_normas.textContent === "FIFA has a code of conduct that defines the rules and standards of behavior for everyone involved in football, including players, referees, staff, and member entities. This code covers a variety of topics, from sports ethics to conduct at live events, with the goal of ensuring a safe, fair, and ethical environment for all."){
    txt_normas.textContent = "A FIFA tem um código de conduta que define as regras e padrões de comportamento para todos os envolvidos no futebol, incluindo jogadores, árbitros, funcionários e entidades membro. Este código abrange uma variedade de temas, desde a ética no esporte até a conduta em eventos ao vivo, com o objetivo de garantir um ambiente seguro, justo e ético para todos."
  } else {txt_normas.textContent ="FIFA has a code of conduct that defines the rules and standards of behavior for everyone involved in football, including players, referees, staff, and member entities. This code covers a variety of topics, from sports ethics to conduct at live events, with the goal of ensuring a safe, fair, and ethical environment for all."}


/*=======================================*/

  const poplanguage = document.getElementById("language");
  poplanguage.classList.toggle("language-on");

  const langElement = document.getElementById("LANG");
  const currentLang = langElement.textContent === "PT-BR" ? "ENG" : "PT-BR";
  langElement.textContent = currentLang;

  console.log("Idioma trocado para:", currentLang);

  const t = texts[currentLang];

  document.getElementById("titulo").textContent = t.titulo;
  document.getElementById("link-etica").textContent = t.etica;
  document.getElementById("link-inicio").textContent = t.inicio;
  document.getElementById("link-clubes").textContent = t.clubes;
  document.getElementById("link-quemsomos").textContent = t.quemsomos;
  document.getElementById("link-faleconosco").textContent = t.faleconosco;
  document.getElementById("mundial").textContent = t.mundial;

  if (document.getElementById("textboxhistoria"))
    document.getElementById("textboxhistoria").textContent = t.textboxhistoria;

  if (document.getElementById("textbox01p"))
    document.getElementById("textbox01p").textContent = t.textbox01p;

  document.getElementById("title-etica").textContent = t.titleEtica;
  document.getElementById("title-privacidade").textContent = t.titlePrivacidade;
  document.getElementById("txt-privacidade").textContent = t.txtPrivacidade;
  document.getElementById("title-sustentabilidade").textContent = t.titleSustentabilidade;
  document.getElementById("txt-sustentabilidade").textContent = t.txtSustentabilidade;
  document.getElementById("title-responsabilidade").textContent = t.titleResponsabilidade;
  document.getElementById("txt-responsabilidade").textContent = t.txtResponsabilidade;
  document.getElementById("title-codigo-etica").textContent = t.titleCodigoEtica;
  document.getElementById("txt-codigo-etica").textContent = t.txtCodigoEtica;
  document.getElementById("title-normas").textContent = t.titleNormas;
  document.getElementById("txt-normas").textContent = t.txtNormas;
}

function config() {
  const config = document.getElementById("pop-config-off");
  config.classList.toggle("pop-config-on");
}

// Aguarda o DOM carregar antes de aplicar os listeners
document.addEventListener("DOMContentLoaded", () => {
  const clickconfig = document.getElementById("config");
  if (clickconfig) {
    clickconfig.addEventListener("click", config);
  }

  const clickLanguage = document.getElementById("language");
  if (clickLanguage) {
    clickLanguage.addEventListener("click", language);
  }
});

function OpenNav(){
  const nav = document.getElementById("nav")
  nav.classList.toggle("nav-open")
}


  const clicknav = document.getElementById("pop-nav")
  clicknav.addEventListener("click", OpenNav)