function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "boklista.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var index = 'Midnight Rain'
  var table="<tr><th>Author</th><th>Title</th><th>Genre</th></tr>";
  var x = xmlDoc.getElementsByTagName("book");
  for (i = 0; i <x.length; i++) 
    { 
    table += "<tr><td>" + x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue + "</td><td>" + x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</td><td>" + x[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue + "</td></tr>";
    }
  document.getElementById("demo").innerHTML = table;
}

function jclick() 
{
  var fname = document.getElementById('fname');
  var lname = document.getElementById('lname');
  var message = document.getElementById('message');
  var errorMessage = '';
  if (fname.value === '' || lname.value === '')
    {
      errorMessage += 'Please input your Name\n';
    }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email.value)) 
    {
      errorMessage += 'Invalid email!\n';
    }

  if (message.value === '') 
    {
      errorMessage += 'You need to input a message to submit a contact form\n'
    }

  if (errorMessage !== '') 
    {
      alert(errorMessage);
      return false;
    }
  return true;
}