
import { GetObjectAttributesCommand, GetObjectAttributesCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetObjectAttributes({ region, input }: { region?: string, input: GetObjectAttributesCommandInput }) {
  return useQuery(['GetObjectAttributesCommand', input], () => client(region).send(new GetObjectAttributesCommand(input)));
}
