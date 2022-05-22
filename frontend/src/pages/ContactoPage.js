import '../styles/components/pages/ContactoPage.css'

const ContactoPage =(props)=>{
    return(
        <main className="holder">
            <div className="columna left">
                <h2>Contacto Rápido</h2>
                <form action="" className="formulario">
                <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre"/>
                </p>
                <p>
                    <label>Email</label>
                    <input type="email"name="email"/>
                </p>
                <p>
                    <label>Teléfono</label>
                    <input type="text" name="telefono"/>
                </p>
                <p>
                    <label>Comentario</label>
                    <textarea name="mensaje" id="comentario" cols="30" rows="10"></textarea>
                </p>
                <p className="acciones"><input type="submit" value="Enviar"/></p>
            </form>
        </div>
        <div className="columna right">
            <h2>Otras Vías de contacto</h2>
            <p>También se pueden comunicar con nostros...</p>
            <ul>
                <li>Teléfono: 4111-1111</li>
                <li>Email:contacto@transportesX.com.ar</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Skype</li>
            </ul>
        </div>

    </main>
    );
}

export default ContactoPage;