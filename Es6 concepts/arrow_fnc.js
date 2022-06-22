//arrow func allows short syntax for writing expressions

//traditional way to write functions

function traditional(x,y){
    return x + y
}

//arrow function

let arrow = (x,y) => {console.log(x + y) };

arrow(2,3);


//things to know while using arrow functions
/*
arrow fucntions
    -> Not hoisted meaning has to define before using it
        what hoisting is to be able to delcare function even before defining it
        for eg:

        calculatesum(2,3);

        function calculatesum(x,y){
            return x + y ;
        }

        here we are using function even before declaring it

    -> Can only omit return and curly bracket if func is a single statement so it is good habit to keep using them

    -> do not have their own this so not well suited for defining objects
    -> as func is always a constant value it is safer to use const rather than var

*/

