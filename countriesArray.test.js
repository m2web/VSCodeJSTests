const countries = require('./countriesArray');

test('First Link to be https://prayercast.com/afghanistan.html', () => {
  expect(countries[0]).toBe("https://prayercast.com/afghanistan.html");
});