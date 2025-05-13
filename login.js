function verificarLogin() {
    // Credenciais fixas para login 
    const emailCorreto = "teste@email.com";
    const senhaCorreta = "12345";

    // Obtém os valores do formulário
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;

    if (email === emailCorreto && senha === senhaCorreta) {
        // Guardar sessão (opcional)
        localStorage.setItem("logado", "true");

        // Redireciona para a página protegida
        window.location.href = "../app/dashboard.html";
        return false; // Impede o envio do formulário
    } else {
        document.getElementById("errorMessage").textContent = "Credenciais inválidas!";
        return false; // Impede o envio do formulário
    }
}