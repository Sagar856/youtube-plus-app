// Step 1 of context API
// Have the context to have data (optional) -- by using createContext()
import { createContext } from 'react';

export const PageContext = createContext(); // you can have the data
console.log(PageContext);
// step 2 and 3 of context API -- refer app.js
//step 4 -- refer contactUsPage.js
