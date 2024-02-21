document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data');

    document.getElementById('from-express').addEventListener('click', async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3000/express'); 
        const data = await response.text();
        appendData(data);
    });

    document.getElementById('from-browser').addEventListener('click', async (event) => {
        event.preventDefault();
        const response = await fetch('https://randomuser.me/api/'); 
        const data1 = await response.json();
        const user1 = data1.results[0];
        const { first, last } = user1.name;
        const { phone, email } = user1;
        const data = `Name: ${first} ${last} &nbsp;&nbsp;&nbsp; Number: ${phone} &nbsp;&nbsp;&nbsp; Email: ${email}`;
        appendData(data);
    });

    function appendData(data) {
        const div = document.createElement('div');
        div.innerHTML = data;
        dataContainer.appendChild(div);
    }
});





