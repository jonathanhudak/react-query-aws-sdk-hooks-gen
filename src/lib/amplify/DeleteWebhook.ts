
import { DeleteWebhookCommand, DeleteWebhookCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useDeleteWebhook({ region, input }: { region?: string, input: DeleteWebhookCommandInput }) {
  return useMutation(['DeleteWebhookCommand', input], () => client(region).send(new DeleteWebhookCommand(input)));
}
