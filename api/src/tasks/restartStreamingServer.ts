/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TaskConfig, TaskHandler } from 'payload';
import SSH2Promise from 'ssh2-promise';
import SSHConfig from 'ssh2-promise/lib/sshConfig';

const LIBRETIME_DROPLET_IP = process.env.LIBRETIME_DROPLET_IP;
const LIBRETIME_DROPLET_KEY =
  process.env.LIBRETIME_DROPLET_KEY &&
  Buffer.from(process.env.LIBRETIME_DROPLET_KEY, 'base64').toString();
const LIBRETIME_DROPLET_PORT = process.env.LIBRETIME_DROPLET_PORT;
const LIBRETIME_DROPLET_USER = process.env.LIBRETIME_DROPLET_USER;
const LIBRETIME_DROPLET_PASSPHRASE = process.env.LIBRETIME_DROPLET_PASSPHRASE;

const handler: TaskHandler<'restartServer'> = async ({ input, req }) => {
  try {
    const SSH_CONFIG: SSHConfig = {
      host: LIBRETIME_DROPLET_IP,
      port: parseInt(LIBRETIME_DROPLET_PORT),
      username: LIBRETIME_DROPLET_USER,
      privateKey: LIBRETIME_DROPLET_KEY,
      passphrase: LIBRETIME_DROPLET_PASSPHRASE,
    };
    const ssh = new SSH2Promise(SSH_CONFIG);
    const result = await ssh.exec('docker compose down && docker compose up -d');
    ssh.close();
    req.payload.update({
      collection: 'restartLibretime',
      id: input.collectionId,
      data: {
        taskFinished: true,
        results: result,
      },
    });

    return {
      output: {
        success: true,
      },
    };
  } catch (e) {
    console.log(e);
    return { output: { success: false } };
  }
};

const task: TaskConfig<'restartServer'> = {
  retries: {
    shouldRestore: false,
  },

  slug: 'restartServer',

  inputSchema: [
    { name: 'collectionId', type: 'text', required: true },
    { name: 'collectionName', type: 'text', required: true },
  ],

  outputSchema: [
    {
      name: 'success',
      type: 'checkbox',
      required: true,
    },
  ],
  handler,
} as TaskConfig<'restartServer'>;

export default task;
