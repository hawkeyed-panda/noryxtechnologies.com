// ============================================================
// Noryx Waitlist — Google Apps Script
// ============================================================
// Deploy this as a Google Apps Script Web App connected to a
// Google Sheet. See SETUP steps below.
//
// SETUP:
// 1. Go to https://sheets.google.com and create a new spreadsheet.
// 2. Name it "Noryx Waitlist" (or anything you like).
// 3. In Row 1, add these headers:
//      A1: Timestamp | B1: Name | C1: Email | D1: Role | E1: Source
// 4. Go to Extensions → Apps Script.
// 5. Delete any existing code and paste this entire file.
// 6. Click Deploy → New deployment.
// 7. Choose type: "Web app".
// 8. Set "Execute as" to "Me" and "Who has access" to "Anyone".
// 9. Click Deploy and authorize when prompted.
// 10. Copy the Web App URL and paste it into index.html where
//     it says YOUR_APPS_SCRIPT_URL_HERE.
// ============================================================

const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    if (!data.email) {
      return jsonResponse({ result: 'error', error: 'Email is required' });
    }

    const emails = sheet.getRange('C2:C' + Math.max(sheet.getLastRow(), 2)).getValues().flat();
    if (emails.includes(data.email.toLowerCase().trim())) {
      return jsonResponse({ result: 'duplicate' });
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email.toLowerCase().trim(),
      data.role || '',
      data.source || 'website'
    ]);

    return jsonResponse({ result: 'success' });
  } catch (err) {
    return jsonResponse({ result: 'error', error: err.message });
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
