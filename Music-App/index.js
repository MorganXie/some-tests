$(function(){

    $('.tab-content').eq(0).addClass('show')
    
    $('.topbar-tab>li').on('click',function(){
        var index = $(this).index()
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('.tab-content').removeClass('show')
        $('.tab-content').eq(index).addClass('show')
        
    })
    $('.close').on('click',function(){
        $('#search').val('')
        $('.search-box').removeClass('active')       
        $('.search-list').show()
        $('.search-results').empty()
    })
    $('.footer-wrap,.download,.hot-view').on('click',function(){
        window.location.href = './download.html'
    }) 
})