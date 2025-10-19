// ### Notifier Family (Same method, many forms)
// **Goal:** Same method name, different outputs.

// **Classes:**
// - `Notifier` → `notify(msg)`
// - `EmailNotifier` → override
// - `SMSNotifier` → override

//     **Acceptance Criteria:**    
// - Iterate mixed array, call `notify` once each.



// C1: Notifier Polymorphism
class Notifier {
    // TODO: notify(msg)
    notify(msg) {
        console.log("Notifying Message:", msg);
    }
}
class EmailNotifier extends Notifier {
    // TODO: notify(msg) // override
    notify(msg) {
        console.log("You have recieved an email:", msg);
    }
}
class SMSNotifier extends Notifier {
    // TODO: notify(msg) // override
    notify(msg) {
        console.log("You have got 2 new messages:", msg);
    }
}

// TODO: demo: array of notifiers, call notify in a loop
const arr = [new Notifier(), new EmailNotifier(), new SMSNotifier()];

arr.forEach(m => {
    m.notify("Hi!!");
});