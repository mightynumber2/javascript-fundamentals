// Restricts and warns, preventing bugs; Always use
"use strict";

let hasDriversLicense = false;
const passTest = true;

// Adds more warnings that js might not by default
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

// const interface = "Audio";
// const private = "Parts";
