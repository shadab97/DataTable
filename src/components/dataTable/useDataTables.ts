import { sortData } from '@/heplers';
import { SortState, TypeDataTable } from '@/interface';
import React, { useEffect, useState } from 'react'
import usePagination from '../pagination/usePagination';

const useDataTables = ({ rows }: Pick<TypeDataTable, "rows">) => {
    const { paginatedData, currentPage, setCurrentPage, } = usePagination({ data: rows, itemsPerPage: 10 });
    const [data, setData] = useState<Record<string, any>[]>(paginatedData);

    const [sort, setSort] = useState<SortState>({
        by: undefined,
        order: undefined
    });

    const handleHeaderClick = (key: string) => {
        setSort((prev) => ({
            by: key,
            order: prev.order === "asc" ? "desc" : "asc"
        }));
        setData(
            sortData(data, {
                by: key,
                order: sort.order === "asc" ? "desc" : "asc"
            })
        );
    };

    const showSortIcon = (key: string) => {
        if (sort.by === key && sort.order === "asc") {
            return "▲";
        }
        if (sort.by === key && sort.order === "desc") {
            return "▼";
        }
    };
    useEffect(() => {
        setData(paginatedData)
    }, [paginatedData])
    return {
        data,
        sort,
        showSortIcon,
        handleHeaderClick,
        currentPage,
        setCurrentPage,

    }
}

export default useDataTables