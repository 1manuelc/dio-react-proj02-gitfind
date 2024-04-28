export default class User {
	name;
	description;
	username;
	photoUrl;
	url;

	constructor(name, desc, username, photourl, url) {
		this.name = name;
		this.description = desc;
		this.username = username;
		this.photoUrl = photourl;
		this.url = url;
	}
}
