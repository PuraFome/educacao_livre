document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tutorForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const days = [];
        form.querySelectorAll('input[name="days"]:checked').forEach((checkbox) => {
            days.push(checkbox.value);
        });
        data.days = days;

        console.log('Form Data:', data);

        // Aqui você pode adicionar a lógica para enviar os dados para um servidor ou armazená-los localmente
        alert('Cadastro realizado com sucesso!');
        form.reset();
    });
});