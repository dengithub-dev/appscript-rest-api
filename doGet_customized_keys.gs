//provide spreadsheet id and sheet name
  var db = SpreadsheetApp.openById("spreadsheet_id");
  let sheet = db.getSheetByName('2025 Ultra and Trail Races');
  // Get the number of rows and columns which contain some content
  let [rows, columns] = [sheet.getLastRow(), sheet.getLastColumn()];
  // Get the data contained in those rows and columns as a 2-dimensional array
  let data = sheet.getRange(3, 1, rows, columns).getValues();
  
  // Manually define the keys for the JSON object, one to many
  const keys = ["",""];
  
  // Skip the header row from the data
  data.shift();
  
  // Convert spreadsheet values to JSON using manual keys
  let convertedData = data.map(function(row) {
    let obj = {};
    keys.forEach((key, index) => {
      obj[key] = row[index];
    });
    return obj;
  });

  return ContentService.createTextOutput(JSON.stringify(convertedData)).setMimeType(ContentService.MimeType.JSON); 
