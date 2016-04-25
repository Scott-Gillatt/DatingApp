app.controller('appController', function($scope) {
    $scope.hello = "hello";

    $scope.people = [];
    $scope.me = { name: "Scott", age: 28, gender: "Male", hotness: 89 };
    $scope.matches = [];

    $scope.people.push(new person("Stephanie", $scope.people.length + 1, 25, "Female", 9))
    $scope.people.push(new person("Jenny", $scope.people.length + 1, 30, "Female", 6))
    $scope.people.push(new person("Alexandra", $scope.people.length + 1, 26, "Female", 8))
    $scope.people.push(new person("Coleen", $scope.people.length + 1, 28, "Female", 10))
    $scope.people.push(new person("Aaron", $scope.people.length + 1, 45, "Male", 8))
    $scope.people.push(new person("Eric", $scope.people.length + 1, 35, "Male", 6))
    $scope.people.push(new person("Seth", $scope.people.length + 1, 50, "Male", 9))
    $scope.people.push(new person("Lee", $scope.people.length + 1, 27, "Male", 7))
    $scope.people.push(new person("Tom", $scope.people.length + 1, 29, "Male", 8))

    $scope.addPerson = function() {
        $scope.people.push($scope.newPerson);
    }
    $scope.addMe = function() {
        $scope.me = $scope.newPerson;
    }

    $scope.findMatches = function() {
        var id = 0
        var age = 0
        var hotness = 0
        var likeness = 0
        $scope.matches = [];
        meHotness = $scope.me.hotness
        for (var i = 0; i < $scope.people.length; i++) {
            if ($scope.me.gender.toLowerCase() != $scope.people[i].gender.toLowerCase()) {
                id = $scope.people[i].id
                age = $scope.people[i].age
                hotness = $scope.people[i].hotness
                likeness = Math.abs(age - $scope.me.age) + Math.abs(hotness - $scope.me.hotness)


                $scope.matches.push(new match(id, likeness))
            }
            sortMatch($scope.matches)
        }

    }


})

var person = function(name, id, age, gender, hotness) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.gender = gender;
    this.hotness = hotness;
}

var match = function(id, likeness) {
    this.id = id;
    this.likeness = likeness;
}

var sortMatch = function(x) {
    var currentLowest, currentPerson, swapOccured;
    
    x.some(function() {
        swapOccured = false;
            for (index = 0; index < x.length - 1; index++) {
                nextIndex = index + 1;
                if (x[index].likeness > x[nextIndex].likeness) {
                    currentLowest = x[nextIndex]
                    x[nextIndex] = x[index]
                    x[index] = currentLowest
                    swapOccured = true;
                }
            }
            if (!swapOccured) {
                return true;
            };
            return false;
    });
}




//   $scope.matches.sort(function(a, b){
// return (a.likeness > b.likeness)?1:((b.likeness > a.likeness)?-1:0);
// 
// })


var numbers = [12, 10, 15, 11, 14, 13, 16, 9, 6, 3, 17, 20];

function bubbleSort(array) {
    var next2last = array.length - 1,
        holder,
        swapOccured,
        index,
        nextIndex;

    array.some(function() {
        swapOccured = false;
        for (index = 0; index < next2last; index += 1) {
            nextIndex = index + 1;
            if (array[index] > array[nextIndex]) {
                holder = array[nextIndex];
                array[nextIndex] = array[index];
                array[index] = holder;
                swapOccured = true;
            };
        };

        if (!swapOccured) {
            return true;
        };

        return false;
    });
    console.log(array)
}

function randomNumber(array){
    randomIndex = array[Math.floor(Math.random() * array.length)]
    randomNumber = Math.floor(Math.random() * array.length)
    return (randomIndex + " " + randomNumber)
}

console.log(randomNumber(numbers))

function shuffle(array){
    var holder, randomIndex;
    for (var index = 0; index < array.length; index++) {
    randomIndex = Math.floor(Math.random() * array.length)
    holder = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = holder
    }
    console.log(array)
}