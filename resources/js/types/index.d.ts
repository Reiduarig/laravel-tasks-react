import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    flash: {
        success?: string;
        error?: string;
        warning?: string;
        info?: string;
    };
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Task {
    id: number;
    user_id: number;
    title: string;
    description: string | null;
    due_date: string | null;
    completed: boolean;
    created_at: string;
    updated_at: string;
    user?: User;
}

export interface PaginationPageLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Pagination<T> {
    current_page: number;
    data: T[];      // Array de dados genéricos, puede ser cualquier tipo
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationPageLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}

export type PaginatedTask = Pagination<Task>;
