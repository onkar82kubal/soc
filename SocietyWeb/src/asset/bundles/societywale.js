$(function() {
    // validation needs name of the element
    $('#food').multiselect();

    // initialize after multiselect
    $('#basic-form').parsley();

    $('.dropify').dropify();

    $('#btn-upload-photo').on('click', function() {
        $(this).siblings('#filePhoto').trigger('click');
    });
    $('#btn-upload-xlx').on('click', function() {
        $(this).siblings('#filePhoto').trigger('click');
    });
    $('#btn-upload-agreement').on('click', function() {
        $(this).siblings('#fileAgreement').trigger('click');
    });
    $('#btn-upload-fileRCBook').on('click', function() {
        $(this).siblings('#fileRCBook').trigger('click');
    });

});