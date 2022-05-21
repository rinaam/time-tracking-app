import React from 'react';
import './Table.scss';

interface TableHeadField {
  text: string;
}

export interface TableBodyField {
  text?: string | number;
  component?: React.ReactNode;
  id: string;
}

interface TableProps {
  tableHead: TableHeadField[];
  tableBody: TableBodyField[][];
}

const Table: React.FC<TableProps> = ({ tableHead, tableBody }) => (
  <table className="table-wrapper">
    <thead>
      <tr>
        {tableHead.map((field) => (
          <th key={field.text}>{field.text}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {tableBody.map((row) => (
        <tr key={`row-${row[0].id}`}>
          {row.map((field) => {
            if (field.text) {
              return <td key={field.id}>{field.text}</td>;
            }
            return <td key={field.id}>{field.component}</td>;
          })}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
