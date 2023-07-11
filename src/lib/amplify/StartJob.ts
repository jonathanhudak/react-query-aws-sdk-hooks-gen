
import { StartJobCommand, StartJobCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useStartJob({ region, input }: { region?: string, input: StartJobCommandInput }) {
  return useQuery(['StartJobCommand', input], () => client(region).send(new StartJobCommand(input)));
}
