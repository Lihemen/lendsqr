import { useEffect } from 'react';

export const useDebouncedEffect = (
  effect: React.EffectCallback,
  deps: React.DependencyList,
  delay: number
) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
};

// Search all text within an array
export function searchText(array: any[], searchTerm: string) {
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    for (let key in array[i]) {
      if (typeof array[i][key] === 'string') {
        if (array[i][key].toLowerCase().includes(searchTerm.toLowerCase())) {
          matches.push(array[i]);
          break;
        }
      }
    }
  }
  return matches;
}

// Recursively search for a value in an object
export function get_nested_value(
  obj: { [key: string]: any },
  accessor?: string
): string {
  if (!accessor) return '';

  const keys = accessor.split('.');

  for (let i = 0; i < keys.length; i++) {
    obj = obj[keys[i]];
  }
  return obj as unknown as string;
}

// Insert into array in place
export const insert = (arr: any[], index: number, newItem: any) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index),
];

// Compare 2 objects
export const isDeepEqual = (
  object1: { [key: string]: any },
  object2: { [key: string]: any }
) => {
  const isObject = (object: Object) => {
    return object != null && typeof object === 'object';
  };

  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if (
      (isObjects && !isDeepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};
