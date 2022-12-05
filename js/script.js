// this runs after the DOM has loaded
$(document).ready(function() {
  // create date object
  var d = new Date();
  // create date string
  var strDate =   d.getDate() + " - " +(d.getMonth()+1) + "-" + d.getFullYear();
  // create element id array
var eid = ["elephant","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"]

// loop thru each element with class counter-box
$('.counter-box').each(function(i) {
  // assign id as eid of index i
    $(this).attr('id',eid[i]);

    imageindex = i+1;
    // assign background image 
    $(this).css('background-image','url("img/image'+imageindex+'.jpeg")');
    // assign text to nearest date div
    $(this).find('.date').text("Published " + strDate + " by Therese Sjöholm" );
    // assign text as headline
    $(this).find('.headline').text("UX Designer Loses Her Mind In Elementor Chaos" );
    // assign infotext under headline
    $(this).find('.info').text("Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." );
})
// swap image
$('.elephant-image').click(function() {

  image1 = $('#animal1').attr('src');
  image2 = $('#animal2').attr('src');
  $('#animal1').attr('src',image2);
  $('#animal2').attr('src',image1);

  $('#firstheader').removeClass('headline').addClass('date');

})


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

})

