(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
    })
    .catch((err) => {
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}:${message}`;
    })
    .finally(() =>
      console.log("Esto se ejecutara independientemente de la promesa Fetch")
    );
})();
