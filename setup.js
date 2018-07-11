
const colors = require("colors");

/**
 * This function will check to make sure the variables is correct on startup
 * if there is an error it will need to caught by the calling function
 */
module.exports.init = function(){
    console.log(colors.green.underline(">> Setup started"));
    console.log("Checking variables file");
    check_variables();
    console.log(colors.green.underline(">> Setup complete"));
}

// Check all custom variables are in the variables file
function check_variables() {
    const constants_to_check = [
      "NODE_ENV",
      "PORT",
      "DB_ADDRESS",
      "PW",
      "USER"
    ];
    let have_error = false;

    for (let value of constants_to_check) {
      if (!process.env[value]) {
        have_error = true;
        console.error(
          colors.bgRed.white(`${value} constant value missing from variables.env`)
        );
      }
    }
    if (have_error) {
      throw new Error("Missing Constant value in variables.env");
    }
  }