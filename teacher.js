document.querySelectorAll('.upload_button').forEach();

function button()
{
    const hiddenInput = button.parentElement.querySelector('.input_ivisible');
    const label = button.parentElement.querySelector('.label_notes');
    const defaultLabelText ='No File(s) selected';

    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListner('click', function(){
        hiddenInput.click();
    });

    hiddenInput.addEventListner('change', function(){
     const filenameList = Array.prototype.map.call(hiddenInput.files, function(file){return file.name;})
    });

    label.textContent = filenameList.join(defaultLabelText);
    label.title = label.textContent;
     
}

