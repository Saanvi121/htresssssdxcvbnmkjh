function setup()
{
    canvas = createCanvas(300,250)
    canvas.position(550,330)
    video = createCapture(VIDEO)
    video.hide()
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xTSGPuJ7i/model.json', modelLoaded)
}

function modelLoaded()
{
    console.log('Model LOADED :)))')
}

function draw()
{
    image(video,0,0,300,250)
    classifier.classify(video, gotResult)
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error)
    }
else
{
    console.log(results)
 document.getElementById("result_object").innerHTML = results[0].label
accuracy = results[0].confidence
accu1 = Math.floor(accuracy*100)
document.getElementById("result_accuracy").innerHTML = accu1 + "%"
}
}