YUI.add('yui-app', function (Y) {
	'user strict';

	var UserFormView = Y.YuiTest.UserFormView;

	Y.namespace('YuiTest').YuiApp = Y.Base.create('YuiApp', Y.App, [], {
		containerTemplate: '#content',
		initializer: function () {
			var fragment = Y.one(Y.config.doc.createDocumentFragment()),
				view = new UserFormView();

			fragment.append(view.render().get('container'));
			this.get('container').setContent(fragment);
		}
	}, {
		ATTRS: {
			container : {
				valueFn: function () {
					return Y.one('#content');
				}
			}
		}
	});

}, '@VERSION@', {
	requires: [
		'app',
		'user-form-view'
	]
});