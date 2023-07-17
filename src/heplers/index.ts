import { NumberSorter, SortData, StringSorter } from "@/interface";

const stringSorter: StringSorter = (a, b, sortOrder) => {
    if (sortOrder === "asc") {
        return a.localeCompare(b);
    } else {
        return b.localeCompare(a);
    }
}

const numberSorter: NumberSorter = (a, b, sortOrder) => {
    if (sortOrder === "asc") {
        return a - b;
    } else {
        return b - a;
    }
}

export const sortData: SortData<Record<string, any>> = (data, sort) => {
    return data?.sort((a, b) => {
        const aValue = a[sort.by];
        const bValue = b[sort.by];
        if (typeof aValue === "string" && typeof bValue === "string") {
            return stringSorter(aValue, bValue, sort.order);
        } else if (typeof aValue === "number" && typeof bValue === "number") {
            return numberSorter(aValue, bValue, sort.order);
        } else {
            return 0;
        }
    });
}
