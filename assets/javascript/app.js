
var config = {
  apiKey: "AIzaSyAE8_wJwHAVbMphnFs6N7FM2aXewtLdxJo",
  authDomain: "train-tracker-9c47b.firebaseapp.com",
  databaseURL: "https://train-tracker-9c47b.firebaseio.com",
  projectId: "train-tracker-9c47b",
  storageBucket: "train-tracker-9c47b.appspot.com",
  messagingSenderId: "752150379115"
};
firebase.initializeApp(config);

var database = firebase.database();
console.log(database);
// 2. Button for adding trains
$("#add-train-btn").on("click", function (event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainTime = moment($("#time-input").val().trim(), "HH:mm").format("X");
  var trainFrequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    trainName: trainName,
    trainDestination: trainDestination,
    trainTime: trainTime,
    trainFrequency: trainFrequency
  };

  // Uploads train data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainTime);
  console.log(trainFrequency);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
});

// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
// database.ref().on("child_added", function (childSnapshot, prevChildKey) {
  database.ref().on("child_added", function (childSnapshot) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().trainName;
  var trainDestination = childSnapshot.val().trainDestination;
  var trainTime = childSnapshot.val().trainTime;
  var trainFrequency = childSnapshot.val().trainFrequency;

  // Train Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainTime);
  console.log(trainFrequency);

  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td></tr>")



});