function doGet(e) {
  return HtmlService.createTemplateFromFile('map').evaluate();
}


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}


// helper function to get specific columns from a 2d array
function extractDataByIndices(arr,indexArr) {
  return arr.map(obj => {  
      return obj.filter((ob,index) => {
          if(indexArr.includes(index)){return ob ? ob !== '' : 0}
      })
  })
}


// helper function to convert 2d array to JSON
function convertArrayToJSON(array){
  // {row[0] : {headers[1]: row[1], headers[2]: row[2], ...}}
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


function getData(sheetURL, sheetName){
  var ss = SpreadsheetApp.openByUrl(sheetURL);
  var ws = ss.getSheetByName(sheetName);
  var data = ws.getDataRange().getValues();

  return data
}


function getDirectory(){
  // return dict of datasets and their access urls
  var sheetURL = "https://docs.google.com/spreadsheets/d/1Tig8xn0uXRwOPJqBKOJsaYcbxQVwWFVBcLBLB9AQ1rk/";
  var datasets = getData(sheetURL, 'directory');
  
  // filter mappable datasets
  var mappableDatasets = datasets.filter(row => {
    return !(row[12] === false)  // get headers too
  });

  // drop unneeded columns
  mappableDatasets = extractDataByIndices(mappableDatasets, [0, 2, 3, 4, 6, 8]);

  // convert to JSON 
  var directoryDict = convertArrayToJSON(mappableDatasets);

  return directoryDict
}


function getDefinitions(sheetURL, sheetName) {
  var definitionsTable = getData(sheetURL, 'DEFINITIONS');
  var headers = definitionsTable.shift();
  // filter by sheet name and mappability
  var filteredDefinitions = definitionsTable.filter(row => {
    return row[0] === sheetName && row[6] === 'Numeric'
  });
  
  // add back headers
  filteredDefinitions = [headers].concat(filteredDefinitions);
  
  // drop first column
  filteredDefinitions = extractDataByIndices(
    filteredDefinitions, 
    Array.from({length: headers.length - 1}, (_, i) => i + 1));
  
  // convert to JSON object
  definitionsObject = convertArrayToJSON(filteredDefinitions);

  return definitionsObject
};
