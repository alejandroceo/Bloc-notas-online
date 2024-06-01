function saveText() {
    var text = document.getElementById('editor').value;

    var blob = new Blob([text], { type: 'text/plain' });
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);

    var fileName = prompt("Por favor, ingrese el nombre del archivo:", "archivo.txt");
    if (!fileName) return;

    if (!fileName.endsWith('.txt')) {
        fileName += '.txt'; // Asegurar que el archivo tenga la extensión .txt
    }

    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(a.href);
    alert('Archivo guardado correctamente.');
}

function loadText() {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'text/plain';

    fileInput.onchange = function(event) {
        var file = event.target.files[0];
        if (!file) return;

        var reader = new FileReader();
        reader.onload = function() {
            document.getElementById('editor').value = reader.result;
            alert('Archivo cargado correctamente.');
        };
        reader.readAsText(file);
    };

    fileInput.click();
}
