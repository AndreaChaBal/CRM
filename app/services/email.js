import Service from '@ember/service';

export default Service.extend({
	init() {
        this._super(...arguments);
    },

    sendEmail(to, subject, body) {
        console.log("TO: "+to);
        console.log("Subject: "+subject);
        console.log("Body: "+body);
    	
        Ember.$.post("api/email", {
            to: to,
            subject: subject,
            body: body
        });
    }
});
