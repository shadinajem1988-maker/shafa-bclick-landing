# 💻 תקני Frontend

## מבנה
- קובץ יחיד `index.html` עצמאי (CSS+JS inline) — קל לפתוח, לשתף ולהעלות לכל אחסון.
- `<html dir="rtl" lang="he">`, meta viewport, meta description, OpenGraph.

## CSS
- Custom properties לכל צבע/ריווח (`:root`).
- `clamp()` לטיפוגרפיה וריווח רספונסיביים — מינימום media queries.
- Grid ל-layout, Flex לרכיבים.
- `scroll-behavior: smooth` + `scroll-margin-top` לעוגנים תחת header דביק.

## ביצועים
- פונטים: `preconnect` ל-Google Fonts + `display=swap`.
- תמונות: `loading="lazy"`, `decoding="async"`, מידות מוגדרות.
- אפס ספריות חיצוניות כבדות. אנימציות ב-CSS/IntersectionObserver.

## נגישות (a11y)
- landmarks: header/main/section/footer + aria-label.
- ניגודיות טקסט ≥ 4.5:1 על רקע כהה.
- focus-visible גלוי, ניווט Tab מלא.
- `@media (prefers-reduced-motion: reduce)` מכבה אנימציות.
- כפתורי הגייה עם aria-label "השמע הגייה".

## JS (vanilla)
- IntersectionObserver לאנימציות reveal.
- Web Speech API להגייה (`lang='ar'`, rate 0.85).
- accordion ל-FAQ (details/summary או JS קל).
- ולידציית טופס + הודעת הצלחה, ושיגור ל-WhatsApp/endpoint.
- כל CTA: `data-cta="hero|pricing|final"` למדידה.

## RTL
- כיווניות מימין; אייקונים/חצים מתהפכים לפי ההקשר.
- מספרים וטלפונים ב-`dir="ltr"` נקודתי.
