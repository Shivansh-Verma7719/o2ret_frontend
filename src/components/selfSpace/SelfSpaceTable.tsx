import React, { useState } from 'react';
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table';
import { FaPlus, FaTrash, FaFileExport, FaFilter } from 'react-icons/fa';
import { CSVLink } from 'react-csv';
import DatePicker from 'react-datepicker'; // Import date picker library
import 'react-datepicker/dist/react-datepicker.css'; // Import date picker styles
import '../selfSpace/selfSpace.css';

interface Product {
  serialNo: number;
  startDate: Date; // Change startDate and endDate types to Date
  endDate: Date;
  productName: string;
  quantity: number;
  unitPrice: number;
}

const initialData: Product[] = [
  {
    serialNo: 1,
    startDate: new Date(),
    endDate: new Date(),
    productName: 'Product 1',
    quantity: 10,
    unitPrice: 100,
  },
  {
    serialNo: 2,
    startDate: new Date(),
    endDate: new Date(),
    productName: 'Product 2',
    quantity: 20,
    unitPrice: 200,
  },
  {
    serialNo: 3,
    startDate: new Date(),
    endDate: new Date(),
    productName: 'Product 3',
    quantity: 30,
    unitPrice: 300,
  },
];

const columnHelper = createColumnHelper<Product>();

const SelfSpaceTable: React.FC = () => {
  const [data, setData] = useState<Product[]>(initialData);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [editingCell, setEditingCell] = useState<{ serialNo: number; field: keyof Product } | null>(null);
  const [editingValue, setEditingValue] = useState<string | number | Date | null>(null);

  const handleAddNew = () => {
    const newProduct: Product = {
      serialNo: data.length + 1,
      startDate: new Date(),
      endDate: new Date(),
      productName: 'New Product',
      quantity: 0,
      unitPrice: 0,
    };
    setData([...data, newProduct]);
  };

  const handleDelete = () => {
    const updatedData = data.filter(product => !selectedRows.includes(product.serialNo));
    const renumberedData = updatedData.map((product, index) => ({
      ...product,
      serialNo: index + 1,
    }));
    setData(renumberedData);
    setSelectedRows([]);
  };

  const handleRowSelect = (serialNo: number) => {
    setSelectedRows(prev =>
      prev.includes(serialNo) ? prev.filter(id => id !== serialNo) : [...prev, serialNo]
    );
  };

  const handleCellEdit = (serialNo: number, field: keyof Product, value: string | number | Date) => {
    const updatedData = data.map(product =>
      product.serialNo === serialNo ? { ...product, [field]: value } : product
    );
    setData(updatedData);
  };

  const handleStartDateChange = (serialNo: number, date: Date | null) => {
    if (date !== null) {
      handleCellEdit(serialNo, 'startDate', date);
    }
  };

  const handleEndDateChange = (serialNo: number, date: Date | null) => {
    if (date !== null) {
      handleCellEdit(serialNo, 'endDate', date);
    }
  };

  const handleCellClick = (serialNo: number, field: keyof Product, currentValue: string | number | Date) => {
    setEditingCell({ serialNo, field });
    setEditingValue(currentValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingValue(e.target.value);
  };

  const handleInputBlur = () => {
    if (editingCell && editingValue !== null) {
      handleCellEdit(editingCell.serialNo, editingCell.field, editingValue);
    }
    setEditingCell(null);
    setEditingValue(null);
  };

  const columns = [
    columnHelper.display({
      id: 'select',
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={selectedRows.includes(row.original.serialNo)}
          onChange={() => handleRowSelect(row.original.serialNo)}
        />
      ),
    }),
    columnHelper.accessor('serialNo', {
      header: 'S. No',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('startDate', {
      header: 'Start Date',
      cell: info => (
        <DatePicker
          selected={info.getValue()}
          onChange={(date: Date | null) => handleStartDateChange(info.row.original.serialNo, date)}
          dateFormat="MM/dd/yyyy" // Date format
        />
      ),
    }),
    columnHelper.accessor('endDate', {
      header: 'End Date',
      cell: info => (
        <DatePicker
          selected={info.getValue()}
          onChange={(date: Date | null) => handleEndDateChange(info.row.original.serialNo, date)}
          dateFormat="MM/dd/yyyy" // Date format
        />
      ),
    }),
    columnHelper.accessor('productName', {
      header: 'Product Name',
      cell: info => {
        const isEditing = editingCell?.serialNo === info.row.original.serialNo && editingCell.field === 'productName';
        return isEditing ? (
          <input
            type="text"
            value={editingValue as string}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoFocus
          />
        ) : (
          <span onClick={() => handleCellClick(info.row.original.serialNo, 'productName', info.getValue())}>
            {info.getValue()}
          </span>
        );
      },
    }),
    columnHelper.accessor('quantity', {
      header: 'Quantity',
      cell: info => {
        const isEditing = editingCell?.serialNo === info.row.original.serialNo && editingCell.field === 'quantity';
        return isEditing ? (
          <input
            type="number"
            value={editingValue as number}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoFocus
          />
        ) : (
          <span onClick={() => handleCellClick(info.row.original.serialNo, 'quantity', info.getValue())}>
            {info.getValue()}
          </span>
        );
      },
    }),
    columnHelper.accessor('unitPrice', {
      header: 'Unit Price',
      cell: info => {
        const isEditing = editingCell?.serialNo === info.row.original.serialNo && editingCell.field === 'unitPrice';
        return isEditing ? (
          <input
            type="number"
            value={editingValue as number}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoFocus
          />
        ) : (
          <span onClick={() => handleCellClick(info.row.original.serialNo, 'unitPrice', info.getValue())}>
            {info.getValue()}
          </span>
        );
      },
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="self-space-table-container">
      <div className="table-controls">
        <button onClick={handleDelete} className="btn white-btn">
          <FaTrash /> Delete
        </button>
        <button className="btn white-btn">
          <FaFilter /> Filters
        </button>
        <CSVLink data={data} filename={"self-space-data.csv"} className="btn white-btn">
          <FaFileExport /> Export
        </CSVLink>
        <button onClick={handleAddNew} className="btn blue-btn">
          <FaPlus /> Add new CTA
        </button>
      </div>
      <table className="self-space-table">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelfSpaceTable;
