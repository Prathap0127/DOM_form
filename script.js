function getData(event) {
  event.preventDefault()
  var form = document.getElementById('dataForm')
  var firstName = document.getElementById('first_Name').value
  var lastName = document.getElementById('last_Name').value
  //gender
  var genderRadio = document.getElementsByName('gender')
  let genderValue;
  for (var gender of genderRadio) {
    if (gender.checked) {
      // alert(gender.value)
      genderValue = gender.value;

    }
  }
  // food
  var food = document.getElementsByName('food')
  foodValue = [];
  for (selected of food) {
    if (selected.checked) {
      foodValue.push(selected.value)
      // alert(selected.value)
      console.log(foodValue)
    }
  }
  if (foodValue.length <= 2) {
    console.log(foodValue.length)
    var selectFood = foodValue.join(',')
    console.log(selectFood)

  }
  else {
    alert("Select any two only")
  }
  //food end
  var address = document.getElementById('inputAddress').value
  var city = document.getElementById('inputCity').value
  var pincode = document.getElementById('inputPin').value
  var state = document.getElementById('inputState').value
  var country = document.getElementById('inputCountry').value
  console.log(firstName)
  console.log(lastName)
  console.log(genderValue)
  console.log(address)
  console.log(city)
  console.log(pincode)
  console.log(state)
  console.log(country)
  let row = 1;

  var table_body = document.getElementById('table_body')
  table_body.innerHTML = ` <tr>
    <th scope="row">${row}</th>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${genderValue}</td>
    <td>${selectFood}</td>
    <td>${address}</td>
    <td>${city}</td>
    <td>${pincode}</td>
    <td>${state}</td>
    <td>${country}</td>
  </tr>
    
    `
  form.reset()

}
