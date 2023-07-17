import { ReactNode } from "react";

export type headObject = {
    label: string;
    key: string;
    onClick?: (key: string, row: Record<string, any>) => void;
    renderer?: (key: string, row: Record<string, any>) => ReactNode;
};
export type TypeDataTable = {
    caption: string;
    headers: Array<headObject>;
    rows: Array<object>;
    showSearch?: boolean
};
export type StringSorter = (a: string, b: string, sortOrder: "asc" | "desc") => number;
export type NumberSorter = (a: number, b: number, sortOrder: "asc" | "desc") => number;
export type SortData<T> = (
    data: T[],
    sort: { by: keyof T; order: "asc" | "desc" },
) => T[];
export interface SortState {
    by: string | undefined;
    order: "asc" | "desc" | undefined;
}
export type usePaginationProps = {
    data: Record<string, any>[],
    itemsPerPage: number
}