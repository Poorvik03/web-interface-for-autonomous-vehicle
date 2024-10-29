function login(event) {
    event.preventDefault(); // Prevent form submission

    const role = document.getElementById("role").value;
    if (role) {
        window.location.href = `dashboard.html?role=${role}`;
    }
}
