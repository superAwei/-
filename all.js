// 變數宣告
var i, j;
// 表格標題
document.write("<tr><td></td>");
for (i=1;i<=9;i++)
document.write("<td><b>" + i + "</b></td>");
document.write("<tr>");
// 巢狀迴路
for (i=1;i<=9;i++){
document.write("<tr>");
document.write("<td><b>" + i + "</b></td>");
j = 1;
while (j <= 9){
document.write("<td>");
document.write(i + "*" + j + "=" + i*j);
document.write("</td>");
j++;
}
document.write("<tr>");
}