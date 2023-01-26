window.onload = () => {
    // 1) 정규표현식 객체 생성
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        let str1 = 'javascript jqueryscript ajax';
        let str2 = 'javascript jquery ajax';
        let div1 = document.getElementById('div1');
        // 생성자 함수를 이용한 정규표현식 객체 생성
        let regExp1 = new RegExp('script'); // 생성자의 매개값으로 패턴을 문자열로 지정한다.

        // 리터럴을 이용한 정규표현식 객체 생성
        let regExp2 = /script/; // 패턴 양쪽에 /로 작성한다.(시작 기호, 종료 기호)

        console.log(regExp1, typeof(regExp1), regExp1 instanceof RegExp);
        console.log(regExp2, typeof(regExp2), regExp2 instanceof RegExp);

        // RegExp 객체에서 제공하는 메소드
        // test('문자열') : 문자열에서 정규표현식 패턴을 만족하는 값이 있으면 true, 없으면 false를 리턴한다.
        div1.innerHTML += `regExp1.test(str1) : ${regExp1.test(str1)}<br>`;
        div1.innerHTML += `regExp1.test(str2) : ${regExp1.test(str2)}<br>`;
        //exec('문자열') : 문자열에서 정규표현식 패턴을 만족하는 값이 있으면 값을 리턴한다 
        div1.innerHTML += `regExp1.test(str1) : ${regExp1.test(str1)}<br>`;
        div1.innerHTML += `regExp1.test(str1) : ${regExp1.test(str2)}<br>`;

        //문자열에서 정규 표현식 객체를 이용하는 메소드 
        // match (정규표현식) : 문자열에서 정규표현식 패턴을 만족하는 값을 리턴한다 (없르면 null 리턴)
        div1.innerHTML += `str1.match(regExp1) : ${str1.match(regExp1)}<br>`;
        div1.innerHTML += `str2.match(regExp1) : ${str2.match(regExp1)}<br>`;
        //search(정규표현식) : 문자열에서 정규표현식 패턴을 만족하는 부분의 시작 인덱스를 리턴한다 (없으면 -1)
        div1.innerHTML += `str1.search(regExp1) : ${str1.search(regExp1)}<br>`;
        div1.innerHTML += `str2.search(regExp1) : ${str2.search(regExp1)}<br>`;
        //split(정규표현식) : 문자열에서 정규표현식 패턴을 만족하는 값을 구분자로 하여 배열을 생성하고 리턴한다
        div1.innerHTML += `str1.split(regExp1) : ${str1.split(regExp1)}<br>`;
        div1.innerHTML += `str2.split(regExp1) : ${str2.split(regExp1)}<br>`;
        //replace(정규표현식, 바꿀 값) : 문자열에서 정규표현식 패턴을 만족하는 값을 바꿀값으로 변경한다 
        div1.innerHTML += `str1.replace(regExp1,'스크립트') : ${str1.replace(regExp1, '스크립트')}<br>`;
        div1.innerHTML += `str2.replace(regExp1,'스크립트') : ${str2.replace(regExp1, '스크립트')}<br>`;

        console.log(str1.split(regExp1));
    });

    //2. 플래그 문자

    let btn2 = document.getElementById('btn2')

    btn2.addEventListener('click', () => {
        let div2 = document.getElementById('div2');
        let str = 'JavaScript JQuery Ajax';

        //replace() 메소드는 '$&'는 패턴을 만족하는 문자열을 가리킨다 
        div2.innerHTML = `/a/ : ${str.replace(/a/,'($&)')}<br>`;
        // i : 대소문자를 가리지 안고 비교한다
        div2.innerHTML += `/a/ : ${str.replace(/a/i,'($&)')}<br>`;
        // g : 전역으로 비교를 수행한다
        div2.innerHTML += `/a/ : ${str.replace(/a/g,'($&)')}<br>`;
        div2.innerHTML += `/a/ : ${str.replace(/a/ig,'($&)')}<br>`;
        div2.innerHTML += `/a/ : ${str.replace(/a/gi,'($&)')}<br>`;
    });

      // 3. 정규표현식 특수문자
        let btn3 = document.getElementById('btn3');

        btn3.addEventListener('click', () => {
            let div3 = document.getElementById('div3');
            let str = 'a aa aaa aaaa';

          // 반복 검색
          // {m,n}은 앞선 패턴이 최소 m번, 최대 n번 반복되는 문자열을 의미한다.
            div3.innerHTML += `/a{1,2}/g : ${str.replace(/a{1,2}/g, '($&)')}<br>`; // 하나 또는 두개씩 괄호로 묶어줌!
          // {3}은 {3,3}과 같음!
            div3.innerHTML += `/a{3}/g : ${str.replace(/a{3}/g, '($&)')}<br>`;
          // {2,n} : 앞선 패턴이 최소 2번이상 반복되는 문자열을 의미한다.
            div3.innerHTML += `/a{2,}/g : ${str.replace(/a{2,}/g, '($&)')}<br>`;
          // +는 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다. ({1,})
            div3.innerHTML += `/a+/g : ${str.replace(/a+/g, '($&)')}<br>`;
          // +는 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다. ({0,1})
            div3.innerHTML += `/a?/g : ${str.replace(/a?/g, '($&)')}<br>`;

            //문자열의 앞, 뒤 구문
            str = 'JavaScript\nJQuery\nShellseript\nAjax';
            div3.innerHTML += `/^j/ig : ${str.replace(/^j/ig,'($&)')}<br>`;
            div3.innerHTML += `^j/igm: ${str.replace(/^j/igm,'($&)')}<br>`;
            div3.innerHTML += `/^ipt$/igm : ${str.replace(/^ipt$/igm,'($&)')}<br>`;

            //OR 검색
            // [...] 내의 문자들 중 하나라도 존재할 경우를 의미한다
            str = 'JavaScript JQuery Ajax';
            div3.innerHTML += `/[aj]/ig : ${str.replace(/[aj]/ig,'($&)' )}`;
            //[...]내의 ^는  not의 의미를 가진다
            div3.innerHTML += `/[aj]/ig : ${str.replace(/[^aj]/ig,'($&)' )}`;

            str = ' 123 JavaScript ';
            //[...]내의 - 는 범위 지정을 의미한다
            div3.innerHTML += `/[aj]/ig : ${str.replace(/[a-z]/ig,'($&)' )}`;
            div3.innerHTML += `/[aj]/ig : ${str.replace(/[A-Z]/ig,'($&)' )}`;
            div3.innerHTML += `/[aj]/ig : ${str.replace(/[0-9]/ig,'($&)' )}`;
            div3.innerHTML += `/[aj]/ig : ${str.replace(/[0-9A-Z]/ig,'($&)' )}`;

            //임의 문자열 검색
            //.은 임의의 문자 한 개를 의미하고 문자 내용은 무엇이든 상관없다
            div3.innerHTML += `/…./g : ${str.replace(/…./g, '($&')}<br>`;

            //문자 클래스
            str = 'A1 B2 C3 d_4 e:5 ` ffgg77—__— \t가\t나\n다';


            // \d : 숫자를 의미한다. ([0-9])
            div3.innerHTML += `/\\d/g : ${str.replace(/\d/g, "($&)")}<br>`;
            // \D : 숫자가 아닌 문자를 의미한다. ([^0-9])
            div3.innerHTML += `/\\D/g : ${str.replace(/\D/g, "($&)")}<br>`;
            // \w : 알파벳, 숫자, 언더바(_)를 의미한다. ([a-zA-Z0-9_])
            div3.innerHTML += `/\\w/g : ${str.replace(/\w/g, "($&)")}<br>`;
            // \W : 알파벳, 숫자, 언더바(_)가 아닌 문자를 의미한다. ([^a-zA-Z0-9_])
            div3.innerHTML += `/\\W/g : ${str.replace(/\W/g, "($&)")}<br>`;
            // \s : 공백 문자를 의미한다. ([ \n\t])
            div3.innerHTML += `/\\s/g : ${str.replace(/\s/g, "($&)")}<br>`;
            // \S : 공백 문자가 아닌 문자를 의미한다. ([^ \n\t])
            div3.innerHTML += `/\\S/g : ${str.replace(/\S/g, "($&)")}<br>`;
        });
    };