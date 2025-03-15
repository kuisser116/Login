import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginForm from './LoginForm';

function RegisterForm() {
    const [showLogin, setShowLogin] = useState(false);
    const [formData, setFormData] = useState(null);

    const registerSchema = yup.object().shape({
        firstName: yup.string().required('Nombre es requerido'),
        lastName: yup.string().required('Apellido es requerido'),
        phone: yup.string().matches(/^\d{10}$/, 'El teléfono debe tener 10 dígitos').required('Teléfono es requerido'),
        email: yup.string().email('Email inválido').required('Email es requerido'),
        age: yup.number().transform(value => (value === "" ? undefined : value)).typeError('Debe ser un número válido').integer('Debe ser un número entero').min(18, 'Debes ser mayor de 18 años').required('Edad es requerida'),
        password: yup.string().min(4, 'Mínimo 4 caracteres').max(10, 'Máximo 10 caracteres').required('Contraseña es requerida'),
        conPassword: yup.string().oneOf([yup.ref('password')], 'Las contraseñas no coinciden').required('Confirmar contraseña es obligatorio')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema),
        defaultValues: { 
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            age: '',
            password: '',
            conPassword: ''
        }
    });

    function onSubmit(data) {
        setFormData(data);
        setShowLogin(true);
    }

    if (!showLogin) {
        return (
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 style={{color: 'black'}}>Registro de Usuario</h2>
                    <input type="text" placeholder='Nombre' {...register("firstName")} />
                    <p style={{color: 'red'}}>{errors.firstName?.message}</p>
                    <input type="text" placeholder='Apellido' {...register("lastName")} />
                    <p style={{color: 'red'}}>{errors.lastName?.message}</p>
                    <input type="tel" placeholder='Teléfono (10 dígitos)' {...register("phone")} />
                    <p style={{color: 'red'}}>{errors.phone?.message}</p>
                    <input type="email" placeholder='Correo electrónico' {...register("email")} />
                    <p style={{color: 'red'}}>{errors.email?.message}</p>
                    <input type="number" placeholder='Edad' {...register("age")} />
                    <p style={{color: 'red'}}>{errors.age?.message}</p>
                    <input type="password" placeholder='Contraseña' {...register("password")} />
                    <p style={{color: 'red'}}>{errors.password?.message}</p>
                    <input type="password" placeholder='Confirmar contraseña' {...register("conPassword")} />
                    <p style={{color: 'red'}}>{errors.conPassword?.message}</p>
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        );
    } else {
        return (
            <LoginForm 
                formData={formData} 
                setShowLogin={setShowLogin} 
            />
        );
    }
}

export default RegisterForm;