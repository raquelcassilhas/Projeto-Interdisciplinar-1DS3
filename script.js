const texts = {
  "PT-BR": {
    titulo: "MERGULHO NA HISTÓRIA E GLÓRIA",
    etica: "Ética",
    inicio: "Início",
    clubes: "Clubes",
    quemsomos: "Quem somos",
    faleconosco: "Fale Conosco",
    mundial: "MUNDIAL DE CLUBES FIFA 2025",
    textboxhistoria: "HISTÓRIA",
    textbox01p: `O Mundial de Clubes da FIFA é uma competição que reúne os campeões de cada continente para definir o melhor clube de futebol do mundo. Sua origem está na antiga Copa Intercontinental, disputada de 1960 a 2004 entre os campeões da UEFA Champions League (Europa) e da Copa Libertadores (América do Sul). Esse torneio, embora não fosse organizado pela FIFA, era considerado por muitos como um título mundial, com confrontos históricos entre grandes clubes como Real Madrid, Boca Juniors, Milan, Santos e Peñarol.

Em 2000, a FIFA decidiu criar seu próprio torneio mundial, mais inclusivo, reunindo campeões de todos os continentes. A primeira edição foi realizada no Brasil e vencida pelo Corinthians, em uma final contra o Vasco da Gama. No entanto, o torneio sofreu com problemas organizacionais e financeiros, e ficou suspenso até 2005, quando foi relançado oficialmente, substituindo a Copa Intercontinental.

A partir de então, o Mundial de Clubes passou a ser disputado anualmente, geralmente em dezembro, com sete equipes: os campeões da Europa, América do Sul, Ásia, África, Oceania e Concacaf, além de um representante do país-sede. Com o tempo, os clubes europeus passaram a dominar a competição, graças ao alto nível técnico, investimentos e elencos recheados de estrelas. Equipes como Barcelona, Real Madrid, Bayern de Munique, Liverpool e Chelsea conquistaram o título nos últimos anos, enfrentando sul-americanos como Santos, River Plate, Flamengo e Palmeiras em finais muito esperadas.

Em busca de maior equilíbrio e visibilidade global, a FIFA anunciou um novo formato para o torneio a partir de 2025: o Mundial será ampliado para 32 clubes e disputado a cada quatro anos, em moldes semelhantes à Copa do Mundo de seleções. A expectativa é que essa mudança aumente o prestígio da competição, dê mais espaço a clubes de diferentes regiões e torne a disputa pelo título mundial de clubes ainda mais relevante no cenário do futebol internacional.`,
textbox02title: 'Pŕoximas partidas',
textbox02p: '15 de jun. de 2025 – 13 de jul. de 2025'
  },
  "ENG": {
    titulo: "A DIVE INTO HISTORY AND GLORY",
    etica: "Ethics",
    inicio: "HOME",
    clubes: "Clubs",
    quemsomos: "About Us",
    faleconosco: "Contact Us",
    mundial: "FIFA CLUB WORLD CUP 2025",
    textboxhistoria: "HISTORY",
    textbox01p: `The FIFA Club World Cup is a competition that brings together the champions from each continent to determine the best football club in the world. Its origins lie in the old Intercontinental Cup, held from 1960 to 2004 between the winners of the UEFA Champions League (Europe) and the Copa Libertadores (South America). Although this tournament was not organized by FIFA, it was considered by many as a world title, featuring historic clashes between great clubs such as Real Madrid, Boca Juniors, Milan, Santos, and Peñarol. 

In 2000, FIFA decided to create its own, more inclusive global tournament, bringing together champions from all continents. The first edition was held in Brazil and won by Corinthians, in a final against Vasco da Gama. However, the tournament faced organizational and financial issues and was suspended until 2005, when it was officially relaunched, replacing the Intercontinental Cup.

Since then, the Club World Cup has been held annually, usually in December, featuring seven teams: the champions of Europe, South America, Asia, Africa, Oceania, and CONCACAF, plus a representative from the host country. Over time, European clubs have come to dominate the competition, thanks to their high technical level, investments, and star-studded squads. Teams like Barcelona, Real Madrid, Bayern Munich, Liverpool, and Chelsea have won the title in recent years, facing South American clubs such as Santos, River Plate, Flamengo, and Palmeiras in highly anticipated finals.

Seeking greater balance and global visibility, FIFA announced a new format for the tournament starting in 2025: the Club World Cup will be expanded to 32 clubs and held every four years, following a model similar to the FIFA World Cup for national teams. The expectation is that this change will increase the competition's prestige, give more space to clubs from different regions, and make the battle for the world club title even more relevant on the international football stage.`,
textbox02title: 'Next Matches',
textbox02p: 'June 15, 2025 – July 13, 2025'
  }
};

// Função para alternar o menu de configurações
function config() {
  const config = document.getElementById("pop-config-off");
  config.classList.toggle("pop-config-on");
}

const clickconfig = document.getElementById("config");
clickconfig.addEventListener("click", config);

// Função para alternar o idioma da página
function language() {
  const poplanguage = document.getElementById("language");
  poplanguage.classList.toggle("language-on");

  const langElement = document.getElementById("LANG");
  const currentLang = langElement.textContent === "PT-BR" ? "ENG" : "PT-BR";

  langElement.textContent = currentLang;

  document.getElementById("titulo").textContent = texts[currentLang].titulo;
  document.getElementById("link-etica").textContent = texts[currentLang].etica;
  document.getElementById("link-inicio").textContent = texts[currentLang].inicio;
  document.getElementById("link-clubes").textContent = texts[currentLang].clubes;
  document.getElementById("link-quemsomos").textContent = texts[currentLang].quemsomos;
  document.getElementById("link-faleconosco").textContent = texts[currentLang].faleconosco;
  document.getElementById("mundial").textContent = texts[currentLang].mundial;
  document.getElementById("textboxhistoria").textContent = texts[currentLang].textboxhistoria;
  document.getElementById("textbox02title").textContent = texts[currentLang].textbox02title
  document.getElementById("textbox01p").textContent = texts[currentLang].textbox01p;
  document.getElementById("textbox02p").textContent = texts[currentLang].textbox02p
  document.getElementById("mundial").classList.toggle("mundial-eng");
}

const clicklanguage = document.getElementById("language");
clicklanguage.addEventListener("click", language);

function OpenNav(){
  const nav = document.getElementById("nav")
  nav.classList.toggle("nav-open")
}


  const clicknav = document.getElementById("pop-nav")
  clicknav.addEventListener("click", OpenNav)
