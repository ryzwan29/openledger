const figlet = require("figlet");
const colors = require("./colors");

function displayBanner() {

  const banner = figlet.textSync("Ryddd29", {
    font: "ANSI Shadow",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 150,
  });

  console.log(`${colors.bannerText}${banner}${colors.reset}`);
}

module.exports = displayBanner;
