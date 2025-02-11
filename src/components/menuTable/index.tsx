import React from 'react';
import { useMenuContext } from '../../context/menuContext';
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import Details from "../modal"

interface MenuTableProps {
    data: Array<{ name: string; price: string; image: { src: string; alt: string } }>;
    onRowClick: (index: number) => void;
    onRowHover: (index: number) => void;
}

const MenuTable: React.FC<MenuTableProps> = React.memo(({ data, onRowClick, onRowHover }) => {
    const { selectedRowIndex } = useMenuContext();

    return (
        <>
        <Table className='h-120'>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow 
                        key={item.name} 
                        onClick={() => {
                            onRowClick(index);
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
                            ${item.price}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

        <Details />
        </>
    );
});

export default MenuTable;