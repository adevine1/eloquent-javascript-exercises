//Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

function printTriangle () {
  val = "#";
  for (let x=0; x<7; x++) {
    console.log (val);
    val += "#"
  }
}

printTriangle ();