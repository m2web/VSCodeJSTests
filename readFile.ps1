$countyLinks = ''
$countries = ''

foreach($line in [System.IO.File]::ReadLines("C:\Users\m2web\code\js\VSCodeJSTests\countries.txt"))
{
    $countyLinks = $countyLinks + '"https://prayercast.com/'+$line.ToLower().Replace(" ", "-")+'.html",'
    $countries = $countries + '"'+$line+'",'
}

# '['+$countyLinks+']'
'['+$countries+']'