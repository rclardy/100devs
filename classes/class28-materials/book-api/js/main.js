document.getElementById('submit').addEventListener('click', goFetch);

function goFetch() {
  const choice = document.getElementById('value').value;
  console.log(choice);
  const url = `https://openlibrary.org/isbn/${choice}.json`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.title);
    });
}
