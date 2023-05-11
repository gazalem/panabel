const myForm = document.querySelector("#myform");
const apiURL = "https://api.convertkit.com/v3/forms/4949448/subscribe";


myForm.addEventListener("submit", (event) => {
    // Evita que el formulario se auto recargue
    // event.preventDefault();

    // busca la data del formulario
    const formData = new URLSearchParams();
    for (const pair of new FormData(myForm)) {
        formData.append(pair[0], pair[1]);
    }

    // add the tag formData for the object
    formData.set("tags", [3709979]);

    // add checkboxes options consolidated
    formData.set("marcas_que_compro", "");
    const myCheckboxes = document.getElementsByName("marcas_que_compro");
    let boughtBrands = [];
    myCheckboxes.forEach(brand => {
        if (brand.checked === true) {
            boughtBrands.push(brand.value);
        }
    })
    formData.set("marcas_que_compro", boughtBrands.toString());
    formData.set("api_key", "IaPbljammDGek6YeDlF9sA");

    // transform
    const data = Object.fromEntries(formData);

    // fetch para enviar formData
    fetch(apiURL, {
        method: "post",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(data)
    })
        .then(console.log("Data Enviada Éxitosamente!"));

});

function unhide() {
    const guerlainElement = document.querySelector("#exclusivoGuerlain");
    const radioGroup = document.getElementsByName("exclusivo_guerlain");
    if (guerlainElement.style.display === "block") {
        guerlainElement.style.display = "none";
        for (let i = 0; i < radioGroup.length; i++) {
            radioGroup[i].checked = false;
        }
    } else {
        guerlainElement.style.display = "block";
    }
}