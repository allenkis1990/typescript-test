"use strict";
console.log('Dname', Dname);
console.log('Dfn', Dfn(2020));
let cclass = new Dclass('lwh', 18);
cclass.say(); //Dclass
let directive = [Denum.left, Denum.right, Denum.top, Denum.bottom];
console.log('Denum', directive);
Dnamespace.extend.fn('lwh Dnamespace'); //Dnamespace
let Dinterface = {
    name: 'allen',
    age: 18,
    say(b = true) {
        return b;
    }
};
console.log(Dinterface, 'Dinterface');
let dsm = Dshengming('sm key');
console.log(dsm, dsm.key, 'Dshengming');
