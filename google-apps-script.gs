/**
 * שפה בקליק — רישום לידים אוטומטי ל-Google Sheet
 * ───────────────────────────────────────────────
 * הקמה (פעם אחת, ~4 דקות):
 *  1. צור Google Sheet ריק.
 *  2. תפריט: Extensions → Apps Script.
 *  3. מחק את הקוד שיש שם, הדבק את הקוד הזה, ושמור (Ctrl+S).
 *  4. לחץ Deploy → New deployment → סוג: Web app.
 *       - Execute as: Me
 *       - Who has access: Anyone
 *  5. Authorize (אשר את ההרשאות לחשבון שלך).
 *  6. העתק את ה-Web app URL שמתקבל.
 *  7. הדבק אותו ב-index.html בתוך CONFIG.sheetWebhook = "...".
 *  מאותו רגע כל ליד נרשם אוטומטית בגיליון (בנוסף למייל).
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data  = JSON.parse(e.postData.contents);
    // כותרות בשורה הראשונה (פעם אחת)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['תאריך ושעה', 'שם', 'טלפון', 'מתעניין ב', 'קמפיין', 'מקור', 'סטטוס']);
    }
    sheet.appendRow([
      new Date(),
      data.name  || '',
      data.phone || '',
      data.track || '',
      data.utm   || '',
      data.source|| '',
      ''  // עמודת סטטוס למעקב ידני (התקשרתי / נסגר)
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}