
import { GetBucketWebsiteCommand, GetBucketWebsiteCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketWebsite({ region, input }: { region?: string, input: GetBucketWebsiteCommandInput }) {
  return useQuery(['GetBucketWebsiteCommand', input], () => client(region).send(new GetBucketWebsiteCommand(input)));
}
