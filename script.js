const form = document.getElementById("orderForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const food = document.getElementById("food").value;

    alert(
        "Thank you, " + name +
        "! Your order for " + food +
        " has been received."
    );

    form.reset();
});