import { Injectable } from '@angular/core';
import { IGroupAccess, IGroupAccessDetail } from 'src/app/Interfaces';

import { MENU_KEY, PATH_ENUM } from '../constants/common.constant';
import { LocalStorageUtil } from './local-storage-util';

@Injectable({
  providedIn: 'root',
})
export class AccessUtil {
  private _client: any;
  public groupAccess: IGroupAccess = null;

  constructor(private readonly _localStorage: LocalStorageUtil) {}

  private getGroupAccess() {
    this.groupAccess = this.groupAccess
      ? this.groupAccess
      : (this._localStorage.getGroupAccress() as IGroupAccess);
    return this.groupAccess;
  }

  private getGroupAccessDetail() {
    return this.getGroupAccess().groupAccessDetails;
  }

  public setClient(client: any) {
    this._client = client;
  }

  public getRoleName(): string {
    const groupAccess = this.getGroupAccess() || { name: '' };
    return groupAccess.name;
  }

  public getPageAccess(service: string): IGroupAccessDetail {
    const groupAccessDetail = this.getGroupAccessDetail();
    return groupAccessDetail.find((g) => g.permission.service === service);
  }

  public isMenuAccess(service: string): boolean {
    const groupAccessDetail = this.getGroupAccessDetail();
    return groupAccessDetail.some((g) => g.permission.service === service);
  }

  public isUrlAccess(path: string): boolean {
    const groupAccessDetail = this.getGroupAccessDetail();
    const service = this.getPermissionNameByPath(path);

    return (
      this.getRoleName() !== 'USER' &&
      groupAccessDetail.some((g) => g.permission.service === service)
    );
  }

  public CRUD(groupAccessDetail: IGroupAccessDetail) {
    if (!groupAccessDetail) return false;

    return (
      groupAccessDetail.isCreate === true &&
      groupAccessDetail.isRead === true &&
      groupAccessDetail.isUpdate === true &&
      groupAccessDetail.isDelete === true
    );
  }

  public getPermissionNameByPath(path: string) {
    const splitUrl = path.split('/').slice(1);
    const menus = this.getMenu();
    let menuPermission = null;

    menus.forEach((menu) => {
      if (!menuPermission) {
        if (menu.path === path) {
          menuPermission = menu;
        }

        // for page with param
        else if (menu.path.includes(splitUrl[0])) {
          if (menu.service) {
            menuPermission = menu;
          } else if (!menu.service && menu.subMenus) {
            const subLevelPath = `${splitUrl[0]}/${splitUrl[1]}`;
            menuPermission = menu.subMenus.find((subMenu) => subMenu.path.includes(subLevelPath));
          }
        }
      }
    });

    return menuPermission.service ? menuPermission.service : null;
  }

  public getMenu() {
    return [
      {
        id: 'client',
        path: '/client',
        title: 'Client Management',
        icon: 'food_store',
        service: MENU_KEY.CLIENT_MANAGEMENT,
      },
      {
        id: 'user',
        path: '/user',
        title: 'User Management',
        icon: 'users_multiple-19',
        isCollapsed: true,
        subMenus: [
          {
            id: 'user-users',
            path: PATH_ENUM.USER_USERS,
            title: 'Users',
            service: MENU_KEY.USER_MANAGEMENT,
          },
          {
            id: 'user-groups',
            path: '/user/groups',
            title: 'User Groups',
            service: MENU_KEY.USER_MANAGEMENT,
          },
        ],
      },
      {
        id: 'hierarchy',
        path: '/hierarchy',
        title: 'Hierarchy Management',
        icon: 'business_hierarchy-53',
        isCollapsed: true,
        subMenus: [
          {
            id: 'hierarchy-level',
            path: '/hierarchy/level',
            title: 'Organizational Hierarchy Levels',
            service: MENU_KEY.LEVEL_MANAGEMENT,
          },
          {
            id: 'hierarchy-instance',
            path: PATH_ENUM.HIERARCHY_INSTANCE,
            title: 'Hierarchy Instances',
            service: MENU_KEY.HIERARCHY_INSTANCE_MANAGEMENT,
          },
          {
            id: 'hierarchy-store',
            path: PATH_ENUM.HIERARCHY_STORE,
            title: 'Hierarchy Stores/Locations',
            service: MENU_KEY.STORE_MANAGEMENT,
          },
        ],
      },
      {
        id: 'message',
        path: '/message',
        title: 'Messages',
        icon: 'ui-2_chat-content',
        service: MENU_KEY.MESSAGE_MANAGEMENT,
      },
      {
        id: 'approval',
        path: '/approval',
        title: 'Approval Groups',
        icon: 'files_check',
        isCollapsed: true,
        subMenus: [
          {
            id: 'approval-all',
            path: PATH_ENUM.APPROVAL,
            title: 'All Orders Approval',
            service: MENU_KEY.APPROVAL_MANAGEMENT,
          },
          {
            id: 'approval-product',
            path: PATH_ENUM.APPROVAL_PRODUCT,
            title: 'Products Requiring Approval',
            service: MENU_KEY.PRODUCT_APPROVAL_MANAGEMENT,
          },
          {
            id: 'approval-budget',
            path: PATH_ENUM.APPROVAL_BUDGET,
            title: 'Over Budget Approval',
            service: MENU_KEY.BUDGET_APPROVAL_MANAGEMENT,
          },
          {
            id: 'approval-total-budget',
            path: PATH_ENUM.APPROVAL_TOTAL_BUDGET,
            title: 'Over Total Budget Approval',
            service: MENU_KEY.BUDGET_TOTAL_APPROVAL_MANAGEMENT,
          },
        ],
      },
      {
        id: 'budget',
        path: '/budget',
        title: 'Budgets',
        icon: 'business_money-bag',
        isCollapsed: true,
        subMenus: [
          {
            id: 'budget-update',
            path: '/budget/update',
            title: 'Update Budgets',
            service: MENU_KEY.BUDGET_UPDATE,
          },
          {
            id: 'budget-fiscal',
            path: '/budget/fiscalyear',
            title: 'Fiscal Year',
            service: MENU_KEY.BUDGET_FISCAL_YEAR,
          },
        ],
      },
      {
        id: 'report',
        path: '/report',
        title: 'Internal Reports',
        icon: 'files_single-folded-content',
        isCollapsed: true,
        subMenus: [
          {
            id: 'report-user',
            path: '/report/users',
            title: 'Users Report',
            service: MENU_KEY.REPORT_USERS,
          },
          {
            id: 'report-sales-order',
            path: '/report/salesorder',
            title: 'Sales Order Transactions Report',
            service: MENU_KEY.REPORT_SALES_ORDER,
          },
          {
            id: 'report-user-manage',
            path: '/report/usermanage',
            title: 'User Management Report',
            service: MENU_KEY.REPORT_USER_MANAGEMENT,
          },
          {
            id: 'report-budget',
            path: '/report/budget',
            title: 'Budget Report',
            service: MENU_KEY.REPORT_BUDGET,
          },
          {
            id: 'report-draft-on-hold',
            path: '/report/draft-onhold',
            title: 'Draft/On Hold Orders Report',
            service: MENU_KEY.REPORT_DRAFT_ON_HOLD,
          },
          {
            id: 'report-library-area-folder',
            path: '/report/library-folder',
            title: 'Library Area Product Folder Report',
            service: MENU_KEY.REPORT_LIBRARY_PRODUCT_FOLDER,
          },
        ],
      },
      {
        id: 'product',
        path: '/product',
        title: 'product Management',
        icon: 'shopping_box-3d-50',
        isCollapsed: true,
        subMenus: [
          {
            id: 'product-vendor',
            path: PATH_ENUM.PRODUCT_VENDOR,
            title: 'Vendors',
            service: MENU_KEY.PRODUCT_MANAGEMENT,
          },
          {
            id: 'product-products',
            path: '/product/products',
            title: 'Products',
            service: MENU_KEY.PRODUCT_MANAGEMENT,
          },
          {
            id: 'price-groups',
            path: PATH_ENUM.PRODUCT_PRICE_GROUPS,
            title: 'Price Groups',
            service: MENU_KEY.PRODUCT_MANAGEMENT,
          },
        ],
      },
    ];
  }
}
