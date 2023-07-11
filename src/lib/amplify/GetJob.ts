
import { GetJobCommand, GetJobCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useGetJob({ region, input }: { region?: string, input: GetJobCommandInput }) {
  return useQuery(['GetJobCommand', input], () => client(region).send(new GetJobCommand(input)));
}
