//Google Apps Script to allow for auto exporting the inventory file as a .csv or .data to a folder on google drive

function autoExport()
{
    
    var filename = "***********";           // Replace ** with the .csv or .data file that needs to be updated
    var filename_extention = ".csv";        // .csv OR .tsv, the choice is yours
    var sheet_name = "**********";          // Replace ** with the name of the sheet that needs to be exported to .csv or .tsv
    var destFolderID = "************";      // ID of the folder where the .csv or .tsv file is located
                                            // Here's more info about how th get the folder ID:

    var destination_folder = DriveApp.getFolderById(destFolderID);       
    var exportedData = generateCSV(sheet_name);

    var fileList = destination_folder.getFilesByName(filename);

    // First check if a file with the name and extention already exists in the provided folder,
    // if true, overwrite by delete and create (couldn't find a better wat to update a .csv/.tsv file)
    // if false, create a .csv/.tsv file with the provided name and create the file with the data.

    if (fileList.hasNext())
    {
        console.log("Found file! Deleting the file to create a new file.");
        var file = fileList.next();
        file.setTrashed(true);
    }
    else
    {
        console.error("Could not find file, moving on..");
    }

    var output = destination_folder.createFile(filename, exportedData);
    console.log("Created file" + output +);
}

function generateCSV(_sheetName)
{
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheet_name);

    var range = sheet.getDataRange();
    var values = range.getValues();

    if (values.length > 1) 
    {
        var data = "";
        for (var row = 0; row < values.length; row++) 
        {
            for (var col = 0; col < values[row].length; col++) 
            {
                if (values[row][col].toString().indexOf("\t") != -1) 
                {
                    values[row][col] = "\"" + values[row][col] + "\"";
                }
            }
            if (row < values.length-1) 
            {
                data += values[row].join(",") + "\r\n";
            }
            else 
            {
                data += values[row].join(",");
            }
        }
        return data;
    }
}

function generateTSV(_sheetName)
{
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(_sheetName);

    var range = sheet.getDataRange();
    var values = range.getValues();

    if (values.length > 1) 
    {
        var data = "";
        for (var row = 0; row < values.length; row++) 
        {
            for (var col = 0; col < values[row].length; col++) 
            {
                if (values[row][col].toString().indexOf("\t") != -1) 
                {
                    values[row][col] = "\"" + values[row][col] + "\"";
                }
            }
            if (row < values.length-1) 
            {
                data += values[row].join("\t") + "\r\n";
            }
            else 
            {
                data += values[row].join(",");
            }
        }
        return data;
    }
}