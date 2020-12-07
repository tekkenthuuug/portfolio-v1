const createClassName = classnameToCondition => {
  let result = '';

  for (const [classname, condition] of Object.entries(classnameToCondition)) {
    if (condition) {
      result += result ? ` ${classname}` : classname;
    }
  }

  return result;
};

export default createClassName;
