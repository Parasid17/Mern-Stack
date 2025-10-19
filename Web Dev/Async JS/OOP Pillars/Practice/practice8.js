// ### Transport Fare (Different strategies)
// **Goal:** Different fare logic per subclass.

// **Classes:**
// - `Transport` → `fare(km)` (base default)
// - `Bus` → per-km fare
// - `Taxi` → base fare + per-km
// - `Metro` → slab-based fare (e.g., ≤5km: ₹10, ≤15km: ₹25, else ₹40)

//     **Acceptance Criteria:**
// - Loop through rides with varying km and print fares via single `fare` call.


// C2: Transport Fare
class Transport {
    // TODO: fare(km) // default
    fare(km) {
        console.log(`Price: ${km * 10}/-`);
    }
}
class Bus extends Transport {
    // TODO: fare(km) // per km
    fare(km) {
        console.log(`Price(per km): ${km * 5}/-`);
    }
}
class Taxi extends Transport {
    // TODO: fare(km) // base + per km
    fare(km) {
        console.log(`Price(per km): ${20 + (km * 5)}/-`);
    }
}
class Metro extends Transport {
    // TODO: fare(km) // slab rules
    fare(km) {
        if (km > 0 && km <= 5) {
            console.log(`Price: 10/-`);
        }
        else if (km <= 15) {
            console.log(`Price: 25/-`);
        }
        else {
            console.log(`Price: 40/-`);
        }
    }
}

// TODO: demo: mixed transports + km array → loop → log fare
const arr = [new Transport(), new Bus(), new Taxi(), new Metro()];

arr.forEach(p => {
    p.fare(6);
});