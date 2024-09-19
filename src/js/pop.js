// src/js/popup.js

document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const formatSelect = document.getElementById('formatSelect');
    const output = document.getElementById('output');
    const downloadLink = document.getElementById('downloadLink');

    if (fileInput.files.length === 0) {
        alert('Por favor, selecione um arquivo.');
        return;
    }

    const file = fileInput.files[0];
    const outputFormat = formatSelect.value;

    // Simulação de conversão de arquivo
    setTimeout(() => {
        output.classList.remove('hidden');
        downloadLink.href = URL.createObjectURL(file); // Simula um link de download
        downloadLink.download = `arquivo_convertido.${outputFormat}`;
    }, 2000); // Simulando um tempo de processamento
});
