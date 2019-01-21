let roles =["Городничий", "Аммос Федорович", "Артемий Филиппович", "Лука Лукич"];
let textLines = "Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор. " +
    "Аммос Федорович: Как ревизор?" +
    "Артемий Филиппович: Как ревизор? " +
    "Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем. " +
    "Аммос Федорович: Вот те на!" +
    "Артемий Филиппович: Вот не было заботы, так подай! " +
    "Лука Лукич: Господи боже! еще и с секретным предписаньем!";
let masText=[];

let indexes = [];
let lines = [];
let sum=0;
let count=0;
let answer = {};
answer['Городничий']='';
answer['Аммос Федорович']='';
answer['Артемий Филиппович']='';
answer['Лука Лукич']='';
for(let i =0; i<=textLines.length; i++){
    masText= textLines.split("Городничий:" || "Аммос Федорович:" || "Артемий Филиппович:" || "Лука Лукич")
}
console.log(masText);


for (let role of roles) {
    let index;
    let startIndex = 0;
    while (~(index = textLines.indexOf(role + ':', startIndex))) {
        indexes.push(index);
        startIndex = index + role.length;
        count++;
    }

}
lines.push(textLines.substr(0, 108)+ textLines.substr(108,137)+
    textLines.substr(137,170)+ textLines.substr(170,248)+
    textLines.substr(248,275)+textLines.substr(275,326));

answer['Городничий'] = ('1)'+textLines.substr(0, 108)+'4)'+textLines.substr(170,78));
answer['Аммос Федорович'] = ('2)'+textLines.substr(108,29)+'5)'+textLines.substr(248,27));
answer['Артемий Филиппович'] = ('3)'+textLines.substr(137,33)+'6)'+textLines.substr(275,51));
answer['Лука Лукич'] = ('7)'+textLines.substr(326, 56));


console.log(answer);
console.log(count);
console.log(lines);
indexes.sort();

