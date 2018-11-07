import Ember from 'ember';

export function formatDate(params){
    return moment(params[0]).format('DD-MMMM-YYYY');
}

export default Ember.Helper.helper(formatDate);