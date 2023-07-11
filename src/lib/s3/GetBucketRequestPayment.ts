
import { GetBucketRequestPaymentCommand, GetBucketRequestPaymentCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketRequestPayment({ region, input }: { region?: string, input: GetBucketRequestPaymentCommandInput }) {
  return useQuery(['GetBucketRequestPaymentCommand', input], () => client(region).send(new GetBucketRequestPaymentCommand(input)));
}
