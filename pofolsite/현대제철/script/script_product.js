
jQuery(document).ready(function () {


    
      /* 페이드 인 효과 */
      AOS.init({
        duration: 1400,
        once: true
      });

    // header - submenu 보여지는 효과
    $('.menu').mouseenter(function () {
        $('.sub_menu').stop().fadeIn();
        $('.sub_box').stop().fadeIn();

    });
    $('.menu').mouseleave(function () {
        $('.sub_menu').stop().fadeOut();
        $('.sub_box').stop().fadeOut();

    });

    // header - 모바일 아코디언 메뉴 열고 닫기
    $('.m_menu_btn').click(function (e) {
        e.stopPropagation(); // 이벤트 전파 방지
        $('.m_menu_box').fadeIn();
    });
    $('.m_menu_box .close_btn').click(function (e) {
        e.stopPropagation(); // 이벤트 전파 방지
        $('.m_menu_box').fadeOut();
    });

    // header - 모바일 아코디언 서브메뉴 열고 닫기
    $('.m_main_menu > li > a').click(function (e) {
        e.preventDefault();
        var $subMenu = $(this).next('.m_sub_menu');
        if ($subMenu.is(':visible')) {
            $subMenu.slideUp();
            $(this).removeClass('active');
        } else {
            $('.m_sub_menu').slideUp();
            $('.m_main_menu > li > a').removeClass('active');
            $subMenu.slideDown();
            $(this).addClass('active');
        }
    });


    //product slider
    var swiper = new Swiper(".section.slide .mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 90,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".section.slide .swiper-button-next",
            prevEl: ".section.slide .swiper-button-prev",
        },
    });


      // 개발 섹션 스와이퍼
      var swiper = new Swiper(".swiper-container", {
        slidesPerView: 3, // 기본 슬라이드 개수
        spaceBetween: 50,
        loop: true, 
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // 900px 이하일 때
            900: {
                slidesPerView: 3,
                spaceBetween: 30, // 2개 슬라이드 간의 간격
            },
            // 600px 이하일 때 (추가로 설정할 경우)
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            100: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });

    // 센터 섹션 갤러리 설명
    $(document).ready(function () {
        // 페이지 로드 시 1번 갤러리를 기본 활성화
        $('#gallery-1').addClass('active');  // 첫 번째 갤러리 활성화
        $('.btn-1').addClass('active-btn');  // 첫 번째 버튼 스타일 활성화

        // 메뉴 버튼 클릭 이벤트
        $('.map-menu button').on('click', function () {
            // 모든 갤러리 항목을 숨김
            $('.gallery-item').removeClass('active');

            // 클릭한 버튼에 맞는 갤러리 항목만 보여줌
            var galleryId = $(this).data('gallery');
            $('#gallery-' + galleryId).addClass('active');

            // 버튼의 활성화 상태 변경
            $('.map-menu button').removeClass('active-btn');  // 모든 버튼의 활성화 상태 제거
            $(this).addClass('active-btn');  // 클릭한 버튼에 활성화 클래스 추가
        });
    });

        // 푸터 패밀리 사이트 활성화 및 화살표 전환 

        $(document).ready(function () {
            $('.fam').click(function (e) {
                e.stopPropagation(); // 이벤트 전파 방지
    
                var $familyList = $(this).siblings('.family');
                var $caretIcon = $(this).find('.fa-caret-up');
    
                // 다른 리스트 숨기기
                $('.family').not($familyList).slideUp();
    
                // 클릭한 리스트 토글
                $familyList.slideToggle(function () {
                    // 리스트가 표시된 후에 화살표 회전
                    if ($familyList.is(':visible')) {
                        $caretIcon.addClass('rotate');
                    } else {
                        $caretIcon.removeClass('rotate');
                    }
                });
            });
    
            // 문서 클릭 시 모든 .family 리스트 숨기기
            $(document).click(function () {
                $('.family').slideUp();
                $('.fa-caret-up').removeClass('rotate');
            });
    
            // .family 리스트 클릭 시 이벤트 전파 방지
            $('.family').click(function (e) {
                e.stopPropagation(); // 이벤트 전파 방지
            });
        })


});

