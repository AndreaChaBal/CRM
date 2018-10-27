import Controller from '@ember/controller';
import firebase from 'firebase';
var config = {apiKey: "AIzaSyCeJpYjPn07X7zVuOXOErqNxH9gQubcdh8",
      authDomain: "itmex-ac80b.firebaseapp.com",
      databaseURL: "https://itmex-ac80b.firebaseio.com",
      projectId: "itmex-ac80b",
      storageBucket: "itmex-ac80b.appspot.com",
      messagingSenderId: "166913341683"};
var secondaryApp = firebase.initializeApp(config, "Secondary");

    const auth = secondaryApp.auth();
export default Controller.extend({
    actions: {
        addClient: function(){
            var nombre = this.get('nombre');
            var apellidoPaterno  = this.get('apellidoPaterno');
            var apellidoMaterno = this.get('apellidoMaterno');
            var email = this.get('email');
            var telefono = this.get('telefono');
            var direccion = this.get('direccion');
            var colonia = this.get('colonia');
            var localidad = this.get('localidad');
            var municipio = this.get('municipio');
            var password = this.get('password');
            //var recomendado = this.get('recomendado');
            auth.createUserWithEmailAndPassword(email, password)
        .then((userResponse)=>{
                this.store.createRecord('client', {
                    nombre: nombre,
                    apellidoPaterno : apellidoPaterno,
                    apellidoMaterno: apellidoMaterno,
                    email: email,
                    telefono: telefono,
                    direccion: direccion,
                    colonia: colonia,
                    localidad: localidad,
                    municipio: municipio,
                    id: userResponse.uid
                    //recomendado: recomendado,
                }).save().then(()=>{
                    window.swal({
                     title: 'Listo!',
                     text: 'Cliente creado correctamente.',
                     confirmButtonText: 'OK',
                     type: 'success'
                   });
                    secondaryApp.auth().signOut();
                });
            });

            this.setProperties({
                nombre: '',
                apellidoPaterno: '',
                apellidoMaterno: '',
                email: '',
                telefono: '',
                direccion: '',
                colonia: '',
                localidad: '',
                municipio: '',
            })
        }
    }

});