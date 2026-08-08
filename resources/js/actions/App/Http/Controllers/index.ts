import frontend from './frontend'
import backend from './backend'
import gateway from './gateway'
import Settings from './Settings'
const Controllers = {
    frontend: Object.assign(frontend, frontend),
backend: Object.assign(backend, backend),
gateway: Object.assign(gateway, gateway),
Settings: Object.assign(Settings, Settings),
}

export default Controllers