// Factory function
function hashMap() {
  let loadFactor = 0.75;
  let capacity = 16;

  return { loadFactor, capacity };
}

// Method
function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
  }

  return hashCode;
}

function set(key, value) {}

function get(key) {}

function has(key) {}

function remove(key) {}

function length() {}

function clear() {}

function keys() {}

function values() {}

function entries() {}
