import { usePaginationProps } from '@/interface';
import { useState, useEffect } from 'react';


const usePagination = ({ data, itemsPerPage }: usePaginationProps) => {
    const [paginatedData, setPaginatedData] = useState<Record<string, any>[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        paginateData();
    }, [data, currentPage, itemsPerPage]);

    const paginateData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedData = data.slice(startIndex, endIndex);
        setPaginatedData(slicedData);
    };

    return {
        paginateData,
        paginatedData,
        setPaginatedData,
        currentPage,
        setCurrentPage,
        totalPage: Math.ceil(data.length / itemsPerPage)
    };
};

export default usePagination;