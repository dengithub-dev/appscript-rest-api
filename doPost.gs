function doPost(e) {
  var ss = SpreadsheetApp.openById("spreadsheet id");
  var sheet = ss.getSheetByName("spreadsheet name");
  var data = sheet.getDataRange().getDisplayValues(); 
  //parse data that will be posted in a JSON format
  var requestContent = JSON.parse(e.postData.contents);
  // sample below is provided for demo only, you can change it of your own choice
  var responseContent = '{"Id": "' + requestContent.id + '","Name": "' + requestContent.name + '","Age": "' + requestContent.age + '","Address": "' + requestContent.address + '" }';
  var response = ContentService.createTextOutput(responseContent);
  // append row 
  sheet_.appendRow([new Date(),requestContent.id,requestContent.name,requestContent.age,requestContent.address]);
  response.setMimeType(ContentService.MimeType.JSON);
  return response;
}
