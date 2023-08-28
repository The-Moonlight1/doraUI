import dropdown from './src/dropdown.vue';
import DropdownItem from './src/dropdown-item.vue';
import { withInstall } from '@dora-ui/utils';
export const DoraDropdown = withInstall(dropdown);
export const DoraDropdownItem = withInstall(DropdownItem);
export default {
  DoraDropdown,
  DoraDropdownItem
};
