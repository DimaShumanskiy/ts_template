//Use generics in React to make dynamic and flexible components

import React from "react";

// flexible components
interface TableProps {
  items: { id: string }[];
  renderItem: (item: { id: string }) => React.ReactNode;
}

export const Table = (props: TableProps) => {
  return null;
};

const Component = () => {
  return (
    <Table
      items={[{ id: "1" }]}
      renderItem={(item) => <div>{item.id}</div>}
    ></Table>
  );
};

//dynamic object
interface TableProps1<TItem> {
  items: TItem[];
  renderItem: (item: TItem) => React.ReactNode;
}

export function Table1<TItem>(props: TableProps1<TItem>) {
  return null;
}

const Component1 = () => {
  return (
    <Table1
      items={[{ id: "1", text: "cool" }]}
      renderItem={(item) => <div>{item.id}</div>}
    ></Table1>
  );
};
