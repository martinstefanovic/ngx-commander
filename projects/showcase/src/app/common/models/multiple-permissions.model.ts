export default interface MultiplePermissions {
  feature: string;
  permissions: {
    role: string | number;
    can: string[];
  }[];
}
