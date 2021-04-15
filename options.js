// Saves options to chrome.storage
function save() {
  var color = document.getElementById('color').value;
  chrome.storage.sync.set({
    color,
  })
}

document.getElementById('save').addEventListener('click', save);