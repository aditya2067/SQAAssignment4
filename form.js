var flag = true;
function validationOfData(){
flag = true;
    if(!validationCheckName()) {
        flag = false;
    }

    if(!validationCheckEmail()) {
         flag = false;
    }

    if(!validationCheckAddress()) {
         flag = false;
    }

    if (!validationCheckMobile()) {
      flag = false;
    }

    if(!validationCheckCity()) {
        flag = false;
    }

    if(!validationCheckMake()) {
        flag = false;
    }
    if(!validationCheckModel()) {
        flag = false;
    }
    if(!validationCheckYear()) {
        flag = false;
    }
    if (flag) {
      validation();
    }

    return flag;
}

function validation(){
  if (flag = true) {
    addList();
  }
}

/*function addList(){
  let person = {
    name: document.getElementById('name').value,
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    mobile: document.getElementById('mobile').value,
    email: document.getElementById('email').value,
    make: document.getElementById('make').value,
    model: document.getElementById('model').value,
    year: document.getElementById('year').value
  }

  var make = document.getElementById('make').value;
  var model= document.getElementById('model').value;
  var year = document.getElementById('year').value;
  var url = "http://www.jdpower.com/cars/"+make+"/"+model+"/"+year;

  alert(url);
  var lists = JSON.parse(localStorage.getItem('myList'));
  if (lists) {
    lists.push(person);
  }else{
    lists=[];
    lists.push(person);
  }
  localStorage.setItem('myList', JSON.stringify(lists));
  document.getElementById("myForm").reset();
}*/


function validationCheckName(){
    var nameRegExp = /^[a-zA-Z]+$/;
     if(!nameRegExp.test(document.registration_form.name.value)) {
         document.getElementById("message").style.display= "block";
         document.getElementById("message").innerHTML = "Please enter valid name";
         document.getElementById("name").style.borderColor = "red";
         document.getElementById("name").focus();
        return false;
    }else{
        document.getElementById("message").style.display= "none";
        document.getElementById("name").style.borderColor = "white";
        return true;
    }
}

function validationCheckAddress(){
  var addressRegExp = /^([a-zA-z0-9]+(\s)?)+$/;
  if (!addressRegExp.test(document.registration_form.address.value)) {
    document.getElementById("message").style.display="block";
    document.getElementById("message").innerHTML = "Please enter valid address";
    document.getElementById("address").style.borderColor = "red";
    document.getElementById("address").focus();
    return false;
  }else{
    document.getElementById("message").style.display = "none";
    document.getElementById("address").style.borderColor = "white";
    return true;
  }
}

function validationCheckCity(){
  var cityRegExp = /^[a-zA-z]+$/;
  if (!cityRegExp.test(document.registration_form.city.value)) {
    document.getElementById("message").style.display="block";
    document.getElementById("message").innerHTML = "Please enter valid city";
    document.getElementById("city").style.borderColor = "red";
    document.getElementById("city").focus();
    return false;
  }else{
    document.getElementById("message").style.display = "none";
    document.getElementById("city").style.borderColor = "white";
    return true;
  }
}

function validationCheckEmail(){
    var mailRegExp = /^\w+([\.-]?\ w+)*@\w+([\.-]?[0-9a-zA-Z]+)*(\.[0-9a-zA-Z]+)$/;
    if(!mailRegExp.test(document.registration_form.email.value)) {
        document.getElementById("message").style.display= "block";
        document.getElementById("message").innerHTML = "Please enter valid email";
       document.getElementById("email").style.borderColor = "red";
       document.getElementById("email").focus();
        return false;
    }else{
        document.getElementById("message").style.display= "none";
        document.getElementById("email").style.borderColor = "white";
        return true;
    }
}

function validationCheckMake(){
  var makeRegExp = /^[a-zA-z]+$/;
  if (!makeRegExp.test(document.registration_form.make.value)) {
    document.getElementById("message").style.display="block";
    document.getElementById("message").innerHTML = "Please enter valid make";
    document.getElementById("make").style.borderColor = "red";
    document.getElementById("make").focus();
    return false;
  }else{
    document.getElementById("message").style.display = "none";
    document.getElementById("make").style.borderColor = "white";
    return true;
  }
}

function validationCheckModel(){
  var modelRegExp = /^[a-zA-z0-9]+$/;
  if (!modelRegExp.test(document.registration_form.model.value)) {
    document.getElementById("message").style.display="block";
    document.getElementById("message").innerHTML = "Please enter valid model";
    document.getElementById("model").style.borderColor = "red";
    document.getElementById("model").focus();
    return false;
  }else{
    document.getElementById("message").style.display = "none";
    document.getElementById("model").style.borderColor = "white";
    return true;
  }
}

function validationCheckYear(){
  var yearRegExp = /^[0-9]+$/;
  if (!yearRegExp.test(document.registration_form.year.value)) {
    document.getElementById("message").style.display="block";
    document.getElementById("message").innerHTML = "Please enter valid year";
    document.getElementById("year").style.borderColor = "red";
    document.getElementById("year").focus();
    return false;
  }else{
    document.getElementById("message").style.display = "none";
    document.getElementById("year").style.borderColor = "white";
    return true;
  }
}

function validationCheckMobile(){
    var telRegExp = /^(\()\d{3}(\))(\s)?\d{3}(-)\d{4}$/;
    var telRegExp2 = /^\d{3}(\s)?(-)\d{3}(\s)?(-)\d{4}$/;

    if(telRegExp.test(document.registration_form.mobile.value) || telRegExp2.test(document.registration_form.mobile.value)){
      document.getElementById("message").style.display= "none";
      document.getElementById("mobile").style.borderColor = "white";
      return true;
    }else{
        document.getElementById("message").style.display= "block";
        document.getElementById("message").innerHTML = "Please enter valid mobile number";
        document.getElementById("mobile").style.borderColor = "red";
        document.getElementById("mobile").focus();
        return false;
       }
}

function resetFunction(){
    document.getElementById("message").style.display= "none";
    var resetType = document.getElementsByTagName("INPUT");

    for(var i = 0; i < resetType.length; i++){
        resetType[i].style.borderColor = "white";
    }
}
