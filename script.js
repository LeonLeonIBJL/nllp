document.addEventListener("DOMContentLoaded", () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBWjkLrXaY0Ml38eTU0AjwWWXYXekQQCdE",
        authDomain: "newlottery-e3d80.firebaseapp.com",
        projectId: "newlottery-e3d80",
        storageBucket: "newlottery-e3d80.appspot.com",
        messagingSenderId: "561097167014",
        appId: "1:561097167014:web:733465a4b1bbf077552467",
        measurementId: "G-8QSTCQTZCX"
    };

    // Inicialização do Firebase App
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    const userForm = document.getElementById('userForm');
    const successMessage = document.getElementById('successMessage');

    userForm.addEventListener('submit', async (e) => {

        e.preventDefault();

        const userData = {
            name: userForm.name.value,
            email: userForm.email.value,
            phone: userForm.phone.value,
            state: userForm.state.value,
            city: userForm.city.value
        };

        try {
            await db.collection('landingData').add(userData);
            userForm.style.display = 'none';
            successMessage.style.display = 'block';
        } catch (error) {
            console.error('Erro ao enviar dados: ', error);
        }
    });
});
