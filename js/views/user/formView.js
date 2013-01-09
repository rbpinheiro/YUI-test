YUI.add('user-form-view', function (Y) {
	'use strict';

	Y.namespace('YuiTest').UserFormView = Y.Base.create('userFormView', Y.View, [], {
		template: Y.Handlebars.compile(Y.one('#user-form').getHTML()),
		initializer: function () {
			var container = this.get('container');
			container.setHTML(this.template());

			return this;
		},
		events: {
			'form': {
				'submit': 'saveUser'
			}
		},
		saveUser: function (ev) {
			ev.preventDefault();
			console.log(this.getValue('username'));
		},
		getValue: function (field) {
			return this.get('container').one('#' + field).get('value')
		}
	}, {

	});

}, '@VERSION@', {
	requires: [
		'view',
		'handlebars'
	]
});