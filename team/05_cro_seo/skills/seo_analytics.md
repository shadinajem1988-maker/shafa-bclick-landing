# 📈 SEO ומדידה

## מילות מפתch מטרה
ערבית מדוברת · לימוד ערבית מדוברת אונליין · קורס ערבית מדוברת · ערבית גלילית/צפונית · ערבית מהבית · שיעורי ערבית בזום

## מטא-תגיות (head)
```html
<title>שפה בקליק | ללמוד ערבית מדוברת (להג צפוני) מהבית</title>
<meta name="description" content="קורס ערבית מדוברת חיה בלהג גלילי — בלי פוסחא, בלי בושה. מדברים מהשיעור הראשון. שיחת ייעוץ חינם והתאמת רמה אישית.">
<meta property="og:title" content="שפה בקליק — ערבית מדוברת שמדברים, לא רק לומדים">
<meta property="og:description" content="...">
<meta property="og:image" content="assets/logo-slogan.png">
<meta property="og:type" content="website">
```

## Schema.org (JSON-LD)
- `Course` — שם, ספק, תיאור, שפה.
- `LocalBusiness`/`EducationalOrganization` — שם, מייל, אזור שירות.
- `FAQPage` — כל שאלה ותשובה מה-FAQ (זוכה ל-rich snippets בגוגל).

## Core Web Vitals
- **LCP** < 2.5s: תמונת Hero מותאמת, preconnect לפונטים.
- **CLS** < 0.1: מידות קבועות לתמונות, font-display swap.
- **INP** < 200ms: JS קל, בלי חסימות.

## מדידה (מוכנות)
- כל CTA עם `data-cta="..."`.
- placeholder ל-GA4 / Meta Pixel ב-`<head>` (מוסיפים מזהה כשיהיה).
- אירועים מומלצים: `cta_click`, `whatsapp_click`, `form_submit`, `scroll_50`, `scroll_90`.

## CRO — מפת חום והקלטות (חובה מהיום הראשון)
- **Microsoft Clarity** (חינמי) או **Hotjar** — להטמיע מיד עם העלייה לאוויר.
- מה בודקים: Scroll Depth (איפה נעצרים), heatmaps על כרטיסי התמחור (איזו חבילה מושכת קליקים), session recordings של נטישת טופס.

## A/B Testing
- כלי: Google Optimize / VWO / חלופה.
- מבחן ראשון — כותרת ה-Hero:
  - הוק **רגשי**: "לשבור את מחסום הדיבור"
  - הוק **תועלתני**: "לדבר תכלס מהשיעור הראשון"
- בודקים משתנה אחד בכל פעם, מינימום 100 המרות לכל וריאנט.

## בדיקות לפני עלייה לאוויר
- [ ] Lighthouse 90+ בנייד
- [ ] בדיקת קישורי וואטסאפ/מייל אמיתיים
- [ ] תצוגה ב-iOS Safari + Android Chrome
- [ ] שיתוף בוואטסאפ מציג og:image נכון
