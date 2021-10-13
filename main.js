Webcam.set(
    {
        
        width:350,
        height:300,
        image_format:'png',
        png_quality:90
    }
)
var camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML="<img id='cap_img' src='"+data_uri+"'+/>"
    })
}
console.log("ml5,version:",ml5.version);
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/U-fRFfBMC/model.json',modelLoaded);
function modelLoaded()
{
    console.log("model loaded");
}
function check()
{
    var img=document.getElementById("cap_img");
    classifier.classify(img,gotresult);
}
function gotresult(error,results)
{
 if(error)
 {
     console.log(error);

 }
 else{
     console.log(results);
     document.getElementById("result_obj").innerHTML=results[0].label;
    document.getElementById("result_per").innerHTML=results[0].confidence.toFixed(3);
    }
}
