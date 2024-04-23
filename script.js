alert(`How to use?

Tartib raqam yoki funksiya nomini yozib ishlatsangiz boladi`);
alert(`Menu: 
1. Fasil aniqlovchi
2. Kalkulyator
3. Quiz game
4. Snace game`);
let enter = prompt("Qaysi funksiya kerak?");

switch (enter) {
    case '1', 'Fasil aniqlovchi': console.log("^ Fasil aniqlovchi ^"), fasil(); break;
    case '2', 'Kalkulyator': console.log("^ Kalkulyator ^"), calculator(); break;
    case '3', 'Quiz game': console.log("^ Quiz game ^"), quiz(); break;
    case '4', 'Snace game': console.log("^ Snace game ^"); break;
    default: console.log("Iltimos menudan birorini tanlang");
}

//fasil
function fasil() {
    let fasil = prompt(`Oyni kiriting (oy raqami yoki nomi bilan): `);
    switch(fasil){
        case '1', 'Yanvar' : console.log("Qish fasli"); break;
        case '2', 'Fevral' : console.log("Qish fasli"); break;
        case '3', 'Mart' : console.log("Bahor fasli"); break;
        case '4', 'Aprel' : console.log("Bahor fasli"); break;
        case '5', 'May' : console.log("Bahor fasli"); break;
        case '6', 'Iyun' : console.log("Yoz fasli"); break;
        case '7', 'Iyul' : console.log("Yoz fasli"); break;
        case '8', 'Avgust' : console.log("Yoz fasli"); break;
        case '9', 'Sentabr' : console.log("Kuz fasli"); break;
        case '10', 'Oktabr' : console.log("Kuz fasli"); break;
        case '11', 'Noyabr' : console.log("Kuz fasli"); break;
        case '12', 'Dekabr' : console.log("Qish fasli"); break;
        default: console.log("Iltimos oy raqami yoki nomini togri kiriting!");
    }
}


//kalkulyator
function calculator() {
    let a = +prompt("Birinchi sonni kiriting: ");
    let b = +prompt("Ikkinchi sonni kiriting: ");
    let c = prompt("Operatorni kiriting(daraja kotarish ham ishlaydi): ");
    switch (c) {
        case '+' : console.log(a + b); break;
        case '-' : console.log(a - b); break;
        case '*' : console.log(a * b); break;
        case '/' : console.log(a / b); break;
        case '%' : console.log(a % b); break;
        case '**': console.log(a ** b); break;
        default: console.log("Iltimos to'g'ri operatorni kiriting");
    }
}


//quiz game
function quiz() {
    console.log("Bu funcsiya hali toliq ishga tushirilmadi iltimos kuting..)");
    console.log("Coming soon...");
}


//snace game
function snace() {
    console.log("Bu funcsiya hali toliq ishga tushirilmadi iltimos kuting..)");
    console.log("Coming soon...");
}