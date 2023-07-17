'use client'
import DataTable from '@/components/dataTable'
import { headObject } from '@/interface';
const headers: headObject[] = [
  {
    label: "Name",
    key: "name",
    onClick: (key, row) => {
      console.log(key, row);
    },
    renderer: (key, row) => {
      return <div className=' py-1 px-3  bg-indigo-600 text-white rounded-md w-auto inline-block'>{row[key]}</div>;
    }
  },
  {
    label: "ID",
    key: "id",
    onClick: (key, row) => {
      console.log(key, row);
    }
  },

  {
    label: "Age",
    key: "age"
  },
  {
    label: "Class",
    key: "class",
    renderer: (key, row) => {
      return <div className=' py-1 px-3  bg-green-500 text-white rounded-full w-auto inline-block'>{row[key]}</div>;
    }
  }
];
const rows = [
  {
    "id": 1,
    "name": "test-xyz",
    "age": 68,
    "class": 5
  },
  {
    "id": 2,
    "name": "test-abc",
    "age": 44,
    "class": 6
  },
  {
    "id": 3,
    "name": "test-xyz",
    "age": 61,
    "class": 9
  },
  {
    "id": 4,
    "name": "test-abc",
    "age": 1,
    "class": 10
  },
  {
    "id": 5,
    "name": "test-xyz",
    "age": 52,
    "class": 10
  },
  {
    "id": 6,
    "name": "test-abc",
    "age": 46,
    "class": 10
  },
  {
    "id": 7,
    "name": "test-xyz",
    "age": 10,
    "class": 9
  },
  {
    "id": 8,
    "name": "test-abc",
    "age": 21,
    "class": 5
  },
  {
    "id": 9,
    "name": "test-xyz",
    "age": 31,
    "class": 1
  },
  {
    "id": 10,
    "name": "test-abc",
    "age": 67,
    "class": 10
  },
  {
    "id": 11,
    "name": "test-xyz",
    "age": 11,
    "class": 10
  },
  {
    "id": 12,
    "name": "test-abc",
    "age": 37,
    "class": 10
  },
  {
    "id": 13,
    "name": "test-xyz",
    "age": 63,
    "class": 3
  },
  {
    "id": 14,
    "name": "test-abc",
    "age": 93,
    "class": 4
  },
  {
    "id": 15,
    "name": "test-xyz",
    "age": 11,
    "class": 3
  },
  {
    "id": 16,
    "name": "test-abc",
    "age": 89,
    "class": 10
  },
  {
    "id": 17,
    "name": "test-xyz",
    "age": 58,
    "class": 4
  },
  {
    "id": 18,
    "name": "test-abc",
    "age": 41,
    "class": 5
  },
  {
    "id": 19,
    "name": "test-xyz",
    "age": 51,
    "class": 2
  },
  {
    "id": 20,
    "name": "test-abc",
    "age": 3,
    "class": 9
  },
  {
    "id": 21,
    "name": "test-xyz",
    "age": 13,
    "class": 5
  },
  {
    "id": 22,
    "name": "test-abc",
    "age": 1,
    "class": 7
  },
  {
    "id": 23,
    "name": "test-xyz",
    "age": 55,
    "class": 8
  },
  {
    "id": 24,
    "name": "test-abc",
    "age": 95,
    "class": 10
  },
  {
    "id": 25,
    "name": "test-xyz",
    "age": 64,
    "class": 2
  },
  {
    "id": 26,
    "name": "test-abc",
    "age": 95,
    "class": 2
  },
  {
    "id": 27,
    "name": "test-xyz",
    "age": 37,
    "class": 5
  },
  {
    "id": 28,
    "name": "test-abc",
    "age": 60,
    "class": 5
  },
  {
    "id": 29,
    "name": "test-xyz",
    "age": 73,
    "class": 1
  },
  {
    "id": 30,
    "name": "test-abc",
    "age": 56,
    "class": 4
  },
  {
    "id": 31,
    "name": "test-xyz",
    "age": 70,
    "class": 5
  },
  {
    "id": 32,
    "name": "test-abc",
    "age": 48,
    "class": 4
  },
  {
    "id": 33,
    "name": "test-xyz",
    "age": 82,
    "class": 8
  },
  {
    "id": 34,
    "name": "test-abc",
    "age": 5,
    "class": 2
  },
  {
    "id": 35,
    "name": "test-xyz",
    "age": 41,
    "class": 1
  },
  {
    "id": 36,
    "name": "test-abc",
    "age": 23,
    "class": 2
  },
  {
    "id": 37,
    "name": "test-xyz",
    "age": 47,
    "class": 1
  },
  {
    "id": 38,
    "name": "test-abc",
    "age": 31,
    "class": 9
  },
  {
    "id": 39,
    "name": "test-xyz",
    "age": 50,
    "class": 2
  },
  {
    "id": 40,
    "name": "test-abc",
    "age": 51,
    "class": 8
  },
  {
    "id": 41,
    "name": "test-xyz",
    "age": 93,
    "class": 6
  },
  {
    "id": 42,
    "name": "test-abc",
    "age": 2,
    "class": 10
  },
  {
    "id": 43,
    "name": "test-xyz",
    "age": 23,
    "class": 9
  },
  {
    "id": 44,
    "name": "test-abc",
    "age": 33,
    "class": 6
  },
  {
    "id": 45,
    "name": "test-xyz",
    "age": 60,
    "class": 6
  },
  {
    "id": 46,
    "name": "test-abc",
    "age": 9,
    "class": 7
  },
  {
    "id": 47,
    "name": "test-xyz",
    "age": 22,
    "class": 2
  },
  {
    "id": 48,
    "name": "test-abc",
    "age": 46,
    "class": 8
  },
  {
    "id": 49,
    "name": "test-xyz",
    "age": 42,
    "class": 7
  },
  {
    "id": 50,
    "name": "test-abc",
    "age": 87,
    "class": 7
  },
  {
    "id": 51,
    "name": "test-xyz",
    "age": 84,
    "class": 10
  },
  {
    "id": 52,
    "name": "test-abc",
    "age": 3,
    "class": 2
  },
  {
    "id": 53,
    "name": "test-xyz",
    "age": 90,
    "class": 10
  },
  {
    "id": 54,
    "name": "test-abc",
    "age": 3,
    "class": 1
  },
  {
    "id": 55,
    "name": "test-xyz",
    "age": 14,
    "class": 5
  },
  {
    "id": 56,
    "name": "test-abc",
    "age": 48,
    "class": 5
  },
  {
    "id": 57,
    "name": "test-xyz",
    "age": 91,
    "class": 9
  },
  {
    "id": 58,
    "name": "test-abc",
    "age": 50,
    "class": 9
  }
]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DataTable showSearch headers={headers} rows={rows} caption='Oranges' />
    </main>
  )
}
