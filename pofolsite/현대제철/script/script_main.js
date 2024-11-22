

jQuery(document).ready(function () {

    AOS.init();

    // header - submenu 보여지는 효과
    $('.menu').mouseenter(function () {
        $('.sub_menu').stop().fadeIn();
        $('.sub_box').stop().fadeIn();
        $('header').css({ backgroundColor: 'white' }, 500);
        $('header').css({ color: 'black' }, 500);
    });
    $('.menu').mouseleave(function () {
        $('.sub_menu').stop().fadeOut();
        $('.sub_box').stop().fadeOut();
        $('header').css({ backgroundColor: 'inherit' }, 500);
        $('header').css({ color: 'white' }, 500);
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





    /* section-3 콘텐츠에 마우스 호버시 배경이미지 변환효과
    $('.section-3 .contents_box li').mouseenter(function () {
        var i = $(this).index();
        $('.section-3 .img_box li').stop(true, true).fadeOut(300); // 현재 이미지 서서히 사라짐
        $('.section-3 .img_box li').eq(i).stop(true, true).fadeIn(300); // 새로운 이미지 서서히 나타남
    }); */

    // section-3 콘텐츠에 마우스 호버시 배경이미지 변환효과
    $(window).resize(function () {
        if (window.innerWidth <= 1024) { // 모바일 해상도일 때부터 호버효과 제거, 두번째 이미지로 고정
            $('.section-3 .contents_box li').off('mouseenter'); 
            $('.section-3 .img_box li').hide(); 
            $('.section-3 .img_box li').eq(1).show(); 
        } else { // 데스크탑 해상도일 때
            $('.section-3 .contents_box li').mouseenter(function () {
                var i = $(this).index();
                $('.section-3 .img_box li').stop(true, true).fadeOut(300); 
                $('.section-3 .img_box li').eq(i).stop(true, true).fadeIn(300); 
            });
        }
    }).resize(); // 페이지 로드 시 초기화



    $(document).ready(function () {
        // 섹션 1 제품 네비게이션바 작동

        $(".dev > .nev1-on").click(function (e) {
            e.stopPropagation(); // 클릭 이벤트가 문서 전체로 전달되지 않도록 함
            $(".back-dev").hide(300);  // 모든 사진 창을 닫음
            $(".nev1").show(300);  // nev1만 열림
        });

        // 환경
        $(".dev > .nev2-on").click(function (e) {
            e.stopPropagation(); // 클릭 이벤트가 문서 전체로 전달되지 않도록 함
            $(".back-dev").hide(300);  // 모든 사진 창을 닫음
            $(".nev2").show(300);  // nev2만 열림
        });

        // 제품
        $(".dev > .nev3-on").click(function (e) {
            e.stopPropagation(); // 클릭 이벤트가 문서 전체로 전달되지 않도록 함
            $(".back-dev").hide(300);  // 모든 사진 창을 닫음
            $(".nev3").show(300);  // nev3만 열림
        });

        // 지원
        $(".dev > .nev4-on").click(function (e) {
            e.stopPropagation(); // 클릭 이벤트가 문서 전체로 전달되지 않도록 함
            $(".back-dev").hide(300);  // 모든 사진 창을 닫음
            $(".nev4").show(300);  // nev4만 열림
        });

        // 응용
        $(".dev > .nev5-on").click(function (e) {
            e.stopPropagation(); // 클릭 이벤트가 문서 전체로 전달되지 않도록 함
            $(".back-dev").hide(300);  // 모든 사진 창을 닫음
            $(".nev5").show(300);  // nev5만 열림
        });

        // 화면 밖을 클릭했을 때 네비게이션 창 닫기
        $(document).click(function () {
            $(".back-dev").hide(300);  // 현재 열려 있는 모든 창을 닫음
        });

        // 네비게이션 창 안에서의 클릭 이벤트는 문서 클릭 이벤트에 영향을 주지 않도록 함
        $(".back-dev").click(function (e) {
            e.stopPropagation(); // 클릭 이벤트가 문서 전체로 전달되지 않도록 함
        });
    });



    // 섹션 2 제품 설명
    const productData = {
        '냉연': {
            img: 'imges/냉연.png',
            text: '<span class="name ft-25"> 신소재</span> <br>  <span class="large ft-40 ft-bd"> 냉연 </span> <br> <br>  <span class="small ft-16"> 냉연은 원열을 상온에서 압연한 강판으로, 철강제품 중에서 <br> 가장 생산하기 어렵고 높은 기술력을 필요로 합니다. <br> \'철강제품의 꽃\'이라고도 불립니다. </span>' 
        },
        '후판': {
            img: 'imges/후판.png',
            text: '<span class="name ft-25"> 신소재</span> <br>  <span class="large ft-40 ft-bd"> 후판 </span> <br> <br>  <span class="small ft-16"> 후판은 두께가 4mm 이상인 강판으로, 주로 조선업 및 중공업에 사용됩니다. 강도와 내구성이 뛰어나며, 다양한 용도로 사용됩니다. </span>'
        },
        '형강': {
            img: 'imges/형강.png',
            text: '<span class="name ft-25"> 신소재</span> <br>  <span class="large ft-40 ft-bd"> 형강 </span> <br> <br>  <span class="small ft-16"> 형강은 H형강, I형강 등으로 나뉘며, 건축 및 구조물에 주로 사용됩니다. 구조물의 강도를 높이기 위해 사용됩니다. </span>'
        },
        '철근': {
            img: 'imges/철근.png',
            text: '<span class="name ft-25"> 신소재</span> <br>  <span class="large ft-40 ft-bd"> 철근 </span> <br> <br>  <span class="small ft-16"> 철근은 콘크리트와 함께 사용되어 구조물의 강도를 높이는 데 중요한 역할을 합니다. 다양한 직경과 길이로 제공됩니다. </span>'
        }
    };



    $('.product-btn').click(function () {
        const product = $(this).data('product');

        // 모든 버튼에서 활성화 클래스를 제거
        $('.product-btn').removeClass('active-btn');

        // 클릭된 버튼에 활성화 클래스 추가
        $(this).addClass('active-btn');

        // 이미지와 텍스트 업데이트
        $('#product-image').attr('src', productData[product].img);
        $('#product-description').html(productData[product].text);
    });

    // 기본적으로 "냉연" 선택
    const defaultProduct = '냉연';
    $('#product-image').attr('src', productData[defaultProduct].img);
    $('#product-description').html(productData[defaultProduct].text);

    // 기본 버튼에 활성화 클래스 추가
    $('.product-btn[data-product="' + defaultProduct + '"]').addClass('active-btn');







    //section-3 페이지 로딩시 png 이미지가 그림그리듯 퍼져나가는 효과
    $(window).on('scroll', function () {
        var sectionOffset = $('.section-3').offset().top; // section-3의 페이지 상단에서의 거리
        var windowHeight = $(window).height();            // 창 높이
        var scrollPos = $(window).scrollTop();            // 현재 스크롤 위치
        // 섹션이 뷰포트에 들어왔을 때 효과 실행
        if (scrollPos + windowHeight > sectionOffset) {
            $('.section-3 .layer_1 img').css('clip-path', 'inset(0 0 0 0)');  // 이미지를 점차적으로 드러냄
        }
    });






    //section-4 컨텐츠에 호버시 바로가기 버튼과 아이콘 투명도 향상
    $('.section-4 .cate_con li').mouseenter(function () {
        $(this).find($('span')).css({ opacity: 1 })
        $(this).find($('p')).css({ color: "#2193B8" })
        $(this).find($('i')).css({ opacity: 1 })
    });
    $('.section-4 .cate_con li').mouseleave(function () {
        $(this).find($('span')).css({ opacity: .4 })
        $(this).find($('p')).css({ color: "white" })
        $(this).find($('i')).css({ opacity: .4 })
    });


    //헤더 사라졌나 나왔다 하는 애니메이션
    let lastScrollTop = 0;

    $(window).on('scroll', function () {
        let currentScroll = $(this).scrollTop();
        let windowWidth = $(window).width(); // 현재 윈도우의 너비를 가져옴

        // 화면 너비가 1024px 이상일 때만 스크롤 이벤트 적용
        if (windowWidth > 1024) {
            if (currentScroll > lastScrollTop) {
                // 스크롤을 내릴 때 헤더를 숨김
                $('header').css({
                    'top': '-100px', // 헤더 높이만큼 위로 이동
                    'transition': 'top 0.3s ease' // 부드러운 이동을 위한 트랜지션
                });
            } else {
                // 스크롤을 올릴 때 헤더를 보여줌
                $('header').css({
                    'top': '0',
                    'transition': 'top 0.3s ease'
                });
            }
            lastScrollTop = currentScroll;
        } else {
            // 1024px 이하일 때 헤더 항상 보이게 설정
            $('header').css({
                'top': '0',
                'transition': 'none' // 트랜지션 제거
            });
        }
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

