$('document').ready(function(){

    $('#weatherSub').submit(function(evt) {

        evt.preventDefault();

        var city = $('#city').val();
        var state = $('#state').val();
        var apiKey = '49493520fcdf1192';
        var url = 'http://api.wunderground.com/' + apiKey + '/geolookup/conditions/q/' + state + '/' + city + '.json';

        $.getJSON(url, function(data){
                console.log(data);
            });
    });

});


/*
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
    <script>
    jQuery(document).ready(function($) {
        $.ajax({
            url : "http://api.wunderground.com/api/49493520fcdf1192/geolookup/conditions/q/IA/Cedar_Rapids.json",
            dataType : "jsonp",
            success : function(parsed_json) {
                var location = parsed_json['location']['city'];
                var temp_f = parsed_json['current_observation']['temp_f'];
                alert("Current temperature in " + location + " is: " + temp_f);
            }
        });
    });
</script>*/
