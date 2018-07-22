$(document).ready(function() {
    $("#formsubmitbutton").click(function() {
        const item = {
            "Name": $('#name').val(),
            "Email": $("#email").val(),
            "Msg": $("#message").val()
        };
        var temp = JSON.stringify(item);
        alert(temp);
        $.ajax({
            type: 'POST',
            accepts: 'application/json',
            url: 'http://localhost:56289/clomotech/SendEmail',
            contentType: 'application/json',
            data: JSON.stringify(item),
            dataType: "json",
            error: function(jqXHR, textStatus, errorThrown) {
                alert(textStatus, errorThrown);
                console.log(textStatus + " " + errorThrown);
            },
            success: function(result) {
                //getData();
                //alert(data);
                alert("success");
            }
        });
    });

});