const countries = require('./countriesArray');

test('First Link to be https://prayercast.com/afghanistan.html', () => {
  expect(countries[0]).toBe("https://prayercast.com/afghanistan.html");
});

test('Last Link to be https://prayercast.com/zimbabwe.html', () => {
  expect(countries[countries.length-1]).toBe("https://prayercast.com/zimbabwe.html");
});