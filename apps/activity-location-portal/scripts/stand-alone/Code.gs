// Path to H3 hex 6 data
var ssId = '1E074ph56JopZF-oLoFOi0Wp_aHN0O9TIH9_5rm8QBDI';
var ss = 'data';
var hexGeoJsonURL = 'https://raw.githubusercontent.com/eanderson-ei/gtm-apps/main/data/spatial/gtm-hex-6.geojson';


function doGet(e) {
  return HtmlService.createTemplateFromFile('index').evaluate();
};


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}


function getData(sheetId, sheetName){
  var ss = SpreadsheetApp.openById(sheetId);
  var ws = ss.getSheetByName(sheetName);
  var data = ws.getDataRange().getValues();

  return data
}


// // fetch function
// function fetchGeoJson(src){
//   UrlFetchApp.fetch(src, {
//     method: 'GET'
//   })
//   .then(response => response.json())
//   .then(json => {
//     console.log(json);
//     return json;
//   })
//   .catch(error => console.log(error.message));  
// };  // END FETCH



// fetch function
function fetchGeoJson(src){
  response = UrlFetchApp.fetch(src);
  return response.toString();
}


// helper function to convert 2d array to JSON
function convertArrayToJSON(array){
  // returns {row[0] : {headers[1]: row[1], headers[2]: row[2], ...}}
  var headers = array.shift();
  var headerCols = headers.slice(1);
  var parentDict = {};
  array.map(row => {
    keyName = row.shift();
    childDict = {};
    for(let i = 0; i < row.length; i++){
      childDict[headerCols[i]] = row[i]
    }
    parentDict[keyName] = childDict;
  })
  return parentDict
}


function getInterventions(){
  var data = getData(ssId, ss);

  // format dates to pass to client side 
  // drop Exact Site Location Name (3), Intervention Cost (10), Intervention Description (11), Comments (12)
  data = data.map(row => {
    return row.slice(0,3).concat(
      [
        row[4].toLocaleString("en-us"),
        row[5].toLocaleString("en-us"),
      ]).concat(row.slice(6, 10)).concat(row.slice(13, -3)) // drop contact info
  });

  return data;
}


function initializeApp(){
  // fetch hexagons as GeoJSON
  var geoJson = fetchGeoJson(hexGeoJsonURL);

  // get intervention data
  var data = getInterventions();

  var returnObject = {
    geoJson: geoJson, 
    data: data
  }

  return returnObject
} 


function getAPIKey() {
  return getEsriSecret_()
}


function getEsriSecret_() {
  return PropertiesService.getScriptProperties().getProperty("esri_key")
}

