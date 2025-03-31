<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Task;

class TaskPolicy
{
    public function viewAny(): bool
    {
        return true; //queremos que cualquiera pueda ver el listado de tareas
    }

    public function view(User $user, Task $task): bool
    {
        return $user->id === $task->user_id; //solo el usuario que creo la tarea puede verla
    }

    public function create(User $user): bool
    {
        return true; //cualquiera puede ver el formulario de crear tarea
    }

    public function update(User $user, Task $task): bool
    {
        return $user->id === $task->user_id; //solo el usuario que creo la tarea puede editarla
    }

    public function delete(User $user, Task $task): bool
    {
        return $user->id === $task->user_id; //solo el usuario que creo la tarea puede eliminarla
    }
}
