
import { GenerateAccessLogsCommand, GenerateAccessLogsCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useGenerateAccessLogs({ region, input }: { region?: string, input: GenerateAccessLogsCommandInput }) {
  return useQuery(['GenerateAccessLogsCommand', input], () => client(region).send(new GenerateAccessLogsCommand(input)));
}
