
Live link [Next.js](https://data-table-mu.vercel.app/)


## Tech Stack
1. NextJs 13
2. Tailwind,
3. typescript

functionality   
1. searching,
2. sorting (click on header)
3. custom cell UI with renderer function
4. 

## usage overview

### header array
```javascript

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

```
### data array
```javascript

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
]

```

### component array
```javascript
 <DataTable showSearch headers={headers} rows={rows} caption='Oranges' />
```





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
