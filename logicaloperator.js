let hasCompletedCourse = false
let givesCertificate = false


//and operator -> && if both true
if (hasCompletedCourse === true && givesCertificate === true){
    generateCertificate()
}

if (hasCompletedCourse === false && givesCertificate === false){
    showsolution()
}

function generateCertificate(){
    console.log("Genereting certifiate.....")
}

function showsolution(){
    console.log("SHowing the solution.....")
}


// or operator

let likesDocumentires = true
let likesStartup = false

if (likesDocumentires === true || likesStartup === true){
    recommendMovie()

}

function recommendMovie(){
    console.log("Hey checkout this new film we think you will  like!")
}