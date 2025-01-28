'use client';
import React, { useState } from 'react';
import { menuItems } from '../../context/menuData/MenuData';
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
} from "@/components/ui/table";


interface MenuTableProps {
    onRowClick: (index: number) => void;
}

const MenuTable: React.FC<MenuTableProps> = React.memo(({ onRowClick }) => {
    const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(0);

    const handleRowClick = (index: number) => {
        setSelectedRowIndex(index);
        onRowClick(index);
    };

    return (
        <Table className='h-120'>
            <TableBody>
                {menuItems.map((item, index) => (
                    <TableRow key={item.name} onClick={() => handleRowClick(index)} role="row">
                        <TableCell 
                            className={`font-2xl ${selectedRowIndex === index ? 'underline transition duration-200' : ''}`} 
                            role="cell"
                        >
                            {item.name}
                        </TableCell>
                        <TableCell className="text-right" role="cell">{item.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
});

export default MenuTable;