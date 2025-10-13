// ## 4️⃣ Build Your Own forEach (Callback Practice)
// **Goal:** Create `applyToEach(arr, cb)` that calls `cb(value, index)` for each item.

function applyToEach(arr, cb) {
  // TODO: Run cb for each element of arr
  for(let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

applyToEach([10, 20, 30], (v, i) => {
  console.log(i, v);
});
