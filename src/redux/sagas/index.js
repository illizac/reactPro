import { fetchUserTableData, fetchCharacterTableData } from './fetchSagas.js'
import { getSideMenu } from './getSideMenu.js'

export default [ fetchUserTableData, getSideMenu, fetchCharacterTableData ]

