let Decimal = prompt("Please enter your number. If nothing please enter 0 ");

R1 = Decimal % 2;
binary = Math.floor(Decimal / 2);
//finds the remainder number
R2 = binary % 2;
binary = Math.floor(binary / 2);

R3 = binary % 2;
binary = Math.floor(binary / 2);

R4 = binary % 2;
binary = Math.floor(binary / 2);

R5 = binary % 2;
binary = Math.floor(binary / 2);

R6 = binary % 2;
binary = Math.floor(binary / 2);

R7 = binary % 2;
binary = Math.floor(binary / 2);

R8 = binary % 2;
binary = Math.floor(binary / 2);

console.log(`The binary of ${Decimal} is ${R1, R2, R3, R4, R5, R6, R7, R8}`);

hexadec = Math.floor(Decimal / 16);
remainder1 = Decimal % 16;
console.log(`The hexadecimal of ${Decimal} is ${hexadec}`);

if(remainder1 == 10){
    remainder1 = "A";
}
if(remainder1 == 11){
    remainder1 = "B";
}
if(remainder1 == 12){
    remainder1 = "C";
}
if(remainder1 == 13){
    remainder1 = "D";
}
if(remainder1 == 14){
    remainder1 = "E";
}
if(remainder1 == 15){
    remainder1 = "F";
}

if(hexadec == 10){
     hexadec = "A";
}
if(hexadec == 11){
    hexadec = "B";
}
if(hexadec == 12){
    hexadec = "C";
}
if(hexadec == 13){
    hexadec = "D";
}
if(hexadec == 14){
    hexadec = "E";
}
if(hexadec == 15){
    hexadec = "F";
}