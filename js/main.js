jQuery(document).ready(function () {

  //aos 효과 한번만 적용 및 시간 딜레이 
    AOS.init({
    once: true,
    delay: 0, // 애니메이션 시작 지연
    duration: 1000, // 애니메이션의 지속 시간
   });

     // top 버튼 클릭 시 최상단 이동 코드
    $(document).ready(function () {
    // 버튼 초기 상태를 숨김
    $('.top-btn').hide();
  
    // 스크롤 이벤트 리스너
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100 && $(window).width() <= 1440) { // 화면 너비가 1440px 이상일 때만 작동
        $('.top-btn').stop().fadeTo(100, 1); // 100ms 동안 점차적으로 보이게 함
      } else {
        $('.top-btn').stop().fadeTo(100, 0); // 100ms 동안 점차적으로 숨김
      }
    });
  
    // 버튼 클릭 이벤트 리스너
    $('.top-btn').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 600); // 600ms 동안 최상단으로 스크롤
    });
  });
  
  // 페이지네이션 클릭 시 섹션으로 부드럽게 스크롤 이동
     $('.page-item').first().addClass('active')
     $('.page-item').on('click', function () {
         var sectionClass = $(this).data('section');
         var section = $(sectionClass);
 
         // 부드러운 스크롤
         $('html, body').animate({
             scrollTop: section.offset().top
         }, 600);
 
         // 모든 페이지네이션 아이템에서 active 클래스 제거
         $('.page-item').removeClass('active');
 
         // 클릭된 페이지네이션 아이템에 active 클래스 추가
         $(this).addClass('active');
     });
 
     // 스크롤 시 섹션에 머무르면 해당 페이지네이션 아이템에 active 클래스 추가
     $(window).on('scroll', function () {
         $('.page-item').each(function () {
             var sectionClass = $(this).data('section');
             var section = $(sectionClass);
             var sectionTop = section.offset().top;
             var sectionBottom = sectionTop + section.outerHeight();
             var scrollPosition = $(window).scrollTop();
 
             if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                 // 해당 섹션에 머무르면 active 클래스 추가
                 $('.page-item').removeClass('active');
                 $(this).addClass('active');
             }
         });
     });
 

// 그라디언트 보여지는 텍스트
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

let isText1Visible = true;
let toggleCount = 0; // 전환 횟수 카운트

function toggleText() {
    if (toggleCount < 2) { // 두 번만 전환
        if (isText1Visible) {
            text1.classList.remove('active');
            text2.classList.add('active');
        } else {
            text1.classList.add('active');
            text2.classList.remove('active');
        }
        isText1Visible = !isText1Visible;
        toggleCount++;
    } else {
        clearInterval(timeoutId); // 더 이상 전환하지 않음

        // 두 텍스트 모두 보여주기
        text1.classList.add('active');
        text2.classList.add('active');

        // 그라디언트 효과 추가
        text1.classList.add('gradient');
        text2.classList.add('gradient');

        // 2초 후 다시 흰색으로 돌아오기
        setTimeout(() => {
            text1.classList.remove('gradient');
            text2.classList.remove('gradient');
        }, 2000);
    }
}

// 처음에 텍스트 1을 보여주기
text1.classList.add('active');

// 2초마다 텍스트를 전환
let timeoutId = setInterval(() => {
    toggleText();
}, 2000);




        $(document).ready(function() {
          // 메뉴 열기
          $('.solid-bar').click(function(e) {
              e.preventDefault(); // 기본 동작 방지
              $('.Menu').fadeIn(300); // 메뉴 보여주기
              $('body').addClass('menu-open'); // body에 클래스 추가
      
              // 현재 스크롤 위치 저장
              const scrollY = window.scrollY;
      
              // body 위치 고정
              $('body').css({
                  position: 'fixed', // body 위치 고정
                  width: '100%', // 고정폭 유지
                  top: `-${scrollY}px` // 현재 스크롤 위치 저장
              });
          });
      
          // 메뉴 닫기
          $('.close-btn').click(function() {
              $('.Menu').fadeOut(300); // 메뉴 숨기기
              $('body').removeClass('menu-open'); // body에서 클래스 제거
      
              const scrollY = document.body.style.top; // 저장된 스크롤 위치
      
              // body 위치 초기화
              $('body').css({
                  position: 'static', // body 위치 초기화
                  top: 'auto' // top 초기화
              });
              window.scrollTo(0, parseInt(scrollY || '0') * -1); // 이전 스크롤 위치로 복귀
          });
      });
      
            
            
    // 섹션1 스크롤 마퀴
    const pTag1 = document.querySelector('.first-parallel')
const pTag2 = document.querySelector('.second-parallel')
const pTag3 = document.querySelector('.third-parallel')
const pTag4 = document.querySelector('.forth-parallel')

const textArr1 = 'UX/UI PUBLISHER UX/UI PUBLISHER UX/UI PUBLISHER'.split(' ')
const textArr2 = 'CREATIVE USERINTERFACE TECHNOLOGY DESIGN COMMUNICATION'.split(' ')
const textArr3 = "JAVA SCRIPT HTML CSS JQUERY TYPHOGRAPHY".split(' ')


let count1 = 0
let count2 = 0
let count3 = 0


initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)
initTexts(pTag3, textArr3)


function initTexts(element, textArray) {
  textArray.push(...textArray)
  for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
  }
}

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`
    count = 0
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`

  return count
}

function animate() {
  count1++
  count2++
  count3++


  count1 = marqueeText(count1, pTag1, -1)
  count2 = marqueeText(count2, pTag2, 1)
  count3 = marqueeText(count3, pTag3, -1)


  window.requestAnimationFrame(animate)
}

function scrollHandler() {
  count1 += 5
  count2 += 5
  count3 += 5
  count4 += 5
}

window.addEventListener('scroll', scrollHandler)
animate()



// 커서 효과 
$(document).ready(function () {
  // 기본 커서 숨김
  $('body').css('cursor', 'none');

  const $cursor = $('.cursor');

  // 마우스 움직임 이벤트 핸들러
  $(window).mousemove(function (e) {
      const x = e.clientX;
      const y = e.clientY;

      $cursor.css({
          left: x + 'px',
          top: y + 'px'
      });
  });

  // 메뉴 링크에 대한 애니메이션 효과
  $('nav > .link').on('mousemove', function (e) {
      const $span = $(this).find('span');
      const move = 25;
      const width = $(this).outerWidth();
      const height = $(this).outerHeight();
      const xMove = (e.offsetX / width) * (move * 2) - move;
      const yMove = (e.offsetY / height) * (move * 2) - move;

      $span.css('transform', `translate(${xMove}px, ${yMove}px)`);
  }).on('mouseleave', function () {
      $(this).find('span').css('transform', '');
  });

  // 클릭 가능한 요소에 호버 이벤트 추가
  $('nav > .link, .wrap *').hover(
      function () {
          $cursor.addClass('hovered');
      },
      function () {
          $cursor.removeClass('hovered');
      }
  );
});

$(document).mousemove(function(e) {
  $('.cursor').css({
    top: e.pageY + 'px',
    left: e.pageX + 'px'
  });
});


// 배경 js

 });


