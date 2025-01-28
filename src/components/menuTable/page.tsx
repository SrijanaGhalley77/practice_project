// MenuTable.tsx
import React from 'react';
import {menuItems} from '../../context/menuData/MenuData';
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
} from "@/components/ui/table";

interface MenuTableProps {
    onRowClick: (index: number) => void;
}

const MenuTable: React.FC<MenuTableProps> = ({ onRowClick }) => {
    return (
        <Table>
            <TableBody>
                {menuItems.map((item, index) => (
                    <TableRow key={item.name} onClick={() => onRowClick(index)}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell className="text-right">{item.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default MenuTable;