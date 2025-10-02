// app/components/MDXComponents.tsx
import type React from "react";

type DivProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;
type TableProps = React.TableHTMLAttributes<HTMLTableElement>;
type ThProps = React.ThHTMLAttributes<HTMLTableCellElement>;
type TdProps = React.TdHTMLAttributes<HTMLTableCellElement>;
type CodeProps = React.HTMLAttributes<HTMLElement>;
type PreProps = React.HTMLAttributes<HTMLPreElement>;

// Bloques personalizados
const Info: React.FC<DivProps> = ({ children, className, ...rest }) => (
  <div
    className={`border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4 my-4 rounded-md ${className ?? ""}`}
    {...rest}
  >
    {children}
  </div>
);

const Warning: React.FC<DivProps> = ({ children, className, ...rest }) => (
  <div
    className={`border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4 my-4 rounded-md ${className ?? ""}`}
    {...rest}
  >
    {children}
  </div>
);

const Danger: React.FC<DivProps> = ({ children, className, ...rest }) => (
  <div
    className={`border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-4 my-4 rounded-md ${className ?? ""}`}
    {...rest}
  >
    {children}
  </div>
);

// Tablas y código
const Table: React.FC<TableProps> = ({ className, ...rest }) => (
  <div className="overflow-x-auto my-4">
    <table className={`min-w-full border border-gray-200 dark:border-gray-700 text-sm ${className ?? ""}`} {...rest} />
  </div>
);

const Th: React.FC<ThProps> = ({ className, ...rest }) => (
  <th
    className={`border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-3 py-2 text-left font-semibold ${className ?? ""}`}
    {...rest}
  />
);

const Td: React.FC<TdProps> = ({ className, ...rest }) => (
  <td className={`border border-gray-200 dark:border-gray-700 px-3 py-2 ${className ?? ""}`} {...rest} />
);

const Code: React.FC<CodeProps> = ({ className, ...rest }) => (
  <code
    className={`bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono text-sm ${className ?? ""}`}
    {...rest}
  />
);

const Pre: React.FC<PreProps> = ({ className, ...rest }) => (
  <pre className={`bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 ${className ?? ""}`} {...rest} />
);

// Mapa MDX sin `any`
const MDXComponents: Record<string, React.ComponentType<unknown>> = {
  Info,
  Warning,
  Danger,
  table: Table,
  th: Th,
  td: Td,
  code: Code,
  pre: Pre,
};

export default MDXComponents;
