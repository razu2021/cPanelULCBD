import AdminController from './AdminController'
import cms from './cms'
import setting from './setting'
const backend = {
    AdminController: Object.assign(AdminController, AdminController),
cms: Object.assign(cms, cms),
setting: Object.assign(setting, setting),
}

export default backend