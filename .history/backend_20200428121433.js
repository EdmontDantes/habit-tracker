const habitTitleInputBoxAddSectionQuery = document.querySelector('.new-habit-title');


const dailyCheckMarkFreqAddSectionQuery = document.querySelector('#Daily-Freq');
const monCheckMarkFreqAddSectionQuery = document.querySelector('#Monday-Freq');
const tueCheckMarkFreqAddSectionQuery = document.querySelector('#Tuesday-Freq');
const wedCheckMarkFreqAddSectionQuery = document.querySelector('#Wednesday-Freq');
const thuCheckMarkFreqAddSectionQuery = document.querySelector('#Thursday-Freq');
const friCheckMarkFreqAddSectionQuery = document.querySelector('#Friday-Freq');
const satCheckMarkFreqAddSectionQuery = document.querySelector('#Saturday-Freq');
const sunCheckMarkFreqAddSectionQuery = document.querySelector('#Sunday-Freq');


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

    habitArray.push(habitObj);


}