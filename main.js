noseX = 0 ;
noseY = 0 ;

function preload()
{
    clown_nose = loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8bde375b-c6ab-4830-8250-4ef95aeeeba8/d5dg5ln-7f431b73-af9c-4be7-8364-f219b1fedd74.png/v1/fill/w_800,h_600,strp/mustache_png_by_mjmoonwalkerfan_d5dg5ln-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvOGJkZTM3NWItYzZhYi00ODMwLTgyNTAtNGVmOTVhZWVlYmE4XC9kNWRnNWxuLTdmNDMxYjczLWFmOWMtNGJlNy04MzY0LWYyMTliMWZlZGQ3NC5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.teraxC5QjXG-7pWYPmDUx-Pu53MTY1maz1kvrjUGbro");
}

function setup()
{
    canvas = createCanvas(300 , 300)
    canvas.center();
    Video = createCapture(VIDEO);
    Video.size(300 , 300);
    Video.hide();

    posenet = ml5.poseNet(Video , model_loaded);
    posenet.on('pose' , gotposes);

}
function model_loaded()
{
    console.log("model is loaded")
}

function gotposes(results)
{
if (results.length > 0)
{
    console.log(results)
    noseX = results[0].pose.nose.x  -10
    noseY = results[0].pose.nose.y  -10
}
}

function draw()
{
    image(Video , 0 , 0 , 300 , 300);
    //fill(255 , 0 , 0 );
    //stroke(255 , 0 , 0 );
    //circle(noseX , noseY , 30 );
     image(clown_nose , noseX , noseY , 30 , 30 );
}