
import { ListWebhooksCommand, ListWebhooksCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useListWebhooks({ region, input }: { region?: string, input: ListWebhooksCommandInput }) {
  return useQuery(['ListWebhooksCommand', input], () => client(region).send(new ListWebhooksCommand(input)));
}
