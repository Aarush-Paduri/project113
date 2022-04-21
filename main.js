function preload() {

}

function setup() {
    canvas = createCanvas(800, 500);
    canvas.position(200, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 150, 100, 500, 300);

    stroke(200, 0, 0)
    fill(200, 0, 0)
    circle(70, 50, 80)

    stroke(0, 170, 0)
    fill(0, 170, 0)
    rect(110, 35, 580, 30)
    
    stroke(200, 0, 0)
    fill(200, 0, 0)
    circle(730, 50, 80)


    stroke(0, 170, 0)
    fill(0, 170, 0)
    rect(715, 90, 30, 350)


    stroke(200, 0, 0)
    fill(200, 0, 0)
    circle(70, 440, 80)

    stroke(0, 170, 0)
    fill(0, 170, 0)
    rect(110, 425, 580, 30)
    
    stroke(200, 0, 0)
    fill(200, 0, 0)
    circle(730, 440, 80)


    stroke(0, 170, 0)
    fill(0, 170, 0)
    rect(55, 90, 30, 320)
}

function take_snapshot() {
    save('saved_photo.png');
}