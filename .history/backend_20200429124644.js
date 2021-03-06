const habitTitleInputBoxAddSectionQuery = document.querySelector('.new-habit-title');

const addHabitButtonAddSectionQuery = document.querySelector('#btn-add-habit');

//Creating array for data
const habitArray = [];

//Helper function that creates dynamic content with data inside plus even listeners inside for tracking streak
const createHabitHelper = function() {
    let titleValue = habitTitleInputBoxAddSectionQuery.value

    let numId = habitArray.length


    habitObj = {
        id: numId,
        habitTitle: titleValue,
        frequency: [],
    }

    const pickFrequencyDropDownQuery = document.querySelector('.pick-frequency');
    habitObj.frequency.push(pickFrequencyDropDownQuery.value)

    habitArray.push(habitObj);

    //Dynamic creations of content happens here
    const displayContentTileSquare = document.createElement('div');
    displayContentTileSquare.classList.add('display-content');
    displayContentTileSquare.id = `habit-${numId}`;
    displayContentTileSquare.innerHTML = `<div class="habit-title-display" id="habit-title-id-${numId}">
        <h3>${titleValue}</h3>
    </div>
    <div class="streak-dispay" id="streak-id-${numId}">
    <p id="streak-p-id-${numId}">Streak: </p>
</div>
<div class="choose-days-completed" id="days-completed-id-${numId}">
    <img src="./assets/days_of_week/Monday-red.png" id="Monday-streak-${numId}" alt="Monday-streak-choose">
    <img src="./assets/days_of_week/Tuesday-red.png" id="Tuesday-streak-${numId}" alt="Tuesday-streak-choose">
    <img src="./assets/days_of_week/Wednesday-red.png" id="Wednesday-streak-${numId}" alt="Wednesday-streak-choose">
    <img src="./assets/days_of_week/Thursday-red.png" id="Thursday-streak-${numId}" alt="Thursday-streak-choose">
    <img src="./assets/days_of_week/Friday-red.png" id="Friday-streak-${numId}" alt="Friday-streak-choose">
    <img src="./assets/days_of_week/Saturday-red.png" id="Saturday-streak-${numId}" alt="Saturday-streak-choose">
    <img src="./assets/days_of_week/Sunday-red.png" id="Sunday-streak-${numId}" alt="Sunday-streak-choose">
    <img src="./assets/days_of_week/add-week.png" id="additional-week-${numId}" alt="add-week-bubble">
</div>
<div class="additional-week" id="additional-week-plus-id-${numId}"></div>`


    const contentQuery = document.querySelector('.content');
    contentQuery.appendChild(displayContentTileSquare);
    
    //This is where streak updates up until Sunday constant
    const mondaySteak = document.querySelector(`#Monday-streak-${numId}`)
    mondaySteak.addEventListener('click', function(event) {
        event.target.src = './assets/days_of_week/Monday-green.png';
        if (pickFrequencyDropDownQuery.value === 'Daily') {
            const streakvalue = document.querySelector(`#streak-p-id-${numId}`)
            streakvalue.innerText = `Streak: 1`;
        }else if(pickFrequencyDropDownQuery.value === 'Monday') {
            const streakvalue = document.querySelector(`#streak-p-id-${numId}`)
            streakvalue.innerText = `Streak: 1`;
        }
    });

    const tuesdaySteak = document.querySelector(`#Tuesday-streak-${numId}`)
    tuesdaySteak.addEventListener('click', function(event) {
        event.target.src = './assets/days_of_week/Tuesday-green.png';
        const streakvalue = document.querySelector(`#streak-p-id-${numId}`)
        if (pickFrequencyDropDownQuery.value === 'Daily' && streakvalue.innerText === 'Streak: 1') {
            streakvalue.innerText = `Streak: 2`;
        } else if (pickFrequencyDropDownQuery.value === 'Tuesday') {
            streakvalue.innerText = 'Streak: 1';
        }
    });

    const wednesdaySteak = document.querySelector(`#Wednesday-streak-${numId}`)
    wednesdaySteak.addEventListener('click', function(event) {
        event.target.src = './assets/days_of_week/Wednesday-green.png';
        const streakvalue = document.querySelector(`#streak-p-id-${numId}`)
        if (pickFrequencyDropDownQuery.value === 'Daily' && streakvalue.innerText === 'Streak: 2') {
            streakvalue.innerText = `Streak: 3`;
        } else if (pickFrequencyDropDownQuery.value === 'Wednesday') {
            streakvalue.innerText = 'Streak: 1';
        }
    });

    const thursdaySteak = document.querySelector(`#Thursday-streak-${numId}`)
    thursdaySteak.addEventListener('click', function(event) {
        event.target.src = './assets/days_of_week/Thursday-green.png';
        const streakvalue = document.querySelector(`#streak-p-id-${numId}`)
        if (pickFrequencyDropDownQuery.value === 'Daily' && streakvalue.innerText === 'Streak: 3') {
            streakvalue.innerText = `Streak: 4`;
        } else if (pickFrequencyDropDownQuery.value === 'Thursday') {
            streakvalue.innerText = 'Streak: 1';
        }
    });

    const FridaySteak = document.querySelector(`#Friday-streak-${numId}`)
    FridaySteak.addEventListener('click', function(event) {
        event.target.src = './assets/days_of_week/Friday-green.png';
        const streakvalue = document.querySelector(`#streak-p-id-${numId}`)
        if (pickFrequencyDropDownQuery.value === 'Daily' && streakvalue.innerText === 'Streak: 4') {
            streakvalue.innerText = `Streak: 5`;
        } else if (pickFrequencyDropDownQuery.value === 'Friday') {
            streakvalue.innerText = 'Streak: 1';
        }
    });

    const saturdaySteak = document.querySelector(`#Saturday-streak-${numId}`)
    saturdaySteak.addEventListener('click', function(event) {
        event.target.src = './assets/days_of_week/Saturday-green.png';
        const streakvalue = document.querySelector(`#streak-p-id-${numId}`)
        if (pickFrequencyDropDownQuery.value === 'Daily' && streakvalue.innerText === 'Streak: 5') {
            streakvalue.innerText = `Streak: 6`;
        } else if (pickFrequencyDropDownQuery.value === 'Saturday') {
            streakvalue.innerText = 'Streak: 1';
        }
    });

    const sundaySteak = document.querySelector(`#Sunday-streak-${numId}`)
    sundaySteak.addEventListener('click', function(event) {
        event.target.src = './assets/days_of_week/Sunday-green.png';
        const streakvalue = document.querySelector(`#streak-p-id-${numId}`)
        if (pickFrequencyDropDownQuery.value === 'Daily' && streakvalue.innerText === 'Streak: 6') {
            streakvalue.innerText = `Streak: 7`;
        } else if (pickFrequencyDropDownQuery.value === 'Sunday') {
            streakvalue.innerText = 'Streak: 1';
        }
    })

//The eventListeners end here for the first week , and additional week add feature starts here
    const currentDynamicContentTile = document.querySelector(`#additional-week-plus-id-${numId}`);
    const addExtraWeek = document.querySelector(`#additional-week-${numId}`) 
    addExtraWeek.addEventListener('click', function() {
        
        const additionalWeek = document.createElement('div')
        additionalWeek.className = `additional-week-div-${numId}`;
        additionalWeek.id = `additional-week-id-${numId}`;
        additionalWeek.innerHTML = `<div class="choose-days-completed" id="new-days-completed-id-${numId}">
        <img src="./assets/days_of_week/Monday-red.png" id="new-Monday-streak-${numId}" alt="Monday-streak-choose">
        <img src="./assets/days_of_week/Tuesday-red.png" id="new-Tuesday-streak-${numId}" alt="Tuesday-streak-choose">
        <img src="./assets/days_of_week/Wednesday-red.png" id="new-Wednesday-streak-${numId}" alt="Wednesday-streak-choose">
        <img src="./assets/days_of_week/Thursday-red.png" id="new-Thursday-streak-${numId}" alt="Thursday-streak-choose">
        <img src="./assets/days_of_week/Friday-red.png" id="new-Friday-streak-${numId}" alt="Friday-streak-choose">
        <img src="./assets/days_of_week/Saturday-red.png" id="new-Saturday-streak-${numId}" alt="Saturday-streak-choose">
        <img src="./assets/days_of_week/Sunday-red.png" id="new-Sunday-streak-${numId}" alt="Sunday-streak-choose">
    </div>`

    // const newMondayStreak = document.querySelector(`#new-Monday-streak-${numId}`);
    // newMondayStreak.addEventListener('click', function(event) {
    //     event.target.src = './assets/days_of_week/Monday-green.png';
    //     if (pickFrequencyDropDownQuery.value === 'Daily') {
    //         const streakvalue = document.querySelector(`#streak-p-id-${numId}`)
    //         streakvalue.innerText = `Streak: 8`;
    //     }else if(pickFrequencyDropDownQuery.value === 'Monday') {
    //         const streakvalue = document.querySelector(`#streak-p-id-${numId}`)
    //         streakvalue.innerText = `Streak: 2`;
    //     }
    // })

    currentDynamicContentTile.appendChild(additionalWeek);

});
//end of huge helper function
}

//Button that runs helper function with all its quirks
addHabitButtonAddSectionQuery.addEventListener('click', createHabitHelper);