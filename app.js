window.onload = function () {

const age = prompt('Hola, ¿Cuál es tu edad?');

if (age > 1 && age < 3) {
  document.write('Eres un hermoso bebé');
} else if (age >= 3 && age < 5) {
  document.write('Wow, estás en la etapa pre escolar');
} else if (age >= 5 && age < 12) {
  document.write('Estás en la etapa escolar, suerte en tus estudios');
} else if (age >= 12 && age < 18) {
  document.write('Qué grande estás, eres todo un adolescente');
} else if (age >= 18 && age < 21) {
  document.write('Ya eres todo un mayor de edad');
}  else if (age >= 21) {
  document.write('Felicidades!!, ya eres un adulto');
} else {
  alert('Dato erróneo, por favor ingresa un número válido.')
}
}