// ### Thermostat (Encapsulation + Validation)
// **Goal:** Control room temperature with safe range.
// **Must use:** private field `#temp`.

// **Features:**
// - Default temp 24
// - `increase()`, `decrease()`
// - `setTemp(v)` only if `16 ≤ v ≤ 30`
// - `current()`

//     **Acceptance Criteria:**
// - Out-of-range changes are rejected (log a message).
// - Only public methods change temperature.


// A2: Thermostat
class Thermostat {
    // TODO: #temp = 24
    #temp = 24;

    // TODO: increase()
    increase() {
        if (this.#temp >= 30) {
            console.log("Invalid Temp!");
        }
        else {
            this.#temp++;
        }
    }

    // TODO: decrease()
    decrease() {
        if (this.#temp > 16) {
            this.#temp--;
        }
        else {
            console.log("Invalid Temp!");
        }
    }

    // TODO: setTemp(v) // only 16..30
    setTemp(v) {
        if (this.#temp >= 16 && this.#temp <= 30) {
            this.#temp = v;
        }
        else {
            console.log("Invalid Temp!");
        }
    }

    // TODO: current()
    current() {
        return this.#temp;
    }
}

let t = new Thermostat();
t.increase();
t.increase();
t.decrease();
console.log(t.current());
// t.decrease();
// TODO: demo: change temp, invalid set, log current
