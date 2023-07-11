
import { DeleteBucketWebsiteCommand, DeleteBucketWebsiteCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useDeleteBucketWebsite({ region, input }: { region?: string, input: DeleteBucketWebsiteCommandInput }) {
  return useMutation(['DeleteBucketWebsiteCommand', input], () => client(region).send(new DeleteBucketWebsiteCommand(input)));
}
