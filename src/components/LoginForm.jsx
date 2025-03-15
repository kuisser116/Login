import 'react';


function LoginForm() {
 
    return (
        <div>
            <form>
                <h2 style={{color: 'black'}}>Iniciar Sesión</h2>
                <p style={{color: 'green'}}></p>
                <input type="email" placeholder='Correo electrónico' />
                <p style={{color: 'red'}}></p>
                <input type="password" placeholder='Contraseña' />
                <p style={{color: 'red'}}></p>
                <button type="button">Volver al Registro</button>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default LoginForm;