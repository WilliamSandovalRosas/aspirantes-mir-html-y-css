const form = document.querySelector('form');
      const inputName = document.getElementById('name');
      const inputEmail = document.getElementById('email');
      const section = document.querySelector('section');
      const btnClearStorage = document.getElementById("clearStorage");

      // Manejar el evento de enviar el formulario
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        localStorage.setItem("nombre",inputName.value);
        localStorage.setItem("email",inputEmail.value);
        
        inputName.value=null;
        inputEmail.value=null;
        showData();

      });

      //agregando evento al btnClearStorage
      btnClearStorage.addEventListener("click",deleteStorage)

      // Función para mostrar el nombre guardado en localStorage
      function showName() {
         section.innerHTML=localStorage.getItem("nombre");
        //section.innerHTML=localStorage.getItem("email");

      }

      function showData() {
        let nombre = localStorage.getItem("nombre");
        let email = localStorage.getItem("email");
        let datos = "<br>"+nombre+"<br>"+email;
        section.innerHTML=datos;
        //section.innerHTML=localStorage.getItem("email");

      }

      // Función para borrar el nombre guardado en localStorage
      function deleteName() {

        localStorage.removeItem("nombre");

      }


      //eliminar todo la data

      function deleteStorage() {

        localStorage.clear();

      }

      // Mostrar el nombre guardado al cargar la página
      //showName();
      showData();


      //localStorage.setItem("name", "Pedro Perez")
      //localStorage.getItem("name")
      //localStorage.removeItem("name")
      //localStorage.clear()
