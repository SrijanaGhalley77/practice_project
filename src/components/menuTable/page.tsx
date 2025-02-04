'use client';
import React from 'react';
import { useMenuContext } from '../../context/menuContext/page';
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { useRouter } from 'next/navigation';

interface MenuTableProps {
    data: Array<{ name: string; price: string; image: { src: string; alt: string } }>;
    onRowClick: (index: number) => void;
    onRowHover: (index: number) => void;
}

const MenuTable: React.FC<MenuTableProps> = React.memo(({ data, onRowClick, onRowHover }) => {
    const { selectedRowIndex } = useMenuContext();
    const router = useRouter();

    const handleRowClick = (item: { name: string; price: string }) => {
        // Navigate to the PopoverPage with item details as query parameters
        router.push(`/modal/page?name=${encodeURIComponent(item.name)}&price=${encodeURIComponent(item.price)}`);
    };

    return (
        <Table className='h-120'>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow 
                        key={item.name} 
                        onClick={() => {
                            onRowClick(index);
                            handleRowClick(item); // Handle row click
                        }} 
                        onMouseEnter={() => onRowHover(index)} 
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
                            {item.price}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
});

export default MenuTable;