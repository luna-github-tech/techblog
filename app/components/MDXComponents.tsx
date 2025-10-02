// app/components/MDXComponents.tsx
import React from "react";

export const MDXComponents = {
  // Bloques personalizados
  Info: (props: any) => (
    <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4 my-4 rounded-md">
      {props.children}
    </div>
  ),
  Warning: (props: any) => (
    <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4 my-4 rounded-md">
      {props.children}
    </div>
  ),
  Danger: (props: any) => (
    <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-4 my-4 rounded-md">
      {props.children}
    </div>
  ),
  // Tablas
  table: (props: any) => (
    <div className="overflow-x-auto my-4">
      <table
        className="min-w-full border border-gray-200 dark:border-gray-700 text-sm"
        {...props}
      />
    </div>
  ),
  th: (props: any) => (
    <th className="border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-3 py-2 text-left font-semibold" {...props} />
  ),
  td: (props: any) => (
    <td className="border border-gray-200 dark:border-gray-700 px-3 py-2" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono text-sm" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4" {...props} />
  ),
};
