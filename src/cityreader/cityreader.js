const csv = require("csvtojson");
class City {
  constructor(name, lat, lon) {
    this.name = name;
    this.lat = lat;
    this.lon = lon;
  }
  speak() {
    return `${this.name}, ${this.lat}, ${this.lon}`;
  }
}

const cities = [];

// Invoking csv returns a promise
const converter = csv()
  .fromFile("./cities.csv")
  .then((json) => {
    let e;
    json.forEach((row) => {
      e = new City(row["city"], row["lat"], row["lng"]);
      cities.push(e);
    });
  })
  .then(() => {
    cities.forEach((em) => {
      console.log(em.speak());
    });
  });
