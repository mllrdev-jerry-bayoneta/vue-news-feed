interface IEnvironment {
  envName: 'LOCAL' | 'DEV' | 'PRODUCT';
  production: boolean;
  baseUrl: string;
}

export default IEnvironment