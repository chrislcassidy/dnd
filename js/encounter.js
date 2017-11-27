function Encounter(encounter,characters) {
	this.id = encounter.find("id").text();
	var fighters = encounter.find("combatant");
	this.combatants = fighters;
}