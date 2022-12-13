let item_1 = 5; //1,2
console.log(item_1); //3
let item_2 = 3; //4,5
console.log(item_2); //6
let item_3 = item_1 + item_2 //7,8
console.log(item_3); //9
let item_4 = "Yolochka"; //10,11
console.log(item_4); //12
console.log(item_3 + item_4); //13
console.log(item_3 * item_4); //14
let item_5 = item_3; //15,16
console.log(item_5);
let item_6; //17
let item_6_type; //18
item_6 = 15; //19
item_6_type = typeof(item_6); //20
console.log('item_6 == ' + item_6 + ' ' + 'item_6_type == ' + item_6_type); //21
let item_7 = String(item_6); //22
let item_7_type; //23
item_7_type = typeof(item_7); //24
console.log('item_7 == ' + item_7 + ' ' + 'item_7_type == ' + item_7_type); //25
let age_1 = 10; //26
let age_2 = 18; //27
let age_3 = 60; //28
if (age_1<age_2){
    console.log("You don’t have access cause your age is " + age_1 + " It’s less then ");
} //29,30
else if (age_1>=age_2 && age_1<age_3){
    console.log("Welcome !");
} // 31
else if (age_1>age_3){
    console.log("Keep calm and look Culture channel");
} //32
else {
    console.log ("Technical work");
} //33
switch (true){
    case (age_1<age_2):
        console.log("You don’t have access cause your age is " + age_1 + " It’s less then ");  break;
    case (age_1>=age_2 && age_1<age_3):
        console.log("Welcome !"); break;
    case (age_1>age_3):
        console.log("Keep calm and look Culture channel"); break;
    default:
        console.log ("Technical work"); break;
} //33