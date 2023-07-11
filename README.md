# react-query-aws-sdk-hooks-gen

🚧 ⚠️ Beta Probably Unstable 🚧 ⚠️

Choose any [JavaScript AWS SDK Client](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/) and generate TypeScript [react-query hooks](https://tanstack.com/query/v3/docs/react/overview) for each client action.

## Usage

### Generate SDK Client Hooks

```bash
npm add @aws-sdk-client-s3
npm run gen:sdkHooks S3Client '@aws-sdk/client-s3'
```

### Use the Hooks in your React App

Create app if needed:

```bash
npm create vite@latest
```

#### Add `src/lib/S3lient.ts`

```ts
import { S3Client } from "@aws-sdk/client-s3";

export default (region = "us-west-2") =>
  new S3Client({
    region,
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
  });
```


#### Usage in `src/App.tsx`

```tsx
import { ListObjectsCommandOutput }
import { QueryClient, QueryClientProvider } from "react-query";
import { useListObjectsV2 } from "./lib/s3";

function ListObjects({ data }: { data: ListObjectsCommandOutput | undefined }) {
  if (data?.Contents && data.Contents.length > 0) {
    return (
      <ul>
        {data.Contents.map((o) => (
          <li key={o.Key}>{o.Key}</li>
        ))}
      </ul>
    );
  }
  return <p>no objects found</p>;
}

export function MyAppTheListsObjects() {
  const { isLoading, data } = useListObjectsV2({
    input: {
      Bucket: "funny.lol",
    },
  });

  return <>{isLoading ? <p>Loading...<p> : <ListObjects data={data} />}</>;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyAppTheListsObjects />
    </QueryClientProvider>
  );
}
```
