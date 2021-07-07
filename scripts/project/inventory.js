
function addToInventory(object) {
	CharDialogue.text = "(Item added to Slot 0)";
	if (slot_0.slot_free == true) {
		CharDialogue.text = "(Item added to Slot 0)";
	} else if (slot_1.slot_free) {
		console.log("Added to Slot 1");
	} else if (slot_2.slot_free) {
		console.log("Added to Slot 2");
	} else {
		console.log("Inventory full!");
	}
}