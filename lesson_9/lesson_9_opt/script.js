let age = document.getElementById('age'),
	surname = 'Чистяков',
	name = 'Артём';
 
function showUser(surname, name, age) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.age.value);
}
 
showUser(surname, name, age);