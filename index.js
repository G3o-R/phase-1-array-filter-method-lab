// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name){
    return array.filter(possibleMatch => possibleMatch.toLowerCase() === name.toLowerCase())
  }

  function fuzzyMatch(array, starting){
    return array.filter(function(item){
      return item.startsWith(starting)
    })
    
  }

  function matchName(array, name){
    return array.filter(function(item){
      if(name === item.name){
        return true
      }
    })
  }