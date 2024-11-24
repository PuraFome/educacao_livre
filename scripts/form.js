function initializeForm() {
    const form = document.getElementById('tutorForm');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Captura os dias da semana selecionados
            const days = [];
            form.querySelectorAll('input[name="days"]:checked').forEach((checkbox) => {
                days.push(checkbox.value);
            });
            data.days = days;

            // Salva os dados no localStorage
            let tutors = JSON.parse(localStorage.getItem('tutors')) || [];
            tutors.push(data);
            localStorage.setItem('tutors', JSON.stringify(tutors));

            console.log('Dados salvos:', tutors); // Adicione um console.log para verificar os dados salvos

            alert('Cadastro realizado com sucesso!');
            form.reset();
        });
    } 
};