# VULUE Landing - Full Project (with Admin Dashboard)

## Run locally
1. `npm install`
2. `npm run dev`
Open http://localhost:5173

## Admin login (test)
- Email: admin@vulue.com
- Password: Vulue@123

## Google Sheets backend (Waitlist)
1. Create a Google Sheet and open Extensions → Apps Script.
2. Add a script with this code and deploy as Web App (Anyone, even anonymous):

```javascript
function doPost(e){
  var ss = SpreadsheetApp.openById("YOUR_SHEET_ID");
  var sheet = ss.getSheetByName("Sheet1");
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.firstName || '', data.surname || '', data.email || '']);
  return ContentService.createTextOutput(JSON.stringify({status:'ok'})).setMimeType(ContentService.MimeType.JSON);
}
```

3. Copy the deployed Web App URL and set it in the site as `window.__VULUE_WAITLIST_ENDPOINT = 'https://script.google.com/macros/s/XXXXX/exec'`
   - You can set this in `public/index.html` by editing the script tag or update at runtime.

## Notes
- Assets from your UX.zip are included under `src/assets/`.
- The admin dashboard uses Recharts for charts.
