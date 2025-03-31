<?php

namespace App\Http\Controllers;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

/**
 *  El controlador extiende de la clase base de Laravel \Illuminate\Routing\Controller que proporciona funcionalidades comunes para los controladores.
 *  Se puede agregar lógica común a todos los controladores en esta clase base a nivel de aplicación.
 *  Esto permite evitar la duplicación de código y mantener una estructura organizada.
 *  Por ejemplo, se pueden definir métodos de utilidad, middleware, etc.
 *  En este caso, se está utilizando el trait AuthorizesRequests para manejar la autorización de las solicitudes. Nos permite interactuar con las politicas de autorización (acceso) de Laravel.
 *  El trait AuthorizesRequests proporciona métodos para verificar si el usuario tiene permiso para realizar una acción específica.
 *  Esto es útil para proteger las rutas y asegurarse de que solo los usuarios autorizados puedan acceder a ciertas funcionalidades.
 */
abstract class Controller extends \Illuminate\Routing\Controller
{
    use AuthorizesRequests;
}
