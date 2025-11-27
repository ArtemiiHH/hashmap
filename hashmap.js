// Hash Map Class
class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.size = 0;
    this.buckets = new Array(this.capacity);
  }
}

// Method
// function hash(key) {
//   let hashCode = 0;

//   const primeNumber = 31;
//   for (let i = 0; i < key.length; i++) {
//     hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % hashMap;
//   }

//   return hashCode;
// }

// function set(key, value) {
//   hash(key);


// }

// function get(key) {
//   key = key.value;

//   if (key === null) {
//     return null;
//   } else {
//     return key;
//   }
// }

// function has(key) {}

// function remove(key) {}

// function length() {}

// function clear() {}

// function keys() {}

// function values() {}

// function entries() {}
