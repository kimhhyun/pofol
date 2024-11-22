jQuery(document).ready(function () {
  
    //  탑 버튼 클릭시 최상단 이동
          $('.top-btn').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 600); // 600ms 동안 최상단으로 스크롤
          });
       
    
    

    // 메뉴 고정 스크롤시 색 변환

  const headerHeight = $('.header').outerHeight(); // 헤더의 높이 가져오기

  $(window).scroll(function() {
      if ($(this).scrollTop() > headerHeight) {
          $('.head-menu').css({
              'background-color': 'white',
              'color': 'black'
          });
          $('.sub-menu a').css('color', 'black');
      } else {
          $('.head-menu').css({
              'background-color': 'transparent',
              'color': 'white'
          });
          $('.sub-menu a').css('color', 'white');
      }
 
});






  // 섹션 3 컬렉션
  $(document).ready(function() {
    const items = $('.item-c');
    
    // 아이템 클릭 시 확장/축소 함수
    const expand = (item, i) => {
      // 클릭되지 않은 다른 아이템들을 기본 크기로 복원
      items.each(function(ind) {
        const currentItem = $(this);
        if (i === ind) return; // 클릭된 아이템은 건드리지 않음
        currentItem.data('clicked', false);
        
        // GSAP 애니메이션으로 width 축소
        gsap.to(currentItem, {
          width: '15vw',
          duration: 2,
          ease: 'elastic.out(1, 0.6)'
        });
      });
  
      // 클릭 상태 체크 후 확장
      const clicked = item.data('clicked') || false;
      item.data('clicked', !clicked);
  
      // GSAP 애니메이션으로 클릭된 아이템 확장
      gsap.to(item, {
        width: clicked ? '15vw' : '42vw',
        duration: 2.5,
        ease: 'elastic.out(1, 0.3)'
      });
    };
  
    // 각 아이템에 클릭 이벤트 추가
    items.each(function(i) {
      const item = $(this);
      item.data('clicked', false); // 클릭 여부 초기화
  
      item.on('click', function() {
        expand(item, i); // 아이템 클릭 시 expand 함수 호출
      });
    });
  });
  
  
  


//섹션 5 물감 효과

$(document).ready(function() {
    $('.drop-img > ul > li > p').hover(
        function() {
            // 호버한 p의 부모 li에 active 클래스 추가
            const parentLi = $(this).parent();
            $('.drop-img > ul > li').removeClass('active'); // 모든 li에서 active 클래스 제거
            parentLi.addClass('active'); // 현재 li에 active 클래스 추가
            
            // 배경색을 아래에서 위로 차오르게 하기
            parentLi.css('background-color', $(this).css('background-color'));
        },
        function() {
            // 마우스가 나가면 해당 li의 배경색은 유지
        }
    );
});



});


