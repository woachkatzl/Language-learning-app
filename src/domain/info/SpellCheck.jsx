export const SpellCheck = {
  wordCheck: /^[A-Za-z\s]+$/, //слово на английском, должно быть на латинице, без символов и чисел
  translateCheck: /^[А-Яа-я\s,]+$/, //перевод, должен быть записан кириллицей, может включать запятые
  topicCheck: /^[A-Za-zА-Яа-я\s()]+$/, //включает латиницу и кириллицу, скобки
};
