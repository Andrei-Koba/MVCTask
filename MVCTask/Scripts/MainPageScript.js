$(document).ready(function () {
    $("#openDialog").click(function (e) {
        var dials = document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable");
        if (dials.length > 0) {
            for (var i = 0; i < dials.length; i++) {
                var dial = dials[i];
                dial.style.display = "block";
            }
        }
        else {
            $.ajax(
                {
                    url: '/Home/SecondPage',
                    settings: { type: 'POST' },
                    type: 'POST',
                }).done(function (data) {

                    $("<div></div>").append(data)
                                .addClass("dialog")
                                .attr("id", "infoDialog")
                                .appendTo("body")
                                .dialog({
                                    title: "MyDialog",
                                    modal: true
                                });
                });
        }
    });

});