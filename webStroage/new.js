let storage = localStorage;

function storageAccess(accessId) {
  let key = document.getElementById("keyText").value;
  let value = document.getElementById("valueText").value;

  switch (accessId) {
    case 1:
      storage.setItem(key, value);
      break;
    case 2:
      let item = storage.getItem(key);
      alert(item);
      break;
    case 3:
      storage.removeItem(key);
      break;
    case 4:
      storage.clear();
      break;
  }
}
