import { Head, Link } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CheckIcon, ClipboardListIcon, ClockIcon } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { useDateFormatter } from '@/hooks/use-date-formatter';
import { type BreadcrumbItem, type Task } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
];


//Definir el tipo de las propiedades que se pasan al componente Dashboard
interface DashboardProps
{
    tasksStats: {
        total: number;
        completed: number;
        pending: number;
        upcoming: Task[];
    };

    completionRate: number;
}

//Definir el componente Dashboard que recibe las propiedades definidas anteriormente
export default function Dashboard({tasksStats, completionRate}: DashboardProps) {

    const { formatDate } = useDateFormatter();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className='h-full flex-1 flex-col gap-4 p-4'>
                <h1 className='text-2xl font-bold tracking-tight mb-4'>Dashboard</h1>

                {/* Estadísticas de Tareas */}
                <div className='grid gap-4 md:grid-cols-3'>
                    <Card>
                        <CardHeader className='flex flex-row items-center justify-between pb-2'>
                            <CardTitle className='text-sm font-medium'>Tareas Totales</CardTitle>
                            <ClipboardListIcon className='h-4 w-4 text-muted-foreground' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold'>
                                {tasksStats.total}
                            </div>
                            <p className='text-xs text-muted-foreground'>
                                Tareas Creadas
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className='flex flex-row items-center justify-between pb-2'>
                            <CardTitle className='text-sm font-medium'>Completadas</CardTitle>
                            <CheckIcon className='h-4 w-4 text-muted-foreground' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold'>
                                {tasksStats.completed}
                            </div>
                            <p className='text-xs text-muted-foreground'>
                                Tareas Finalizadas
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className='flex flex-row items-center justify-between pb-2'>
                            <CardTitle className='text-sm font-medium'>Pendientes</CardTitle>
                            <ClockIcon className='h-4 w-4 text-muted-foreground' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold'>
                                {tasksStats.pending}
                            </div>
                            <p className='text-xs text-muted-foreground'>
                                Tareas Pendientes
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Progress Bar */}
                <Card className='mt-4'>
                    <CardHeader>
                        <CardTitle>Progreso de Tareas</CardTitle>
                        <CardDescription>Porcentaje de tareas completadas</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='flex items-center justify-between mb-2'>
                            <span className='text-sm font-medium'>Completado:</span>
                            <span className='text-sm font-medium'>{completionRate}%</span>
                        </div>
                        <Progress value={completionRate} className='h-2' />
                    </CardContent>
                </Card>

                {/* Próximas Tareas */}
                <Card className='mt-4'>
                    <CardHeader>
                        <CardTitle>Tareas Próximas</CardTitle>
                        <CardDescription>Tareas con fecha próxima a completar</CardDescription>
                    </CardHeader>
                    <CardContent>
                        { tasksStats.upcoming.length === 0 ? (
                            <div className='text-center py-4 text-muted-foreground'>
                                No hay tareas pendientes.
                            </div>
                        ) : (
                            <div className='space-y4'>
                                {tasksStats.upcoming.map((task) => (
                                    <div
                                        key={task.id}
                                        className='flex items-start justify-between pb-3 border-b'
                                    >
                                        <div>
                                            <h3 className='font-medium'>{task.title}</h3>
                                            {task.due_date && (
                                                <p className='text-sm text-muted-foreground'>
                                                    Fecha de vencimiento: {formatDate(task.due_date)}
                                                </p>
                                            )}
                                        </div>
                                        <Button size="sm" variant="outline" asChild>
                                            <Link href={route('tasks.show', { task: task.id })}>
                                                Ver Tarea
                                            </Link>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}

                    </CardContent>
                </Card>

                <div className='mt-4 flex justify-end'>
                    <Button asChild>
                        <Link href={route('tasks.index')}>
                            Ver Todas las Tareas
                        </Link>
                    </Button>
                </div>
            </div>
        </AppLayout>
    );
}
