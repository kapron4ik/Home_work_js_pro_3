  /*
    import defaultExport from "module-name"; <- node_modules
    import * as name from "module-name";
    import { export } from "module-name";
    import { export as alias } from "module-name";
    import { export1 , export2 } from "module-name";
    import { export1 , export2 as alias2 } from "module-name";
    import defaultExport, * as name from "module-name";
    import "module-name";
  */
  /*
    import defaultExport from "module-name";
  */

// import Singlton from './singleton';

import objectFreeze from '../classworks/objectfreeze';

import singleton from '../classworks/singleton';


objectFreeze();

// singleton.addLaw(12323, "test test");
// singleton.show();
// singleton.showLaw(12323);
// singleton.showCitizensSatisfactions();
// singleton.showBudget ();
// singleton.holdHolidey ();

let btnAdd = document.getElementById('addLaw');
btnAdd.addEventListener("click",singleton.addLaw);

let btnShow = document.getElementById('show');
btnShow.addEventListener("click",singleton.show);

let btnShowLaw = document.getElementById('showLaw');
btnShowLaw.addEventListener("click",singleton.showLaw);

let btnShowCitSat = document.getElementById('showCitizensSatisfactions');
btnShowCitSat.addEventListener("click",singleton.showCitizensSatisfactions);

let btnShowBud = document.getElementById('showBudget');
btnShowBud.addEventListener("click",singleton.showBudget);

let btnHolidey = document.getElementById('holdHolidey');
btnHolidey.addEventListener("click",singleton.holdHolidey);

