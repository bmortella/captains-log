// Stardate script © Phillip L. Sublett
// Phillip.L@Sublett.org
// http://TrekGuide.com

function stardate() {
  var now = new Date();
  var then = new Date("July 15, 1987");
  var stardate = now.getTime() - then.getTime();
  stardate = stardate / (1000 * 60 * 60 * 24 * 0.036525);
  stardate = Math.floor(stardate + 410000);
  stardate = stardate / 10;
  return stardate;
}

export default stardate;
