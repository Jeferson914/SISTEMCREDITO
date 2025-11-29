# 💳 SistemCredito — Simulador y Solicitud de Créditos

SistemCredito es una aplicación web desarrollada en **React + Tailwind CSS**, que permite a los usuarios:

- Consultar diferentes tipos de créditos.
- Filtrar y ordenar productos financieros.
- Simular cuotas mensuales según monto, tasa e interés.
- Diligenciar un formulario funcional de solicitud.
- Validar datos en tiempo real.
- Visualizar un resumen automático antes de enviar la información.

Este proyecto fue desarrollado como actividad académica.

---

## 🚀 Tecnologías utilizadas

- **React 18**
- **React Router DOM**
- **Tailwind CSS**
- **JavaScript**
- **Vite** (opcional según configuración)

---

## 📂 Funcionalidades principales

### 🔍 Simulador de Crédito
- Búsqueda por nombre de crédito.
- Filtro por rangos de monto.
- Orden por tasa de interés (menor a mayor / mayor a menor).
- Tarjetas dinámicas con información del producto.
- Navegación a una página para simular cada producto.

### 🧮 Formulario de Simulación
- Captura de datos personales y financieros con `useState`.
- Validaciones en tiempo real.
- Cálculo automático de cuota mensual usando el sistema francés.
- Resumen dinámico con:
  - Cuota mensual estimada
  - Tasa aplicada
  - Plazo seleccionado
- Mensaje de éxito al enviar la solicitud.
- Limpieza automática del formulario.
- Solicitudes almacenadas temporalmente en memoria.

### 📄 Página de Solicitud General
- Formulario independiente.
- Campos básicos: nombre, cedula, correo, monto, plazo, ingresos.
- Validaciones básicas.
- Simulación previa a enviar.

### 🦶 Footer
- Navegación rápida.
- Enlaces internos con React Router.
- Información de contacto.
- Diseño limpio y responsivo.

---

## 📦 Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/sistemcredito.git
