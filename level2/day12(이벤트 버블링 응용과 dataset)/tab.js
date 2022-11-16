
     
    // for (let i = 0; i < $('.tab-button').length; i++){
    //     $('.tab-button').eq(i).on('click', function(){
    //       탭열기(i)
    //     })
    //   };

    // 탭기능 다르게 만들기 이벤트 리스너1개만쓰기
    $('.list').click(function(e){
      //지금 누른데 버튼 0이면 버튼0에 orange박스0 show

      // if(e.target == document.querySelectorAll('.tab-button')[0]){
      //   탭열기(0)
      // }

      탭열기(e.target.dataset.id)

    })
        function 탭열기(숫자){
          $('.tab-button').removeClass('orange');
          $('.tab-button').eq(숫자).addClass('orange');
          $('.tab-content').removeClass('show');
          $('.tab-content').eq(숫자).addClass('show');
        }

        //1. 함수로 축약할 때 변수같은게 있으면 파라미터로 바꾸는게 좋음 
        //2. 이벤트리스너 줄이면 이점이 있음
        //3. dataset 잡기술 알면 이벤트리스너 적게 사용할 때 내가 뭐 눌렀는지 쉽게 파악할 수도 있음 

      