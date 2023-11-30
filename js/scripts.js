// Add event listener to the checkbox
$("#tree-text").on("change", function() {
    // Select the corresponding image
    var image = $("#tree");

    // Show or hide the image
    if (this.checked) {
        image.show();
    } else {
        image.hide();
    }
});

// Trigger the change event to set the initial display of the image
$("#tree-text").trigger("change");
// Add event listener to the checkbox
$("#star-text").on("change", function() {
    // Select the corresponding image
    var image = $("#star");

    // Show or hide the image
    if (this.checked) {
        image.show();
    } else {
        image.hide();
    }
});

// Trigger the change event to set the initial display of the image
$("#star-text").trigger("change");
// Add event listener to the checkbox
$("#garland-text").on("change", function() {
    // Select the corresponding image
    var image = $("#garland");

    // Show or hide the image
    if (this.checked) {
        image.show();
    } else {
        image.hide();
    }
});

// Trigger the change event to set the initial display of the image
$("#garland-text").trigger("change");
// Add event listener to the checkbox
$("#lights-text").on("change", function() {
    // Select the corresponding image
    var image = $("#lights");

    // Show or hide the image
    if (this.checked) {
        image.show();
    } else {
        image.hide();
    }
});
// Add event listener to the checkbox
$("#decorations-text").on("change", function() {
    // Select the corresponding image
    var image = $("#decorations");

    // Show or hide the image
    if (this.checked) {
        image.show();
    } else {
        image.hide();
    }
});

// Trigger the change event to set the initial display of the image
$("#decorations-text").trigger("change");

// Trigger the change event to set the initial display of the image
$("#lights-text").trigger("change");