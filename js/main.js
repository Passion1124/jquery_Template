/**
 * Created by libo on 16-6-23.
 */
function renderForm() {
    var neededTemplate = "";
    if (data.status == "preview"){
        neededTemplate = $("#preview").html();
    }else {
        neededTemplate = $("#edit").html();
    }
    var compiled = _.template(neededTemplate);
    $("#box").html(compiled(data));
}
function renderPopup() {
    var neededTemplate = $('#formPopup').html();
    var compiled = _.template(neededTemplate);
    $("#popup_box").html(compiled);

    $('#popup_box').show();
}
function changeToEdit() {
    data.status = "edit";
    renderForm();
}
function changeToPreview() {
    data.status = "preview";
    renderForm();
}
function chosePopup() {
    $("#popup_box").hide();
    $("#popup_box").html('');
}
function addFormElements() {
    var value = $("#popup input[name='type']:checked").val();
    data.type.push(value);
    chosePopup();
    renderForm();
}
function removeFormElements(number) {
    var newtype = [];
    for (var i = 0 ; i < data.type.length; i++){
        if(i != number){
            newtype.push(data.type[i]);
        }
    }
    data.type = newtype;
    renderForm();
}
$(function () {
    renderForm();
});