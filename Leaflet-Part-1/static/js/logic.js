
// Initialize/Create map-- just grabbed USA coordinates from google search
const myMap= L.map('map', {
    center: [37.0902, -95.7129],
    zoom: 4
});

// Create the tile layer that will be the background of the map
let tileLayer= L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap)
;

//Create topography map
let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

//Create baseMaps variable that holds the maps, so we can filter which map we want to show at a time
let baseMaps= {
    Street: tileLayer,
    Topography: topo
};

//Get JSON data from url
let url= "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

//Create circle markers for the earthquakes using for loop
let weekMarkers= [];

let earthquakes= d3.json(url).then(function(data) {
    features= data.features;
    console.log(features)

    for (let i = 0; i < features.length; i++) {
        geometry = features[i].geometry;
        coordinates = geometry.coordinates;
        longitude = coordinates[0];
        latitude = coordinates[1];
        depth = coordinates[2];
        properties = features[i].properties;
        magnitude = properties.mag;

        //I originally had this as L.marker but it didn't look like the reference image, so I switched it to L.circle
        L.circle([latitude, longitude], {
            radius: 30000*magnitude,
            color: circleColor(depth),
            fillColor: circleColor(depth),
            fillOpacity: 0.5,
            weight: 0.5
            //Use bindPopup to create the popups--add html elements to display information
            }).bindPopup(`<h2>Magnitude ${magnitude}</h2>
            <h2>Depth: ${depth}</h2><hr>
            <h2>Lat: ${parseFloat(latitude)}, Long: ${parseFloat(longitude)}</h2>`).addTo(weekLayer)
        
    }
});

//Create function to color the circle markers by their depths as shown in reference image
//I was not sure of how to make it one color/change in darkness so I just did different colors
function circleColor(depth) {
    if (depth <= 10) return 'blue'
    else if (depth <= 30) return 'green'
    else if (depth <= 50) return 'yellow'
    else if (depth <= 70) return 'orange'
    else if (depth <= 90) return 'pink'
    else if (depth > 90) return 'red'
    else return 'gray'
};


//Create and position legend
let legend = L.control({position: 'bottomright'});

//Create div that adds colored swatches by their earthquake depth to the legend
//Asked openAI/chatGPT how to do this but their example would not work-- see ReadMe
//Asked it to go through the code line by line--then I made tweaks to make the legend look close to reference legend
legend.onAdd = function(map) {
  let div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h2>Earthquake Depth</h2>";
  div.innerHTML += '<i style="background:' + 'blue' + '">&nbsp&nbsp&nbsp;</i>  <span>-10-10</span><br>';
  div.innerHTML += '<i style="background:' + 'green' + '">&nbsp&nbsp&nbsp;</i>  <span>10-30</span><br>';
  div.innerHTML += '<i style="background:' + 'yellow' + '">&nbsp&nbsp&nbsp;</i>  <span>30-50</span><br>';
  div.innerHTML += '<i style="background:' + 'orange' + '">&nbsp&nbsp&nbsp;</i>  <span>50-70</span><br>';
  div.innerHTML += '<i style="background:' + 'pink' + '">&nbsp&nbsp&nbsp;</i>  <span>70-90</span><br>';
  div.innerHTML += '<i style="background:' + 'red' + '">&nbsp&nbsp&nbsp;</i>  <span>90+</span><br>';
  
  return div;
};

legend.addTo(myMap);

let weekLayer = L.layerGroup(weekMarkers);

let overlayMaps= {
    'All Earthquakes in the past 7 days': weekLayer
};

L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(myMap);