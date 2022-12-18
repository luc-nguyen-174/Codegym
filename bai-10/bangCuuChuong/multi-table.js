let sout;
// noinspection HtmlDeprecatedAttribute
sout = "<table border='3' cellspacing='2' cellpadding='6'>"
for (i = 1; i < 10; i++)
{
    sout = sout + "<tr>";
    for (j = 2; j < 10; j++)
    {
        sout = sout + "<td>" + j + "*" + i + "=" + i * j + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);

