var user = {name: "User1", answers: [ 5, 3, 3, 2, 4, 1, 4, 3, 1, 4]};

var matches = [{
    name : "Rihanna",
    photo: "",
    answers: [5, 2, 4, 2, 3, 3, 4, 2, 2, 4]
  },
  {
    name : "Rodney_Dangerfield",
    photo: "",
    answers: [4, 3, 3, 2, 3, 2, 3, 4, 3, 2]
  },
  {
    name : "Donald_Trump",
    photo: "",
    answers: [3, 2, 1, 3, 1, 1, 5, 4, 5, 3]
  },
  {
    name : "Bill_Gates",
    photo: "",
    answers: [4, 3, 2, 3, 5, 3, 4, 5, 2, 1]
  },
  {
    name : "BarackObama",
    photo: "",
    answers: [4, 5, 4, 2, 4, 2, 4, 5, 3, 3]
  },
  {
    name : "Caitlyn_Jenner",
    photo: "",
    answers: [2, 4, 5, 1, 5, 5, 4, 2, 2, 2]
  },
  {
    name : "Conor_McGregor",
    photo: "",
    answers: [3, 3, 4, 2, 1, 5, 5, 3, 3, 4]
  },
  {
    name : "Kanye_West",
    photo: "",
    answers: [5, 2, 1, 1, 1, 5, 5, 1, 5, 2]
  },
  {
    name : "Kylie_Jenner",
    photo: "",
    answers: [5, 1, 4, 4, 4, 1, 2, 2, 3, 1]
  },
  {
    name : "Mike_Tyson",
    photo: "",
    answers: [2, 4, 2, 4, 4, 3, 3, 3, 4, 2]
   }]

   x = 0

   var matchResults = []

   var answerDifferential

  
   function firstComparison(){

    var mainScore = 0

    var Differentials = []


      if(x < 10){
        
        matchResults.push({name: friends[x].name, score: ""})

        //console.log(matchResults)
    
        for(var i = 0; i < user.answers.length; i++) {
            
            var answerDifferential = (Math.abs(user.answers[i] - friends[x].answers[i]))
            
           Differentials.push(answerDifferential)
        }

        //console.log(Differentials)

        for(var i = 0; i < Differentials.length; i++){
            mainScore += Differentials[i];
        }

       
        console.log(mainScore)
        console.log("---------------------------------------------------------------")
        

        matchResults[x].score = mainScore

        x++

        firstComparison()

      }

      else {
        console.log(matchResults)

        matchResults.sort(function (a, b) {
          return a.score - b.score
        })

        console.log("---------------------------------------------------------------")
        console.log(matchResults)
        console.log("---------------------------------------------------------------")
        console.log(matchResults[0])
      }

      
        
   }
 
   
 firstComparison()
   





 var bestMatch = {
  name: "",
  photo: "",
};

// Here we take the result of the user"s survey POST and parse it.
var user = req.body;

// This variable will calculate the difference between the user"s scores and the scores of
// each user in the database
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

    matchResults.sort(function (a, b) {
      return a.score - b.score
    })

    bestMatch.name = matchedResults[x].name;
    bestMatch.photo = matchedResults[x].photo;

  }

  
    
}


firstComparison()

    // Reset the bestMatch to be the new friend.
    


// Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
// the database will always return that the user is the user's best friend).
friends.push(user);

// Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
res.json(bestMatch);