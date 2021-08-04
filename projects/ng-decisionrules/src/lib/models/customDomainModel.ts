export enum ProtocolEnum{
  HTTP= 'http',
  HTTPS= 'https'
}

export class CustomDomainModel{
  customDomainUrl: string;
  customDomainProtocol: ProtocolEnum;

  constructor(customDomainUrl: string, customDomainProtocol: ProtocolEnum) {
    this.customDomainProtocol = customDomainProtocol;
    this.customDomainUrl = customDomainUrl;
  }

}
