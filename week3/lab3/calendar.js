
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function () {





    var d = new Date();
    var mth = d.getMonth() + 1;
    var yr = d.getFullYear();

    $("#month").val(mth);
    $("#year").val(yr);
    showCalendar(mth, yr);

    $("#month,#year").change(function (e) //e represents event
    {
        showCalendar($("#month").val(), $("#year").val());
    });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth() + 1, 0).getDate();
}


function showCalendar(mth, yr)
{




    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date(firstDayOfMonth);
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();
    var str = '<div class="row">';
    var Amount = 0;
    /* this is where you'll generate the grid, for now I will just show first day of week */

    for (var i = 0; firstDayOfWeek > i; i++)
    {

        Amount++;
        str += '<div class="day"></div>';

        if (Amount >= 7)
        {
            str += '</div><div class="row">';
            Amount = 0;

        } //inserting new row after every 7 and clearing

    }



    for (var i = 1; numberOfDaysInMonth > i; i++)
    {


        str += '<div class="day">' + i + '</div>';
        Amount++;
        if (Amount >= 7)
        {
            str += '</div><div class="row">';
            Amount = 0;

        }

    }









    $("#results").html(str);



    $(".day").on("click", function () {

        var color = $(this).css("background-color");
        console.log(color);
        if (color == 'rgba(0, 0, 0, 0)')
        {
            $(this).css('background-color', 'red');
        }
        else if (color == 'rgb(255, 0, 0)')
        {
          $(this).css('background-color', 'green');  
        }






    });
    
    
    $('input[id="yes"]').on("click", function () {

      $('.day','*').css('background-color','green');






    });
    
      $('input[id="no"]').on("click", function () {

      $('.day','*').css('background-color','red');






    });



}




