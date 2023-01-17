window.onload = function() {
    //1. window 객체
    //1) window.open()
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        // window.open();// 새 탭
        // window.open('URL','창이름','특성');// 새 탭
        // window.open('https://www.naver.com'); // 네이버
        //특성의 경우 브라우저마다 다르게 동작하기 때문에 정상적으로 동작하는지 꼭 확인해야 한다
        window.open('https://www.naver.com','naver','width=500,height=500'); // 네이버
    });

    //2. 타이머
    //1) window.setTimeout()
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let newwindow = window.open();

        newwindow.alert('3초 후에 이 페이지는 종료됩니다.');
        // newwindow.close();

        //일정 시간 후에콜백 함수를 한 번 실행
        timeId = window.setTimeout( () =>  newwindow.close(), 3000);

        // 타이머 ID를 clearTimeout 에 전달하면 해당 ID의 타이머를 취소할 수 있다 
        // window.clearTimeout(timeId);

        console.log(timeId);
    });

     // 2) window.setIterval()
    let timeId = 0;
    let btnStart = document.getElementById("btnStart");
    let btnStop = document.getElementById('btnStop');

    btnStart.addEventListener("click", () => {
    let div1 = document.getElementById("div1");

    // 일정 시간마다 콜백 함수를 반복 실행
    timeId = window.setInterval(() => {
        let now = new Date();

        div1.innerHTML = `${now.getHours()} : ${now.getMinutes()} : <span id ='second'>${now.getSeconds()}</span>`;
    }, 1000);
    });

    btnStop.addEventListener('click', () => {
        window.clearInterval(timeId);
    });
};