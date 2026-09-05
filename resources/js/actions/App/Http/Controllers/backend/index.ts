import AdminController from './AdminController'
import cms from './cms'
import usermanagement from './usermanagement'
import setting from './setting'
const backend = {
    AdminController: Object.assign(AdminController, AdminController),
cms: Object.assign(cms, cms),
usermanagement: Object.assign(usermanagement, usermanagement),
setting: Object.assign(setting, setting),
}

export default backend