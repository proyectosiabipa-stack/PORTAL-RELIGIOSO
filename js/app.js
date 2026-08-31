const months=[
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

function candleRecommendation(item){
  const confirmed={
    "candelaria":{
      label:"Uso litúrgico confirmado",
      product:"Velas para la bendición y procesión",
      text:"Se recomienda usar velas para la bendición y la procesión, en sintonía con la celebración de la Presentación del Señor y la tradición de la bendición de las candelas.",
      sourceLabel:"Vaticano, Presentación del Señor",
      sourceUrl:"https://www.vatican.va/roman_curia/congregations/ccscrlife/documents/rc_con_ccscrlife_doc_20000202_jubilee-presentation-lord_en.html"
    },
    "resurreccion":{
      label:"Uso litúrgico confirmado",
      product:"Cirio pascual",
      text:"Se recomienda el cirio pascual como signo central de la Vigilia y del tiempo pascual, acompañado por una presentación litúrgica sobria según la celebración parroquial.",
      sourceLabel:"USCCB, Roman Missal and the Easter Vigil",
      sourceUrl:"https://www.usccb.org/prayer-and-worship/liturgical-year-and-calendar/triduum/roman-missal-and-the-easter-vigil"
    }
  };

  if(confirmed[item.id])return confirmed[item.id];

  const special={
    "jueves-santo":"Velas blancas",
    "viernes-santo":"Velas blancas",
    "domingo-ramos":"Vela de oración",
    "corpus":"Velón de adoración",
    "nazareno":"Velón de oración",
    "difuntos":"Velón de memoria",
    "san-benito":"Vela de devoción comunitaria"
  };

  const product=special[item.id]||(
    item.type==="principal"
      ?"Vela o velón blanco"
      :"Vela dorada suave o velón blanco"
  );

  return {
    label:"Artículo BIPA recomendado",
    product:product,
    text:"Se recomienda este acompañamiento devocional de forma sobria y respetuosa, en armonía con la oración comunitaria, la costumbre local y las orientaciones de la parroquia.",
    sourceLabel:"USCCB, Composition of Candles for Use in the Liturgy",
    sourceUrl:"https://www.usccb.org/prayer-and-worship/sacred-art-and-music/architecture-and-environment/composition-of-candles"
  };
}

const events=[
  ["maria-madre","Santa María, Madre de Dios",0,"1 de enero","Nacional","principal","Solemnidad mariana que inicia el año.","Forma parte del calendario universal.","Vaticano"],
  ["epifania","Epifanía del Señor",0,"6 de enero","Nacional","principal","Manifestación de Cristo a todos los pueblos.","Tradición de los Reyes Magos.","Vaticano"],
  ["divina-pastora","Divina Pastora",0,"14 de enero","Barquisimeto, Lara","regional","Procesión mariana de gran relevancia nacional.","Reúne multitudes en Barquisimeto.","Conferencia Episcopal Venezolana"],
  ["san-sebastian","San Sebastián",0,"20 de enero","San Cristóbal, Táchira","regional","Fiesta patronal de San Cristóbal.","Tiene fuerte arraigo tachirense.","Diócesis de San Cristóbal"],
  ["virgen-paz","Nuestra Señora de la Paz",0,"24 de enero","Trujillo","regional","Advocación mariana vinculada con Trujillo.","Su monumento es centro de peregrinación.","Diócesis de Trujillo"],
  ["conversion-pablo","Conversión de San Pablo",0,"25 de enero","Nacional","principal","Memoria de la conversión del apóstol Pablo.","Cierra la semana de oración por la unidad.","Vaticano"],

  ["candelaria","Nuestra Señora de la Candelaria",1,"2 de febrero","Nacional","principal","Presentación de Jesús en el templo.","Se bendicen velas en muchas parroquias.","Vaticano"],
  ["san-blas","San Blas",1,"3 de febrero","Parroquias locales","regional","Memoria de San Blas.","Tradicionalmente se bendice la garganta.","Vaticano"],
  ["catedra-pedro","Cátedra de San Pedro",1,"22 de febrero","Nacional","principal","Celebración de la misión pastoral de Pedro.","Fiesta litúrgica universal.","Vaticano"],

  ["san-jose","San José",2,"19 de marzo","Nacional","principal","Solemnidad de San José.","Patrono de trabajadores y familias.","Vaticano"],
  ["anunciacion","Anunciación del Señor",2,"25 de marzo","Nacional","principal","Anuncio del ángel Gabriel a María.","Celebra el misterio de la Encarnación.","Vaticano"],
  ["domingo-ramos","Domingo de Ramos",2,"Fecha móvil","Nacional","principal","Inicio de la Semana Santa.","La fecha cambia cada año.","Vaticano"],

  ["nazareno","Nazareno de San Pablo",3,"Miércoles Santo","Caracas","regional","Procesión del Nazareno de San Pablo.","Devoción multitudinaria caraqueña.","Arquidiócesis de Caracas"],
  ["jueves-santo","Jueves Santo",3,"Fecha móvil","Nacional","principal","Conmemoración de la Última Cena.","Forma parte del Triduo Pascual.","Vaticano"],
  ["viernes-santo","Viernes Santo",3,"Fecha móvil","Nacional","principal","Conmemoración de la Pasión de Cristo.","Se realizan viacrucis y oficios solemnes.","Vaticano"],
  ["resurreccion","Domingo de Resurrección",3,"Fecha móvil","Nacional","principal","Celebración de la Resurrección.","Centro del año litúrgico.","Vaticano"],
  ["san-marcos","San Marcos Evangelista",3,"25 de abril","Nacional","principal","Memoria del evangelista San Marcos.","Presente en calendarios parroquiales.","Vaticano"],

  ["cruz-mayo","Cruz de Mayo",4,"3 de mayo","Venezuela","regional","Tradición religiosa dedicada a la Santa Cruz.","Incluye cantos y velorios.","Fundación Empresas Polar"],
  ["san-isidro","San Isidro Labrador",4,"15 de mayo","Comunidades agrícolas","regional","Devoción de agricultores y campesinos.","Se bendicen campos y cosechas.","Vaticano"],
  ["san-fernando","San Fernando Rey",4,"30 de mayo","San Fernando de Apure","regional","Fiesta patronal de San Fernando.","Se relaciona con las Calendas.","Diócesis de San Fernando de Apure"],
  ["visitacion","Visitación de María",4,"31 de mayo","Nacional","principal","María visita a su prima Isabel.","Fiesta mariana universal.","Vaticano"],

  ["antonio","San Antonio de Padua",5,"13 de junio","Lara y otras regiones","regional","Devoción popular muy extendida.","En Lara se vincula con el Tamunangue.","Fundación Empresas Polar"],
  ["juan-bautista","San Juan Bautista",5,"24 de junio","Miranda, Aragua y La Guaira","regional","Fiesta acompañada de tambores y procesiones.","Manifestación religiosa tradicional venezolana.","Ministerio de Cultura"],
  ["corpus","Corpus Christi",5,"Fecha móvil","Nacional","principal","Solemnidad del Cuerpo de Cristo.","Se vincula con los Diablos Danzantes.","Vaticano"],
  ["pedro-pablo","San Pedro y San Pablo",5,"29 de junio","Nacional","principal","Solemnidad de los apóstoles.","San Pedro es patrono de La Guaira.","Vaticano"],

  ["carmen","Nuestra Señora del Carmen",6,"16 de julio","Nacional","principal","Advocación mariana venerada en numerosas comunidades.","Patrona de pueblos, pescadores e instituciones.","Vaticano"],
  ["santiago","Santiago Apóstol",6,"25 de julio","Nacional","principal","Fiesta del apóstol Santiago.","Presente en numerosas parroquias.","Vaticano"],
  ["santa-ana","Santa Ana",6,"26 de julio","Nacional","principal","Memoria de la madre de María.","Patrona de múltiples comunidades.","Vaticano"],
  ["santa-marta","Santa Marta",6,"29 de julio","Parroquias locales","regional","Memoria de Santa Marta.","Celebración principalmente parroquial.","Vaticano"],

  ["virgen-nieves","Nuestra Señora de las Nieves",7,"5 de agosto","Ciudad Bolívar","regional","Patrona de Ciudad Bolívar.","Su fiesta se realiza en la Catedral Metropolitana.","Arquidiócesis de Ciudad Bolívar"],
  ["transfiguracion","Transfiguración del Señor",7,"6 de agosto","Nacional","principal","Conmemora la Transfiguración de Jesús.","Fiesta litúrgica universal.","Vaticano"],
  ["consolacion","Nuestra Señora de la Consolación",7,"15 de agosto","Táriba, Táchira","regional","Advocación mariana de los Andes.","Su santuario recibe peregrinos.","Diócesis de San Cristóbal"],
  ["asuncion","Asunción de María",7,"15 de agosto","Nacional","principal","Solemnidad de la Asunción de la Virgen.","Una de las principales fiestas marianas.","Vaticano"],

  ["valle","Nuestra Señora del Valle",8,"8 de septiembre","Nueva Esparta y Oriente","regional","Devoción mariana emblemática del oriente venezolano.","Su santuario recibe peregrinos.","Diócesis de Margarita"],
  ["coromoto","Nuestra Señora de Coromoto",8,"11 de septiembre","Guanare y todo el país","principal","Patrona de Venezuela.","El Santuario Nacional está en Guanare.","Conferencia Episcopal Venezolana"],
  ["exaltacion","Exaltación de la Santa Cruz",8,"14 de septiembre","Nacional","principal","Fiesta dedicada a la Santa Cruz.","Complementa la tradición de Cruz de Mayo.","Vaticano"],
  ["miguel","San Miguel Arcángel",8,"29 de septiembre","Nacional","principal","Celebración de San Miguel Arcángel.","Venerado como protector.","Vaticano"],

  ["teresa","Santa Teresa del Niño Jesús",9,"1 de octubre","Nacional","principal","Memoria de Santa Teresa.","Patrona de las misiones.","Vaticano"],
  ["francisco","San Francisco de Asís",9,"4 de octubre","Nacional","principal","Memoria de San Francisco de Asís.","Inspira comunidades franciscanas.","Vaticano"],
  ["rosario","Nuestra Señora del Rosario",9,"7 de octubre","Nacional","principal","Fiesta de la Virgen del Rosario.","Se realizan novenas y rosarios.","Vaticano"],
  ["pilar","Nuestra Señora del Pilar",9,"12 de octubre","Carúpano y otras regiones","regional","Advocación mariana con presencia diocesana.","Patrona de comunidades venezolanas.","Diócesis de Carúpano"],
  ["judas","San Judas Tadeo",9,"28 de octubre","Nacional","principal","Fiesta del apóstol San Judas Tadeo.","Devoción popular muy extendida.","Vaticano"],

  ["todos-santos","Todos los Santos",10,"1 de noviembre","Nacional","principal","Solemnidad de todos los santos.","Calendario universal.","Vaticano"],
  ["difuntos","Fieles Difuntos",10,"2 de noviembre","Nacional","principal","Oración por los fieles difuntos.","Visitas a cementerios y misas.","Vaticano"],
  ["virgen-socorro","Nuestra Señora del Socorro",10,"13 de noviembre","Valencia, Carabobo","regional","Advocación patrona de Valencia.","Tiene gran tradición valenciana.","Arquidiócesis de Valencia"],
  ["chiquinquira","Nuestra Señora de Chiquinquirá",10,"18 de noviembre","Maracaibo, Zulia","regional","Patrona del Zulia.","La Chinita reúne multitudes.","Arquidiócesis de Maracaibo"],
  ["cristo-rey","Cristo Rey",10,"Último domingo de noviembre","Nacional","principal","Solemnidad de Cristo Rey.","Cierra el año litúrgico.","Vaticano"],

  ["inmaculada","Inmaculada Concepción",11,"8 de diciembre","Nacional","principal","Solemnidad mariana.","Inicia el ciclo navideño.","Vaticano"],
  ["san-benito","San Benito de Palermo",11,"Diciembre","Zulia y Andes","regional","Devoción afrovenezolana de gran arraigo.","Incluye música, tambores y procesiones.","Fundación Empresas Polar"],
  ["navidad","Navidad",11,"25 de diciembre","Nacional","principal","Celebración del nacimiento de Jesús.","Se acompaña de misas de aguinaldo.","Vaticano"],
  ["santos-inocentes","Santos Inocentes",11,"28 de diciembre","Nacional","principal","Conmemoración de los Santos Inocentes.","En Caucagua existen bandos y parrandas.","Vaticano"],
  ["sagrada-familia","Sagrada Familia",11,"Fecha móvil","Nacional","principal","Fiesta de Jesús, María y José.","Se celebra dentro de la octava de Navidad.","Vaticano"]
].map(function(item){
  const typeLabel=item[5]==="principal"
    ?"celebración de alcance nacional dentro del calendario católico"
    :"tradición de especial arraigo en la comunidad indicada";

  return {
    id:item[0],
    title:item[1],
    month:item[2],
    date:item[3],
    region:item[4],
    type:item[5],
    description:item[6]+" Esta celebración conserva un lugar significativo en la vida pastoral: reúne oración, memoria, participación comunitaria y transmisión de la fe entre generaciones.",
    importance:"Su importancia radica en que es una "+typeLabel+". Ayuda a vincular la liturgia con la historia, la identidad cultural y la vida concreta de las comunidades, respetando las orientaciones de la Iglesia y del calendario propio.",
    curiosities:[
      item[7],
      "La fecha se vive con celebraciones litúrgicas, oración comunitaria y expresiones de piedad popular según cada parroquia.",
      "Su forma concreta puede variar entre diócesis, santuarios y comunidades, por lo que conviene revisar la programación pastoral local.",
      "La tradición ayuda a conservar la memoria religiosa y cultural de la comunidad vinculada con esta celebración.",
      "La referencia principal indicada en esta ficha sirve como punto de consulta y debe leerse junto con las fuentes diocesanas cuando corresponda."
    ].map(function(text,curiosityIndex){return (curiosityIndex+1)+". "+text;}).join("\n"),
    source:item[8],
    image:"imagenes/"+item[0]+".jpg",
    candle:candleRecommendation({id:item[0],type:item[5]})
  };
});

function dateOnly(year,month,day){
  return new Date(year,month,day,12,0,0,0);
}

function addDays(date,days){
  const result=new Date(date);
  result.setDate(result.getDate()+days);
  return result;
}

function easterSunday(year){
  const a=year%19;
  const b=Math.floor(year/100);
  const c=year%100;
  const d=Math.floor(b/4);
  const e=b%4;
  const f=Math.floor((b+8)/25);
  const g=Math.floor((b-f+1)/3);
  const h=(19*a+b-d-g+15)%30;
  const i=Math.floor(c/4);
  const k=c%4;
  const l=(32+2*e+2*i-h-k)%7;
  const m=Math.floor((a+11*h+22*l)/451);
  const month=Math.floor((h+l-7*m+114)/31)-1;
  const day=((h+l-7*m+114)%31)+1;
  return dateOnly(year,month,day);
}

function lastSundayOfNovember(year){
  const date=dateOnly(year,10,30);
  while(date.getDay()!==0)date.setDate(date.getDate()-1);
  return date;
}

function holyFamilyDate(year){
  for(let day=26;day<=31;day++){
    const date=dateOnly(year,11,day);
    if(date.getDay()===0)return date;
  }
  return dateOnly(year,11,30);
}

function eventDate(item,year){
  const easter=easterSunday(year);
  const mobileDates={
    "domingo-ramos":addDays(easter,-7),
    "nazareno":addDays(easter,-3),
    "jueves-santo":addDays(easter,-3),
    "viernes-santo":addDays(easter,-2),
    "resurreccion":easter,
    "corpus":addDays(easter,60),
    "sagrada-familia":holyFamilyDate(year),
    "cristo-rey":lastSundayOfNovember(year)
  };

  if(mobileDates[item.id])return mobileDates[item.id];

  const match=item.date.match(/^([0-9]{1,2}) de /);
  if(match)return dateOnly(year,item.month,Number(match[1]));

  return null;
}

function formatEventDate(date){
  return date.toLocaleDateString("es-VE",{
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
  });
}

function startOfToday(){
  const now=new Date();
  return dateOnly(now.getFullYear(),now.getMonth(),now.getDate());
}

function getUpcomingCelebration(){
  const today=startOfToday();
  const candidates=[];

  [today.getFullYear(),today.getFullYear()+1].forEach(function(year){
    events.forEach(function(item){
      const date=eventDate(item,year);
      if(date && date>=today){
        candidates.push({item:item,date:date});
      }
    });
  });

  if(!candidates.length)return null;

  candidates.sort(function(a,b){return a.date-b.date});
  const first=candidates[0];
  const sameDay=candidates.filter(function(candidate){
    return candidate.date.getTime()===first.date.getTime();
  });

  sameDay.sort(function(a,b){
    return (a.item.type==="principal"?0:1)-(b.item.type==="principal"?0:1);
  });

  return {
    date:first.date,
    daysLeft:Math.round((first.date-today)/86400000),
    primary:sameDay[0].item,
    others:sameDay.slice(1).map(function(candidate){return candidate.item}),
    all:sameDay
  };
}

function renderUpcoming(){
  const container=document.getElementById("upcoming");
  if(!container)return;

  const upcoming=getUpcomingCelebration();
  if(!upcoming)return;

  const isToday=upcoming.daysLeft===0;
  const status=isToday
    ?"Hoy se está celebrando"
    :upcoming.daysLeft<=15
      ?"Se acerca en "+upcoming.daysLeft+" día"+(upcoming.daysLeft===1?"":"s")
      :"Próxima celebración";

  const extra=upcoming.others.length
    ?'<p class="upcoming-extra"><strong>También se celebra:</strong> '+upcoming.others.map(function(item){return escapeXml(item.title)}).join(", ")+'</p>'
    :"";

  container.innerHTML=
    '<div class="upcoming-copy">'+
      '<div class="upcoming-kicker"><i></i> Próxima celebración</div>'+
      '<h2>'+escapeXml(upcoming.primary.title)+'</h2>'+
      '<div class="upcoming-date">'+escapeXml(formatEventDate(upcoming.date))+' · '+escapeXml(upcoming.primary.region)+'</div>'+
      '<p class="upcoming-status"><strong>'+status+'</strong>. '+escapeXml(upcoming.primary.description)+'</p>'+
      extra+
      '<button class="upcoming-button" type="button" data-upcoming-id="'+upcoming.primary.id+'">Ver detalles</button>'+
    '</div>'+
    '<div class="upcoming-art">'+
      '<img src="'+upcoming.primary.image+'" alt="Imagen de '+escapeXml(upcoming.primary.title)+'" loading="eager" decoding="async">'+
    '</div>';
}

const state={month:0,query:"",focus:null};

function escapeXml(value){
  return String(value)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/\"/g,"&quot;")
    .replace(/'/g,"&apos;");
}

function normalize(value){
  return String(value||"")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"");
}

function renderMonths(){
  document.getElementById("months").innerHTML=months.map(function(name,index){
    return '<button class="month '+(index===state.month?"active":"")+'" data-month="'+index+'">'+name.slice(0,3)+'</button>';
  }).join("");
}

function render(){
  renderUpcoming();
  document.getElementById("range").value=state.month;
  document.getElementById("monthName").textContent=months[state.month];

  document.querySelectorAll(".month").forEach(function(button){
    button.classList.toggle("active",Number(button.dataset.month)===state.month);
  });

  const query=normalize(state.query);
  const list=events.filter(function(item){
    return item.month===state.month && (!query || normalize(Object.values(item).join(" ")).includes(query));
  });

  if(!list.length){
    document.getElementById("content").innerHTML='<div class="empty">No se encontraron celebraciones en este mes.</div>';
    return;
  }

  document.getElementById("content").innerHTML=
  '<section class="month-section">'+
    '<div class="month-title">'+
      '<h2>'+months[state.month]+'</h2>'+
      '<small>'+list.length+' celebración'+(list.length===1?"":"es")+'</small>'+
    '</div>'+
    '<div class="cards">'+
      list.map(function(item){
        return '<article class="card" tabindex="0" role="button" data-id="'+item.id+'">'+
          '<div class="art">'+
            '<img src="'+item.image+'" alt="Imagen referencial de '+escapeXml(item.title)+'" loading="eager" decoding="async" fetchpriority="high" onerror="this.onerror=null;this.src=\'assets/logo-bipa.png\';this.classList.add(\'image-fallback\');">'+
            '<div class="badges">'+
              '<span class="badge '+(item.type==="principal"?"main":"regional")+'">'+(item.type==="principal"?"Principal":"Regional")+'</span>'+
              '<span class="badge date">'+item.date+'</span>'+
            '</div>'+
          '</div>'+
          '<div class="body">'+
            '<h3>'+item.title+'</h3>'+
            '<div class="meta">'+item.region+'</div>'+
            '<p>'+item.description+'</p>'+
            '<div class="card-footer">'+
              '<span class="importance">'+(item.type==="principal"?"Celebración principal":"Tradición regional")+'</span>'+
              '<button class="recommendation" data-recommendation="'+item.id+'" type="button" onclick="openRecommendation(this.dataset.recommendation);event.stopImmediatePropagation();return false;">Artículo BIPA recomendado</button>'+
              '<button class="share" data-share="'+item.id+'" type="button">Compartir por WhatsApp</button>'+
            '</div>'+
          '</div>'+
        '</article>';
      }).join("")+
    '</div>'+
  '</section>';
}

function openModal(id){
  const item=events.find(function(value){return value.id===id});
  if(!item)return;

  state.focus=document.activeElement;

  document.getElementById("modalTitle").textContent=item.title;
  document.getElementById("modalImage").src=item.image;
  document.getElementById("modalImage").alt=item.title;
  document.getElementById("modalImage").onerror=function(){this.onerror=null;this.src="assets/logo-bipa.png";this.classList.add("image-fallback");};
  document.getElementById("modalDescription").textContent=item.description;
  document.getElementById("modalImportance").textContent=item.importance;
  document.getElementById("modalCuriosities").textContent=item.curiosities;
  document.getElementById("modalDate").textContent=item.date;
  document.getElementById("modalRegion").textContent=item.region;
  document.getElementById("modalSource").textContent=item.source;
  document.getElementById("modalCandleLabel").textContent=item.candle.label;
  document.getElementById("modalCandleProduct").textContent=item.candle.product;
  document.getElementById("modalCandleText").textContent=item.candle.text;
  const sourceLink=document.getElementById("modalCandleSource");
  sourceLink.textContent=item.candle.sourceLabel;
  sourceLink.href=item.candle.sourceUrl;

  document.getElementById("modal").classList.add("open");
  document.getElementById("modal").setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  document.getElementById("close").focus();
}

function openRecommendation(id){
  const item=events.find(function(value){return value.id===id});
  if(!item)return;

  state.focus=document.activeElement;

  document.getElementById("miniLabel").textContent=item.candle.label;
  document.getElementById("miniTitle").textContent=item.title;
  document.getElementById("miniProduct").textContent=item.candle.product;
  document.getElementById("miniText").textContent=item.candle.text;
  const sourceLink=document.getElementById("miniSource");
  sourceLink.textContent=item.candle.sourceLabel;
  sourceLink.href=item.candle.sourceUrl;

  document.getElementById("recommendationModal").classList.add("open");
  document.getElementById("recommendationModal").setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  document.getElementById("miniClose").focus();
}

function closeRecommendation(){
  document.getElementById("recommendationModal").classList.remove("open");
  document.getElementById("recommendationModal").setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  if(state.focus)state.focus.focus();
}
function closeModal(){
  document.getElementById("modal").classList.remove("open");
  document.getElementById("modal").setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  if(state.focus)state.focus.focus();
}

const shareState={
  pending:false,
  lastShareAt:0
};

function isMobileClient(){
  return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent||"") ||
    ("ontouchstart" in window && Math.min(window.screen.width,window.screen.height)<=768);
}

function getShareablePageUrl(id){
  if(location.protocol!=="http:" && location.protocol!=="https:")return "";
  return location.href.split("#")[0]+"#"+encodeURIComponent(id);
}

function buildWhatsAppPayload(item,pageUrl){
  const lines=[
    item.title,
    item.date+" | "+item.region,
    "",
    item.description,
    "",
    "Calendario BIPA Religioso"
  ];

  if(pageUrl){
    lines.push("Consulta la celebración:",pageUrl);
  }

  const message=lines.join("\n");
  const encodedMessage=encodeURIComponent(message);

  return {
    message:message,
    mobileUrl:"whatsapp://send?text="+encodedMessage,
    desktopUrl:"https://api.whatsapp.com/send?text="+encodedMessage,
    webUrl:"https://web.whatsapp.com/send?text="+encodedMessage
  };
}

function emitShareTelemetry(item,channel){
  const detail={
    id:item.id,
    title:item.title,
    channel:channel,
    timestamp:new Date().toISOString()
  };

  window.dispatchEvent(new CustomEvent("bipa:share",{detail:detail}));

  if(typeof window.onShareSuccess==="function"){
    window.onShareSuccess(detail);
  }

  if(window.BIPAAnalytics && typeof window.BIPAAnalytics.onShareSuccess==="function"){
    window.BIPAAnalytics.onShareSuccess(detail);
  }
}

function openWhatsApp(payload){
  if(isMobileClient()){
    window.location.assign(payload.mobileUrl);
    return "mobile-app";
  }

  const popup=window.open(payload.webUrl,"_blank","noopener,noreferrer");

  if(popup){
    try{popup.opener=null;}catch(error){}
    return "desktop";
  }

  window.location.assign(payload.webUrl);
  return "web-redirect";
}

function shareCard(id){
  const now=Date.now();
  if(shareState.pending || now-shareState.lastShareAt<1200)return;

  const item=events.find(function(value){return value.id===id});
  if(!item)return;

  shareState.pending=true;
  shareState.lastShareAt=now;

  const pageUrl=getShareablePageUrl(item.id);
  const payload=buildWhatsAppPayload(item,pageUrl);
  const channel=openWhatsApp(payload);

  emitShareTelemetry(item,channel);

  window.setTimeout(function(){
    shareState.pending=false;
  },1200);
}
const searchInput=document.getElementById("search");
if(searchInput){
  searchInput.addEventListener("input",function(event){
    state.query=event.target.value;
    render();
  });
}

document.getElementById("range").addEventListener("input",function(event){
  state.month=Number(event.target.value);
  render();
});

document.getElementById("prev").addEventListener("click",function(){
  state.month=(state.month+11)%12;
  render();
});

document.getElementById("next").addEventListener("click",function(){
  state.month=(state.month+1)%12;
  render();
});

document.getElementById("months").addEventListener("click",function(event){
  const button=event.target.closest("[data-month]");
  if(!button)return;

  state.month=Number(button.dataset.month);
  render();
});

document.getElementById("upcoming").addEventListener("click",function(event){
  const button=event.target.closest("[data-upcoming-id]");
  if(button)openModal(button.dataset.upcomingId);
});

document.getElementById("content").addEventListener("click",function(event){
  const recommendation=event.target.closest("[data-recommendation]");
  const share=event.target.closest("[data-share]");

  if(recommendation){
    event.preventDefault();
    event.stopImmediatePropagation();
    openRecommendation(recommendation.dataset.recommendation);
    return;
  }

  if(share){
    event.preventDefault();
    event.stopImmediatePropagation();
    shareCard(share.dataset.share);
    return;
  }

  const card=event.target.closest("[data-id]");
  if(card)openModal(card.dataset.id);
});

document.getElementById("content").addEventListener("keydown",function(event){
  const card=event.target.closest("[data-id]");

  if(card && !event.target.closest("[data-share]") && (event.key==="Enter" || event.key===" ")){
    event.preventDefault();
    openModal(card.dataset.id);
  }
});

document.getElementById("close").addEventListener("click",closeModal);
document.getElementById("miniClose").addEventListener("click",closeRecommendation);

document.getElementById("modal").addEventListener("click",function(event){
  if(event.target===document.getElementById("modal"))closeModal();
  if(event.target===document.getElementById("recommendationModal"))closeRecommendation();
});

document.addEventListener("keydown",function(event){
  if(event.key==="Escape"){
    if(document.getElementById("recommendationModal").classList.contains("open")){
      closeRecommendation();
      return;
    }

    if(document.getElementById("modal").classList.contains("open")){
      closeModal();
    }
  }
});

renderMonths();
render();
window.setInterval(renderUpcoming,60000);






