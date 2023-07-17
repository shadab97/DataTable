'use client'
import { TypeDataTable } from '@/interface';
import React from 'react'
import useDataTables from './useDataTables';


const DataTable = ({ caption, headers, rows }: TypeDataTable) => {
    const { data, sort, showSortIcon, handleHeaderClick, setCurrentPage
        , currentPage
    } = useDataTables({ rows })
    return (

        <table className="rounded-lg w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className='rounded-lg text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    {headers?.map((each) => (
                        <th scope="col" className=' px-6 py-3 cursor-pointer' key={each.key} onClick={() => handleHeaderClick(each.key)}>
                            {each.label}
                            <sup>{showSortIcon(each.key)}</sup>
                        </th>
                    ))}
                </tr>

            </thead>
            <tbody>
                {data?.map((each: Record<string, any>) => {
                    return (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-50 hover:text-black " key={Object.values(each).join(",")}>
                            {headers.map((h) => (
                                <td
                                    className="px-6 py-4"
                                    key={h.key}
                                    onClick={() =>
                                        h.onClick ? h.onClick(h.key, each) : undefined
                                    }
                                >
                                    {h.renderer ? h.renderer(h.key, each) : each[h.key]}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>

            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                {caption}
            </caption>

            <div className="flex items-center justify-between pt-4" aria-label="Table navigation">
                <ul className="inline-flex -space-x-px text-sm h-8">
                    <li >
                        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                    </li>

                    <li>
                        <button disabled={currentPage >= data.length} onClick={() => setCurrentPage(currentPage + 1)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                    </li>
                </ul>
            </div >
        </table>
    )
}

export default DataTable