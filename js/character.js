function Character(character) {
	this.type = character.find("type").text();
	this.name = character.find("name").text();
	this.class = character.find("class").text();
	this.background = character.find("background").text();
	this.player = character.find("player").text();
	this.alignment = character.find("alignment").text();
	this.str = character.find("str").text();
	this.dex = character.find("dex").text();
	this.con = character.find("con").text();
	this.int = character.find("int").text();
	this.wis = character.find("wis").text();
	this.cha = character.find("cha").text();
	this.level = character.find("level").text();
	this.id = character.find("id").text();
}