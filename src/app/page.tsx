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
    "name": "test 1",
    "age": 53,
    "class": 8
  },
  {
    "id": 2,
    "name": "test 2",
    "age": 18,
    "class": 5
  },
  {
    "id": 3,
    "name": "test 3",
    "age": 92,
    "class": 8
  },
  {
    "id": 4,
    "name": "test 4",
    "age": 51,
    "class": 9
  },
  {
    "id": 5,
    "name": "test 5",
    "age": 33,
    "class": 7
  },
  {
    "id": 6,
    "name": "test 6",
    "age": 84,
    "class": 10
  },
  {
    "id": 7,
    "name": "test 7",
    "age": 25,
    "class": 10
  },
  {
    "id": 8,
    "name": "test 8",
    "age": 71,
    "class": 9
  },
  {
    "id": 9,
    "name": "test 9",
    "age": 25,
    "class": 6
  },
  {
    "id": 10,
    "name": "test 10",
    "age": 81,
    "class": 1
  },
  {
    "id": 11,
    "name": "test 11",
    "age": 77,
    "class": 6
  },
  {
    "id": 12,
    "name": "test 12",
    "age": 25,
    "class": 9
  },
  {
    "id": 13,
    "name": "test 13",
    "age": 40,
    "class": 9
  },
  {
    "id": 14,
    "name": "test 14",
    "age": 97,
    "class": 3
  },
  {
    "id": 15,
    "name": "test 15",
    "age": 68,
    "class": 7
  },
  {
    "id": 16,
    "name": "test 16",
    "age": 55,
    "class": 10
  },
  {
    "id": 17,
    "name": "test 17",
    "age": 32,
    "class": 2
  },
  {
    "id": 18,
    "name": "test 18",
    "age": 90,
    "class": 10
  },
  {
    "id": 19,
    "name": "test 19",
    "age": 68,
    "class": 1
  },
  {
    "id": 20,
    "name": "test 20",
    "age": 17,
    "class": 5
  },
  {
    "id": 21,
    "name": "test 21",
    "age": 49,
    "class": 6
  },
  {
    "id": 22,
    "name": "test 22",
    "age": 67,
    "class": 3
  },
  {
    "id": 23,
    "name": "test 23",
    "age": 16,
    "class": 7
  },
  {
    "id": 24,
    "name": "test 24",
    "age": 6,
    "class": 9
  },
  {
    "id": 25,
    "name": "test 25",
    "age": 25,
    "class": 3
  },
  {
    "id": 26,
    "name": "test 26",
    "age": 97,
    "class": 7
  },
  {
    "id": 27,
    "name": "test 27",
    "age": 23,
    "class": 8
  },
  {
    "id": 28,
    "name": "test 28",
    "age": 3,
    "class": 10
  },
  {
    "id": 29,
    "name": "test 29",
    "age": 65,
    "class": 3
  },
  {
    "id": 30,
    "name": "test 30",
    "age": 33,
    "class": 4
  },
  {
    "id": 31,
    "name": "test 31",
    "age": 86,
    "class": 4
  },
  {
    "id": 32,
    "name": "test 32",
    "age": 19,
    "class": 2
  },
  {
    "id": 33,
    "name": "test 33",
    "age": 46,
    "class": 8
  },
  {
    "id": 34,
    "name": "test 34",
    "age": 55,
    "class": 4
  },
  {
    "id": 35,
    "name": "test 35",
    "age": 91,
    "class": 9
  },
  {
    "id": 36,
    "name": "test 36",
    "age": 52,
    "class": 1
  },
  {
    "id": 37,
    "name": "test 37",
    "age": 47,
    "class": 1
  },
  {
    "id": 38,
    "name": "test 38",
    "age": 38,
    "class": 10
  },
  {
    "id": 39,
    "name": "test 39",
    "age": 65,
    "class": 3
  },
  {
    "id": 40,
    "name": "test 40",
    "age": 8,
    "class": 8
  },
  {
    "id": 41,
    "name": "test 41",
    "age": 12,
    "class": 3
  },
  {
    "id": 42,
    "name": "test 42",
    "age": 94,
    "class": 8
  },
  {
    "id": 43,
    "name": "test 43",
    "age": 60,
    "class": 1
  },
  {
    "id": 44,
    "name": "test 44",
    "age": 78,
    "class": 6
  },
  {
    "id": 45,
    "name": "test 45",
    "age": 72,
    "class": 7
  },
  {
    "id": 46,
    "name": "test 46",
    "age": 31,
    "class": 7
  },
  {
    "id": 47,
    "name": "test 47",
    "age": 80,
    "class": 7
  },
  {
    "id": 48,
    "name": "test 48",
    "age": 82,
    "class": 6
  },
  {
    "id": 49,
    "name": "test 49",
    "age": 25,
    "class": 4
  },
  {
    "id": 50,
    "name": "test 50",
    "age": 68,
    "class": 2
  },
  {
    "id": 51,
    "name": "test 51",
    "age": 42,
    "class": 8
  },
  {
    "id": 52,
    "name": "test 52",
    "age": 43,
    "class": 5
  },
  {
    "id": 53,
    "name": "test 53",
    "age": 6,
    "class": 3
  },
  {
    "id": 54,
    "name": "test 54",
    "age": 30,
    "class": 10
  },
  {
    "id": 55,
    "name": "test 55",
    "age": 30,
    "class": 1
  },
  {
    "id": 56,
    "name": "test 56",
    "age": 18,
    "class": 6
  },
  {
    "id": 57,
    "name": "test 57",
    "age": 44,
    "class": 4
  }
]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DataTable headers={headers} rows={rows} caption='Oranges' />
    </main>
  )
}
