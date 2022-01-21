const featureExtractor = ml5.featureExtractor('MobileNet', modelLoaded);
const classifier = featureExtractor.classification(video, videoReady);

var video = document.getElementById('video');
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    video.play();
  })

var loading = document.getElementById('loading');
function modelLoaded() {
  loading.innerText = 'Model loaded!';
}
var videoStatus = document.getElementById('videoStatus');
function videoReady() {
  videoStatus.innerText = 'Video ready!';
}

var brotherButton = document.getElementById('brotherButton');
var sisterButton = document.getElementById('sisterButton');
var amountOfBrotherImages = document.getElementById('amountOfBrotherImages');
var amountOfSisterImages = document.getElementById('amountOfSisterImages');

brotherButton.onclick = function () {
  classifier.addImage('brother');
  amountOfBrotherImages.innerText = Number(amountOfBrotherImages.innerText) + 1;
}
sisterButton.onclick = function () {
  classifier.addImage('sister');
  amountOfSisterImages.innerText = Number(amountOfSisterImages.innerText) + 1;
}

var train = document.getElementById('train');
var loss = document.getElementById('loss');
let totalLoss = 0;

train.onclick = function () {
  classifier.train(function(lossValue) {
    if (lossValue) {
      totalLoss = lossValue;
      loss.innerHTML = 'Loss: ' + totalLoss;
    } else {
      loss.innerHTML = 'Done Training! Final Loss: ' + totalLoss;
    }
  });
}

var result = document.getElementById('result');
var confidence = document.getElementById('confidence');

function gotResults(err, results) {

  if (err) {
    console.error(err);
  }
  if (results && results[0]) {
    result.innerText = results[0].label;
    confidence.innerText = results[0].confidence;
    classifier.classify(gotResults);
  }
}

var predict = document.getElementById('predict');

function Predict() {
  classifier.predict(gotResults);
}
predict.onclick = function () {
  classifier.classify(gotResults);
}
