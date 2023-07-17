import { useState, useEffect } from 'react';

type usePaginationProps = {
    data: Record<string, any>[],
    itemsPerPage: number
}
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
        paginatedData,
        setPaginatedData,
        currentPage,
        setCurrentPage,
    };
};

export default usePagination;