const container= document.querySelector(".container");
const btnSignIn= document.getElementById("btn-sign-in");
const btnSignUp= document.getElementById("btn-sign-up");
btnSignIn.addEventListener("click", ()=>{
container.classList.remove("toggle")
});
btnSignUp.addEventListener("click", ()=>{
    container.classList.add("toggle")
});


const ingresar = () =>{
  let user = document.getElementById("Usuario").value
  let pass = document.getElementById("Contraseña").value


  if(user === "" || pass === ""){
    Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Algún campo está vacío, ingrese todos los datos",
        customClass: {
          confirmButton: "botonaceptar"
    }
  }).then(() =>{
    document.getElementById("Usuario").value = "";
    document.getElementById("Contraseña").value = "";
  
      });
  } else if (user === "Admin" && pass === "12345"){
    Swal.fire({
        title: "CORRECTO",
        text: "¡Has iniciado sesión correctamente. Bienvenido, administrador: " + user + "!",
        icon: "success",
        customClass: {
            confirmButton: "botonaceptar"
        }
      }).then(() =>{
        window.location.href = "html/dashboardAdmin.html"

      })

  }   else {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Los datos ingresados no son correctos. Intente nuevamente.",
      customClass: {
            confirmButton: "botonaceptar"
      }
    }).then(() =>{
      document.getElementById("Usuario").value = "";
      document.getElementById("Contraseña").value = "";
    })
}
}