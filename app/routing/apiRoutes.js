// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible friends
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to a user"s survey result
    // Then compare those results against every user in the database.
    // It will then calculate the difference between each of the numbers and the user"s numbers.
    // It will then choose the user with the least differences as the "best friend match."
    // In the case of multiple users with the same result it will choose the first match.
    // After the test, it will push the user to the database.

    // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options
    var bestMatch = {
      name: "",
      photo: "",
    };

    // Here we take the result of the user"s survey POST and parse it.
    var user = req.body;
    
    x = 0

    var matchResults = []

    var answerDifferential


    function firstComparison(){

    var mainScore = 0

    var Differentials = []


      if(x < 10){
        
        matchResults.push({name: friends[x].name, photo: friends[x].photo, score: ""})

        //console.log(matchResults)

        for(var i = 0; i < user.answers.length; i++) {
            
            var answerDifferential = (Math.abs(user.answers[i] - friends[x].answers[i]))
            
          Differentials.push(answerDifferential)
        }

        //console.log(Differentials)

        for(var i = 0; i < Differentials.length; i++){
            mainScore += Differentials[i];
        }
        

        matchResults[x].score = mainScore

        x++

        firstComparison()

      }

      else {
        console.log(matchResults)
        console.log("________________________________________")
        console.log("________________________________________")

        matchResults.sort(function (a, b) {
          return a.score - b.score
        })

        bestMatch.name = matchResults[0].name;
        bestMatch.photo = matchResults[0].photo;

        console.log(matchResults)
        console.log("________________________________________")
        console.log("________________________________________")
        console.log(bestMatch)

      }

      
        
    }


    firstComparison()


    // This variable will calculate the difference between the user"s scores and the scores of
    // each user in the database
    
    // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
    // the database will always return that the user is the user's best friend).
    friends.push(user);

    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);


  });

};
