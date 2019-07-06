$countries = ''

foreach($line in [System.IO.File]::ReadLines("C:\Users\m2web\code\js\VSCodeTest\countries.txt"))
{
    $countries = $countries + '"https://prayercast.com/'+$line.ToLower().Replace(" ", "-")+'.html",'
}

'['+$countries+']'