let users = [];

function toggleForm(formId) {
  document.getElementById('loginForm').classList.toggle('hidden');
  document.getElementById('registerForm').classList.toggle('hidden');
}

function register() {
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  const role = document.getElementById('registerRole').value;

  if (username && password && role) {
    if (users.some(user => user.username === username)) {
      document.getElementById('registerMessage').textContent = "Username already exists!";
    } else {
      users.push({ username, password, role });
      document.getElementById('registerMessage').textContent = "Registration successful!";
      setTimeout(() => toggleForm('loginForm'), 1000);
    }
  } else {
    document.getElementById('registerMessage').textContent = "Please fill all fields!";
  }
}

function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const role = document.getElementById('loginRole').value;

  const user = users.find(user => user.username === username && user.password === password && user.role === role);

  if (user) {
    alert(`Welcome, ${user.role}! Redirecting to the dashboard...`);
    window.location.href = `dashboard.html?role=${role}`;
  } else {
    document.getElementById('loginMessage').textContent = "Login failed! Incorrect credentials.";
  }
}
