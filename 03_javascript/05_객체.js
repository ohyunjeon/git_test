window.onload  = () => {
// 1. 객체 생성
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click',() => {
    let div1 = document.getElementById('div1');
    let obj1 = {};
    let obj2 = new Object();
    let product = {
    // 'pName ': '아이폰 12 미니' , 
    // '0' : '배열 흉내'  
    pName : '아이폰 12 미니' ,  // 다옴표 생략 가능 
    0 : '배열 흉내',
    price : 990000,
    beand : '삼성',
    beand : '애플', // 중복으로 선언되면 마지막으로 선언된 애로 된다 
    spec : ['OLED','ISO16', '8Inch','화이트']

    };
    let user = {
        'user name': '문인수',
        // user_age : 22
        'user-age' : 22
    }

    console.log(obj1,obj2);
    console.log(product);

    //객체의 속성에 접근하는 방법
    div1.innerHTML = `product ['속성명']으로 접근하는 방법<br>`;
    // div1.innerHTML += `product['0'] : ${product['0']}<br>`;
    div1.innerHTML += `product[0] : ${product[0]}<br>`; //숫자형태만 다옴표 생략 가능하다
    div1.innerHTML += `product['pName'] : ${product['pName']}<br>`; //다옴표를 사용해야한다
    div1.innerHTML += `product['price'] : ${product['price']}<br>`;
    div1.innerHTML += `product['beand'] : ${product['beand']}<br>`;
    div1.innerHTML += `product['spec'][1] : ${product['spec'][1]}<br>`;//1번 인덱스만 부르고 싶을 때 
    div1.innerHTML += `product['spec'][3] : ${product['spec'][3]}<br>`;//3번 인덱스만 부르고 싶을 때 

    div1.innerHTML = `product. 속성명으로 접근하는 방법<br>`;
    // div1.innerHTML = `product.0 : ${product.0}<br>`; 오류 발생
    div1.innerHTML += `product.pName : ${product.pName}<br>`;
    div1.innerHTML += `product.price : ${product.price}<br>`;
    div1.innerHTML += `product.beand : ${product.beand}<br>`;
    div1.innerHTML += `product.spec: ${product.spec}<br>`;
    div1.innerHTML += `product.spec[1]: ${product.spec[1]}<br>`;
    
    div1.innerHTML = `속성명에 공백이나 특수문자가있는 경우 대괄호를 이용해서 값을 접근해야한다<br>`;
    // div1.innerHTML += `user['user name'] : ${user.'user name']}<br>` 문법 상 오류 
    div1.innerHTML += `user['user name'] : ${user['user name']}<br>`
    div1.innerHTML += `user['user-age'] : ${user['user-age']}<br>`
});

//2. 메소드
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let name = '홍길동';

        let dog = {
            name: '백구',
            kind: '진돗개',
            eat : function(food){
                // 객체 내부의 속성에 접근하기 위해서는 'this. 속성명'으로 작성해야 한다 
                console.log(`${this.kind} 종류인 ${this.name}가 ${food}를 먹고있네요!`);
                // console.log(food);
                // console.log(name);
                // console.log(this.name);
            }
        };
        dog.eat('닭가슴살');


    });

//3. 객체의 속성 추가 및 삭제
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', () => {
        // 빈 객체 생성
        let student = {};

        // 객체에 속성 추가 
        student.name = '홍길동';
        student['age'] = 30; // .도 되고 대괄호 해서 해도 된다

        // 객체에 메소드 추가
        student.whoAreYou = function(){
            let str = '';

            str = this.name + ", " + this.age;

            return str;
        };
        
        console.log(student);
        console.log(student.whoAreYou());

        //속성을 지우는 연산자
        delete(student.age);
        delete(student['name']);

        
        console.log(student);
        console.log(student.whoAreYou());

});

};