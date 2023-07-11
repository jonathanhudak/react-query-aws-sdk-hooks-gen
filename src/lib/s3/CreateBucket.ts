
import { CreateBucketCommand, CreateBucketCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function useCreateBucket({ region, input }: { region?: string, input: CreateBucketCommandInput }) {
  return useMutation(['CreateBucketCommand', input], () => client(region).send(new CreateBucketCommand(input)));
}
