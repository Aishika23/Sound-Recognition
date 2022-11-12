function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/piWNyRkVG/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("ruc").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    
    img = document.getElementById('img2') 
    

    if (results[0].label == "cat") {
      img.src = 'cat.png';
      
    } else if (results[0].label == "dog") {
      img.src = 'dog.png';
      
    } else if (results[0].label == "horse") {
      img.src = 'horse.png';
      
    } 
    else if (results[0].label == "cow") {
      img.src = 'cow.png';
      
    }else{
      img.src = 'ear2.png';
      
    }
  }
}