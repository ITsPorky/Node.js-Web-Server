// =================================
// FOUC 
// =================================
document.getElementById("fouc").style.display = "block";

// ================================= 
// Nav Bar Scripts
// =================================

$('.dropdown-content a').click(function() {
    $('dropdown-content a').css('border-bottom', '#222', function() {
        $(this).css('border-bottom', '1px solid #00aaff');
    });
    return false;
});

// =================================
// Date and Time 
// =================================

// var dt = new Date();
// document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"/"+ (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ 
// (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));