function importAll(r) {
  let files = [];
  for (let key of r.keys()) {
    files.push(r(key));
  }
  return files;
}

export default importAll;
