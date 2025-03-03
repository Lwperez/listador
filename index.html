<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AutoDS Clone</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            text-align: center;
        }
        header {
            background: #007bff;
            color: white;
            padding: 10px 0;
        }
        main {
            width: 80%;
            margin: 20px auto;
            background: white;
            padding: 20px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        section {
            margin-bottom: 20px;
        }
        input, textarea {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
        }
        button {
            background: #28a745;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            margin: 5px;
        }
        button:hover {
            background: #218838;
        }
        #imagen-producto {
            width: 200px;
            height: auto;
            margin-top: 10px;
        }
        #borradores {
            margin-top: 20px;
            text-align: left;
        }
    </style>
</head>
<body>
    <header>
        <h1>AutoDS Clone</h1>
    </header>
    
    <main>
        <section id="importar-producto">
            <h2>Importar Producto de Amazon</h2>
            <input type="text" id="amazon-url" placeholder="Pega aquí el enlace de Amazon">
            <button onclick="importarProducto()">Importar</button>
        </section>
        
        <section id="editor-producto">
            <h2>Editar Producto</h2>
            <label>Título: <input type="text" id="titulo"></label>
            <label>Descripción: <textarea id="descripcion"></textarea></label>
            <label>Precio de Amazon: <input type="number" id="precio" oninput="calcularPrecio()"></label>
            <label>Margen de Ganancia (%): <input type="number" id="margen" value="10" oninput="calcularPrecio()"></label>
            <label>Precio Final: <input type="number" id="precio-final" readonly></label>
            <label>Imagen del Producto: <input type="file" id="imagen-input" accept="image/*" onchange="cargarImagen()"></label>
            <img id="imagen-producto" src="" alt="Imagen del producto">
            <br>
            <button onclick="guardarBorrador()">Guardar Borrador</button>
            <button onclick="publicarEnEbay()">Publicar en eBay</button>
            <button onclick="restablecerEdicion()">Restablecer Cambios</button>
        </section>
        
        <section id="borradores">
            <h2>Borradores Guardados</h2>
            <ul id="lista-borradores"></ul>
        </section>
    </main>
    
    <script>
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
                imagen: document.getElementById('imagen-producto').src
            };
            let borradores = JSON.parse(localStorage.getItem('borradores')) || [];
            borradores.push(producto);
            localStorage.setItem('borradores', JSON.stringify(borradores));
            mostrarBorradores();
            alert('Borrador guardado correctamente.');
        }

        function publicarEnEbay() {
            let producto = {
                titulo: document.getElementById('titulo').value,
                descripcion: document.getElementById('descripcion').value,
                precio: document.getElementById('precio-final').value,
                imagen: document.getElementById('imagen-producto').src
            };
            
            fetch('https://api.ebay.com/publicar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(producto)
            })
            .then(response => response.json())
            .then(data => {
                alert('Producto publicado en eBay con éxito.');
            })
            .catch(error => {
                alert('Error al publicar en eBay: ' + error);
            });
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
        
        mostrarBorradores();
    </script>
</body>
</html>
