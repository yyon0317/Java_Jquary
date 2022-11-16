//버튼0누르면
//모든버튼에 orange 클래스명 제거
//버튼 0 누르면 orange클래스명 추가
//모든 div에 붙은 show 클래스명 제거
//div0에 show 클래스명 추각
document.querySelectorAll('.tab-button')[0].addEventListener('click',function(){
    //이거이거이거document.querySelectorAll(".tab-button").classList.remove('orange');

    var 버튼 = $('.tab-button');

    버튼.eq(0).on('click', function(){
    버튼.removeClass('orange');
    버튼.eq(0).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(0).addClass('show');
})
});

//for 반복문(실은 for 반복문 사용할 때 변수를 var i 말고 let i로 바꿔야 잘됩니다.let으로 바꾸면 탭 완성입니다.)

for (var i = 0; i < 3; i++) {
    console.log('안녕')
  }

  for (let i = 0; i < 3; i++){
    $('.tab-button').eq(i).on('click', function(){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
      })
  }

    // for 안에서 var i = 0 쓰면
    // - var 변수는 범위가 function입니다.
    // - var i 들어있는 포스트잇은 for 바깥에 생성됩니다. 
 
    // for 안에서 let i = 0 쓰면
    // -let 변수는 범위가 { } 입니다.
    // - let i 들어있는 포스트잇은 for 안쪽에 3개 생성됩니다.
    // 그리고 컴퓨터는 변수가져다쓸 때 가까운거 가져다 쓰려고합니다.

    //"제 코드가 좋은 코드인지 모르겠어요" 
    // 1. 원하는 기능이 잘 구현되었는가
    // 2. 확장성좋은가
    // 3. 나중에 관리가 쉬울 것인가
    // 4. 성능문제 없는가

     // 2. 확장성좋은가 $('.tab-button').length;
    for (let i = 0; i < $('.tab-button').length; i++){

        $('.tab-button').eq(i).on('click', function(){
          $('.tab-button').removeClass('orange');
          $('.tab-button').eq(i).addClass('orange');
          $('.tab-content').removeClass('show');
          $('.tab-content').eq(i).addClass('show');
        })

      };