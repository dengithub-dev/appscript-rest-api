// HTTP POST with token
  var db_ = SpreadsheetApp.openById("spreadsheet id");
  var token = e.parameter.token;
  var token_s = db_.getSheetByName("Token");
  //check if the input is same with the header
  if (token === "Token"){
    return ContentService.createTextOutput("{ Invalid Token }").setMimeType(ContentService.MimeType.JSON);
  }
  //get display Data as 1D array - Col A
  var range = token_s.getDataRange().getDisplayValues().map(r => r[0]);
  // use includes to see if token is included in the array
  if(!range.includes(token)) { 
    //return error message if a token is invalid
    return ContentService.createTextOutput("{ Invalid Token }").setMimeType(ContentService.MimeType.JSON);
  }

  var sheet_ = db_.getSheetByName("Data");
  var data = sheet_.getDataRange().getDisplayValues(); 
  var requestContent = JSON.parse(e.postData.contents);
  var responseContent = '{"Id": "' + requestContent.id + '","Name": "' + requestContent.name + '","Age": "' + requestContent.age + '","Address": "' + requestContent.address + '" }';
  var response = ContentService.createTextOutput(responseContent);
  sheet_.appendRow([new Date(),requestContent.id,requestContent.name,requestContent.age,requestContent.address]);
  response.setMimeType(ContentService.MimeType.JSON);
  return response;
