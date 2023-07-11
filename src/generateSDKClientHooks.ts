import * as fs from "fs/promises";
import * as path from "path";

const clientName = process.argv[2];
const clientPath: string = process.argv[3];

console.info("clientPath", clientPath);
console.info("clientName", clientName);

async function generateSWRHooks({
  clientName,
  clientPath,
}: {
  clientName: string;
  clientPath: string;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const client: Record<string, unknown> = await import(clientPath);
  const dirName = clientName.toLowerCase().replace("client", "");

  const commands = Object.keys(client).filter((k) => k.endsWith("Command"));

  const mutatingWords = ["Create", "Update", "Delete", "Put", "Add", "Remove"];

  const isMutating = (command: string): boolean => {
    return mutatingWords.some((word) => command.includes(word));
  };

  const index = [];

  for (const command of commands) {
    const action = command.split("Command")[0];
    if (action === "$") {
      continue;
    }
    const isMutation = isMutating(command);
    const fn = isMutation ? "useMutation" : "useQuery";
    const hookName = `use${action}`;
    const inputType = `${command}Input`;
    // const outputType = `${command}Output`;

    index.push(`export { default as ${hookName} } from "./${action}";`);

    const jsCode = `
import { ${command}, ${inputType} } from "${clientPath}";
import { ${fn} } from "react-query";
import client from "../${clientName}";


export default function ${hookName}({ region, input }: { region?: string, input: ${inputType} }) {
  return ${fn}(['${command}', input], () => client(region).send(new ${command}(input)));
}
`;

    const tsFileName = `${action}.ts`;
    await fs.mkdir(path.join(__dirname, `/src/lib/${dirName}`), {
      recursive: true,
    });
    const tsPath = path.join(__dirname, `/src/lib/${dirName}/`, tsFileName);

    await fs.writeFile(tsPath, jsCode);
  }

  await fs.writeFile(
    path.join(__dirname, `/src/lib/${dirName}/index.ts`),
    index.join("\n")
  );
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
generateSWRHooks({ clientName, clientPath });
