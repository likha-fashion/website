const screenWidth = 950;


$("#designs-button").click(function (e) { 

    if($(window).width() > screenWidth){  // desktop mode
        
        $(".content-tab").addClass("inactive-tab");  
        $("#comments-tab").addClass("inactive-tab");
        $(".content-tab-button").removeClass("active-tab-button");      

        $("#designs-tab").removeClass("inactive-tab"); 
        $("#designs-button").addClass("active-tab-button");  
    }

});

$("#outputs-button").click(function (e) { 

    if($(window).width() > screenWidth){  // desktop mode
        
        $(".content-tab").addClass("inactive-tab"); 
        $("#comments-tab").addClass("inactive-tab");
        $(".content-tab-button").removeClass("active-tab-button");       

        $("#outputs-tab").removeClass("inactive-tab"); 
        $("#outputs-button").addClass("active-tab-button");  
    }

});

$("#pending-button").click(function (e) { 

    if($(window).width() > screenWidth){  // desktop mode
        
        $(".content-tab").addClass("inactive-tab");  
        $("#comments-tab").addClass("inactive-tab");
        $(".content-tab-button").removeClass("active-tab-button");       

        $("#pending-tab").removeClass("inactive-tab"); 
        $("#pending-button").addClass("active-tab-button");  
    }

});

$("#comments-button").click(function (e) { 

    if($(window).width() > screenWidth){  // desktop mode
        
        $(".content-tab").addClass("inactive-tab");  
        $(".content-tab-button").removeClass("active-tab-button");       

        $("#comments-tab").removeClass("inactive-tab"); 
        $("#comments-button").addClass("active-tab-button");  
    }

});

