
import { GetBucketIntelligentTieringConfigurationCommand, GetBucketIntelligentTieringConfigurationCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetBucketIntelligentTieringConfiguration({ region, input }: { region?: string, input: GetBucketIntelligentTieringConfigurationCommandInput }) {
  return useQuery(['GetBucketIntelligentTieringConfigurationCommand', input], () => client(region).send(new GetBucketIntelligentTieringConfigurationCommand(input)));
}
