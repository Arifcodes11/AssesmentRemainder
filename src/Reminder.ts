class Reminder {
    id: string;
    message: string;
    dueDate: Date;
    completed: boolean;

    constructor(id: string, message: string, dueDate: string, completed: boolean = false) {
        this.id = id;
        this.message = message;
        this.dueDate = new Date(dueDate);
        this.completed = completed;
    }

    toString(): string {
        return `Reminder(ID: ${this.id}, Message: ${this.message}, Due Date: ${this.dueDate.toISOString().split('T')[0]}, Completed: ${this.completed})`;
    }
}

class ReminderDatabase {
    private reminders: Map<string, Reminder>;

    constructor() {
        this.reminders = new Map<string, Reminder>();
    }

    createReminder(id: string, message: string, dueDate: string): void {
        const reminder = new Reminder(id, message, dueDate);
        this.reminders.set(id, reminder);
    }

    exists(id: string): boolean {
        return this.reminders.has(id);
    }

    markReminderAsCompleted(id: string): void {
        const reminder = this.reminders.get(id);
        if (reminder) {
            reminder.completed = true;
        }
    }

    unmarkReminderAsCompleted(id: string): void {
        const reminder = this.reminders.get(id);
        if (reminder) {
            reminder.completed = false;
        }
    }

    getAllReminders(): Reminder[] {
        return Array.from(this.reminders.values());
    }

    getReminder(id: string): Reminder | null {
        return this.reminders.get(id) || null;
    }

    getAllRemindersMarkedAsCompleted(): Reminder[] {
        return Array.from(this.reminders.values()).filter(reminder => reminder.completed);
    }

    getAllRemindersNotMarkedAsCompleted(): Reminder[] {
        return Array.from(this.reminders.values()).filter(reminder => !reminder.completed);
    }

    getAllRemindersDueByToday(): Reminder[] {
        const today = new Date();
        return Array.from(this.reminders.values()).filter(reminder => reminder.dueDate <= today);
    }

    updateReminder(id: string, message?: string, dueDate?: string): void {
        const reminder = this.reminders.get(id);
        if (reminder) {
            if (message) reminder.message = message;
            if (dueDate) reminder.dueDate = new Date(dueDate);
        }
    }

    removeReminder(id: string): void {
        this.reminders.delete(id);
    }
}

module.exports = { Reminder, ReminderDatabase };