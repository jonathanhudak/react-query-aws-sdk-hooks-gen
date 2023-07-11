
import { UpdateWebhookCommand, UpdateWebhookCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useUpdateWebhook({ region, input }: { region?: string, input: UpdateWebhookCommandInput }) {
  return useMutation(['UpdateWebhookCommand', input], () => client(region).send(new UpdateWebhookCommand(input)));
}
