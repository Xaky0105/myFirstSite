$(function() {
   
    /*Smooth Scroll*/
    
    $("[data-scroll]").on("click", function(event) {
        
        event.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffSet = $(elementId).offset().top;
        
        console.log(elementOffSet);
        
        $("html, body").animate({
            
            scrollTop: elementOffSet
            
        });
        
    });
    
    
    /*Nav Toggle*/

    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    navToggle.on("click", function(event){
         event.preventDefault();
        nav.toggleClass("show");
        
    }); 
    
    
    
});
    