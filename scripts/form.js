const initializeForm = () => {
    const form = document.getElementById('tutorForm');

    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        data.days = Array.from(form.querySelectorAll('input[name="days"]:checked')).map(checkbox => checkbox.value);

        saveTutorData(data);
        alert('Cadastro realizado com sucesso!');
        form.reset();
    });
};

const saveTutorData = (data) => {
    let tutors = JSON.parse(localStorage.getItem('tutors')) || [];
    tutors.push(data);
    localStorage.setItem('tutors', JSON.stringify(tutors));
};