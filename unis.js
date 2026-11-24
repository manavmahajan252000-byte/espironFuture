/* ============================================================
   TOP 5 UNIVERSITIES BY COUNTRY: edit this file, nothing else.
   Source: QS World University Rankings 2027 (published 18 June 2026).
   "rank" is the university's position in the WORLD list, as QS shows it ("=" means tied).
   "s" is the short name used in the scrolling bar.
   Update once a year when QS publishes the new list, and change UNIS_SOURCE and the year.
   A university's rank does not tell a student whether it suits their course, budget or profile.
   ============================================================ */
var UNIS_SOURCE = "QS World University Rankings 2027, published 18 June 2026";
var UNIS = [
  { country: "USA", guide: "study-in-usa-after-12th/", list: [
    { n: "Massachusetts Institute of Technology (MIT)", s: "MIT", c: "Cambridge, Massachusetts", r: "1" },
    { n: "Stanford University", s: "Stanford", c: "Stanford, California", r: "=2" },
    { n: "Harvard University", s: "Harvard", c: "Cambridge, Massachusetts", r: "5" },
    { n: "California Institute of Technology (Caltech)", s: "Caltech", c: "Pasadena, California", r: "8" },
    { n: "University of Pennsylvania", s: "Penn", c: "Philadelphia, Pennsylvania", r: "15" } ] },
  { country: "UK", guide: "study-in-uk-after-12th/", list: [
    { n: "Imperial College London", s: "Imperial", c: "London", r: "=2" },
    { n: "University of Oxford", s: "Oxford", c: "Oxford", r: "4" },
    { n: "University of Cambridge", s: "Cambridge", c: "Cambridge", r: "6" },
    { n: "UCL (University College London)", s: "UCL", c: "London", r: "=8" },
    { n: "University of Edinburgh", s: "Edinburgh", c: "Edinburgh, Scotland", r: "35" } ] },
  { country: "Canada", guide: "study-in-canada-after-12th/", list: [
    { n: "McGill University", s: "McGill", c: "Montreal, Quebec", r: "30" },
    { n: "University of Toronto", s: "Toronto", c: "Toronto, Ontario", r: "32" },
    { n: "University of British Columbia", s: "UBC", c: "Vancouver, British Columbia", r: "45" },
    { n: "University of Alberta", s: "Alberta", c: "Edmonton, Alberta", r: "96" },
    { n: "University of Waterloo", s: "Waterloo", c: "Waterloo, Ontario", r: "=113" } ] },
  { country: "Australia", guide: "study-in-australia-after-12th/", list: [
    { n: "UNSW Sydney", s: "UNSW", c: "Sydney, New South Wales", r: "19" },
    { n: "University of Melbourne", s: "Melbourne", c: "Melbourne, Victoria", r: "22" },
    { n: "University of Sydney", s: "Sydney", c: "Sydney, New South Wales", r: "28" },
    { n: "Australian National University", s: "ANU", c: "Canberra, ACT", r: "29" },
    { n: "Monash University", s: "Monash", c: "Melbourne, Victoria", r: "31" } ] },
  { country: "Germany", guide: "study-in-germany-after-12th/", list: [
    { n: "Technical University of Munich (TUM)", s: "TUM", c: "Munich", r: "25" },
    { n: "LMU Munich", s: "LMU Munich", c: "Munich", r: "61" },
    { n: "Heidelberg University", s: "Heidelberg", c: "Heidelberg", r: "86" },
    { n: "Free University of Berlin", s: "FU Berlin", c: "Berlin", r: "=98" },
    { n: "RWTH Aachen University", s: "RWTH Aachen", c: "Aachen", r: "104" } ] }
];
