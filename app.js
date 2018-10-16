
var topics = ["kung fu", "knitting", "planets", "parrots", "beer", "marshmallows", "halloween"];
var topicImage = "";

//starting buttons at top of page
function buttons() {
    $("#buttonSet").empty();
    $("#input").val("");

    for (var i = 0;i < topics.length; i++){
        var button = $("<button class='btn btn-primary'>");
        button.addClass("topicBtn");
        button.attr("topic-name", topics[i]);
        button.text(topics[i]);
        $("#buttonSet").append(button);
        $("#buttonSet").append(" ");
    }
}

buttons();


// function displayGifs(){
    $("#addGif").on("click", function(event){
        $("#entry").empty();
        event.preventDefault();
    var action = $(this).attr("#input");
    var topicName = $(this).attr("topic-name");

    var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + action + "&limit=10&api_key=GebM3MPEEHFaiUzkQngNxKK6vKbtsN9w";
        

$.ajax({ url: queryURL, method: 'GET'}).done(function (response) {

        if (response.pagination.total_count >= 10) {
            topics.push(action);
            buttons();
        }
       
    });

});

$(document).on("click", ".topicBtn", display);

function display() {

    var topicName = $(this).attr("topic-name");

    var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + topicName + "&limit=10&api_key=GebM3MPEEHFaiUzkQngNxKK6vKbtsN9w";

    $.ajax({ url: queryURL, method: "GET"}).done(function(response){
        for (var i = 0; i < response.data.length; i++) {

            var active = response.data[i].images.fixed_width.url;
            var still = response.data[i].images.fixed_width_still.url;

            var topicImage = $("<img>");

            topicImage.attr({"active":active, "still":still, "src":still, "state":still});
    
        }
    })


};
