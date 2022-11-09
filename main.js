function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classification = ml5.classifier("", modelReady)
}
function modelReady() {
    classifier.classify(gotResults);

}