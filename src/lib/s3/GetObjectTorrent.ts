
import { GetObjectTorrentCommand, GetObjectTorrentCommandInput } from "@aws-sdk/client-s3";
import { useQuery } from "react-query";
import client from "../S3Client";


export default function useGetObjectTorrent({ region, input }: { region?: string, input: GetObjectTorrentCommandInput }) {
  return useQuery(['GetObjectTorrentCommand', input], () => client(region).send(new GetObjectTorrentCommand(input)));
}
