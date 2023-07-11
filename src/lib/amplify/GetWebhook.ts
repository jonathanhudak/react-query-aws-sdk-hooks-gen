
import { GetWebhookCommand, GetWebhookCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useGetWebhook({ region, input }: { region?: string, input: GetWebhookCommandInput }) {
  return useQuery(['GetWebhookCommand', input], () => client(region).send(new GetWebhookCommand(input)));
}
