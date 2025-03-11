## 🚀 Reminder App

A TypeScript-based reminder management system that allows you to create, update, delete, and manage reminders. It includes features for marking reminders as completed, filtering by due date, and more.

---

## 📂 **Project Structure**
```
├── src
│   ├── Reminder.ts
│   ├── main.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ **Installation**
1. **Clone the repository:**
```bash
git clone https://github.com/your-username/reminder-app.git
```

2. **Navigate to the project directory:**
```bash
cd reminder-app
```

3. **Install dependencies:**
```bash
npm install
```

4. **Compile TypeScript:**
```bash
npx tsc
```

---

## 🚦 **Usage**
### ✅ **1. Create a Reminder**
```typescript
import { ReminderDatabase } from './Reminder';

const db = new ReminderDatabase();

db.createReminder("1", "Buy groceries", "2025-03-15");
```

---

### ✅ **2. Get All Reminders**
```typescript
const allReminders = db.getAllReminders();
console.log(allReminders);
```

---

### ✅ **3. Get a Specific Reminder**
```typescript
const reminder = db.getReminder("1");
console.log(reminder?.toString());
```

---

### ✅ **4. Update a Reminder**
```typescript
db.updateReminder("1", "Buy groceries and milk", "2025-03-16");
```

---

### ✅ **5. Mark Reminder as Completed**
```typescript
db.markReminderAsCompleted("1");
```

---

### ✅ **6. Get Completed Reminders**
```typescript
const completedReminders = db.getAllCompletedReminders();
console.log(completedReminders);
```

---

### ✅ **7. Get Incomplete Reminders**
```typescript
const incompleteReminders = db.getAllIncompleteReminders();
console.log(incompleteReminders);
```

---

### ✅ **8. Get Reminders Due Today**
```typescript
const dueToday = db.getRemindersDueToday();
console.log(dueToday);
```

---

### ✅ **9. Delete a Reminder**
```typescript
db.removeReminder("1");
```

---

## 🏗️ **Build the Project**
To compile TypeScript files:
```bash
npx tsc
```

---

## 🧪 **Run the Project**
After compiling, you can run the project using:
```bash
node dist/main.js
```

---

## 🧹 **Clean the Build**
To delete compiled files:
```bash
rm -rf dist
```

---

## 🌟 **Features**
✅ Create reminders  
✅ Update reminders  
✅ Delete reminders  
✅ Mark reminders as completed  
✅ Filter by completion status  
✅ Filter by due date  

---

## 📄 **License**
This project is licensed under the **MIT License**.

---

## 💡 **Contributing**
Contributions are welcome! Feel free to open issues and submit pull requests.  

---

## 🎯 **Author**
👨‍💻 **Arif**  


---
