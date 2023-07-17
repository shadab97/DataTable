import { sortData } from '@/heplers';
import { SortState, TypeDataTable } from '@/interface';
import React, { useEffect, useState } from 'react'
import usePagination from '../pagination/usePagination';

const useDataTables = ({ rows }: Pick<TypeDataTable, "rows">) => {
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [data, setData] = useState<Record<string, any>[]>(rows);
    const { paginatedData, totalPage, currentPage, setCurrentPage } = usePagination({ data: data, itemsPerPage: 10 });

    const [sort, setSort] = useState<SortState>({
        by: undefined,
        order: undefined
    });

    const handleHeaderClick = (key: string) => {
        setSort((prev) => ({
            by: key,
            order: prev.order === "asc" ? "desc" : "asc"
        }));
        setCurrentPage(1)
        setData(
            sortData(paginatedData, {
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

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        filterData(query);
    };

    const filterData = (query: string) => {
        const filteredData = rows.filter((row) =>
            Object.values(row).some((value) =>
                value.toString().toLowerCase().includes(query.toLowerCase())
            )
        );
        setData(filteredData);

    };

    return {
        data: paginatedData,
        sort,
        showSortIcon,
        handleHeaderClick,
        handleSearch,
        currentPage,
        setCurrentPage,
        totalPage
    }
}

export default useDataTables