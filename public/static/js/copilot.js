$(document).ready(function () {
    $(".select2 select").select2();
});

function setICheck(){
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });
}