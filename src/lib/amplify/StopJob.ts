
import { StopJobCommand, StopJobCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useStopJob({ region, input }: { region?: string, input: StopJobCommandInput }) {
  return useQuery(['StopJobCommand', input], () => client(region).send(new StopJobCommand(input)));
}
