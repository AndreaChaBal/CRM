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
    servicioContratado: null,
    pagoInstalacion: null,
    emailService: Ember.inject.service('email'),
    actions: {
        updateValue: function(value){
            this.set('servicioContratado', value);
        },
        pagarInstalacion: function(choice){
            this.set('pagoInstalacion', choice);
        },
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
            var servicio = this.get('servicioContratado');
            var fechaInstalacion = this.get('date');
            var horaInstalacion = this.get('time');
            var pagoInstalacion = this.get('pagoInstalacion');
            var self = this;
            auth.createUserWithEmailAndPassword(email, password)
        .then((userResponse)=>{
            let myService = self.store.peekRecord('service', this.get('servicioContratado'));
            var newClient = self.store.createRecord('client', {
                    nombre: nombre,
                    apellidoPaterno : apellidoPaterno,
                    apellidoMaterno: apellidoMaterno,
                    email: email,
                    telefono: telefono,
                    direccion: direccion,
                    colonia: colonia,
                    localidad: localidad,
                    municipio: municipio,
                    id: userResponse.uid,
                    service: servicio,
                    fechaInstalacion: new Date(fechaInstalacion),
                    horaInstalacion: horaInstalacion,
                    pagoInstalacion: pagoInstalacion,
                });
                myService.get('clients').pushObject(newClient);
                newClient.save().then(()=>{
                    myService.save();
                    window.swal({
                     title: 'Listo!',
                     text: 'Cliente creado correctamente.',
                     confirmButtonText: 'OK',
                     type: 'success'
                   });
                    var text = ("Nombre: "+nombre+ " Telefono: "+telefono + " Direccion: "+direccion+"<br>"+fechaInstalacion);
                    console.log(text);
                    self.get('emailService').sendEmail(email, "Agenda de instalacion", text);
                    secondaryApp.auth().signOut();
                });
            });

        }
    }

});