const result = document.querySelector(".result");

async function render() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.json();
    result.textContent = data.name;
  } catch (error) {
    console.log(error);
  }
}

render();