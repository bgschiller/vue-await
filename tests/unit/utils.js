export function emptyPromise() {
  let res;
  let rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  p.pending = true;
  p.resolved = p.rejected = null;
  p.resolve = (...args) => {
    res(...args);
    p.resolved = true;
    p.rejected = false;
    p.pending = false;
  };
  p.reject = (...args) => {
    rej(...args);
    p.rejected = true;
    p.resolved = false;
    p.pending = false;
  };
  return p;
}
