// Passar de aba no perfil 
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});
// Verifica se o utilizador está autenticado
if (localStorage.getItem("logado") !== "true") {
    alert("Acesso negado! Faça login primeiro.");
    window.location.href = "../index.html";
}
function logout() {
    localStorage.removeItem("logado");
    window.location.href = "../index.html";
}


