Parse the JSON string below, compute each student’s average
score across the three subjects, and render a results table in the
browser showing name, average, and Pass/Fail status (pass mark: 50).

let schoolData = '{" classA ":[
{" name ":" Amara ", " CSC101 ":72 , " CSC102 ":55 , " CSC103 ":68} ,
{" name ":" Chidi ", " CSC101 ":40 , " CSC102 ":48 , " CSC103 ":35} ,
{" name ":" Ngozi ", " CSC101 ":85 , " CSC102 ":90 , " CSC103 ":78} ,
{" name ":" Emeka ", " CSC101 ":60 , " CSC102 ":52 , " CSC103 ":44}] ,
" classB ":[
{" name ":" Fatima ", " CSC101 ":91 , " CSC102 ":88 , " CSC103 ":95} ,
{" name ":" Tunde ", " CSC101 ":30 , " CSC102 ":45 , " CSC103 ":50} ,
{" name ":" Blessing " ," CSC101 ":77 , " CSC102 ":63 , " CSC103 ":70} ,
{" name ":" Seun ", " CSC101 ":55 , " CSC102 ":49 , " CSC103 ":58}]} ';
Parse schoolData using JSON.parse(), loop through both classes,
compute each student’s average across CSC101, CSC102 and CSC103, then
display a table on the page with columns: Name, Average, Status (Pass
/ Fail).
