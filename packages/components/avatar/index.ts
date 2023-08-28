import avatar from './src/avatar.vue';
import avatarGroup from './src/avatar-group.vue';
import { withInstall } from '@dora-ui/utils';
export const DoraAvatar = withInstall(avatar);
export const DoraAvatarGroup = withInstall(avatarGroup);
export default {
  DoraAvatar,
  DoraAvatarGroup
};
