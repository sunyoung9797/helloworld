let v1 = 10;
console.log(v1);

let v2 = 20;
console.log(v2);

const choi = {
    name: '최선영',
    age: 20,
    score: 90
}

const han = {
    name: '한동일',
    age:21,
    score:89
}

for(let field in han) {
    console.log(field +'-'+ han[field]); //field : 필드명 , han[field] : 필드값
}

const yun = {
    name: '윤희성',
    age:22,
    score:88
}

// 세가지 방법
console.log(choi.name);
console.log(choi['age']); // age : 필드명
let field = 'score'; //field : 변수
console.log(choi[field]); // choi[field] = choi['score']

//choi = persons[0]
const persons = [choi, han, yun];
for(let i=0; i<persons.length; i++) {
    console.log(persons[i].name);
    console.log(persons[i]['age']);
    field = 'score';
    console.log(persons[i][field]);
    console.log('========');
}

// 위 아래 똑같은 결과나옴 !!

for (let person of persons) {
    for (let field in person) {
        console.log(person[field]);
    }
    console.log('========');
}

for (let person of persons) {
    document.write('<ul>');
    for (let field in person) {
        console.log(person[field]);
        document.write('<li class="'+field+'">'+person[field]+'</li>')
    }
    document.write('</ul>')
}
