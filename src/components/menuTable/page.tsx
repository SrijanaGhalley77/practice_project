'use client';
import React from 'react';
import { useMenuContext } from '../../context/menuContext/page'; // Ensure correct import
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
} from "@/components/ui/table";

interface MenuTableProps {
    data: Array<{ name: string; totalAmount: string; image: { src: string; alt: string } }>;
    onRowClick: (index: number) => void; // Receive the onRowClick function as a prop
}

const MenuTable: React.FC<MenuTableProps> = React.memo(({ data, onRowClick }) => {
    const { selectedRowIndex } = useMenuContext(); // Use context

    return (
        <Table className='h-120'>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow 
                        key={item.name} 
                        onClick={() => onRowClick(index)} // Use the function passed as a prop
                        role="row"
                        className={`cursor-pointer ${selectedRowIndex === index ? 'bg-secondary-50 transition duration-200' : ''}`}
                    >
                        <TableCell
                            className={`font-2xl ${selectedRowIndex === index ? 'underline' : ''}`}
                            role="cell"
                        >
                            {item.name}
                        </TableCell>
                        <TableCell className="text-right" role="cell">
                            {item.totalAmount}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
});

export default MenuTable;
