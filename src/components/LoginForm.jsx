import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function LoginForm({ formData, setShowLogin }) {
    const [loginMessage, setLoginMessage] = useState('');

    const loginSchema = yup.object().shape({
        loginEmail: yup.string().email('Email inválido').required('Email es requerido'),
        loginPassword: yup.string().required('Contraseña es requerida')
    });

    const { register: registerLogin, handleSubmit: handleSubmitLogin, formState: { errors: loginErrors } } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: { 
            loginEmail: '',
            loginPassword: ''
        }
    });

    function onLoginSubmit(data) {
        if (formData && data.loginEmail === formData.email && data.loginPassword === formData.password) {
            setLoginMessage('¡Login exitoso! Bienvenido ' + formData.firstName);
        } else {
            setLoginMessage('Credenciales incorrectas. Intenta de nuevo.');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmitLogin(onLoginSubmit)}>
                <h2 style={{color: 'black'}}>Iniciar Sesión</h2>
                {loginMessage && <p style={{color: 'green'}}> {loginMessage}</p>}
                <input type="email" placeholder='Correo electrónico' {...registerLogin("loginEmail")} />
                <p style={{color: 'red'}}>{loginErrors.loginEmail?.message}</p>
                <input type="password" placeholder='Contraseña' {...registerLogin("loginPassword")} />
                <p style={{color: 'red'}}>{loginErrors.loginPassword?.message}</p>
                <button type="button" onClick={() => setShowLogin(false)}>Volver al Registro</button>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default LoginForm;