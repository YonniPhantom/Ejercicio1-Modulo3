function mifuncion(pila, numero) {
    return pila.slice(0, numero);
}

function extractElements() {
    const stackInput = document.getElementById('stack').value;
    const numberInput = parseInt(document.getElementById('number').value);
    const stackArray = stackInput.split(',').map(item => item.trim());
    
    if (!isNaN(numberInput) && Array.isArray(stackArray)) {
        const result = mifuncion(stackArray, numberInput);
        document.getElementById('output').innerText = JSON.stringify(result);
    } else {
        document.getElementById('output').innerText = 'Ingrese una pila válida y un número válido.';
    }
}

function reemplazar(pila, nuevo, viejo) {
    const index = pila.indexOf(viejo);
    if (index !== -1) {
        pila[index] = nuevo;
    }
    return pila;
}



function replaceElement() {
    const stackInput = document.getElementById('stack-replace').value;
    const newValue = parseInt(document.getElementById('new-value').value);
    const oldValue = parseInt(document.getElementById('old-value').value);
    const stackArray = stackInput.split(',').map(item => parseInt(item.trim()));
    
    if (!isNaN(newValue) && !isNaN(oldValue) && Array.isArray(stackArray)) {
        const result = reemplazar(stackArray, newValue, oldValue);
        document.getElementById('output-replace').innerText = JSON.stringify(result);
    } else {
        document.getElementById('output-replace').innerText = 'Ingrese una pila válida y valores numéricos válidos.';
    }
}

function showRoutes() {
    const townsInput = document.getElementById('towns').value;
    const townsArray = townsInput.split(',').map(item => item.trim());
    
    if (townsArray.length < 2) {
        document.getElementById('output-routes').innerText = 'Debe ingresar al menos dos pueblos.';
        return;
    }
    
    const ida = ['Recorrido: ' + townsArray.join(' → ')];
    const vuelta = ['Regreso: ' + townsArray.slice().reverse().join(' → ')];
    
    document.getElementById('output-routes').innerHTML = `<p>${ida.join('<br>')}</p><p>${vuelta.join('<br>')}</p>`;
}

function removeContainer() {
    const containersInput = document.getElementById('containers').value;
    const containerToRemove = parseInt(document.getElementById('remove').value);
    const containersArray = containersInput.split(',').map(item => parseInt(item.trim()));
    
    if (isNaN(containerToRemove) || !containersArray.includes(containerToRemove)) {
        document.getElementById('output-containers').innerText = 'Ingrese un número de identificación válido.';
        return;
    }
    
    const removed = [];
    let removedIndex = containersArray.indexOf(containerToRemove);
    
    while (removedIndex !== -1) {
        removed.push(containersArray.splice(removedIndex, 1)[0]);
        removedIndex = containersArray.indexOf(containerToRemove);
    }
    
    document.getElementById('output-containers').innerText = 'Contenedores retirados: ' + removed.join(', ');
    document.getElementById('output-containers').innerText += '\nPila actual de contenedores: ' + containersArray.join(', ');
}
