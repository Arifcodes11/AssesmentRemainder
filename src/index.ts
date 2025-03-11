const { Reminder, ReminderDatabase } = require('./Reminder');

// Example Usage
const db = new ReminderDatabase();

// Creating a reminder
db.createReminder("1", "Buy groceries", "2025-03-15");

// Check if reminder exists
console.log(db.exists("1"));  // true

// Get a specific reminder
const reminder = db.getReminder("1");
console.log(reminder?.toString());

// Mark as completed
db.markReminderAsCompleted("1");

// Get all completed reminders
const completed = db.getAllRemindersMarkedAsCompleted();
console.log(completed);

// Update the reminder
db.updateReminder("1", "Buy groceries and milk", "2025-03-16");

// Get all reminders due by today
const dueToday = db.getAllRemindersDueByToday();
console.log(dueToday);

// Remove a reminder
db.removeReminder("1");
console.log(db.exists("1"));  // false