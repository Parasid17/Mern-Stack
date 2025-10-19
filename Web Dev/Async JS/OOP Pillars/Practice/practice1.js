// ### Wallet (Encapsulation Basics)
// **Goal:** Manage cash safely with private balance.
// **Must use:** private field `#amount`, public methods only.

// **Features:**
// - `addCash(value)` (positive only)
// - `spend(value)` (must not go negative)
// - `balance()` → returns current amount

//     **Acceptance Criteria:**
// - Direct access to `#amount` not allowed (keep a commented line to show it errors).
// - Invalid inputs must not change state.


// A1: Wallet (Encapsulation)
class Wallet {
    // TODO: #amount = 0
    #amount = 0;

    // TODO: addCash(value)
    addCash(value) {
        if (value > 0 && !isNaN(value)) {
            this.#amount += value;
        }
        else {
            console.log("Invalid Amount!");
        }
    }

    // TODO: spend(value)
    spend(value) {
        if (value <= this.#amount && value > 0 && !isNaN(value)) {
            this.#amount -= value;
        }
        else {
            console.log("Invalid Amount");
        }
    }

    // TODO: balance()
    balance() {
        return this.#amount;
    }
}

const w = new Wallet();
w.addCash(1000);
console.log(w.balance());
w.spend("1000");
console.log(w.balance());

// TODO: demo code (create, add, spend, print balance)
// NOTE: Do not access private field directly.