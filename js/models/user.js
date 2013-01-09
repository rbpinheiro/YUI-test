YUI.add('user', function(Y) {
	"use strict";

	Y.namespace('YuiTest').User = Y.Base.create('user', Y.Model, [Y.ModelSync.Local], {
		root: 'yui-test'

	}, {
		ATTRS: {
			username: {
				value: ''
			},
			password: {
				value: ''
			},
			name: {
				value: ''
			},
			email: {
				value: ''
			}
		}
	});

}, '@VERSION@', {
	requires: [
		'model',
		'gallery-model-sync-local'
	]
});