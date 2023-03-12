/**
 *
 * @param {Date} birthDay Data no formato YYYY-MM-DD
 * @returns Retorno a idade em anos
 */
export const convertDateToAge = (birthDay) => {
  const today = new Date();
  const birthDate = new Date(birthDay);
  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate()));
  if (age >= 1) return age;
  return "< 1";
};

/**
 *
 * @param {Date} date Recebe uma data no formato new Date()
 * @returns Retorna a data no formato YYYY-MM-DD
 */
export const dateToDateToLocalDate = (date) => {
  if (date === null || date === "" || date === undefined) {
    console.error("Data inválida.");
    return;
  }

  let m = date.getMonth() + 1;
  let y = date.getFullYear();
  let d = date.getDate();
  if (m < 10) m = "0" + m;
  if (d < 10) d = "0" + d;

  return `${y}-${m}-${d}`;
};

/**
 *
 * @param {Object} obj Objeto a ser encontrado na lista
 * @param {Array} list Lista de itens
 * @returns Retorna verdadeiro se o objeto está na lista
 */
export const checkIfObjectIsInTheList = (obj, list) => {
  if (list.filter((item) => item.id === obj.id).length > 0) {
    return true;
  }
  return false;
};
