const FILE_INVALID = 'The file could not be uploaded. The file type is invalid.';

export function setMsgWithCustomerName(name: string) {
  const msgCode = 'duplicated.fiscal.year';
  ERROR_MESSAGE[msgCode] = `This fiscal year has already been created for ${name}.`;
}

export const LOCALSTORE = {
  GROUP_ACCESS: 'GROUP_ACCESS_AM',
};

export const COOKIES = {
  USR_ACCESS: 'USR_ACCESS_AM',
  USR_DATA: 'USR_DATA_AM',
};

export const TOKEN = {
  // MIN
  TIME_TO_EXTEN: 4.5,
  // HR
  TIME_OUT: 0.5,
};

export const IDLE = {
  // SEC
  DELAY: 900,
  TIMEOUT: 1,
  PING: 10,
};

export const MSG_TYPE = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
  ERROR_RELOAD: 'ERROR_AND_RELOAD',
  INPROGRESS: 'INPROGRESS',
};

export const DISTRO_TYPE = {
  STORE: 'STORE',
  INSTANCE: 'INSTANCE',
};

export const SORT_TYPE = {
  ASC: 'ASC',
  DESC: 'DESC',
};

export const PAGINATION = {
  ITEM_PER_PAGE: 10,
};

export const USER_ROLE = {
  SUPER: 'SUPER',
  ADMIN: 'ADMIN',
  USER: 'USER',
  INTERNAL: 'INTERNAL',
};

export const ROLE = {
  ADMIN: 'ADMIN',
  DATA_ADMIN: 'DATA ADMIN',
  AM: 'AM',
};

export const TABS_ENUM = {
  PRODUCT: 'PRODUCT',
  CHILD: 'CHILD',
  USER: 'USER',
  STORE: 'STORE',
};

export const VALIDATE = {
  EMAIL_REGEX: '^((?!\\.)[\\w-.]*[^.])([@\\w-]+)(\\.\\w+(\\.\\w+)?[^.\\W])$',
  PWD_REGEX: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -\\/:-@\\[-\\`{-~]).{8,20}$',
};

export const COMMON_MESSAGE = {
  // COMMON
  passText: 'password',
};

export const ERROR_MESSAGE = {
  // USER
  'user.username.exists': 'This email address is already in use. Please try another.',
  'user.password-not-allowed': `This ${COMMON_MESSAGE.passText} has been used before. Please enter another ${COMMON_MESSAGE.passText}.`,
  'duplicate.user.group.name': 'That user group name is taken. Try another.',
  'user.group.not.exists': 'User group not exist.',

  // FILE
  'library.unable.to.process.file':
    'The uploaded file is not in the required size or format. Please ensure the size is not more than 2048 pixels in width and height.',

  // HIERARCHY
  'hierarchy.unknown':
    'The data you were trying to access could not be found. It may be due to another user deleting the data.',
  'duplicate.store.under.structure':
    'Cannot set duplicate store under the same Division Structure.',
  'can.not.change.binding.level':
    'The level cannot be updated because it is related to some hierarchy instance(s).',
  'hierarchy.instance-used':
    'Cannot delete level because there are the hierarchy instance binding at this level.',

  // APPROVAL
  'duplicate.approval.name': 'This approval name is already in use. Please try another.',
  'last.active.user.in.approval.group':
    'You cannot deactivate this user because the user is the only approver in their approval group(s).',
  'store.already.exists.in.budget.approval': 'Store already exists in budget approval.',
  'store.already.exists.in.over.total.budget.approval':
    'Store already exists in over total budget approval.',
  'store.already.exists.in.order.approval': 'Store already exists in order approval.',
  'store.already.exists.in.product.approval': 'Store already exists in product approval.',
  'related.pending.order':
    'This approval group cannot be deleted because it has related pending orders.',
  'approval.not.exist': 'Approval not exist.',
  'user.group.have.pending.order':
    'This approval user cannot be deleted because it has related pending orders and the user is the only approver in this approval group.',
  'store.have.pending.order': 'This store cannot be deleted because it has related pending orders.',
  'store.and.product.exists.in.product.approval':
    'Store and product already exists in product approval.',
  'description.is.empty': 'You have not entered all required fields.',

  // BUDGET
  'staples.admin.not.xlsx.file': FILE_INVALID,
  'staples.admin.xlsx.file.too.big':
    'The file could not be uploaded, it exceeds the maximum file size of 5 MB.',
  'staples.admin.fail.to.process.xlsx.file': FILE_INVALID,
  'staples.admin.invalid.xlsx.file': FILE_INVALID,
  'staples.admin.invalid.template': 'The file could not be uploaded. The template is invalid.',
  'staples.admin.no.sheet.in.xlsx.file': 'The file could not be uploaded. The template is invalid.',
  'budget.instance.update.bad.total.amount': 'Total Amount must be greater than or equals to zero',
  'budget.instance.update.invalid.data': 'Invalid data',

  // FISCAL
  'duplicated.fiscal.year': '',
  'duplicated.period.instances': 'The date overlaps another fiscal year. Please try others.',

  //PRICE GROUP
  'related.product.price':
    'This price group cannot be deleted because it has related product price.',
  'store.related.product.price':
    'This store cannot be deleted because it has related product price.',
  'price.id.not.empty': 'Price id not empty',
  'not.found.price.group': 'Not found price group.',
  'pricegroup.code.has.already.exited': 'Price group code already existed.',
  'related.store': 'This price group cannot be deleted because it has related stores.',
  'product.price.related.store':
    'This product prices cannot be deleted because it has related stores.',
  'pricegroup.not.exits':
    'The price group is temporarily unavailable due to uploading product price.',
  'priceGroupId.not.exit': 'Price group id not existed.',
  //Client Assign
  'vendor.related.client.store':
    'The vendor cannot be unassigned because it has related product price.',
};

export const SKIP_INTERCEPTOR = 'Skip-Interceptor';

export const APPROVAL = {
  ALL_ORDER: 'All Orders Approval',
  PRODUCT_REQUIRING: 'Products Requiring Approval',
  OVER_BUDGET: 'Over Budget Approval',
  MANDATORY_PRODUCT: 'Products Requiring Approval',
  BUDGET_BASIC: 'Over Budget Approval',
  BUDGET_ADDITION: 'Over Total Budget Approval',
};

export const BUDGET_VALID_CODE = {
  INVALID_FISCAL: 'Invalid Fiscal',
  INVALID_BUDGET_TYPE: 'Invalid Budget Type',
  INVALID_AMOUNT: 'Invalid Budget Amount',
  INVALID_LOCATION: 'Invalid Location',
  DUPLICATED_DATA: 'Duplicate data for the same location',
  INVALID_FISCAL_PERIOD: 'Invalid Fiscal Period',
};

export const PRICE_VALID_CODE = {
  CAN_NOT_UPLOAD_FILE: 'can not upload file',
  CAN_NOT_GET_BYTE_FILE: 'can not get byte file',
};

export const REPORT = {
  BORDER_ROUND: 'ROUND',
  BORDER_TOP: 'TOP',
  BORDER_RIGHT: 'RIGHT',
  BORDER_BOTTOM: 'BOTTOM',
  BORDER_LEFT: 'LEFT',
  DO_USER: 'DOUSER',
  STORE_STRUCTURES: 'STORESTRUCTURES',
  STORE_USER_APPROVER: 'STOREUSERAPPROVER',
  ALL_ORDERS_APPROVAL: 'ALLORDERSAPPROVAL',
  PRODUCTS_REQUIRING: 'PRODUCTSREQUIRING',
  OVER_BUDGET: 'OVERBUDGET',
  OVER_TOTAL_BUDGET: 'OVERTOTALBUDGET',
};

export const PATH_ENUM = {
  HIERARCHY_INSTANCE: '/hierarchy/instance',
  HIERARCHY_STORE: '/hierarchy/store',
  REPORT: '/report',
  BUDGET: '/budget',
  BUDGETS: '/budget/budgets',
  FISCAL: '/budget/fiscalyear',
  APPROVAL: '/approval/all',
  APPROVAL_PRODUCT: '/approval/products',
  APPROVAL_BUDGET: '/approval/budget',
  APPROVAL_TOTAL_BUDGET: '/approval/totalbudget',
  PRODUCT_PRICE_GROUPS: '/product/price-groups',
  PRODUCT_VENDOR: '/product/vendor',
  USER_USERS: '/user/users',
  USER_GROUPS: '/user/groups',
};

export const MENU_KEY = {
  CLIENT_MANAGEMENT: 'CLIENT-MANAGEMENT',
  USER_MANAGEMENT: 'USER-MANAGEMENT',
  LEVEL_MANAGEMENT: 'LEVEL-MANAGEMENT',
  HIERARCHY_INSTANCE_MANAGEMENT: 'HIERARCHY-INSTANCE-MANAGEMENT',
  STORE_MANAGEMENT: 'STORE-MANAGEMENT',
  MESSAGE_MANAGEMENT: 'MESSAGE-MANAGEMENT',
  APPROVAL_MANAGEMENT: 'APPROVAL-MANAGEMENT',
  PRODUCT_APPROVAL_MANAGEMENT: 'PRODUCT-APPROVAL-MANAGEMENT',
  BUDGET_APPROVAL_MANAGEMENT: 'BUDGET-APPROVAL-MANAGEMENT',
  BUDGET_TOTAL_APPROVAL_MANAGEMENT: 'BUDGET-TOTAL-APPROVAL-MANAGEMENT',
  BUDGET_UPDATE: 'BUDGET-UPDATE',
  BUDGET_FISCAL_YEAR: 'BUDGET-FISCAL-YEAR',
  REPORT_USERS: 'REPORT-USERS',
  REPORT_SALES_ORDER: 'REPORT-SALES-ORDER',
  REPORT_USER_MANAGEMENT: 'REPORT-USER-MANAGEMENT',
  REPORT_BUDGET: 'REPORT-BUDGET',
  REPORT_DRAFT_ON_HOLD: 'REPORT-DRAFT-ON-HOLD',
  REPORT_LIBRARY_PRODUCT_FOLDER: 'REPORT-LIBRARY-PRODUCT-FOLDER',
  PRODUCT_MANAGEMENT: 'PRODUCT-MANAGEMENT',
};

export const BUDGET_TYPE = {
  ALL_APPROVAL: 'ALL_APPROVAL',
  PRODUCT_APPROVAL: 'PRODUCT_APPROVAL',
  BUDGET_APPROVAL: 'BUDGET_APPROVAL',
  TOTAL_BUDGET_APPROVAL: 'TOTAL_BUDGET_APPROVAL',
};

export const USER_RELATION_KEY = {
  APPROVAL_RELATION: 'APPROVAL-RELATION',
  STORE_RELATION: 'STORE-RELATION',
};

export const CURRENT_TAB_KEY = {
  PRICE_GROUP: 'PRICE_GROUP',
};

export const CURRENT_TAB_VALUE = {
  STORE_PRICE: 'store-price-group-tab',
  PRODUCT_PRICE: 'product-price-group-tab',
};
