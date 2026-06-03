// module2.ts

// A constant variable containing the value of Pi
const pi1: number = 3.14;

// Export as the default export of this module
// A module can only have ONE default export
export default pi1;

/*
Equivalent import syntax:

import anythingYouWant from "./module2";

The imported name does NOT need to match "pi1"
because this is a default export.
*/