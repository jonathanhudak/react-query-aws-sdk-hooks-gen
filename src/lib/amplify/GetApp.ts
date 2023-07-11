
import { GetAppCommand, GetAppCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useGetApp({ region, input }: { region?: string, input: GetAppCommandInput }) {
  return useQuery(['GetAppCommand', input], () => client(region).send(new GetAppCommand(input)));
}
