const VERSION="1.1.0";

const KALBAR_VIEW=[
  [-3.1,108.7],
  [2.2,114.0]
];

const DATA={
  fires:"data/titik_api_kalbar_AOI_desa_classified_v1.geojson",
  villages:"data/batas_desa_2026_kalbar.geojson",
  palm:"data/konsesi_sawit_kalbar_public.geojson"
};

const I18N={

  id:{
    "nav.home":"Beranda",
    "nav.map":"Peta",
    "nav.method":"Metodologi",

    "hero.title":"Kebakaran Hutan:<br>Sengaja atau Tidak?",
    "hero.desc":"Eksplorasi pola spasial titik api di Kalimantan Barat dan hubungannya dengan desa serta konsesi sawit. Sistem mengelompokkan deteksi api berdasarkan kepadatan dan kedekatan spasial pada tanggal pengamatan.",
    "hero.button":"Lihat Peta",

    "map.title":"Pola Kebakaran Kalimantan Barat",
    "map.subtitle":"Titik api, batas desa, dan konsesi sawit.",
    "map.reset":"Reset Peta",

    "legend.natural":"Natural Hotspot",
    "legend.anthro":"Anthropogenic Hotspot",
    "legend.village":"Batas desa",
    "legend.palm":"Konsesi sawit",

    "analysis.title":"Analisis Spasial",
    "stats.palmVillage":"Desa dengan sawit",
    "stats.fireVillage":"Desa dengan titik api",
    "stats.firePalm":"Konsesi dengan titik api",
    "stats.totalFire":"Total titik api",
    "stats.anthroShare":"Proporsi Anthropogenic Fire",

    "analysis.note":"Kelas api adalah hasil screening berbasis kepadatan spasial, bukan penetapan hukum atau verifikasi penyebab kebakaran.",

    "basemap.title":"Basemap",
    "basemap.note":"Light menggunakan OpenStreetMap Standard. Satellite menggunakan ArcGIS World Imagery.",

    "hover.title":"Analisis Temporal Kebakaran",
    "hover.empty":"Gunakan rentang tanggal untuk memfilter deteksi api.",

    "timeseries.selected":"Deteksi pada periode",
    "timeseries.anthro":"Anthropogenic",
    "timeseries.natural":"Natural",
    "timeseries.noData":"Tidak ada deteksi pada periode ini.",

    "method.title":"Bagaimana<br>Pola Api<br>Diklasifikasikan", 
    "method.intro":"Pendekatan ini menggunakan unsupervised density-based clustering. Titik api yang membentuk kelompok padat pada tanggal pengamatan diberi label operasional Anthropogenic Fire, sedangkan titik yang tidak masuk cluster diberi label Natural Fire. Label ini adalah proxy pola spasial, bukan bukti kausal.",

    "cards.c1.t":"Input & Quality",
    "cards.c1.p":"Menggabungkan deteksi SNPP dan Aqua MODIS yang sudah di-clip terhadap AOI batas desa Kalimantan Barat.",

    "cards.c2.t":"Spatial Neighbourhood",
    "cards.c2.p":"Untuk setiap titik dihitung jumlah deteksi dalam radius 5 km pada tanggal akuisisi yang sama.",

    "cards.c3.t":"DBSCAN",
    "cards.c3.p":"DBSCAN membentuk cluster berbasis density, mampu menangani bentuk cluster yang tidak beraturan dan noise.",

    "cards.c4.t":"Operational Class",
    "cards.c4.p":"Anggota cluster diberi label Anthropogenic Fire; noise DBSCAN diberi label Natural Fire sebagai proxy sparsity.",

    "cards.c5.t":"Interpretation",
    "cards.c5.p":"Density, cluster size, neighbour count, FRP, brightness dan confidence ditampilkan untuk interpretasi pola.",

    "cards.c6.t":"Limitation",
    "cards.c6.p":"Kepadatan saja tidak dapat membuktikan penyebab. Causal attribution membutuhkan data tambahan seperti land use, meteorologi, topografi dan aktivitas manusia.",

    "refs.title":"Referensi metodologis",
    "refs.c4":"NASA FIRMS menjelaskan FRP sebagai proxy intensitas api dan bahwa karakteristik sensor memengaruhi perbandingan FRP.",

    "footer":"West Kalimantan Fire Pattern Screening BINUS University",
    "providers":"Data providers: Greenpeace; VIIRS on Suomi NPP (SNPP); MODIS on Aqua."
  },

  en:{
    "nav.home":"Home",
    "nav.map":"Map",
    "nav.method":"Methodology",

    "hero.title":"Forest Fires:<br>Intentional or Not?",
    "hero.desc":"Explore the spatial pattern of active fire detections in West Kalimantan and their relationship with villages and oil-palm concessions. Fire detections are grouped by spatial density and proximity on the acquisition date.",
    "hero.button":"View Map",

    "map.title":"West Kalimantan Fire Patterns",
    "map.subtitle":"Fire detections, village boundaries, and oil-palm concessions.",
    "map.reset":"Reset Map",

    "legend.natural":"Natural Hotspot",
    "legend.anthro":"Anthropogenic Hotspot",
    "legend.village":"Village boundary",
    "legend.palm":"Oil-palm concession",

    "analysis.title":"Spatial Analysis",
    "stats.palmVillage":"Villages overlapping palm",
    "stats.fireVillage":"Villages with fire",
    "stats.firePalm":"Concessions with fire",
    "stats.totalFire":"Total fire detections",
    "stats.anthroShare":"Anthropogenic Fire share",

    "analysis.note":"Fire classes are density-based screening results, not legal findings or verified causal attribution.",

    "basemap.title":"Basemap",
    "basemap.note":"Light uses OpenStreetMap Standard. Satellite uses ArcGIS World Imagery.",

    "hover.title":"Fire Temporal Analysis",
    "hover.empty":"Use the date range to filter fire detections.",

    "timeseries.selected":"Detections in period",
    "timeseries.anthro":"Anthropogenic",
    "timeseries.natural":"Natural",
    "timeseries.noData":"No detections in this period.",

    "method.title":"How are fire patterns classified?",
    "method.intro":"This approach uses unsupervised density-based clustering. Fire detections forming dense groups on the observation date receive the operational label Anthropogenic Fire, while DBSCAN noise receives Natural Fire. The label is a spatial-pattern proxy, not causal evidence.",

    "cards.c1.t":"Input & Quality",
    "cards.c1.p":"Combines SNPP and Aqua MODIS detections already clipped to the West Kalimantan 2026 village-boundary AOI.",

    "cards.c2.t":"Spatial Neighbourhood",
    "cards.c2.p":"For each detection, the number of detections within 5 km on the same acquisition date is calculated.",

    "cards.c3.t":"DBSCAN",
    "cards.c3.p":"DBSCAN forms density-based clusters, handles irregular cluster shapes, and identifies noise.",

    "cards.c4.t":"Operational Class",
    "cards.c4.p":"Cluster members are labelled Anthropogenic Fire; DBSCAN noise is labelled Natural Fire as a sparsity proxy.",

    "cards.c5.t":"Interpretation",
    "cards.c5.p":"Density, cluster size, neighbour count, FRP, brightness and confidence are exposed for pattern interpretation.",

    "cards.c6.t":"Limitation",
    "cards.c6.p":"Density alone cannot prove cause. Causal attribution requires additional land-use, meteorological, topographic and human-activity evidence.",

    "refs.title":"Methodological references",
    "refs.c4":"NASA FIRMS describes FRP as a proxy for fire intensity and notes that sensor characteristics affect FRP comparability.",

    "footer":"West Kalimantan Fire Pattern Screening BINUS University",
    "providers":"Data providers: Greenpeace; VIIRS on Suomi NPP (SNPP); MODIS on Aqua."
  }
};


let lang="id";

let map;
let lightMap;
let satellite;

let naturalFireLayer;
let anthropogenicFireLayer;
let villagesLayer;
let palmLayer;

let fireData;
let villageData;
let palmData;


/* =========================================================
   TEMPORAL FILTER STATE
   ========================================================= */

let fireDates=[];
let startDateIndex=0;
let endDateIndex=0;
let filterUpdateFrame=null;


/* =========================================================
   LANGUAGE
   ========================================================= */

function applyLanguage(){

  document.documentElement.lang=lang;

  document.querySelectorAll(
    "[data-i18n]"
  ).forEach(el=>{

    const key=el.dataset.i18n;

    if(
      I18N[lang] &&
      I18N[lang][key]!==undefined
    ){
      el.innerHTML=I18N[lang][key];
    }

  });

  document.querySelectorAll(
    "[data-lang]"
  ).forEach(button=>{

    button.classList.toggle(
      "active",
      button.dataset.lang===lang
    );

  });

  updateDateFilterUI();
}


document.querySelectorAll(
  "[data-lang]"
).forEach(button=>{

  button.addEventListener(
    "click",
    ()=>{
      lang=button.dataset.lang;
      applyLanguage();
    }
  );

});


/* =========================================================
   MAP INITIALIZATION
   ========================================================= */

map=L.map(
  "map",
  {
    zoomControl:true,
    preferCanvas:true
  }
);


/* Layer panes */

map.createPane(
  "villagePane"
);

map.getPane(
  "villagePane"
).style.zIndex=410;


map.createPane(
  "palmPane"
);

map.getPane(
  "palmPane"
).style.zIndex=420;


map.createPane(
  "naturalFirePane"
);

map.getPane(
  "naturalFirePane"
).style.zIndex=430;


map.createPane(
  "anthropogenicFirePane"
);

map.getPane(
  "anthropogenicFirePane"
).style.zIndex=440;


/* =========================================================
   BASEMAPS
   ========================================================= */

lightMap=L.tileLayer(

  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",

  {
    attribution:
      "© OpenStreetMap contributors",
    maxZoom:19
  }

).addTo(map);


satellite=L.tileLayer(

  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",

  {
    attribution:
      "Sources: Esri, Maxar, Earthstar Geographics, and the GIS User Community",
    maxZoom:18
  }

);


map.fitBounds(
  KALBAR_VIEW
);


/* =========================================================
   MAP RESIZE
   ========================================================= */

const mapSection=
  document.getElementById(
    "map-section"
  );

if(
  window.ResizeObserver &&
  mapSection
){

  new ResizeObserver(
    ()=>{
      map.invalidateSize({
        pan:false
      });
    }
  ).observe(mapSection);

}


/* =========================================================
   LOAD GEOJSON
   ========================================================= */

Promise.all([

  fetch(DATA.fires)
    .then(response=>{

      if(!response.ok){
        throw new Error(
          `Fire GeoJSON HTTP ${response.status}`
        );
      }

      return response.json();

    }),

  fetch(DATA.villages)
    .then(response=>{

      if(!response.ok){
        throw new Error(
          `Village GeoJSON HTTP ${response.status}`
        );
      }

      return response.json();

    }),

  fetch(DATA.palm)
    .then(response=>{

      if(!response.ok){
        throw new Error(
          `Palm GeoJSON HTTP ${response.status}`
        );
      }

      return response.json();

    })

])

.then(([fires,villages,palm])=>{

  fireData=fires;
  villageData=villages;
  palmData=palm;

  initializeDateFilter();

  renderLayers();

  calculateProvinceStats();

  updateDateFilterUI();


  L.control.layers(

    {
      "Light":lightMap,
      "Satellite":satellite
    },

    {
      "Anthropogenic hotspot":
        anthropogenicFireLayer,

      "Natural hotspot":
        naturalFireLayer,

      "Oil-palm concessions":
        palmLayer,

      "Villages":
        villagesLayer
    },

    {
      collapsed:false
    }

  ).addTo(map);


  const villageBounds=
    L.geoJSON(
      villageData
    ).getBounds();


  if(villageBounds.isValid()){

    map.fitBounds(
      villageBounds,
      {
        padding:[15,15]
      }
    );

  }

})

.catch(error=>{

  console.error(
    "KALBAR FIRE DATA ERROR:",
    error
  );

  alert(
    "Data gagal dimuat. Periksa folder data dan nama file GeoJSON."
  );

});


/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

function villageName(feature){

  const properties=
    feature.properties || {};

  return (
    properties.NAMOBJ ||
    properties.WADMKD ||
    "Desa"
  );

}


function palmName(feature){

  const properties=
    feature.properties || {};

  return (
    properties.company_name ||
    "Konsesi sawit"
  );

}


function fmt(
  value,
  decimals=2
){

  if(
    value===null ||
    value===undefined ||
    value===""
  ){
    return "—";
  }

  if(typeof value==="number"){

    return value.toLocaleString(
      lang==="id"
        ? "id-ID"
        : "en-US",
      {
        maximumFractionDigits:decimals
      }
    );

  }

  return value;
}


/* =========================================================
   FIRE DATE FUNCTIONS
   ========================================================= */

function getFireDate(feature){

  const properties=
    feature.properties || {};

  return properties.acq_date || null;

}


function formatDate(dateString){

  if(!dateString){
    return "—";
  }

  const parts=
    dateString.split("-");

  if(parts.length!==3){
    return dateString;
  }

  if(lang==="id"){
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }

  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


function getFilteredFireFeatures(){

  if(
    !fireData ||
    !fireData.features ||
    !fireDates.length
  ){
    return [];
  }

  const startDate=
    fireDates[startDateIndex];

  const endDate=
    fireDates[endDateIndex];

  return fireData.features.filter(
    feature=>{

      const date=
        getFireDate(feature);

      return (
        date &&
        date>=startDate &&
        date<=endDate
      );

    }
  );

}
/* =========================================================
   DATE RANGE INITIALIZATION
   ========================================================= */

function initializeDateFilter(){

  if(
    !fireData ||
    !fireData.features
  ){
    return;
  }


  fireDates=[
    ...new Set(

      fireData.features
        .map(feature=>
          getFireDate(feature)
        )
        .filter(Boolean)

    )
  ].sort();


  if(!fireDates.length){
    return;
  }


  startDateIndex=0;
  endDateIndex=
    fireDates.length-1;


  const startSlider=
    document.getElementById(
      "startDateSlider"
    );

  const endSlider=
    document.getElementById(
      "endDateSlider"
    );


  if(
    !startSlider ||
    !endSlider
  ){
    return;
  }


  startSlider.min=0;
  startSlider.max=
    fireDates.length-1;

  startSlider.value=
    startDateIndex;


  endSlider.min=0;
  endSlider.max=
    fireDates.length-1;

  endSlider.value=
    endDateIndex;


  startSlider.addEventListener(
    "input",
    ()=>{

      let value=
        Number(
          startSlider.value
        );


      if(
        value>endDateIndex
      ){

        value=
          endDateIndex;

        startSlider.value=
          value;

      }


      startDateIndex=
        value;

      scheduleFireQuery();

    }
  );


  endSlider.addEventListener(
    "input",
    ()=>{

      let value=
        Number(
          endSlider.value
        );


      if(
        value<startDateIndex
      ){

        value=
          startDateIndex;

        endSlider.value=
          value;

      }


      endDateIndex=
        value;

      scheduleFireQuery();

    }
  );


  updateDateFilterUI();

}


/* =========================================================
   DEBOUNCE SLIDER
   ========================================================= */

function scheduleFireQuery(){

  if(filterUpdateFrame){

    cancelAnimationFrame(
      filterUpdateFrame
    );

  }


  filterUpdateFrame=
    requestAnimationFrame(
      ()=>{

        filterUpdateFrame=null;

        updateFireQuery();

      }
    );

}


/* =========================================================
   EXECUTE TEMPORAL QUERY
   ========================================================= */

function updateFireQuery(){

  if(
    !fireData ||
    !fireDates.length
  ){
    return;
  }


  updateFireLayers();

  updateDateFilterUI();

}


/* =========================================================
   UPDATE FIRE MAP LAYERS
   ========================================================= */

function updateFireLayers(){

  if(!fireData){
    return;
  }


  /*
    Preserve current visibility.
    If the user turned a layer off,
    slider movement will not turn it back on.
  */

  const naturalVisible=
    naturalFireLayer
      ? map.hasLayer(naturalFireLayer)
      : true;


  const anthropogenicVisible=
    anthropogenicFireLayer
      ? map.hasLayer(
          anthropogenicFireLayer
        )
      : true;


  if(naturalFireLayer){

    map.removeLayer(
      naturalFireLayer
    );

  }


  if(anthropogenicFireLayer){

    map.removeLayer(
      anthropogenicFireLayer
    );

  }


  const filteredFeatures=
    getFilteredFireFeatures();


  const naturalFeatures={

    type:"FeatureCollection",

    features:
      filteredFeatures.filter(
        feature=>{

          const p=
            feature.properties || {};

          return (
            p.fire_class===
            "Natural Fire"
          );

        }
      )

  };


  const anthropogenicFeatures={

    type:"FeatureCollection",

    features:
      filteredFeatures.filter(
        feature=>{

          const p=
            feature.properties || {};

          return (
            p.fire_class===
            "Anthropogenic Fire"
          );

        }
      )

  };


  naturalFireLayer=
    createNaturalFireLayer(
      naturalFeatures
    );


  anthropogenicFireLayer=
    createAnthropogenicFireLayer(
      anthropogenicFeatures
    );


  if(naturalVisible){

    naturalFireLayer.addTo(
      map
    );

  }


  if(anthropogenicVisible){

    anthropogenicFireLayer.addTo(
      map
    );

  }

}


/* =========================================================
   NATURAL FIRE LAYER
   ========================================================= */

function createNaturalFireLayer(
  naturalFeatures
){

  return L.geoJSON(

    naturalFeatures,

    {

      pane:"naturalFirePane",

      pointToLayer:
        (feature,latlng)=>{

          return L.circleMarker(

            latlng,

            {
              radius:4,
              weight:1,
              color:"#ffffff",
              fillColor:"#e9b949",
              fillOpacity:0.88
            }

          );

        },

      onEachFeature:
        (feature,layer)=>{

          /*
            Natural Fire:
            no information panel on hover.
          */

        }

    }

  );

}


/* =========================================================
   ANTHROPOGENIC FIRE LAYER
   ========================================================= */

function createAnthropogenicFireLayer(
  anthropogenicFeatures
){

  return L.geoJSON(

    anthropogenicFeatures,

    {

      pane:
        "anthropogenicFirePane",

      pointToLayer:
        (feature,latlng)=>{

          return L.circleMarker(

            latlng,

            {
              radius:4.2,
              weight:1,
              color:"#ffffff",
              fillColor:"#d64a2b",
              fillOpacity:0.92
            }

          );

        },


      onEachFeature:
        (feature,layer)=>{

          const properties=
            feature.properties || {};

          const date=
            properties.acq_date ||
            "—";


          /*
            IMPORTANT:
            Anthropogenic hotspot hover
            displays DATE ONLY.
          */

          layer.bindTooltip(

            date,

            {
              sticky:true,
              direction:"top"
            }

          );

        }

    }

  );

}


/* =========================================================
   INITIAL MAP LAYERS
   ========================================================= */

function renderLayers(){

  /* -------------------------------------------------------
     1. VILLAGES
     ------------------------------------------------------- */

  villagesLayer=
    L.geoJSON(

      villageData,

      {

        pane:"villagePane",

        style:{

          color:"#707b74",
          weight:0.45,
          fillColor:"#b9c1bb",
          fillOpacity:0.035

        },

        onEachFeature:
          (feature,layer)=>{

            layer.bindTooltip(

              villageName(feature),

              {
                sticky:true,
                direction:"top"
              }

            );

          }

      }

    ).addTo(map);


  /* -------------------------------------------------------
     2. PALM OIL CONCESSIONS
     ------------------------------------------------------- */

  palmLayer=
    L.geoJSON(

      palmData,

      {

        pane:"palmPane",

        style:{

          color:"#47723f",
          weight:0.65,
          fillColor:"#6c9a5c",
          fillOpacity:0.16

        },

        onEachFeature:
          (feature,layer)=>{

            const p=
              feature.properties || {};


            const commodity=
              p.commodity ??
              "—";


            const hectares=

              p.HECTARES !== undefined &&
              p.HECTARES !== null &&
              p.HECTARES !== ""

                ? fmt(
                    Number(
                      p.HECTARES
                    ),
                    2
                  )

                : "—";


            /*
              Palm hover:
              Commodity
              Hectares
              Source
            */

            layer.bindTooltip(

              `<strong>Commodity:</strong> ${commodity}<br>
               <strong>Hectares:</strong> ${hectares}<br>`,

              {
                sticky:true,
                direction:"top"
              }

            );

          }

      }

    ).addTo(map);


  /* -------------------------------------------------------
     3. NATURAL FIRE
     ------------------------------------------------------- */

  const naturalFeatures={

    type:"FeatureCollection",

    features:
      getFilteredFireFeatures().filter(
        feature=>{

          const p=
            feature.properties || {};

          return (
            p.fire_class===
            "Natural Fire"
          );

        }
      )

  };


  naturalFireLayer=
    createNaturalFireLayer(
      naturalFeatures
    );


  naturalFireLayer.addTo(
    map
  );


  /* -------------------------------------------------------
     4. ANTHROPOGENIC FIRE
     ------------------------------------------------------- */

  const anthropogenicFeatures={

    type:"FeatureCollection",

    features:
      getFilteredFireFeatures().filter(
        feature=>{

          const p=
            feature.properties || {};

          return (
            p.fire_class===
            "Anthropogenic Fire"
          );

        }
      )

  };


  anthropogenicFireLayer=
    createAnthropogenicFireLayer(
      anthropogenicFeatures
    );


  anthropogenicFireLayer.addTo(
    map
  );

}


/* =========================================================
   TEMPORAL UI
   ========================================================= */

function updateDateFilterUI(){

  if(!fireDates.length){
    return;
  }


  const startLabel=
    document.getElementById(
      "startDateLabel"
    );

  const endLabel=
    document.getElementById(
      "endDateLabel"
    );

  const countElement=
    document.getElementById(
      "filteredFireCount"
    );


  if(startLabel){

    startLabel.textContent=
      formatDate(
        fireDates[
          startDateIndex
        ]
      );

  }


  if(endLabel){

    endLabel.textContent=
      formatDate(
        fireDates[
          endDateIndex
        ]
      );

  }


  const filteredFeatures=
    getFilteredFireFeatures();


  if(countElement){

    countElement.textContent=
      fmt(
        filteredFeatures.length,
        0
      );

  }


  renderFireTimeSeries(
    filteredFeatures
  );

}


/* =========================================================
   TIME SERIES
   ========================================================= */

function renderFireTimeSeries(
  features
){

  const container=
    document.getElementById(
      "fireTimeSeries"
    );


  if(!container){
    return;
  }


  if(!features.length){

    container.innerHTML=

      `<div class="timeseries-empty">
        ${I18N[lang]["timeseries.noData"]}
      </div>`;

    return;

  }


  const daily={};


  features.forEach(
    feature=>{

      const p=
        feature.properties || {};

      const date=
        p.acq_date;


      if(!date){
        return;
      }


      if(!daily[date]){

        daily[date]={

          total:0,
          anthropogenic:0,
          natural:0

        };

      }


      daily[date].total++;


      if(
        p.fire_class===
        "Anthropogenic Fire"
      ){

        daily[date].anthropogenic++;

      }
      else if(
        p.fire_class===
        "Natural Fire"
      ){

        daily[date].natural++;

      }

    }
  );


  const dates=
    Object.keys(
      daily
    ).sort();


  if(!dates.length){

    container.innerHTML=

      `<div class="timeseries-empty">
        ${I18N[lang]["timeseries.noData"]}
      </div>`;

    return;

  }


  const maxTotal=
    Math.max(
      ...dates.map(
        date=>
          daily[date].total
      )
    );


  container.innerHTML="";


  dates.forEach(
    date=>{

      const d=
        daily[date];


      const row=
        document.createElement(
          "div"
        );

      row.className=
        "timeseries-row";


      const label=
        document.createElement(
          "span"
        );

      label.className=
        "timeseries-date";

      label.textContent=
        formatDate(date);


      const track=
        document.createElement(
          "div"
        );

      track.className=
        "timeseries-track";


      const bar=
        document.createElement(
          "div"
        );

      bar.className=
        "timeseries-bar";


      const width=
        maxTotal>0

          ? (
              d.total /
              maxTotal
            )*100

          : 0;


      bar.style.width=
        `${width}%`;


      const anthro=
        document.createElement(
          "span"
        );

      anthro.className=
        "timeseries-anthro";


      const anthroWidth=
        d.total>0

          ? (
              d.anthropogenic /
              d.total
            )*100

          : 0;


      anthro.style.width=
        `${anthroWidth}%`;


      bar.appendChild(
        anthro
      );

      track.appendChild(
        bar
      );


      const value=
        document.createElement(
          "span"
        );

      value.className=
        "timeseries-value";

      value.textContent=
        fmt(
          d.total,
          0
        );


      row.appendChild(
        label
      );

      row.appendChild(
        track
      );

      row.appendChild(
        value
      );


      row.title=
        `${formatDate(date)} — ${d.total} detections`;


      container.appendChild(
        row
      );

    }
  );

}
/* =========================================================
   SPATIAL ANALYSIS
   ========================================================= */

function calculateProvinceStats(){

  /*
    Precomputed spatial statistics.

    Villages                         2,132
    Villages overlapping palm       1,527
    Villages with fire                629
    Palm concessions with fire        266
    Fire detections                  4,866
    Anthropogenic Fire               3,343
    Natural Fire                     1,523
  */

  const STATS={

    villages:2132,

    villagesOverlappingPalm:1527,

    villagesWithFire:629,

    palmConcessionsWithFire:266,

    fireDetections:4866,

    anthropogenicFire:3343,

    naturalFire:1523

  };


  const palmVillagePercent=

    100 *
    STATS.villagesOverlappingPalm /
    STATS.villages;


  const anthropogenicShare=

    100 *
    STATS.anthropogenicFire /
    STATS.fireDetections;


  /* -------------------------------------------------------
     Villages overlapping palm
     ------------------------------------------------------- */

  const palmVillageElement=
    document.getElementById(
      "palmVillagePercent"
    );


  if(palmVillageElement){

    palmVillageElement.textContent=

      fmt(
        palmVillagePercent,
        1
      )+"%";

  }


  /* -------------------------------------------------------
     Villages with fire
     ------------------------------------------------------- */

  const fireVillageElement=
    document.getElementById(
      "fireVillages"
    );


  if(fireVillageElement){

    fireVillageElement.textContent=

      fmt(
        STATS.villagesWithFire,
        0
      );

  }


  /* -------------------------------------------------------
     Palm concessions with fire
     ------------------------------------------------------- */

  const firePalmElement=
    document.getElementById(
      "firePalm"
    );


  if(firePalmElement){

    firePalmElement.textContent=

      fmt(
        STATS.palmConcessionsWithFire,
        0
      );

  }


  /* -------------------------------------------------------
     Total fire
     ------------------------------------------------------- */

  const totalFireElement=
    document.getElementById(
      "totalFire"
    );


  if(totalFireElement){

    totalFireElement.textContent=

      fmt(
        STATS.fireDetections,
        0
      );

  }


  /* -------------------------------------------------------
     Anthropogenic share
     ------------------------------------------------------- */

  const anthroShareElement=
    document.getElementById(
      "anthroShare"
    );


  if(anthroShareElement){

    anthroShareElement.textContent=

      fmt(
        anthropogenicShare,
        1
      )+"%";

  }

}


/* =========================================================
   VIEW MAP BUTTON
   ========================================================= */

const visitMapButton=
  document.getElementById(
    "visitMapBtn"
  );


if(visitMapButton){

  visitMapButton.addEventListener(

    "click",

    ()=>{

      const target=
        document.getElementById(
          "map-section"
        );


      if(!target){
        return;
      }


      target.scrollIntoView({

        behavior:"smooth"

      });


      setTimeout(

        ()=>{

          map.invalidateSize({

            pan:false

          });

        },

        700

      );

    }

  );

}


/* =========================================================
   RESET MAP + RESET TEMPORAL FILTER
   ========================================================= */

const resetMapButton=
  document.getElementById(
    "resetMapBtn"
  );


if(resetMapButton){

  resetMapButton.addEventListener(

    "click",

    ()=>{

      /* -----------------------------------------------
         Reset spatial extent
         ----------------------------------------------- */

      if(villageData){

        const bounds=
          L.geoJSON(
            villageData
          ).getBounds();


        if(bounds.isValid()){

          map.fitBounds(

            bounds,

            {
              padding:[15,15]
            }

          );

        }
        else{

          map.fitBounds(
            KALBAR_VIEW
          );

        }

      }
      else{

        map.fitBounds(
          KALBAR_VIEW
        );

      }


      /* -----------------------------------------------
         Reset date range
         ----------------------------------------------- */

      if(fireDates.length){

        startDateIndex=0;

        endDateIndex=
          fireDates.length-1;


        const startSlider=
          document.getElementById(
            "startDateSlider"
          );

        const endSlider=
          document.getElementById(
            "endDateSlider"
          );


        if(startSlider){

          startSlider.value=
            startDateIndex;

        }


        if(endSlider){

          endSlider.value=
            endDateIndex;

        }


        updateFireQuery();

      }

    }

  );

}


/* =========================================================
   BASEMAP BUTTONS
   ========================================================= */

document.querySelectorAll(
  "[data-basemap]"
).forEach(

  button=>{

    button.addEventListener(

      "click",

      ()=>{

        const isSatellite=
          button.dataset.basemap===
          "satellite";


        if(isSatellite){

          map.addLayer(
            satellite
          );

          map.removeLayer(
            lightMap
          );

        }
        else{

          map.addLayer(
            lightMap
          );

          map.removeLayer(
            satellite
          );

        }


        document.querySelectorAll(
          "[data-basemap]"
        ).forEach(

          otherButton=>{

            otherButton.classList.remove(
              "active"
            );

          }

        );


        button.classList.add(
          "active"
        );

      }

    );

  }

);


/* =========================================================
   NAVIGATION
   ========================================================= */

document.querySelectorAll(
  ".topbar nav a"
).forEach(

  link=>{

    link.addEventListener(

      "click",

      event=>{

        event.preventDefault();


        const target=
          document.querySelector(

            link.getAttribute(
              "href"
            )

          );


        if(!target){
          return;
        }


        const header=
          document.querySelector(
            ".topbar"
          );


        const headerHeight=
          header
            ? header.offsetHeight
            : 0;


        window.scrollTo({

          top:

            target.getBoundingClientRect().top +

            window.pageYOffset -

            headerHeight,

          behavior:"smooth"

        });


        /*
          Update URL hash without
          triggering default jump.
        */

        history.pushState(

          null,

          "",

          link.getAttribute(
            "href"
          )

        );


        if(
          link.getAttribute(
            "href"
          )==="#map-section"
        ){

          setTimeout(

            ()=>{

              map.invalidateSize({

                pan:false

              });

            },

            700

          );

        }

      }

    );

  }

);


/* =========================================================
   INITIAL LANGUAGE
   ========================================================= */

applyLanguage();
/* =========================================================
   END OF SCRIPT
   ========================================================= */

console.log(
  `KALBAR FIRE PATTERN WebGIS v${VERSION} initialized.`
);