# Google Sheets Auto Exporter
Script to auto export a sheet from Google Sheets Workbook to .csv or .tsv to a folder on Google Drive

## Background
I needed a way to export a sheet from Google Sheets to .csv or .tsv. The google sheet consists of a big list, to keep track of inventory. The sheet has multiple 'sections' with merged cells as section breaks, and the sheet has one too many columns that was not required for the export. I would like to keep the section breaks cause it's human readable, and the sheet is modified often. A hidden sheet 'buffer' was created, with required columns from the main sheet using the `INDIRECT` function.

This version of the auto exporter script exports the contents of the buffer sheet to a .tsv to a specified destination folder.

## How to use
1. Use the script editor to create a new autoExporter.gs file. Getting started information about Google Sheets script editor can be found [here](https://zapier.com/learn/google-sheets/google-apps-script-tutorial/).
2. Copy and paste the code from autoExporter.gs (found in this repository) to the script that was created in the Apps Script from the previous step.
3. Add in the custom file/folder names and destinations, information about the variables is below:

```javascript
var filename = "####";              // Replace #### with the filename in destination folder to which data is exported to
var filename_extention = ".csv";    // .csv or .tsv, the choice is yours.
var sheet_name = "####";            // Replace #### with the name of the sheet to export to .csv or .tsv
var destFolderID = "####";          // Replace #### with the Google Drive folder ID
```

> **_NOTE:_**  The file with the specified filename in the destination Google Drive folder is always deleted and re-created.

4. OPTIONAL: I created an automatic trigger for every 1 hour to auto export the sheet.

## See also
1. I found [this](https://ploi.io/documentation/database/where-do-i-get-google-drive-folder-id) link useful to get the destination folder ID.
2. More information about using auto triggering events in Google script can be found [here](https://developers.google.com/apps-script/guides/triggers/installable).

## Contribution
Feel free to contribute to the project. Isses and pull requests are welcome!

## License information

Copyright (c) 2021 paradigm-shift-labs
This library is licensed under the MIT License. Feel free to use this code, or any part of it to make your life (or workflow) a tiny bit easier.
