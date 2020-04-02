//Exercise 3 from DOM and debugging lecture
//4.2.2020
var woolOwners = [
    {
        "master": 1
    },
    {
        "dame": 1
    },
    {
      "little boy": 1,
      "location": "down the lane"
    }
  ];
  
  
  var haveYouAnyWool = function() {
      for (var i = 0; i < woolOwners.length; i++) {
      var totalBags = totalBags + i;
      }
      return (i);
  };
  var bags = haveYouAnyWool();

  function baabaaBlackSheep() {
      console.log("BaaBaa BlackSheep have you any wool?");
      if (bags > 0) {
          console.log("yes sir, yes sir " + bags + " bags full");
    }
  }
  
  function oneForMy() {
      for (var i = 0; i < 2; i++) {
          //the i will print out master and dame in log lines
          people = Object.keys(woolOwners[i]);
          var person = people.toString();
          console.log("one for my " + person);
      }
  }
  
  baabaaBlackSheep();
  oneForMy();
  
  //print out second index of array since that is where the location info exists
  var boy = Object.keys(woolOwners[2]);
  //start with 0 to run the info from the beginning. 2 is not an existing index.
  var littleBoy = boy[0];
  
  //print out the correct index of location under woolOwners by adding index 2.
  //key:value pair
  var whereHeLives = woolOwners[2].location;
  console.log("one for the " + littleBoy + " that lives " + whereHeLives);
