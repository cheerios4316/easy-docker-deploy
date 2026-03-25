export const getEnumValue = <TEnum extends Record<string, string>>(
  enumType: TEnum,
  value: string,
): TEnum[keyof TEnum] | undefined =>
  Object.values(enumType).includes(value as TEnum[keyof TEnum])
    ? (value as TEnum[keyof TEnum])
    : undefined;
