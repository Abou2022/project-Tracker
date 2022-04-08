//Save reference to DOM elements
var timeDisplayEl = $("#time-display")
var projectDisplayEl = $("")
//handle  displaying time
displayTime();
function displayTime(){
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a' )
    timeDisplayEl.text(currentTime)
}

setInterval(displayTime,1000)

//handle project form submission
projectFormEl.on('submit',handleProjectSubmission)
function handleProjectSubmission(e){
    e.preventDefault()
    var projectName = projectNameInputEl.val().trim()
    var projectType = projectTypeinputEl.val()
    var hourlyRate = hourlyRateInputEl.val().trim()
    var dueDate = dueDateInputEl.val()

    console.log
}