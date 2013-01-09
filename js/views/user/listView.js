YUI.add('user-form-view', function (Y) {
	'use strict';

	Y.namespace('YuiTest').UserFormView = Y.Base.create('userFormView', Y.View, [], {
		containerTemplate: '<form class="userForm">',
		template: Y.Handlebars.compile(Y.one('#user-form').getHTML()),
		initializer: function () {
			var container = this.get('container');
			container.setHTML(this.template());

			return this;
		}
	});

}, '@VERSION@', {
	requires: [
		'view',
		'handlebars'
	]
});