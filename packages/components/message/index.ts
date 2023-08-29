export * from './src/message';
import { withInstall } from '@dora-ui/utils';
import Message from './src/message-method';
export const DoraMessage = withInstall(Message);
export default DoraMessage;
