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
            if(nombre == undefined || apellidoPaterno == undefined || apellidoMaterno == undefined
                || email == undefined || telefono == undefined || direccion == undefined || colonia == undefined ||
                localidad == undefined || municipio == undefined || password == undefined || servicio == undefined || fechaInstalacion== undefined
                || horaInstalacion == undefined || pagoInstalacion == undefined || nombre == "" || apellidoPaterno == "" || apellidoMaterno == ""
                || email == "" || telefono == "" || direccion == "" || colonia == "" ||
                localidad == "" || municipio == "" || password == "" || servicio == "" || fechaInstalacion== ""
                || horaInstalacion == "" || pagoInstalacion == "")
            {
                window.swal({
                     title: 'Error!',
                     text: 'Faltan datos',
                     confirmButtonText: 'OK',
                     type: 'error'
                   });
            }
            else {
            auth.createUserWithEmailAndPassword(email, password)
        .then((userResponse)=>{
            fechaInstalacion = fechaInstalacion.split("-");
            var year = fechaInstalacion[0];
            var month = parseInt(fechaInstalacion[1], 10) - 1;
            var date = fechaInstalacion[2];
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
                    fechaInstalacion: new Date(year, month, date),
                    horaInstalacion: horaInstalacion,
                    pagoInstalacion: pagoInstalacion,
                });
                myService.get('clients').pushObject(newClient);
                newClient.save().then(()=>{
                    myService.save();
                    window.swal({
                     title: 'Listo!',
                     text: 'Cliente creado correctamente',
                     confirmButtonText: 'OK',
                     type: 'success'
                   });
                    var text = ("Nombre: "+nombre+ " Telefono: "+telefono + " Direccion: "+direccion+" Fecha de Instalacion: "+fechaInstalacion);
                    console.log(text);
                    self.get('emailService').sendEmail(email, "Agenda de instalacion", text);
                    secondaryApp.auth().signOut();
                    self.transitionToRoute('clients');
                });
            }).catch(function(error){
                console.log(error);
                if(error.code == "auth/invalid-email"){
                    window.swal({
                        title: 'Error!',
                        text: 'Email inválido',
                        confirmButtonText: 'OK',
                        type: 'error'
                      });
                }
                if(error.code == "auth/email-already-in-use"){
                    window.swal({
                        title: 'Error!',
                        text: 'Este email ya ha sido registrado previamente',
                        confirmButtonText: 'OK',
                        type: 'error'
                      });
                }
            });
        }
        },
        cancel: function(){
            var self = this;
            this.setProperties({
                nombre: "",
                apellidoPaterno : "",
                apellidoMaterno: "",
                email: "",
                telefono: "",
                direccion: "",
                colonia: "",
                localidad: "",
                municipio: "",
                service: "",
                fechaInstalacion: "",
                horaInstalacion: "",
            })
            self.transitionToRoute('clients');
            
        }
    }

});