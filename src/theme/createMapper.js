/**
 * Build mapper function based on a predefined mapping and default value.
 *
 * @export
 * @param {*} mapping key-value dict that specifies the mapping
 * @param {*} defaultValue will be used if no matching key is found in the mapping, omit to use the key itself
 * @returns a function that maps according to your mapping
 */
export default function createMapper(mapping, defaultValue) {
  return function mapper(key) {
    const defaultVal = defaultValue === undefined
      ? key
      : defaultValue;
    return (key in mapping
      ? mapping[key]
      : defaultVal
    );
  };
}