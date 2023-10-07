

  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById('SuRvEy');
    var hiddenSection = document.getElementById('Hidden-Survey-Section');
  
       button.addEventListener("click", function() {
        hiddenSection.style.display = "block";
        return false;
      }) 
    });

function finalAlert() {
    alert("Thank you for paricipating in the survey");
    return false;
}

// Now we will be creating a program which will give our html page the ability to data into text file 

function saveData() {
  // This section will control text file input which will be downloaded with data
  var NameInputValue = document.getElementById('N-M').value;
  var EmailInputValue = document.getElementById('EL').value;
  var PhoneInputValue = document.getElementById('PN').value;
  var CheckboxInputValue = document.getElementById('00').checked;

  var data = {
      Name:  NameInputValue,
      Email: EmailInputValue,
      Phone: PhoneInputValue,
      Checkbox: CheckboxInputValue
  };

  var jsonData = JSON.stringify(data);

  // Create a Blob containing the JSON data
  var blob = new Blob([jsonData], { type: 'text/plain' });

  // Create a download link
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Survey data.txt'; // this is the defualt name of data file when downloaded with data first 
  a.click();
}


