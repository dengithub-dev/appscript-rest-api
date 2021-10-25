  //provide spreadsheet id and sheet name
  var ss = SpreadsheetApp.openById("spreadsheet_id").getSheetByName("name of sheet");
  var data = ss.getDataRange().getDisplayValues(); 
  var query_data;
  for (var i=1; i < data.length; i++){
    var id_col = data[i][1];
    if (query === id_col){
      query_data = {
        "Date": data[i][0],
        "Id":data[i][1],
        "Name":data[i][2],
        "Age":data[i][3],
        "Address":data[i][4]
      }
      push_data.push(query_data);
    }
  }
  //get data that was push from the loop
  var collected_data = push_data;
  //stringify the collected data
  var json = JSON.stringify(collected_data);
  // create an output for the data 
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
