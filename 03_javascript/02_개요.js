// alert('외부 자바 스크립트 실행');

var btn2 = document.getElementById('btn2');

// btn2.onclick = function() {
//     console.log('console 출력 버튼 클릭!');
// }

btn2.onclick = consoleTest;

function consoleTest( ){
    console.log('console 출력 버튼 클릭!!!');
}

