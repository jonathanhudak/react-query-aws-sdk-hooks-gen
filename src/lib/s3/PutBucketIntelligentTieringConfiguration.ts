
import { PutBucketIntelligentTieringConfigurationCommand, PutBucketIntelligentTieringConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "react-query";
import client from "../S3Client";


export default function usePutBucketIntelligentTieringConfiguration({ region, input }: { region?: string, input: PutBucketIntelligentTieringConfigurationCommandInput }) {
  return useMutation(['PutBucketIntelligentTieringConfigurationCommand', input], () => client(region).send(new PutBucketIntelligentTieringConfigurationCommand(input)));
}
