const ssid = '1Tig8xn0uXRwOPJqBKOJsaYcbxQVwWFVBcLBLB9AQ1rk'


function doGet(e) {
  return HtmlService.createTemplateFromFile('index').evaluate()
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}


function getData(){
  var ss = SpreadsheetApp.openById(ssid);
  var ws = ss.getSheetByName('directory');
  var data = ws.getRange(1, 1, ws.getLastRow(), ws.getLastColumn()).getValues();

  // pop headers
  var headers = data.shift();

  // remove blank and N/A rows
  data = data.filter(row => row[0] !== '' && row[0] !== "#N/A");

  // format dates to pass to client side 
  data = data.map(row => {
    return row.slice(0,8).concat(
      [
        row[9].toLocaleString("en-us"),
        row[10].toLocaleString("en-us"),
        row[11].toLocaleString("en-us")
      ]).concat(row.slice(12))
  });

  Logger.log(data);

  return data
};
