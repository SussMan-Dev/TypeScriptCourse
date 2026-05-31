// module1.ts

// Import the default export from module2
// The imported name can be any valid identifier
import pi1 from "./module2";

console.log(pi1); // 3.14

/*
----------------------------------------
Named Export Example
----------------------------------------

module2.ts

const pi: number = 3.14;
export { pi };

module1.ts

import { pi } from "./module2";
console.log(pi);

Named exports must be imported using
the exact exported name (unless aliased).
*/

/*
----------------------------------------
Module Scope
----------------------------------------

Variables declared inside module2.ts
are private to module2 unless exported.

Example:

// module2.ts
const studentList: string[] = ["Huy", "An", "Lợi"];

Trying to access it directly:

// module1.ts
console.log(studentList);

Error:
Cannot find name 'studentList'

Reason:
studentList belongs to module2's scope and
was not exported.
*/

/*
----------------------------------------
Default Export vs Named Export
----------------------------------------

Default Export

// module2.ts
const pi1 = 3.14;
export default pi1;

// module1.ts
import pi1 from "./module2";
import myPi from "./module2"; // also valid

✓ Can rename during import


Named Export

// module2.ts
export const pi = 3.14;

// module1.ts
import { pi } from "./module2";

✓ Must use the exported name
(or alias it explicitly)

Example:
import { pi as myPi } from "./module2";
*/