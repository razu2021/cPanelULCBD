import pageManagementController from './pageManagementController'
import CategoryPageController from './CategoryPageController'
import SubCategoryPageController from './SubCategoryPageController'
import ChildCategoryPageController from './ChildCategoryPageController'
import PageSectionController from './PageSectionController'
import manage from './manage'
const cms = {
    pageManagementController: Object.assign(pageManagementController, pageManagementController),
CategoryPageController: Object.assign(CategoryPageController, CategoryPageController),
SubCategoryPageController: Object.assign(SubCategoryPageController, SubCategoryPageController),
ChildCategoryPageController: Object.assign(ChildCategoryPageController, ChildCategoryPageController),
PageSectionController: Object.assign(PageSectionController, PageSectionController),
manage: Object.assign(manage, manage),
}

export default cms