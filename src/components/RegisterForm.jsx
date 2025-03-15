import React from "react";

export default function RegisterForm() {
  return (
    <div>
      <form>
        <h2 style={{ color: 'black' }}>Registro de Usuario</h2>
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        <input type="tel" placeholder='Teléfono (10 dígitos)' />
        <input type="email" placeholder='Correo electrónico' />
        <input type="number" placeholder='Edad' />
        <input type="password" placeholder='Contraseña' />
        <input type="password" placeholder='Confirmar contraseña' />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}