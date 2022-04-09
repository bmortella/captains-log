// Stardate script © Phillip L. Sublett
// Phillip.L@Sublett.org
// http://TrekGuide.com

function stardate() {
  let now = new Date();
  let then = new Date("July 15, 1987");
  let stardate = now.getTime() - then.getTime();
  stardate = stardate / (1000 * 60 * 60 * 24 * 0.036525);
  stardate = Math.floor(stardate + 410000);
  stardate = stardate / 10;
  return stardate;
}

export default stardate;
