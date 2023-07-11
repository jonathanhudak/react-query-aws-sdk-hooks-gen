
import { PutBucketRequestPaymentCommand, PutBucketRequestPaymentCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketRequestPayment({ region, input }: { region?: string, input: PutBucketRequestPaymentCommandInput }) {
  return useMutation(['PutBucketRequestPaymentCommand', input], () => client(region).send(new PutBucketRequestPaymentCommand(input)));
}
