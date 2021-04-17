
let userDiv = document.getElementById("usuarios") // cogemos el div usuarios
let userlist = document.createElement("ul")  //creamos un ul
userDiv.appendChild(userlist)  // agregamos el ul al div usuarios


function onSubmit(event) {
  event.preventDefault()  // Evita la recarga de la poagina
  let name = document.getElementById("name").value
  let lastname = document.getElementById("lastname").value

  insertarUsuario(name, lastname)
}


function insertarUsuario(name, lastname) {
  console.log("Nombre:" + name, "apellido:" + lastname);

  let li = document.createElement("li") //creamos un li
  let pname = document.createElement("p") // creamos un p para el nombre
  let textname = document.createTextNode(name)  //creamos un texto con el nombre
  let plastname = document.createElement("p")  //creamos un p para el apellido
  let textlastname = document.createTextNode(lastname) // creamos un texto para el apellido
 
  pname.appendChild(textname) //agregamos ekl texto nombre en el p 
  plastname.appendChild(textlastname)  // agregamos el texto apellido en el p

  li.appendChild(pname)  // agregamos el p nombr en el li
  li.appendChild(plastname)  // agregamos el p apellido en el li 

  userlist.appendChild(li)  // agregamos el li al ul
}