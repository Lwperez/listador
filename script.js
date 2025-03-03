function importarProducto() {
    let url = document.getElementById('amazon-url').value;
    if (url) {
        alert('Producto importado desde: ' + url);
        document.getElementById('imagen-producto').src = 'https://via.placeholder.com/200';
    } else {
        alert('Por favor, ingresa una URL de Amazon.');
    }
}

function calcularPrecio() {
    let precio = parseFloat(document.getElementById('precio').value) || 0;
    let margen = parseFloat(document.getElementById('margen').value) || 0;
    let precioFinal = precio + (precio * (margen / 100));
    document.getElementById('precio-final').value = precioFinal.toFixed(2);
}

function guardarBorrador() {
    let producto = {
        titulo: document.getElementById('titulo').value,
        descripcion: document.getElementById('descripcion').value,
        precio: document.getElementById('precio').value,
        margen: document.getElementById('margen').value,
        precioFinal: document.getElementById('precio-final').value,
        imagen:document.getElementById('imagen-producto').src = 'https://source.unsplash.com/200x200/?product';
    
    };
    let borradores = JSON.parse(localStorage.getItem('borradores')) || [];
    borradores.push(producto);
    localStorage.setItem('borradores', JSON.stringify(borradores));
    mostrarBorradores();
    alert('Borrador guardado correctamente.');
}

function mostrarBorradores() {
    let borradores = JSON.parse(localStorage.getItem('borradores')) || [];
    let lista = document.getElementById('lista-borradores');
    lista.innerHTML = '';
    borradores.forEach((borrador, index) => {
        let li = document.createElement('li');
        li.textContent = `${borrador.titulo} - $${borrador.precioFinal}`;
        let botonCargar = document.createElement('button');
        botonCargar.textContent = 'Cargar';
        botonCargar.onclick = () => cargarBorrador(index);
        li.appendChild(botonCargar);
        lista.appendChild(li);
    });
}

function cargarBorrador(index) {
    let borradores = JSON.parse(localStorage.getItem('borradores')) || [];
    let producto = borradores[index];
    document.getElementById('titulo').value = producto.titulo;
    document.getElementById('descripcion').value = producto.descripcion;
    document.getElementById('precio').value = producto.precio;
    document.getElementById('margen').value = producto.margen;
    document.getElementById('precio-final').value = producto.precioFinal;
    document.getElementById('imagen-producto').src = producto.imagen;
}

function publicarEnEbay() {
    alert('Producto publicado en eBay.');
}

function cargarImagen() {
    const input = document.getElementById('imagen-input');
    const img = document.getElementById('imagen-producto');
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            img.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function restablecerEdicion() {
    document.getElementById('titulo').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('margen').value = '10';
    document.getElementById('precio-final').value = '';
    document.getElementById('imagen-producto').src = '';
    alert('Edición restablecida.');
}

mostrarBorradores();
