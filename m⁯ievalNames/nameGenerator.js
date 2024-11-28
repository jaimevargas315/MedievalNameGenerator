import { readFileSync } from 'fs';

const firstData = readFileSync('firstNames.txt','utf-8');
const FIRSTNAMES = firstData.split(' ');

const lastData = readFileSync('lastNames.txt','utf-8');
const LASTNAMES = lastData.split(',');

titles = ['Sir', 'Esquire', 'Madame', 'Lord', 'Master', 'Mister', 'Missus','King','Queen',
          'Prince','Princess','Archmage','Lady','Duke','Count','Duchess','Countess','Baron',
          'Baroness','Knight','Viscount','Viscountess','Marquess','Marchioness']

let title = titles[Math.floor(Math.random() * titles.length)];
let firstName = FIRSTNAMES[Math.floor(Math.random() * FIRSTNAMES.length)];
let lastName = LASTNAMES[Math.floor(Math.random() * LASTNAMES.length)];
console.log('Your Medieval name is ' +  title + " " + firstName + " " + lastName);

document.getElementById("titleImage").src="count.jpg";