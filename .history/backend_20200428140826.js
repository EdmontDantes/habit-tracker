const habitTitleInputBoxAddSectionQuery = document.querySelector('.new-habit-title');


// const dailyCheckMarkFreqAddSectionQuery = document.querySelector('#Daily-Freq');
// const monCheckMarkFreqAddSectionQuery = document.querySelector('#Monday-Freq');
// const tueCheckMarkFreqAddSectionQuery = document.querySelector('#Tuesday-Freq');
// const wedCheckMarkFreqAddSectionQuery = document.querySelector('#Wednesday-Freq');
// const thuCheckMarkFreqAddSectionQuery = document.querySelector('#Thursday-Freq');
// const friCheckMarkFreqAddSectionQuery = document.querySelector('#Friday-Freq');
// const satCheckMarkFreqAddSectionQuery = document.querySelector('#Saturday-Freq');
// const sunCheckMarkFreqAddSectionQuery = document.querySelector('#Sunday-Freq');




const addHabitButtonAddSectionQuery = document.querySelector('#btn-add-habit');


const habitArray = [];

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
</div>`
    
    // const displayContentTitle = document.createElement('div');
    // displayContentTile.classList.add('habit-title-display');
    // displayContentTitle.id = `habit-title-${numId}`;
    // displayContentTileSquare.appendChild(displayContentTitle);
    // const h3Title = document.createElement('h3');
    // h3Title.innerText = titleValue;
    // displayContentTitle.appendChild(h3Title);
    const contentQuery = document.querySelector('.content');
    contentQuery.appendChild(displayContentTileSquare);
    
    const mondaySteak = document.querySelector(`#Monday-streak-${numId}`)
    mondaySteak.addEventListener('click')
}

addHabitButtonAddSectionQuery.addEventListener('click', createHabitHelper);