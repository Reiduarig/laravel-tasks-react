import { useCallback } from "react";
//Calcular estos valores podría ser mejor hacerlo en el servidor y pasarlos como props
export function useDateFormatter()
{
    // Formatear una fecha en formato corto (DD/MM/YYYY)
    // Ejemplo: 22/09/2023

    const formatDate = useCallback((dateString: string | null): string => {

        if(!dateString) {
            return '-';
        }

        const date = new Date(dateString);

        return new Intl.DateTimeFormat('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).format(date);

    }, []);

    // Formatear una fecha en formato largo (DD/MM/YYYY HH:mm)
    // Ejemplo: 22/09/2023 14:30

    const formatDateTime = useCallback((dateString: string | null): string => {

        if(!dateString) {
            return '-';
        }

        const date = new Date(dateString);

        return new Intl.DateTimeFormat('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);

    }, []);

    return {
        formatDate,
        formatDateTime,
    };
}
