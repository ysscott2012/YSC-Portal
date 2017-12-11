

export const webconstant = {
  // CLASS NAME
  CLASS_NAME_BOARD: 'board', // GreenTeaContainer
  CLASS_NAME_CARD: 'card', // GreenTeaObject
  CLASS_NAME_COMMENT: 'comment', // comment
  // CLASS_NAME_INGREDIENT: 'ingredient', // GreenTeaObject
  // CLASS_NAME_RECIPE: 'recipe', // GreenTeaContainer
  // CLASS_NAME_RECIPES: 'recipes', // GreenTeaContainer
  CLASS_NAME_LIST: 'list', // GreenTeaContainer
  CLASS_NAME_USER: 'user', // user

  // PRIVACY
  PRIVACY_PUBLIC: 'public',
  PRIVACY_CONNECTION: 'connection',
  PRIVACY_PRIVATE: 'private',

  // STATUS
  STATUS_OPEN: 'open',
  STATUS_CLOSED: 'closed',
  STATUS_EXPIRED: 'expired'
};

//
// Reference Designs
//
// Kanban Board
// - Board (GreenTeaContainer)
//   - Activity
//   - List (GreenTeaContainer)
//     - Activity
//     - Card (GreenTeaObject)
//     - Activity
//
// Activity Feed
// - Activiry
//   - Comment
//
// Recipes (GreenTeaContainer)
//   - Recipe (GreenTeaContainer)
//     - ingredient (GreenTeaObject)
