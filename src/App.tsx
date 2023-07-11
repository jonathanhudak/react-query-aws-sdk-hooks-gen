import "./App.css";
import { ListObjectsCommandOutput } from "@aws-sdk/client-s3";
import { ListAppsCommandOutput } from "@aws-sdk/client-amplify";
import { useListObjectsV2 } from "./lib/s3";
import { useListApps } from "./lib/amplify";

function Loader() {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

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
  return <p>no buckets found</p>;
}

function Buckets() {
  const { isLoading, data } = useListObjectsV2({
    input: {
      Bucket: "hudak.lol",
    },
  });

  return <>{isLoading ? <Loader /> : <ListObjects data={data} />}</>;
}
function ListApps({ data }: { data: ListAppsCommandOutput | undefined }) {
  if (data?.apps && data.apps.length > 0) {
    return (
      <ul>
        {data.apps.map((a) => (
          <li key={a.appArn}>{a.name}</li>
        ))}
      </ul>
    );
  }

  return <p>no apps found</p>;
}

function AmplifyApps() {
  const { isLoading, data } = useListApps({
    input: {},
  });

  return <>{isLoading ? <Loader /> : <ListApps data={data} />}</>;
}

export default function App() {
  return (
    <>
      <h2>S3 ListObjectsV2</h2>
      <h3>Resources</h3>
      <ul>
        <li>
          <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManageCorsUsing.html">
            CORS
          </a>
        </li>
      </ul>
      <Buckets />

      <h2>Amplify ListApps</h2>
      <h3>Resources</h3>
      <AmplifyApps />
    </>
  );
}
