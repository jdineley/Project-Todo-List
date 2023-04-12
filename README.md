# Project-Todo-List

Application ideas:

- Each todo will be captured in an object instance (containing state and behaviour to alter the state)
- Each todo should have: Title, Description, Duedate, priority, task completed
- Completed todos should be stored and viewable. The user should have the option to clear completed todos or they are auto cleared after a time from when they are checked complete.

// Export to console:

// let input = document.querySelector('input')
// input.value = '2017-06-01'
// input.onchange = function() {
// console.log(this.valueAsDate)
// }

// console.log(format(new Date(), 'yyyy-MM-dd'))

// Format from HTML date input
// 2017-06-07

// 'date-fns'

// compareAsc:
// Sort the array of dates:
// const result = [
// new Date(1995, 6, 2),
// new Date(1987, 1, 11),
// new Date(1989, 6, 10)
// ].sort(compareAsc)
//=> [
// Wed Feb 11 1987 00:00:00,
// Mon Jul 10 1989 00:00:00,
// Sun Jul 02 1995 00:00:00
// ]

// toDate

// isToday
const result1 = isToday(new Date('2023-04-07'))
console.log(result1)
// isThisWeek
const result2 = isThisWeek(new Date(2023, 3, 8))
console.log(result2)
// subDays

// === format(new Date(), 'yyyy-MM-dd')

// **********\*\*\*\***********\***********\*\*\*\***********
// Functionality to add:
// 1. Display completed tasks per project
// 2.
