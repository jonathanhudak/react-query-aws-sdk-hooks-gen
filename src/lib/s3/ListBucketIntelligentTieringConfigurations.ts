
import { ListBucketIntelligentTieringConfigurationsCommand, ListBucketIntelligentTieringConfigurationsCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useListBucketIntelligentTieringConfigurations({ region, input }: { region?: string, input: ListBucketIntelligentTieringConfigurationsCommandInput }) {
  return useQuery(['ListBucketIntelligentTieringConfigurationsCommand', input], () => client(region).send(new ListBucketIntelligentTieringConfigurationsCommand(input)));
}
