const app = new PIXI.Application({
    width: 1280,
    height: 720,
    backgroundColor: 0x1099bb,
});

app.stage.eventMode = 'static';
app.stage.hitArea = app.screen;

//Add the PIXI app to the UI
document.getElementById("scene").appendChild(app.view);

const iconContainer = document.getElementById("icon-container");

// Add drag-and-drop functionality
iconContainer.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("type", event.target.dataset.type);
});

app.view.addEventListener("dragover", (event) => {
    event.preventDefault();
});

app.view.addEventListener("drop", (event) => {
    event.preventDefault();

    // Get the type of the dropped icon
    const type = event.dataTransfer.getData("type");

    // Create a sprite based on the type
    let sprite;
    if (type === "cloud") {
        sprite = PIXI.Sprite.from("./images/cloud.png");
    } else if (type === "tree") {
        sprite = PIXI.Sprite.from("./images/tree.png");
    }

    // Set initial position to the drop location
    //TODO: This can be improved...
    const rect = app.view.getBoundingClientRect();
    sprite.x = event.clientX - rect.left;
    sprite.y = event.clientY - rect.top;

    // Enable interactivity for the sprite
    sprite.interactive = true;
    //sprite.buttonMode = true;

    // Add functionality to move, rotate, and scale
    sprite
        .on("pointerdown", onDragStart)
        .on("pointerup", onDragEnd)
        .on("pointerupoutside", onDragEnd)
        .on("pointermove", onDragMove);

    sprite.scale.set(.5); // Scale down the sprite
    
    // Add the sprite to the stage
    app.stage.addChild(sprite);
});

// Variables for drag state
let dragging = false;
let dragTarget = null;
let dragData = null;

// Drag event handlers
function onDragStart(event) {
    dragging = true;
    dragTarget = this;
    dragData = event.data;
    this.alpha = 0.5; // Add visual feedback
}

function onDragEnd() {
    dragging = false;
    dragTarget = null;
    dragData = null;
    this.alpha = 1;
}

function onDragMove() {
    if (dragging) {
        const newPosition = dragData.getLocalPosition(this.parent);
        this.x = newPosition.x - this.width / 2;
        this.y = newPosition.y - this.height / 2;
    }
}

//TODO: This shouldn't be mouse wheel so mobile and tablet are supported
app.view.addEventListener("wheel", (event) => {
    if (dragTarget) {
        // Rotate with the mouse wheel
        dragTarget.rotation += event.deltaY * 0.01;
    }
});

//TODO: This shouldn't be -/+ so mobile and tablet are supported
window.addEventListener("keydown", (event) => {
    if (dragTarget) {
        // Scale with keyboard keys
        if (event.key === "+") {
            dragTarget.scale.x += 0.1;
            dragTarget.scale.y += 0.1;
        } else if (event.key === "-") {
            dragTarget.scale.x -= 0.1;
            dragTarget.scale.y -= 0.1;
        }
    }
});