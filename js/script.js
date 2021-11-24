$(document).ready(
    /////sticky-nav
    function(){
        $('.nd_1').waypoint(
            function(direction){
                if(direction=="down"){
                    $('nav').addClass('sticky')
                }else{
                    $('nav').removeClass('sticky')
                }
            },{
                offset: '600px'
            }
        )
    
    ////smooth sroll jqeury: seacher google
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);/* 500 laf thời gian cuộn đến các phần*/
            event.preventDefault();
        });
    ////mobeil - nav -icon
        $('.mobile-nav-icon').click(/*khi click vao icon-mobile thi no se hien ra menu */
            function(){
                $('.main_nav').slideToggle(200);

                if($('.mobile-nav-icon').hasClass('fa-bars')){/**khi click vao icon thi no se chuyen thanh icon dau nhan va hien thi ra menu */
                    $('.mobile-nav-icon').addClass('fa-times')
                    $('.mobile-nav-icon').removeClass('fa-bars')
                }
                else{
                    $('.mobile-nav-icon').addClass('fa-bars')
                    $('.mobile-nav-icon').removeClass('fa-times') 
                }
            }
        )
    }
)
