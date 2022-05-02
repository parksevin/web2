(function($){

//     // 네이게이션 : slideDown / slideUp
    
//     $('.main-btn').mouseenter(function(){
//         $('.sub').stop().slideUp(0);
//         $(this).next().stop().slideDown(300);

//         $('.main-btn').removeClass('on');
//         $(this).addClass('on');
//     });

//     $('#nav').mouseleave(function(){
//         $('.sub').stop().slideUp(300,function(){
//             $('.main-btn').delay(1600).removeClass('on');
//         });
//     });
    
// }


    // 부드럽게 보이고 (fadeIn(300))
    // 부드럽게 사라지고 (fadeOut(0))
    
    // $('.main-btn').mouseenter(function(){
    //     $('.sub').stop().fadeOut(0);
    //     $(this).next().stop().fadeIn(300);

    //     $('.main-btn').removeClass('on');
    //     $(this).addClass('on');
    // });


    //객체(object) 형식의 이벤트
    $('.main-btn').on({
        mouseenter: function(){  //마우스접근성
            $('.sub').stop().fadeOut(0);
            $(this).next().stop().fadeIn(300);
    
            $('.main-btn').removeClass('on');
            $(this).addClass('on');
        },
        focusin: function(){ // 탭키접근성
            $('.sub').stop().fadeOut(0);
            $(this).next().stop().fadeIn(300);
    
            $('.main-btn').removeClass('on');
            $(this).addClass('on');
        }
    });
    

    //객체(object) 형식의 이벤트

    $('.main-btn').on({
        mouseenter: function(){
            $('.sub').stop().fadeOut(0);
            $(this).next().stop().fadeIn(300);

            $('.main-btn').removeClass('on');
            $(this).addClass('on');
        },
        focusin: function(){
            $('.sub').stop().fadeOut(0);
            $(this).next().stop().fadeIn(300);

            $('.main-btn').removeClass('on');
            $(this).addClass('on');
        }
    });

    // //ES5
    // $('.main-btn').on({
    //     mouseenter: function(){

    //     },
    //     focusin: function(){

    //     }
    // });

    // //ES6
    // $('.main-btn').on({
    //     mouseenter(){

    //     },
    //     focusin(){

    //     }
    // });
            


    //접근성:포커스focusin

    $('.main-btn').focusin(function(){   
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);

        $('.main-btn').removeClass('on');
        $(this).addClass('on');
    });



    $('#nav').mouseleave(function(){
        $('.sub').stop().fadeOut(300)
            $('.main-btn').removeClass('on');

    });

    $('#nav').on({
        mouseleave:function(){
            $('.sub').stop().fadeOut(300)
            $('.main-btn').removeClass('on');

        }
    });


    //메인슬라이드
    let cnt = 0;

    // 페이드 인 : 서서히 부드럽게 보이는 효과 애니메이션
    // 페이드 아웃 : 서서히 부드럽게 사라지는 효과 애니메이션
    // 스타일 효과중: css속성 opacity를 활용 제작 합니다.
    // 제이쿼리 fadeIn(), fadeOut() 메서드를 활용 제작 하기도 합니다.

    // A4 3장
    // 순서는 깊이 z-index를 이용 순서를 바꾼다.
    // 1번 용지 - z-inedx : 3->1
    // 2번 용지 - z-inedx : 2->3
    // 3번 용지 - z-inedx : 1->2
    // 1번 용지 - z-inedx : 3->1
    // 2번 용지 - z-inedx : 2->3
    // 3번 용지 - z-inedx : 1->2
    // .
    // .
    // .
    // 1번 용지를 부드럽게 사라지게하면 2번이 보인다.
    // 2번이 부드럽게 사라지면 3번이 보인다.

    //1. 메인슬라이드 함수
    function mainSlide(){
        console.log('페이드 아웃', cnt==0?2:cnt-1); //0 1 2 0 1 2... 
        console.log('페이드 인', cnt); //1 2 0 1 2 0...


        $('.slide').css({zIndex:1}).animate({opacity:1},0); // 초기화

        //$('.slide').eq(1).css({zIndex:2}).animate({opacity:1},0); 두번째 장 / 보이는 이미지
        $('.slide').eq(cnt).css({zIndex:2}).animate({opacity:1},0);

        //$('.slide').eq(0).css({zIndex:3}).animate({opacity:1},0).animate({opacity:0}, 2000); 첫번째 장 / 사라지는 이미지
        $('.slide').eq(cnt==0?2:cnt-1).css({zIndex:3}).animate({opacity:1},0).animate({opacity:0}, 2000);
    }

    //2. 다음 카운트 함수
    function nextCount(){ 
        cnt++; // 1 2 0 1 2
        cnt>2?cnt=0:cnt
        mainSlide();
    }

    //3. 자동타이머함수
    function autoTimer(){
        setInterval(nextCount, 3000);
    }
    autoTimer();

    
    

    //갤러리버튼 클릭

    // $('.gallery-btn').click(function(){
    //     $('.notice-btn').addClass('on');
    //     $('.gallery-btn').addClass('on');
    //     $('.notice-box').addClass('on');
    //     $('.gallery-box').addClass('on');
    // });

    $('.gallery-btn').on({
        click: function(){ //마우스클릭 키보드는 엔터(Enter)
            $('.notice-btn').addClass('on');
            $('.gallery-btn').addClass('on');
            $('.notice-box').addClass('on');
            $('.gallery-box').addClass('on');
        }
    });


    //공지사항버튼 클릭

    // $('.notice-btn').click(function(){
    //     $('.notice-btn').removeClass('on');
    //     $('.gallery-btn').removeClass('on');
    //     $('.notice-box').removeClass('on');
    //     $('.gallery-box').removeClass('on');
    
    // });


    
    $('.notice-btn').on({
        click: function(){
            $('.notice-btn').removeClass('on');
            $('.gallery-btn').removeClass('on');
            $('.notice-box').removeClass('on');
            $('.gallery-box').removeClass('on');
        }
    });








//레이어 팝업창
    
    // $('.link-btn').click(function(){
    //     $('#modal').stop().fadeIn(600);
    // });

    $('.link-btn').on({
        click: function(){
            $('#modal').stop().fadeIn(600);
        }
    });




//닫기
    // $('.close-btn').click(function(){
    //     $('#modal').stop().fadeOut(600);
    // });

    $('.close-btn').on({
        click: function(){
        $('#modal').stop().fadeOut(600);
        }
    });

    
    })(jQuery);