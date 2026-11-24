/* ============================================================
   RUNNING TICKER: edit these two lists, nothing else.
   Row 1 (moves right to left): built automatically from unis.js (each country,
   then its top 5 universities with QS 2027 world rank), followed by the extra
   destinations and facts listed below. Countries already in unis.js are skipped here.
   Row 2 (moves left to right): institutions in Punjab and Chandigarh.
   Each item: { t: "text", u: "optional link" }
   Rules:
   - Row 2 is listed alphabetically and is NOT a ranking. Add a rank only after
     checking nirfindia.org for the year you mention, and write the year.
   - Any number needs its source and year, as in the MEA item below.
   ============================================================ */
var TICKER_ABROAD = [
  { t: "Canada",    u: "study-abroad-after-12th/" },
  { t: "USA",       u: "study-in-usa-after-12th/" },
  { t: "UK",        u: "study-in-uk-after-12th/" },
  { t: "Australia", u: "study-in-australia-after-12th/" },
  { t: "Germany",   u: "study-in-germany-after-12th/" },
  { t: "Ireland" },
  { t: "New Zealand" },
  { t: "France" },
  { t: "Singapore" },
  { t: "UAE" },
  { t: "Over 18 lakh Indian students study in 153 countries (MEA, 2025)" }
];
var TICKER_PUNJAB = [
  { t: "Chandigarh University, Mohali" },
  { t: "Chitkara University, Rajpura" },
  { t: "Guru Nanak Dev University, Amritsar" },
  { t: "IIT Ropar" },
  { t: "Lovely Professional University, Phagwara" },
  { t: "NIT Jalandhar" },
  { t: "Panjab University, Chandigarh" },
  { t: "Punjab Agricultural University, Ludhiana" },
  { t: "Punjabi University, Patiala" },
  { t: "Thapar Institute, Patiala" }
];
