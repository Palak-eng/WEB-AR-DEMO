console.log("WebAR App Loaded Successfully!");

// Grab the model-viewer element and the bar we styled in CSS
const modelViewer = document.getElementById("ar-model");
const progressBar = document.getElementById("progress-bar");
const progressContainer = document.querySelector(".progress-bar-container");

// "progress" fires many times while the .glb file downloads
modelViewer.addEventListener("progress", (event) => {
    // event.detail.totalProgress is a number from 0 to 1
    const percentLoaded = event.detail.totalProgress * 100;

    progressBar.style.width = `${percentLoaded}%`;

    // Once fully loaded, hide the bar instead of leaving it at 100%
    if (event.detail.totalProgress === 1) {
        progressContainer.classList.add("hide");
    } else {
        progressContainer.classList.remove("hide");
    }
});

// Live rotation readout — updates the HUD label as the user drags the model
const rotationReadout = document.getElementById("rotation-readout");

modelViewer.addEventListener("camera-change", () => {
    // getCameraOrbit() returns an object like { theta, phi, radius }
    // theta = horizontal angle, phi = vertical angle, both in radians
    const orbit = modelViewer.getCameraOrbit();

    const thetaDeg = Math.round((orbit.theta * 180) / Math.PI);
    const phiDeg = Math.round((orbit.phi * 180) / Math.PI);

    rotationReadout.textContent = `ROT: ${thetaDeg}\u00B0 / ${phiDeg}\u00B0`;
});