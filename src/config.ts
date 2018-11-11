export const getConfigString = (
  variableName: string,
  defaultValue?: string
): string => {
  const configValue = process.env[variableName];
  if (configValue) {
    return configValue;
  }
  if (defaultValue) {
    return defaultValue;
  }

  throw new Error(`Missing required environment variable ${variableName}`);
};
