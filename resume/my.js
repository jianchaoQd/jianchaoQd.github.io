$(function(){
    var timer;
    //判断是否点击了导航
   $('.nav_btn').click(function(){
       var oP = $(this).parents('.nav');
       if(oP.is('.active')){
           oP.removeClass('active');
       }else {
           oP.addClass('active');
       }
   });
    //判断点击的那个列表项
    var oLen = $('.container_list').length;
    $('.information').addClass('conActive');
    $('.nav_list li').click(function(){
        $('.xs_name').html('');
        clearInterval(timer);
        //$('.education').css('transform','scale(0)');
        for(var i = 0;i