
import { ListJobsCommand, ListJobsCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useListJobs({ region, input }: { region?: string, input: ListJobsCommandInput }) {
  return useQuery(['ListJobsCommand', input], () => client(region).send(new ListJobsCommand(input)));
}
