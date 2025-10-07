/**
 * Retrieve a card from cards array at the 0-based position
 */
export function getItem(cards, position) {
  return cards[position];
}

/**
 * Replace a card at a given position
 */
export function setItem(cards, position, replacement) {
  cards[position] = replacement;
  return cards;
}

/**
 * Add one or more cards at the top
 */
export function insertItemAtTop(cards, ...newCards) {
  cards.push(...newCards);
  return cards;
}

/**
 * Add one or more cards at the bottom
 */
export function insertItemAtBottom(cards, ...newCards) {
  cards.unshift(...newCards);
  return cards;
}

/**
 * Remove one or more cards from a given position
 */
export function removeItem(cards, position, count = 1) {
  cards.splice(position, count);
  return cards;
}

/**
 * Remove one or more cards from the top
 */
export function removeItemFromTop(cards, count = 1) {
  cards.splice(-count, count);
  return cards;
}

/**
 * Remove one or more cards from the bottom
 */
export function removeItemAtBottom(cards, count = 1) {
  cards.splice(0, count);
  return cards;
}

/**
 * Check if a stack has exactly `size` cards
 */
export function checkSizeOfStack(cards, size) {
  return cards.length === size;
}