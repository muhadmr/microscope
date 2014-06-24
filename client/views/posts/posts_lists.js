var postsData = [
	{
		title: 'Introducing Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope/',
		comment : 'Good one'
	},
	{
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://meteor.com',
		comment : 'Great site!'
	},
	{
		title: 'The Meteor Book',
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com',
		comment : 'Whoaaaa...'
	}
];

Template.postsList.helpers({
	posts: postsData
});

Template.postItem.helpers({
	domain: function() {
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	}
});